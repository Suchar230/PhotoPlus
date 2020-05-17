export class CountryCode {
    key: string;
    value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }

    static getCodes(): Set<CountryCode> {
        if (this.codes.size === 0) {
            this.addCodes(this.codes);
        }
        return this.codes;
    }

    static readonly codes = new Set<CountryCode>();

    static readonly HT = new CountryCode("HT", "Haiti");
    static readonly HU = new CountryCode("HU", "Hungary");
    static readonly YE = new CountryCode("YE", "Yemen");
    static readonly ID = new CountryCode("ID", "Indonesia");
    static readonly IE = new CountryCode("IE", "Ireland");
    static readonly IL = new CountryCode("IL", "Israel");
    static readonly IM = new CountryCode("IM", "Isle of Man");
    static readonly IN = new CountryCode("IN", "India");
    static readonly IO = new CountryCode("IO", "British Indian Ocean Territory");
    static readonly IQ = new CountryCode("IQ", "Iraq");
    static readonly IR = new CountryCode("IR", "Iran");
    static readonly IS = new CountryCode("IS", "Iceland");
    static readonly IT = new CountryCode("IT", "Italy");
    static readonly YT = new CountryCode("YT", "Mayotte");
    static readonly ZA = new CountryCode("ZA", "South Africa");
    static readonly JE = new CountryCode("JE", "Jersey");
    static readonly ZM = new CountryCode("ZM", "Zambia");
    static readonly JM = new CountryCode("JM", "Jamaica");
    static readonly JO = new CountryCode("JO", "Jordan");
    static readonly JP = new CountryCode("JP", "Japan");
    static readonly ZW = new CountryCode("ZW", "Zimbabwe");
    static readonly KE = new CountryCode("KE", "Kenya");
    static readonly KG = new CountryCode("KG", "Kyrgyzstan");
    static readonly KH = new CountryCode("KH", "Cambodia");
    static readonly KI = new CountryCode("KI", "Kiribati");
    static readonly KM = new CountryCode("KM", "Comoros");
    static readonly KN = new CountryCode("KN", "St Kitts & Nevis");
    static readonly KP = new CountryCode("KP", "North Korea");
    static readonly KR = new CountryCode("KR", "South Korea");
    static readonly KW = new CountryCode("KW", "Kuwait");
    static readonly KY = new CountryCode("KY", "Cayman Islands");
    static readonly KZ = new CountryCode("KZ", "Kazakhstan");
    static readonly LA = new CountryCode("LA", "Laos");
    static readonly LB = new CountryCode("LB", "Lebanon");
    static readonly LC = new CountryCode("LC", "St Lucia");
    static readonly LI = new CountryCode("LI", "Liechtenstein");
    static readonly LK = new CountryCode("LK", "Sri Lanka");
    static readonly LR = new CountryCode("LR", "Liberia");
    static readonly LS = new CountryCode("LS", "Lesotho");
    static readonly LT = new CountryCode("LT", "Lithuania");
    static readonly LU = new CountryCode("LU", "Luxembourg");
    static readonly LV = new CountryCode("LV", "Latvia");
    static readonly LY = new CountryCode("LY", "Libya");
    static readonly MA = new CountryCode("MA", "Morocco");
    static readonly MC = new CountryCode("MC", "Monaco");
    static readonly MD = new CountryCode("MD", "Moldova");
    static readonly ME = new CountryCode("ME", "Montenegro");
    static readonly MF = new CountryCode("MF", "St Martin");
    static readonly MG = new CountryCode("MG", "Madagascar");
    static readonly MH = new CountryCode("MH", "Marshall Islands");
    static readonly MK = new CountryCode("MK", "Macedonia");
    static readonly ML = new CountryCode("ML", "Mali");
    static readonly MM = new CountryCode("MM", "Myanmar (Burma)");
    static readonly MN = new CountryCode("MN", "Mongolia");
    static readonly MO = new CountryCode("MO", "Macau SAR China");
    static readonly MP = new CountryCode("MP", "Northern Mariana Islands");
    static readonly MQ = new CountryCode("MQ", "Martinique");
    static readonly MR = new CountryCode("MR", "Mauritania");
    static readonly MS = new CountryCode("MS", "Montserrat");
    static readonly MT = new CountryCode("MT", "Malta");
    static readonly MU = new CountryCode("MU", "Mauritius");
    static readonly MV = new CountryCode("MV", "Maldives");
    static readonly MW = new CountryCode("MW", "Malawi");
    static readonly MX = new CountryCode("MX", "Mexico");
    static readonly MY = new CountryCode("MY", "Malaysia");
    static readonly MZ = new CountryCode("MZ", "Mozambique");
    static readonly NA = new CountryCode("NA", "Namibia");
    static readonly NC = new CountryCode("NC", "New Caledonia");
    static readonly NE = new CountryCode("NE", "Niger");
    static readonly NF = new CountryCode("NF", "Norfolk Island");
    static readonly NG = new CountryCode("NG", "Nigeria");
    static readonly NI = new CountryCode("NI", "Nicaragua");
    static readonly NL = new CountryCode("NL", "Netherlands");
    static readonly NO = new CountryCode("NO", "Norway");
    static readonly NP = new CountryCode("NP", "Nepal");
    static readonly NR = new CountryCode("NR", "Nauru");
    static readonly NU = new CountryCode("NU", "Niue");
    static readonly NZ = new CountryCode("NZ", "New Zealand");
    static readonly OM = new CountryCode("OM", "Oman");
    static readonly PA = new CountryCode("PA", "Panama");
    static readonly PE = new CountryCode("PE", "Peru");
    static readonly PF = new CountryCode("PF", "French Polynesia");
    static readonly PG = new CountryCode("PG", "Papua New Guinea");
    static readonly PH = new CountryCode("PH", "Philippines");
    static readonly PK = new CountryCode("PK", "Pakistan");
    static readonly PL = new CountryCode("PL", "Poland");
    static readonly PM = new CountryCode("PM", "St Pierre & Miquelon");
    static readonly PN = new CountryCode("PN", "Pitcairn Islands");
    static readonly PR = new CountryCode("PR", "Puerto Rico");
    static readonly PS = new CountryCode("PS", "Palestinian Territories");
    static readonly PT = new CountryCode("PT", "Portugal");
    static readonly PW = new CountryCode("PW", "Palau");
    static readonly PY = new CountryCode("PY", "Paraguay");
    static readonly QA = new CountryCode("QA", "Qatar");
    static readonly AD = new CountryCode("AD", "Andorra");
    static readonly AE = new CountryCode("AE", "United Arab Emirates");
    static readonly AF = new CountryCode("AF", "Afghanistan");
    static readonly AG = new CountryCode("AG", "Antigua & Barbuda");
    static readonly AI = new CountryCode("AI", "Anguilla");
    static readonly AL = new CountryCode("AL", "Albania");
    static readonly AM = new CountryCode("AM", "Armenia");
    static readonly AO = new CountryCode("AO", "Angola");
    static readonly AQ = new CountryCode("AQ", "Antarctica");
    static readonly AR = new CountryCode("AR", "Argentina");
    static readonly AS = new CountryCode("AS", "American Samoa");
    static readonly AT = new CountryCode("AT", "Austria");
    static readonly AU = new CountryCode("AU", "Australia");
    static readonly AW = new CountryCode("AW", "Aruba");
    static readonly AX = new CountryCode("AX", "Åland Islands");
    static readonly AZ = new CountryCode("AZ", "Azerbaijan");
    static readonly BA = new CountryCode("BA", "Bosnia & Herzegovina");
    static readonly BB = new CountryCode("BB", "Barbados");
    static readonly RE = new CountryCode("RE", "Réunion");
    static readonly BD = new CountryCode("BD", "Bangladesh");
    static readonly BE = new CountryCode("BE", "Belgium");
    static readonly BF = new CountryCode("BF", "Burkina Faso");
    static readonly BG = new CountryCode("BG", "Bulgaria");
    static readonly BH = new CountryCode("BH", "Bahrain");
    static readonly BI = new CountryCode("BI", "Burundi");
    static readonly BJ = new CountryCode("BJ", "Benin");
    static readonly BL = new CountryCode("BL", "St Barthélemy");
    static readonly BM = new CountryCode("BM", "Bermuda");
    static readonly BN = new CountryCode("BN", "Brunei");
    static readonly BO = new CountryCode("BO", "Bolivia");
    static readonly RO = new CountryCode("RO", "Romania");
    static readonly BQ = new CountryCode("BQ", "Caribbean Netherlands");
    static readonly BR = new CountryCode("BR", "Brazil");
    static readonly BS = new CountryCode("BS", "Bahamas");
    static readonly BT = new CountryCode("BT", "Bhutan");
    static readonly RS = new CountryCode("RS", "Serbia");
    static readonly BV = new CountryCode("BV", "Bouvet Island");
    static readonly BW = new CountryCode("BW", "Botswana");
    static readonly RU = new CountryCode("RU", "Russia");
    static readonly BY = new CountryCode("BY", "Belarus");
    static readonly BZ = new CountryCode("BZ", "Belize");
    static readonly RW = new CountryCode("RW", "Rwanda");
    static readonly SA = new CountryCode("SA", "Saudi Arabia");
    static readonly SB = new CountryCode("SB", "Solomon Islands");
    static readonly CA = new CountryCode("CA", "Canada");
    static readonly SC = new CountryCode("SC", "Seychelles");
    static readonly CC = new CountryCode("CC", "Cocos (Keeling) Islands");
    static readonly CD = new CountryCode("CD", "Congo - Kinshasa");
    static readonly SD = new CountryCode("SD", "Sudan");
    static readonly CF = new CountryCode("CF", "Central African Republic");
    static readonly CG = new CountryCode("CG", "Congo - Brazzaville");
    static readonly CH = new CountryCode("CH", "Switzerland");
    static readonly CI = new CountryCode("CI", "Côte d’Ivoire");
    static readonly SE = new CountryCode("SE", "Sweden");
    static readonly CK = new CountryCode("CK", "Cook Islands");
    static readonly CL = new CountryCode("CL", "Chile");
    static readonly CM = new CountryCode("CM", "Cameroon");
    static readonly CN = new CountryCode("CN", "China");
    static readonly CO = new CountryCode("CO", "Colombia");
    static readonly SG = new CountryCode("SG", "Singapore");
    static readonly SH = new CountryCode("SH", "St Helena");
    static readonly CR = new CountryCode("CR", "Costa Rica");
    static readonly SI = new CountryCode("SI", "Slovenia");
    static readonly SJ = new CountryCode("SJ", "Svalbard & Jan Mayen");
    static readonly CU = new CountryCode("CU", "Cuba");
    static readonly CV = new CountryCode("CV", "Cape Verde");
    static readonly CW = new CountryCode("CW", "Curaçao");
    static readonly CX = new CountryCode("CX", "Christmas Island");
    static readonly CY = new CountryCode("CY", "Cyprus");
    static readonly CZ = new CountryCode("CZ", "Czechia");
    static readonly SK = new CountryCode("SK", "Slovakia");
    static readonly SL = new CountryCode("SL", "Sierra Leone");
    static readonly SM = new CountryCode("SM", "San Marino");
    static readonly SN = new CountryCode("SN", "Senegal");
    static readonly SO = new CountryCode("SO", "Somalia");
    static readonly SR = new CountryCode("SR", "Suriname");
    static readonly SS = new CountryCode("SS", "South Sudan");
    static readonly ST = new CountryCode("ST", "São Tomé & Príncipe");
    static readonly SV = new CountryCode("SV", "El Salvador");
    static readonly DE = new CountryCode("DE", "Germany");
    static readonly SX = new CountryCode("SX", "Sint Maarten");
    static readonly SY = new CountryCode("SY", "Syria");
    static readonly SZ = new CountryCode("SZ", "Swaziland");
    static readonly TC = new CountryCode("TC", "Turks & Caicos Islands");
    static readonly DJ = new CountryCode("DJ", "Djibouti");
    static readonly DK = new CountryCode("DK", "Denmark");
    static readonly TD = new CountryCode("TD", "Chad");
    static readonly DM = new CountryCode("DM", "Dominica");
    static readonly TF = new CountryCode("TF", "French Southern Territories");
    static readonly DO = new CountryCode("DO", "Dominican Republic");
    static readonly TG = new CountryCode("TG", "Togo");
    static readonly TH = new CountryCode("TH", "Thailand");
    static readonly TJ = new CountryCode("TJ", "Tajikistan");
    static readonly TK = new CountryCode("TK", "Tokelau");
    static readonly TL = new CountryCode("TL", "Timor-Leste");
    static readonly TM = new CountryCode("TM", "Turkmenistan");
    static readonly TN = new CountryCode("TN", "Tunisia");
    static readonly TO = new CountryCode("TO", "Tonga");
    static readonly TR = new CountryCode("TR", "Turkey");
    static readonly TT = new CountryCode("TT", "Trinidad & Tobago");
    static readonly DZ = new CountryCode("DZ", "Algeria");
    static readonly TV = new CountryCode("TV", "Tuvalu");
    static readonly TW = new CountryCode("TW", "Taiwan");
    static readonly TZ = new CountryCode("TZ", "Tanzania");
    static readonly UA = new CountryCode("UA", "Ukraine");
    static readonly EC = new CountryCode("EC", "Ecuador");
    static readonly EE = new CountryCode("EE", "Estonia");
    static readonly UG = new CountryCode("UG", "Uganda");
    static readonly EG = new CountryCode("EG", "Egypt");
    static readonly EH = new CountryCode("EH", "Western Sahara");
    static readonly UM = new CountryCode("UM", "US Outlying Islands");
    static readonly US = new CountryCode("US", "United States");
    static readonly ER = new CountryCode("ER", "Eritrea");
    static readonly ES = new CountryCode("ES", "Spain");
    static readonly ET = new CountryCode("ET", "Ethiopia");
    static readonly UY = new CountryCode("UY", "Uruguay");
    static readonly UZ = new CountryCode("UZ", "Uzbekistan");
    static readonly VA = new CountryCode("VA", "Vatican City");
    static readonly VC = new CountryCode("VC", "St Vincent & Grenadines");
    static readonly VE = new CountryCode("VE", "Venezuela");
    static readonly VG = new CountryCode("VG", "British Virgin Islands");
    static readonly VI = new CountryCode("VI", "US Virgin Islands");
    static readonly FI = new CountryCode("FI", "Finland");
    static readonly FJ = new CountryCode("FJ", "Fiji");
    static readonly FK = new CountryCode("FK", "Falkland Islands");
    static readonly VN = new CountryCode("VN", "Vietnam");
    static readonly FM = new CountryCode("FM", "Micronesia");
    static readonly FO = new CountryCode("FO", "Faroe Islands");
    static readonly FR = new CountryCode("FR", "France");
    static readonly VU = new CountryCode("VU", "Vanuatu");
    static readonly GA = new CountryCode("GA", "Gabon");
    static readonly GB = new CountryCode("GB", "United Kingdom");
    static readonly GD = new CountryCode("GD", "Grenada");
    static readonly GE = new CountryCode("GE", "Georgia");
    static readonly GF = new CountryCode("GF", "French Guiana");
    static readonly GG = new CountryCode("GG", "Guernsey");
    static readonly GH = new CountryCode("GH", "Ghana");
    static readonly GI = new CountryCode("GI", "Gibraltar");
    static readonly WF = new CountryCode("WF", "Wallis & Futuna");
    static readonly GL = new CountryCode("GL", "Greenland");
    static readonly GM = new CountryCode("GM", "Gambia");
    static readonly GN = new CountryCode("GN", "Guinea");
    static readonly GP = new CountryCode("GP", "Guadeloupe");
    static readonly GQ = new CountryCode("GQ", "Equatorial Guinea");
    static readonly GR = new CountryCode("GR", "Greece");
    static readonly GS = new CountryCode("GS", "South Georgia & South Sandwich Islands");
    static readonly GT = new CountryCode("GT", "Guatemala");
    static readonly GU = new CountryCode("GU", "Guam");
    static readonly WS = new CountryCode("WS", "Samoa");
    static readonly GW = new CountryCode("GW", "Guinea-Bissau");
    static readonly GY = new CountryCode("GY", "Guyana");
    static readonly HK = new CountryCode("HK", "Hong Kong SAR China");
    static readonly HM = new CountryCode("HM", "Heard & McDonald Islands");
    static readonly HN = new CountryCode("HN", "Honduras");
    static readonly HR = new CountryCode("HR", "Croatia");

    static addCodes(codes: Set<CountryCode>) {
        codes.add(this.GA);
        codes.add(this.GB);
        codes.add(this.GD);
        codes.add(this.GE);
        codes.add(this.GF);
        codes.add(this.GG);
        codes.add(this.GH);
        codes.add(this.GI);
        codes.add(this.WF);
        codes.add(this.GL);
        codes.add(this.GM);
        codes.add(this.GN);
        codes.add(this.GP);
        codes.add(this.GQ);
        codes.add(this.GR);
        codes.add(this.GS);
        codes.add(this.GT);
        codes.add(this.GU);
        codes.add(this.WS);
        codes.add(this.GW);
        codes.add(this.GY);
        codes.add(this.HK);
        codes.add(this.HM);
        codes.add(this.HN);
        codes.add(this.HR);
        codes.add(this.HT);
        codes.add(this.HU);
        codes.add(this.YE);
        codes.add(this.ID);
        codes.add(this.IE);
        codes.add(this.IL);
        codes.add(this.IM);
        codes.add(this.IN);
        codes.add(this.IO);
        codes.add(this.IQ);
        codes.add(this.IR);
        codes.add(this.IS);
        codes.add(this.IT);
        codes.add(this.YT);
        codes.add(this.ZA);
        codes.add(this.JE);
        codes.add(this.ZM);
        codes.add(this.JM);
        codes.add(this.JO);
        codes.add(this.JP);
        codes.add(this.ZW);
        codes.add(this.KE);
        codes.add(this.KG);
        codes.add(this.KH);
        codes.add(this.KI);
        codes.add(this.KM);
        codes.add(this.KN);
        codes.add(this.KP);
        codes.add(this.KR);
        codes.add(this.KW);
        codes.add(this.KY);
        codes.add(this.KZ);
        codes.add(this.LA);
        codes.add(this.LB);
        codes.add(this.LC);
        codes.add(this.LI);
        codes.add(this.LK);
        codes.add(this.LR);
        codes.add(this.LS);
        codes.add(this.LT);
        codes.add(this.LU);
        codes.add(this.LV);
        codes.add(this.LY);
        codes.add(this.MA);
        codes.add(this.MC);
        codes.add(this.MD);
        codes.add(this.ME);
        codes.add(this.MF);
        codes.add(this.MG);
        codes.add(this.MH);
        codes.add(this.MK);
        codes.add(this.ML);
        codes.add(this.MM);
        codes.add(this.MN);
        codes.add(this.MO);
        codes.add(this.MP);
        codes.add(this.MQ);
        codes.add(this.MR);
        codes.add(this.MS);
        codes.add(this.MT);
        codes.add(this.MU);
        codes.add(this.MV);
        codes.add(this.MW);
        codes.add(this.MX);
        codes.add(this.MY);
        codes.add(this.MZ);
        codes.add(this.NA);
        codes.add(this.NC);
        codes.add(this.NE);
        codes.add(this.NF);
        codes.add(this.NG);
        codes.add(this.NI);
        codes.add(this.NL);
        codes.add(this.NO);
        codes.add(this.NP);
        codes.add(this.NR);
        codes.add(this.NU);
        codes.add(this.NZ);
        codes.add(this.OM);
        codes.add(this.PA);
        codes.add(this.PE);
        codes.add(this.PF);
        codes.add(this.PG);
        codes.add(this.PH);
        codes.add(this.PK);
        codes.add(this.PL);
        codes.add(this.PM);
        codes.add(this.PN);
        codes.add(this.PR);
        codes.add(this.PS);
        codes.add(this.PT);
        codes.add(this.PW);
        codes.add(this.PY);
        codes.add(this.QA);
        codes.add(this.AD);
        codes.add(this.AE);
        codes.add(this.AF);
        codes.add(this.AG);
        codes.add(this.AI);
        codes.add(this.AL);
        codes.add(this.AM);
        codes.add(this.AO);
        codes.add(this.AQ);
        codes.add(this.AR);
        codes.add(this.AS);
        codes.add(this.AT);
        codes.add(this.AU);
        codes.add(this.AW);
        codes.add(this.AX);
        codes.add(this.AZ);
        codes.add(this.BA);
        codes.add(this.BB);
        codes.add(this.RE);
        codes.add(this.BD);
        codes.add(this.BE);
        codes.add(this.BF);
        codes.add(this.BG);
        codes.add(this.BH);
        codes.add(this.BI);
        codes.add(this.BJ);
        codes.add(this.BL);
        codes.add(this.BM);
        codes.add(this.BN);
        codes.add(this.BO);
        codes.add(this.RO);
        codes.add(this.BQ);
        codes.add(this.BR);
        codes.add(this.BS);
        codes.add(this.BT);
        codes.add(this.RS);
        codes.add(this.BV);
        codes.add(this.BW);
        codes.add(this.RU);
        codes.add(this.BY);
        codes.add(this.BZ);
        codes.add(this.RW);
        codes.add(this.SA);
        codes.add(this.SB);
        codes.add(this.CA);
        codes.add(this.SC);
        codes.add(this.CC);
        codes.add(this.CD);
        codes.add(this.SD);
        codes.add(this.CF);
        codes.add(this.CG);
        codes.add(this.CH);
        codes.add(this.CI);
        codes.add(this.SE);
        codes.add(this.CK);
        codes.add(this.CL);
        codes.add(this.CM);
        codes.add(this.CN);
        codes.add(this.CO);
        codes.add(this.SG);
        codes.add(this.SH);
        codes.add(this.CR);
        codes.add(this.SI);
        codes.add(this.SJ);
        codes.add(this.CU);
        codes.add(this.CV);
        codes.add(this.CW);
        codes.add(this.CX);
        codes.add(this.CY);
        codes.add(this.CZ);
        codes.add(this.SK);
        codes.add(this.SL);
        codes.add(this.SM);
        codes.add(this.SN);
        codes.add(this.SO);
        codes.add(this.SR);
        codes.add(this.SS);
        codes.add(this.ST);
        codes.add(this.SV);
        codes.add(this.DE);
        codes.add(this.SX);
        codes.add(this.SY);
        codes.add(this.SZ);
        codes.add(this.TC);
        codes.add(this.DJ);
        codes.add(this.DK);
        codes.add(this.TD);
        codes.add(this.DM);
        codes.add(this.TF);
        codes.add(this.DO);
        codes.add(this.TG);
        codes.add(this.TH);
        codes.add(this.TJ);
        codes.add(this.TK);
        codes.add(this.TL);
        codes.add(this.TM);
        codes.add(this.TN);
        codes.add(this.TO);
        codes.add(this.TR);
        codes.add(this.TT);
        codes.add(this.DZ);
        codes.add(this.TV);
        codes.add(this.TW);
        codes.add(this.TZ);
        codes.add(this.UA);
        codes.add(this.EC);
        codes.add(this.EE);
        codes.add(this.UG);
        codes.add(this.EG);
        codes.add(this.EH);
        codes.add(this.UM);
        codes.add(this.US);
        codes.add(this.ER);
        codes.add(this.ES);
        codes.add(this.ET);
        codes.add(this.UY);
        codes.add(this.UZ);
        codes.add(this.VA);
        codes.add(this.VC);
        codes.add(this.VE);
        codes.add(this.VG);
        codes.add(this.VI);
        codes.add(this.FI);
        codes.add(this.FJ);
        codes.add(this.FK);
        codes.add(this.VN);
        codes.add(this.FM);
        codes.add(this.FO);
        codes.add(this.FR);
        codes.add(this.VU);
    }
}