import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Topic } from "src/app/models/topic/topic";
import { TopicService } from "src/app/services/topic/topic.service";
import { Post } from "src/app/models/post/post";
import { PostService } from "src/app/services/post/post.service";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { LoginService } from "src/app/services/login/login.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-topic-body",
  templateUrl: "./topic-body.component.html",
  styleUrls: ["./topic-body.component.scss"],
})
export class TopicBodyComponent implements OnInit {
  @ViewChild("topicName", { static: false })
  titleTextarea: ElementRef;

  @ViewChild("newPost", { static: false })
  newPostArea: ElementRef;

  canModify: BehaviorSubject<boolean>;
  canDelete: BehaviorSubject<boolean>;

  topic: BehaviorSubject<Topic>;
  posts: BehaviorSubject<Post>[];
  topicName: string;

  modifyingTopic: boolean;

  constructor(
    private topicService: TopicService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.canModify = new BehaviorSubject(false);
    this.canDelete = new BehaviorSubject(false);
    this.topic = new BehaviorSubject({} as Topic);
    this.posts = new Array<BehaviorSubject<Post>>();
    this.activatedRoute.params.subscribe((params) => {
      let topicCode = params["topicCode"];
      this.topicService.getSingle(topicCode).subscribe((topicData) => {
        this.topic.next(topicData);
        this.checkPermission();
      });
      this.reloadTopic(topicCode);
    });
  }

  checkPermission() {
    this.canModify.next(this.auth.isModerator);
    this.canDelete.next(
      this.topic.value.userCode === this.loginService.getLoggedUser().code ||
        this.auth.isModerator
    );
  }

  sendPost() {
    const newPostTextarea = this.newPostArea.nativeElement;
    const newPostContent: string = newPostTextarea.value;
    newPostTextarea.value = "";
    if (newPostContent.trim() === "") {
      return;
    }
    const post: Post = {
      date: new Date(),
      topicCode: this.topic.value.code,
      userCode: this.loginService.getLoggedUser().code,
      content: newPostContent.trim(),
      code: null
    };
    this.postService.post(post).subscribe(() => {
      this.reloadTopic(this.topic.value.code);
    });
  }

  reloadTopic(topicCode: string) {
    this.postService.getAllFromTopic(topicCode).subscribe((postsData) => {
      this.posts = new Array<BehaviorSubject<Post>>();
      for (let post of postsData) {
        this.posts.push(new BehaviorSubject(post));
      }
    });
  }

  editTopic() {
    this.modifyingTopic = !this.modifyingTopic;
  }
  // Could be same function but i cant find suitable name
  cancelEdit() {
    this.modifyingTopic = !this.modifyingTopic;
  }

  deleteTopic() {
    this.router.navigate(["/forum/remove/topic", this.topic.getValue().code]);
  }

  saveChanges() {
    const editTitleSnapshot = this.titleTextarea.nativeElement;
    const newTitle = editTitleSnapshot.value;

    this.topicService[
      this.auth.isModerator ? "patch" : "patchOwn"
    ](this.topic.getValue().code, {
      ...this.topic.value,
      name: newTitle,
    }).subscribe(() => {
      this.topicService
        .getSingle(this.topic.value.code)
        .subscribe((newTopicData) => {
          this.topic.next(newTopicData);
        });
    });
    this.modifyingTopic = !this.modifyingTopic;
  }
  get auth(): LoginService {
    return this.loginService;
  }
}
