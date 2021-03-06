package pl.polsl.photoplus.services.controllers;

import org.springframework.stereotype.Service;
import pl.polsl.photoplus.model.dto.TopicModelDto;
import pl.polsl.photoplus.model.entities.*;
import pl.polsl.photoplus.repositories.TopicRepository;

import java.util.List;

@Service
public class TopicService extends AbstractModelService<Topic, TopicModelDto, TopicRepository> {

    private UserService userService;

    private SectionService sectionService;

    public TopicService(final TopicRepository entityRepository, final UserService userService, final SectionService sectionService) {
        super(entityRepository);
        this.userService = userService;
        this.sectionService = sectionService;
    }

    @Override
    protected String getModelNameForError() {
        return "topic";
    }

    @Override
    protected TopicModelDto getDtoFromModel(final Topic modelObject) {
        return new TopicModelDto(modelObject.getCode(), modelObject.getName(), modelObject.getSection().getCode(), modelObject.getDate(),
                modelObject.getCreator().getCode(), modelObject.getCreator().getLogin());
    }

    @Override
    protected Topic getModelFromDto(final TopicModelDto dtoObject) {
        return new Topic(dtoObject.getName(), dtoObject.getDate());
    }

    @Override
    public String save(final TopicModelDto dto) {
        final String entityCode = entityRepository.save(insertDependenciesAndParseToModel(dto)).getCode();
        return entityCode;
    }

    private Topic insertDependenciesAndParseToModel(final TopicModelDto topicModelDto){
        final User userToInsert = userService.findByCodeOrThrowError(topicModelDto.getUserCode(),
                "SAVE USER");
        final Section orderToInsert = sectionService.findByCodeOrThrowError(topicModelDto.getSection(),
                "SAVE SECTION");
        final Topic topicToAdd = getModelFromDto(topicModelDto);
        topicToAdd.setCreator(userToInsert);
        topicToAdd.setSection(orderToInsert);
        return topicToAdd;
    }

    public List<TopicModelDto> getTopicsBySection(final String sectionCode) {
        return getDtoListFromModels(this.entityRepository.findAllBySection_Code(sectionCode));
    }

    public String getTopicCreatorCode(final String postCode) {
        final Topic topic = findByCodeOrThrowError(postCode, "Find topic creator");
        return topic.getCreator().getCode();
    }
}
