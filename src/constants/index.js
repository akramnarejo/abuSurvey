export const QUESTIONS = {
  "Kii Health Facility": [
    {
      question: 'q1',
      title:
        "Please tell me about the COVID-19, HIV/AIDS, TB and Malaria services you offer in this health facility:",
      options: ["excellent", "good", "poor", "other"],
    },
    // {
    //   question: 'q2',
    //   title:
    //     "What resources are required to provide COVID-19, HIV/AIDS, TB and Malaria services effectively? (Choose as many as applicable)",
    //   options: [
    //     "Human Resources",
    //     "Training",
    //     "Consumables",
    //     "Non-consumables",
    //     "Others",
    //   ],
    // },
    // {
    //   question: 'q3a',
    //   title:
    //     "What are the resources available (quantity) to ensure COVID-19, HIV/AIDS, TB and Malaria service delivery? ",
    //   options: ["Human Resources", "Training", "Others"],
    // },
    // {
    //   question: 'q3c',
    //   title:
    //     "Please confirm the availability and sufficiency of these resources",
    //   options: ["Available", "Sufficient"],
    // },
    {
      question: 'q3e',
      title: "What is the level of security available in this facility? ",
      options: ["Perimeter Fencing", "Burglar Proof", "Security Personnel"],
    },
    {
      question: 'q4',
      title:
        "What is the current monthly inflow of patients seeking COVID-19, HIV/AIDS, TB and Malaria services at the facility? ",
      options: [
        "1 - 9 Hundred ",
        "10 - 20 thousand",
        "20 - 30 thousand",
        "Others",
      ],
    },
     {
      question: 'q5',
      title: "What is the monthly patients-service provider ratio?",
      options: ["2:2", "2:4", "2:6", "others"],
    },

     {
      question:'q6',
      title:
        "Can you tell me about the challenges currently faced in delivering COVID-19, HIV/AIDS, TB and Malaria services?",
      options: [
        "Inadequate Skilled Personnel",
        "Stock out of malaria commodities",
        "Inadequate infrastructures",
        "Others",
      ],
    },
    {
      question:"q7",
      title:
        "What is the level of community structure involvement in COVID-19, HIV/AIDS, TB and Malaria service delivery?",
      options: ["Active", "Non-Active", "Indifferent"],
    },
    { 
      question: 'q8',
      title:
        "Are Personal Protective Equipment (PPE) in your facility sufficient?",
      options: ["Sufficient", "Non-Sufficient", "None"],
    },
    {
      question: 'q9',
      title: "Are the community people using PPE correctly and at all times? ",
      options: ["Sufficient", "Non-Sufficient", "None"],
    },
  ],
};

export const SURVEYS = [
  "ATM Client Exist Interview Survey",
  "Kii Lga",
  "Kii Health Facility",
];

export const ORGANIZATIONS = [
  {
    label: "Acomin",
    value: "acomin",
  },
  {
    label: "Nepwhan",
    value: "nepwhan",
  },
  {
    label: "TB Network",
    value: "tb",
  },
];

export const ATMNETWORKS = [
  {
    label: "Acomin",
    value: "acomin",
  },
  {
    label: "Nepwhan",
    value: "nepwhan",
  },
  {
    label: "TB Network",
    value: "tb",
  },
];

export const RESERVED_STATES = {
  acomin: [
    { label: "Edo", value: "edo" },
    { label: "Rivers", value: "rivers" },
    { label: "Delta", value: "delta" },
    { label: "Cross River", value: "cross river" },
    { label: "Anambra", value: "anambra" },
    { label: "Ogun", value: "ogun" },
    { label: "Ekiti", value: "ekiti" },
    {
      label: "FCT Abuja",
      value: "fct abuja",
    },
  ],
  nepwhan: [
    { label: "Kano", value: "kano" },
    { label: "Gombe", value: "gombe" },
    { label: "Nasarawa", value: "nasarawa" },
    { label: "Plateau", value: "plateau" },
    { label: "Kwara", value: "kwara" },
    { label: "Oyo", value: "oyo" },
    { label: "Ondo", value: "ondo" },
    { label: "Kaduna", value: "kanduna" },
  ],
  tb: [
    { label: "Jigawa", value: "jigawa" },
    { label: "Lagos", value: "lagos" },
  ],
};

export const RESERVED_ORGANIZATIONS = {
  acomin: [
    {
      label: "Environmental Development and Family Health Organization ",
      value: "EDFH",
    },
    {
      label:
        "Society For Woman and AIDs in Africa, Nigeria, Ekiti State Chapter  ",
      value: "SWAA",
    },
    { label: "POSITIVE CARE SUPPORT GROUP", value: "positive care" },
    {
      label: "Worldsmith Life Builders Foundation",
      value: "Worldsmith Life Builders Foundation",
    },
    { label: "IRETIAYO SUPPORT GROUP ", value: "IRETIAYO SUPPORT GROUP " },
    {
      label: "CENTER FOR ACCOUNTABILITY AND INCLUSIVE DEVELOPMENT",
      value: "CENTER FOR ACCOUNTABILITY AND INCLUSIVE DEVELOPMENT",
    },
    {
      label: "First Food For Family Initiative (FIFFA)",
      value: "First Food For Family Initiative (FIFFA)",
    },
    {
      label: "African Human Empowerment And Development Organization (AHEDO)",
      value: "African Human Empowerment And Development Organization (AHEDO)",
    },
    {
      label: "Centre for Better Health & Community Development (BHECOD)",
      value: "Centre for Better Health & Community Development (BHECOD)",
    },
    {
      label: "Foundation for Justice & Social Development (FOJSOD)",
      value: "Foundation for Justice & Social Development (FOJSOD)",
    },
    {
      label: "Foundation for Community Health Rights and Development (FOCHRID)",
      value: "Foundation for Community Health Rights and Development (FOCHRID)",
    },
    {
      label: "HeaIthy Living and Social Development Foundation",
      value: "HeaIthy Living and Social Development Foundation",
    },
    {
      label: "Kids &Teens Resource Centre (K&TRC)",
      value: "Kids &Teens Resource Centre (K&TRC)",
    },
    {
      label:
        "Foundation for Sustainable Health Promotion and Development (FOSHPAD)",
      value:
        "Foundation for Sustainable Health Promotion and Development (FOSHPAD)",
    },
    { label: "Health Matters Inc.", value: "Health Matters Inc." },
    {
      label: "ASSOCIATION OF POSITIVE YOUTH IN NIGERIA (APYIN).DELTA STATE",
      value: "ASSOCIATION OF POSITIVE YOUTH IN NIGERIA (APYIN).DELTA STATE",
    },
    {
      label: "RURAL YOUTH PEACE & CARE FOUNDATION",
      value: "RURAL YOUTH PEACE & CARE FOUNDATION",
    },
    {
      label: "Environmental and Rural Meditation Centre",
      value: "Environmental and Rural Meditation Centre",
    },
    {
      label: "KARACHI RURAL-URBAN DEVELOPMENT INITIATIVE",
      value: "KARACHI RURAL-URBAN DEVELOPMENT INITIATIVE",
    },
    {
      label: "Hope Assured Support Group",
      value: "Hope Assured Support Group",
    },
    {
      label: "Chedericks save live development intiative",
      value: "Chedericks save live development intiative",
    },
    {
      label: "Blessed Support Group Asaba",
      value: "Blessed Support Group Asaba",
    },
    {
      label: "Community Integrity Initiative (CII)",
      value: "Community Integrity Initiative (CII)",
    },
    { label: "End Time Soldiers", value: "End Time Soldiers" },
    {
      label: "Askmee Multi concept Foundation",
      value: "Askmee Multi concept Foundation",
    },
    {
      label: "OKIERO ANTHONY OKORO DEVELOPMENT FOUNDATION (OAODF)",
      value: "OKIERO ANTHONY OKORO DEVELOPMENT FOUNDATION (OAODF)",
    },
    { label: "BETHEL VIVA FOUNDATION", value: "BETHEL VIVA FOUNDATION" },
    {
      label: "PARTNERS FOR HOPE SUPPORT GROUP",
      value: "PARTNERS FOR HOPE SUPPORT GROUP",
    },
    {
      label: "RIVERINE HEALTH INITIATIVE",
      value: "RIVERINE HEALTH INITIATIVE",
    },
    {
      label: "Health Matters Incorporated",
      value: "Health Matters Incorporated",
    },
    { label: "Jakin Ngo", value: "Jakin Ngo" },
    { label: "Dave Enechukwu foundation", value: "Dave Enechukwu foundation" },
    {
      label: "Nigeria Youth Aid Programme",
      value: "Nigeria Youth Aid Programme",
    },
    { label: "Tender Care Initiatives", value: "Tender Care Initiatives" },
    {
      label: "Center for Positive Health Organization",
      value: "Center for Positive Health Organization",
    },
    {
      label: "Positive Proof  Women Healthcare Empowerement Initiatives",
      value: "Positive Proof  Women Healthcare Empowerement Initiatives",
    },
    {
      label: "Community Aid Development Foundation",
      value: "Community Aid Development Foundation",
    },
    {
      label: "Rhoda Haven Network of women Living with HIV/AIDs",
      value: "Rhoda Haven Network of women Living with HIV/AIDs",
    },
    {
      label: "Community Empowerement for Peace Health Initative",
      value: "Community Empowerement for Peace Health Initative",
    },
    {
      label: "Health Awareness and Gender Advocacy Initiative",
      value: "Health Awareness and Gender Advocacy Initiative",
    },
    {
      label: "His Marvellous Grace Support Foundation",
      value: "His Marvellous Grace Support Foundation",
    },
    {
      label: "Women Lifeline International",
      value: "Women Lifeline International",
    },
    {
      label: "Community Care and Development Initiative",
      value: "Community Care and Development Initiative",
    },
    {
      label: "The Eagle Eye Behavioural Reorientation Initative",
      value: "The Eagle Eye Behavioural Reorientation Initative",
    },
    {
      label: "TOTAL CHILD CARE INITIATIVE ",
      value: "TOTAL CHILD CARE INITIATIVE ",
    },
    { label: "HOPE INITIATIVE", value: "HOPE INITIATIVE" },
    {
      label: "ADONAI HEALTH AND DEVELOPMENT FOUNDATION (AHADEF)",
      value: "ADONAI HEALTH AND DEVELOPMENT FOUNDATION (AHADEF)",
    },
    {
      label:
        "Society for People United Against HIV/AIDS And Other Disease (SPUIHAD)",
      value:
        "Society for People United Against HIV/AIDS And Other Disease (SPUIHAD)",
    },
    {
      label: "Community Life Advancement Project",
      value: "Community Life Advancement Project",
    },
    { label: "APYIN", value: "APYIN" },
    {
      label: "Divine Heritage Support Group",
      value: "Divine Heritage Support Group",
    },
    { label: "ESTHER THELFID FOUNDATION", value: "ESTHER THELFID FOUNDATION" },
    {
      label:
        "Foundation For Community Health, Rioghts and Development (FOCHRID)",
      value:
        "Foundation For Community Health, Rioghts and Development (FOCHRID)",
    },
    {
      label: "SOCIETY FOR COMMUNITY DEVELOPMENT (SCD)",
      value: "SOCIETY FOR COMMUNITY DEVELOPMENT (SCD)",
    },
    { label: "ELOHIM FOUNDATION", value: "ELOHIM FOUNDATION" },
    {
      label: "Innovative Solution To Community Development",
      value: "Innovative Solution To Community Development",
    },
    {
      label: "Community Initiative for Sustainable Development",
      value: "Community Initiative for Sustainable Development",
    },
    {
      label:
        "Passion And Concern for Women Welfare and Empowerment Initiative ACOWWEI)",
      value:
        "Passion And Concern for Women Welfare and Empowerment Initiative ACOWWEI)",
    },
    {
      label:
        "Centre for Health, Education and  Development Communication (CHEDCOM)",
      value:
        "Centre for Health, Education and  Development Communication (CHEDCOM)",
    },
    {
      label: "CONNECTING PEACE INITIATIVE",
      value: "CONNECTING PEACE INITIATIVE",
    },
    {
      label: "SUPPORT INITIATIVE FOR SUSTAINABLE DEVELOPMENT",
      value: "SUPPORT INITIATIVE FOR SUSTAINABLE DEVELOPMENT",
    },
    {
      label: "CHRISTIAN HELP INTERNATIONAL FOUNDATION",
      value: "CHRISTIAN HELP INTERNATIONAL FOUNDATION",
    },
    {
      label: "SUPPORT FOR MANKIND DEVELOPMENT INITIATIVE",
      value: "SUPPORT FOR MANKIND DEVELOPMENT INITIATIVE",
    },
    {
      label: "CENTER FOR CREATIVE DEVELOPMMENT STATEGIES",
      value: "CENTER FOR CREATIVE DEVELOPMMENT STATEGIES",
    },
    {
      label: "ARINZE MADUENYI FOUNDATION",
      value: "ARINZE MADUENYI FOUNDATION",
    },
    {
      label: "ASSOCIATION OF POSITIVE YOUTHS IN NIGERIA",
      value: "ASSOCIATION OF POSITIVE YOUTHS IN NIGERIA",
    },
    {
      label: "SOCIETY FOR WOMEN AND YOUTHS ",
      value: "SOCIETY FOR WOMEN AND YOUTHS",
    },
    {
      label: "MERCY OF GOD AND HUMANITARIAN INITIATIVE",
      value: "MERCY OF GOD AND HUMANITARIAN INITIATIVE",
    },
    {
      label: "RIVERS OF HOPE AND HUMANITARIAN INITIATIVE",
      value: "RIVERS OF HOPE AND HUMANITARIAN INITIATIVE",
    },
    {
      label: "CENTER FOR DEVELOPMENT SUPPORT INITIATIVE",
      value: "CENTER FOR DEVELOPMENT SUPPORT INITIATIV",
    },
    { label: "DAWN OF LIFE FOUNDATION", value: "DAWN OF LIFE FOUNDATION" },
    { label: "GODSGIFT SUPPORT GROUP", value: "GODSGIFT SUPPORT GROUP" },
    {
      label: "DYNAMIC CHARITY ORGANIZATION",
      value: "DYNAMIC CHARITY ORGANIZATION",
    },
    { label: "KEDUMLE SUPPORT GROUP", value: "KEDUMLE SUPPORT GROUP" },
    {
      label: "Mediatrix Developemnt Foundation",
      value: "Mediatrix Developemnt Foundation",
    },
    {
      label:
        "Centre for Healthworks Development and Research Initiative, CHEDRES",
      value:
        "Centre for Healthworks Development and Research Initiative, CHEDRES",
    },
    {
      label:
        "BASIC FOUNDATION FOR SOCIO-ECONOMIC DEVELOPMENT OF RURAL WOMEN AND YOUTH(BF-SEDRWAY)",
      value:
        "BASIC FOUNDATION FOR SOCIO-ECONOMIC DEVELOPMENT OF RURAL WOMEN AND YOUTH(BF-SEDRWAY)",
    },
    { label: "Faith Support Centre", value: "Faith Support Centre" },
    {
      label:
        "IKAA INE AKPANA RURAL WOMEN DEVELOPMENT AND EMPOWERMENT FOUNDATION ",
      value:
        "IKAA INE AKPANA RURAL WOMEN DEVELOPMENT AND EMPOWERMENT FOUNDATION",
    },
    {
      label: "RURAL CHILD HEALTH ORGANIZATION",
      value: "RURAL CHILD HEALTH ORGANIZATION",
    },
    {
      label: "Fountain of Hope Support Group",
      value: "Fountain of Hope Support Group",
    },
    {
      label: "POSTIVE CARE AND DEVELOPMENT FOUNDATION",
      value: "POSTIVE CARE AND DEVELOPMENT FOUNDATION",
    },
    { label: "Dubass-Duke Foundation", value: "Dubass-Duke Foundation" },
    {
      label: "Association of Positive Youth Living with HIV in Nigeria ",
      value: "",
    },
    { label: "Development Options", value: "Development Options" },
    {
      label:
        "GLOBAL INITIATIVE FOR PRIMARY HEALTH AND COMMUNITY DEVELOPMENT (GLIPHCOD)",
      value:
        "GLOBAL INITIATIVE FOR PRIMARY HEALTH AND COMMUNITY DEVELOPMENT (GLIPHCOD)",
    },
    {
      label: "GREATER HANDS INTERNATIONAL FOR HEALTH AND DEVELOPMENT (GHI4HD)",
      value: "GREATER HANDS INTERNATIONAL FOR HEALTH AND DEVELOPMENT (GHI4HD)",
    },
    {
      label: "Community Health and Development Advisory Trust (COHDAT)",
      value: "Community Health and Development Advisory Trust (COHDAT)",
    },
    { label: "Eti-Uwem Support Group", value: "Eti-Uwem Support Group" },
    {
      label: "Malaria eradication and safe health intitiative",
      value: "Malaria eradication and safe health intitiative",
    },
    {
      label: "Hope givers care and support organisation",
      value: "Hope givers care and support organisation",
    },
    {
      label: "Care trust development initiative",
      value: "Care trust development initiative",
    },
    {
      label: "Descom global care initiative",
      value: "Descom global care initiative",
    },
    {
      label: "Save the world support foundation",
      value: "Save the world support foundation",
    },
    {
      label: "Gender perspective and social development centre",
      value: "Gender perspective and social development centre",
    },
    {
      label: "Aguata diocesan centre for community health and development",
      value: "Aguata diocesan centre for community health and development",
    },
    {
      label: "Restored hope organisation",
      value: "Restored hope organisation",
    },
    {
      label: "Be Glad care and support foundation",
      value: "Be Glad care and support foundation",
    },
    {
      label: "Victoria clarion foundation",
      value: "Victoria clarion foundation",
    },
    { label: "Spring of hope foundation", value: "Spring of hope foundation" },
    {
      label: "Shoulder for gender support development initiative",
      value: "Shoulder for gender support development initiative",
    },
    {
      label: "Civil resource development and documentation centre Nigeria",
      value: "Civil resource development and documentation centre Nigeria",
    },
    {
      label: "Light of the nation Organisation",
      value: "Light of the nation Organisation",
    },
    {
      label:
        "Anglican diocese of Nnewi health and community development centre",
      value:
        "Anglican diocese of Nnewi health and community development centre",
    },
    {
      label:
        "Connected Advocacy for Empowerment and Youth Development Initiative",
      value:
        "Connected Advocacy for Empowerment and Youth Development Initiative",
    },
    {
      label: "Center for Research and community development (CRCD)",
      value: "Center for Research and community development (CRCD)",
    },
    {
      label: "Circle of Friends Care and Support Initiative",
      value: "Circle of Friends Care and Support Initiative",
    },
    {
      label:
        "Association of persons for the protection of victims of human trafficking",
      value:
        "Association of persons for the protection of victims of human trafficking",
    },
    {
      label: "Comforters Empowerment Initiative Nigeria",
      value: "Comforters Empowerment Initiative Nigeria",
    },
    {
      label: "Access to health women's right and community development",
      value: "Access to health women's right and community development",
    },
    {
      label: "AFRIPRIDE CENTRE FOR RESEARCH AND POPULATION ACTIVITIES",
      value: "AFRIPRIDE CENTRE FOR RESEARCH AND POPULATION ACTIVITIES",
    },
    { label: "WILLI JOHNSON FOUNDATION", value: "WILLI JOHNSON FOUNDATION" },
    {
      label:
        "Global Women for Quality and Sustainable Development Initiative (GWSD)",
      value:
        "Global Women for Quality and Sustainable Development Initiative (GWSD)",
    },
    {
      label: "Community-based Initiatives for a Brighter Tomorrow ( CIBT)",
      value: "Community-based Initiatives for a Brighter Tomorrow ( CIBT)",
    },
    {
      label: "Capacity Enhancement and Manpower Development Foundation (CEMDF",
      value: "Capacity Enhancement and Manpower Development Foundation (CEMDF",
    },
    {
      label: "Justice Development and Peace Commission (JDPC) Auchi",
      value: "Justice Development and Peace Commission (JDPC) Auchi",
    },
    {
      label: "Josemaria Escriva Foundation",
      value: "Josemaria Escriva Foundation",
    },
    {
      label: "Ideal Development and Resource Center",
      value: "Ideal Development and Resource Center",
    },
    {
      label: "LIFT ABOVE POVERTY ORGANIZATION (LAPO)",
      value: "LIFT ABOVE POVERTY ORGANIZATION (LAPO)",
    },
    { label: "ATUNBIOLU SUPPORT GROUP", value: "ATUNBIOLU SUPPORT GROUP" },
    {
      label: "COURAGEOUS PEOPLE HEALTH AND DEVELOPMENT INITIATIVE ",
      value: "",
    },
    {
      label: "Community Development Initiatives",
      value: "Community Development Initiatives",
    },
    {
      label: "Planned Parenthood Federation of Nigeria, Ogun State",
      value: "Planned Parenthood Federation of Nigeria, Ogun State",
    },
    {
      label: "HOPE FOR NEW LIFE ORGANIZATION",
      value: "HOPE FOR NEW LIFE ORGANIZATION",
    },
    {
      label: "Advocates for Health and Development Initiative ",
      value: "Advocates for Health and Development Initiative ",
    },
    {
      label: "YOUTH FUTURE SAVERS INIITIATIVE",
      value: "YOUTH FUTURE SAVERS INIITIATIVE",
    },
    { label: "Peasants Dragnet", value: "Peasants Dragnet" },
    {
      label: "passion for young woman health and Betterment initiative ",
      value: "passion for young woman health and Betterment initiative ",
    },
    {
      label: "FOOD CONSERVATION AND WASTE ELIMINATION INITIATIVE",
      value: "FOOD CONSERVATION AND WASTE ELIMINATION INITIATIVE",
    },
    {
      label: "ADEM Community & Human Development Foundation",
      value: "ADEM Community & Human Development Foundation",
    },
    {
      label: "Catholic Fountain for Life",
      value: "Catholic Fountain for Life",
    },
    {
      label: "Aishat Hairat Rashidat (AHR) Foundation",
      value: "Aishat Hairat Rashidat (AHR) Foundation",
    },
    {
      label:
        "WOMEN ADVOCACY ON HIV/AIDS PREVENTION AND OTHER DISEASES (WAHPOD)",
      value:
        "WOMEN ADVOCACY ON HIV/AIDS PREVENTION AND OTHER DISEASES (WAHPOD)",
    },
    {
      label: "HEALTH MATTERS INCORPORATED",
      value: "HEALTH MATTERS INCORPORATED",
    },
    { label: "Family Councelling Centre", value: "Family Counceling Centre" },
    {
      label: "Food For All Global Initiative",
      value: "Food For All Global Initiative",
    },
    {
      label: "Royal Health Heritage Foundation",
      value: "Royal Health Heritage Foundation",
    },
    { label: "PRIMHEMAC", value: "PRIMHEMAC" },
    { label: "Farmers Development Union", value: "Farmers Development Union" },
    { label: "RAPAC", value: "RAPAC" },
<<<<<<< HEAD
    { label: "Redeemer All Initiative for People and Communities", value: "Redeemer All Initiative for People and Communities" },
      
=======
    {
      label: "Redeemer All Initiative for People and Communities",
      value: "Redeemer All Initiative for People and Communities",
    },

    {
      label: "Initiative for Livelihood Enhancement (ELI)",
      value: "Initiative for Livelihood Enhancement (ELI)",
    },
    {
      label: "Socio-Economic and Conservation Organization (SECCO)",
      value: "Socio-Economic and Conservation Organization (SECCO)",
    },
    { label: "Lafiya Jari Support Group", value: "Lafiya Jari Support Group" },
    {
      label: "Community Health and Development Initiative (COHDI)",
      value: "Community Health and Development Initiative (COHDI)",
    },
    {
      label: "Health Awareness and Rural Girls Education Initiative (HARGEI)",
      value: "Health Awareness and Rural Girls Education Initiative (HARGEI)",
    },
    { label: "Walwala Support Group ", value: "Walwala Support Group " },
    {
      label: "Village Community Development Initiative (VILDEV)",
      value: "Village Community Development Initiative (VILDEV)",
    },
    {
      label: "Partnership for Development Action Foundation (PADAC)",
      value: "Partnership for Development Action Foundation (PADAC)",
    },
    {
      label: "Maranda Development Association",
      value: "Maranda Development Association",
    },
    {
      label: "Society for Community Health Awareness & Mobilization (SOCHAM)",
      value: "Society for Community Health Awareness & Mobilization (SOCHAM)",
    },
    {
      label: "Society for Comprehensive Community Health (SCOCH)",
      value: "Society for Comprehensive Community Health (SCOCH)",
    },
    { label: "Hadin Kai Support Group ", value: "Hadin Kai Support Group " },
    {
      label: "Centre For Health and Development In Africa (CHEDA)",
      value: "Centre For Health and Development In Africa (CHEDA)",
    },
    {
      label: "Hadejia Concerned Citizens Network (HCCN)",
      value: "Hadejia Concerned Citizens Network (HCCN)",
    },
    { label: "Sardauna Support Group", value: "Sardauna Support Group" },

    { label: "TENDER CARE INITATIVE", value: "TENDER CARE INITATIVE" },
    {
      label: "CENTRE FOR POSITIVE HEALTH ORGANISATION",
      value: "CENTRE FOR POSITIVE HEALTH ORGANISATION",
    },
    {
      label: "POSITIVE PROOF WOMEN HEALTHCARE EMPOWEREMENT INITATIVE",
      value: "POSITIVE PROOF WOMEN HEALTHCARE EMPOWEREMENT INITATIVE",
    },
    {
      label: "COMMUNITY CARE AND DEVELOPMENT INITATIVE",
      value: "COMMUNITY CARE AND DEVELOPMENT INITATIVE",
    },
    {
      label: "NIGERIA YOUTH AID PROGRAMME",
      value: "NIGERIA YOUTH AID PROGRAMME",
    },
    {
      label: "COMMUNITY EMPOWEREMENT FOR PEACE AND HEALTH  INITIATIVE",
      value: "COMMUNITY EMPOWEREMENT FOR PEACE AND HEALTH  INITIATIVE",
    },
>>>>>>> b030d62046f2fa8721cad8eb02fe4c5c6442fd78
  ],

  nepwhan: [
    {
      label: "Federation of Muslim Women Association in Nigeria (FOMWAN)",
      value: "Federation of Muslim Women Association in Nigeria (FOMWAN)",
    },
    {
      label: "Social Positive Change Initiative (SPCI)",
      value: "Social Positive Change Initiative (SPCI)",
    },
    {
      label: "Center for Positive Development (CPD)",
      value: "Center for Positive Development (CPD)",
    },
    {
      label: "Sufabel Community Development Initiative",
      value: "Sufabel Community Development Initiative",
    },
    { label: "Tofedam Care Initiative", value: "Tofedam Care Initiative" },
    { label: "Kautal Hore Support Group", value: "Kautal Hore Support Group" },
    {
      label: "Bearing in Mind Action to Save Live (BAL)",
      value: "Bearing in Mind Action to Save Live (BAL)",
    },
    { label: "Bakasi Women MPCs", value: "Bakasi Women MPCs" },
    { label: "Kalki Support Group", value: "Kalki Support Group" },
    {
      label: "Foundation for Community Development Initiative (FOCEI)",
      value: "Foundation for Community Development Initiative (FOCEI)",
    },
    { label: "Gamunan Support Group", value: "Gamunan Support Group" },
    { label: "Madalla Support Group", value: "Madalla Support Group" },
    {
      label: "Center for Community Health and Development (CHAD)",
      value: "Center for Community Health and Development (CHAD)",
    },
    { label: "Bojude Support Group", value: "Bojude Support Group" },
    {
      label: "Gombe Anglican Dicosecan Association (GADDI)",
      value: "Gombe Anglican Dicosecan Association (GADDI)",
    },
    {
      label: "Rays of Hope Community Foundation",
      value: "Rays of Hope Community Foundation",
    },
    {
      label: "Food for All Global Aid Foundation",
      value: "Food for All Global Aid Foundation",
    },
    { label: "Family Counselling Centre", value: "Family Counselling Centre" },
    {
      label: "Hope for Positive Couples in Nigeria (HOPOC)",
      value: "Hope for Positive Couples in Nigeria (HOPOC)",
    },
    {
      label: "Redeemers All Initiative for People and Communities",
      value: "Redeemers All Initiative for People and Communities",
    },
    {
      label: "Movement Against TB, HIV/AID &Malaria in Nigeria",
      value: "Movement Against TB, HIV/AID &Malaria in Nigeria",
    },
    {
      label: "Global Future Redemption Empowerment Foundation",
      value: "Global Future Redemption Empowerment Foundation",
    },
    {
      label: "Centre for Life Support Mission",
      value: "Centre for Life Support Mission",
    },
    { label: "Farmers Development Union", value: "Farmers Development Union" },
    {
      label: "Primary Health Care & Health Management Centre",
      value: "Primary Health Care & Health Management Centre",
    },
    {
      label: "Centre for CommunityHealth & Poverty Alleviation",
      value: "Centre for CommunityHealth & Poverty Alleviation",
    },
    {
      label: "Plan Health Advocacy and Development Foundation",
      value: "Plan Health Advocacy and Development Foundation",
    },
    {
      label: "Royal Heritage Health Foundation",
      value: "Royal Heritage Health Foundation",
    },
    {
      label: "Foundation for Good Health and Wellbeing Initiative",
      value: "Foundation for Good Health and Wellbeing Initiative",
    },
    {
      label: "Community and Child Health Initiative",
      value: "Community and Child Health Initiative",
    },
    {
      label: "Almana Rescue Mission (ARM)",
      value: "Almana Rescue Mission (ARM)",
    },
    {
      label: "Reproductive Health Concern Organization (REHCON)",
      value: "Reproductive Health Concern Organization (REHCON)",
    },
    {
      label: "Hope and Mutual Support Development Initiative",
      value: "Hope and Mutual Support Development Initiative",
    },
    {
      label: "Fellowship of Christian Nurses",
      value: "Fellowship of Christian Nurses",
    },
    {
      label: "Millennium Youth Development and Empowerment Foundation",
      value: "Millennium Youth Development and Empowerment Foundation",
    },
    { label: "Help Support Group", value: "Help Support Group" },
    {
      label: "AIDS Care Education and Training Society (ACET)",
      value: "AIDS Care Education and Training Society (ACET)",
    },
    {
      label: "Network for Empowerment in Rural Areas and Township (NERAT)",
      value: "Network for Empowerment in Rural Areas and Township (NERAT)",
    },
    { label: "Joy Support Group", value: "Joy Support Group" },
    {
      label: "Relief and Hope Foundation",
      value: "Relief and Hope Foundation",
    },
    {
      label: "We Care African Development Initiative (WECAAF)",
      value: "We Care African Development Initiative (WECAAF)",
    },
    {
      label: "Zadchlo International Foundation",
      value: "Zadchlo International Foundation",
    },
    {
      label: "Community Initiative for Sustainable Development",
      value: "Community Initiative for Sustainable Development",
    },
    {
      label: "Family Health Care Foundation",
      value: "Family Health Care Foundation",
    },
    {
      label: "Corner Stone Women Support Group",
      value: "Corner Stone Women Support Group",
    },
    {
      label: "Taimako Health Support Initiative (THSiN) ",
      value: "Taimako Health Support Initiative (THSiN) ",
    },
    {
      label: "Grass Root Health Organisation of Nigeria",
      value: "Grass Root Health Organisation of Nigeria",
    },
    {
      label: "Voice of the Hopeful Enlightment and Development Initiative",
      value: "Voice of the Hopeful Enlightment and Development Initiative ",
    },
    {
      label: "Society for Child Support & Economic Empowerment.",
      value: "Society for Child Support & Economic Empowerment.",
    },
    {
      label: "Hadin Kai Comm. Health and Empowerment Initiative.",
      value: "Hadin Kai Comm. Health and Empowerment Initiative.",
    },
    {
      label: "Green Pasture and Home Initiative",
      value: "Green Pasture and Home Initiative",
    },
    {
      label: "Zumunta Community Development Support Initiative",
      value: "Zumunta Community Development Support Initiative",
    },
    {
      label: "Hisiya Idris Wuro Foundation",
      value: "Hisiya Idris Wuro Foundation",
    },
    {
      label: "Dala Community Health Association",
      value: "Dala Community Health Association",
    },
    {
      label: "Zemma Awareness Initiative",
      value: "Zemma Awareness Initiative",
    },
    {
      label: "Hamdala Health Support Initiative",
      value: "Hamdala Health Support Initiative",
    },
    {
      label: "Health Development Alternative Initiative(HDAI).",
      value: "Health Development Alternative Initiative(HDAI).",
    },
    { label: "Mari-Care Foundation", value: "Mari-Care Foundation" },
    {
      label: "Muslim Clerics Health Initiative of Nigeria",
      value: "Muslim Clerics Health Initiative of Nigeria",
    },
    {
      label: "Integrated Public Health Action for Community Empowerment",
      value: "Integrated Public Health Action for Community Empowerment",
    },
    {
      label: "NATIONAL COUNCIL OF MUSLIM YOUTH ORGANIZATIONS",
      value: "NATIONAL COUNCIL OF MUSLIM YOUTH ORGANIZATIONS",
    },
    {
      label: "GLOBAL AWARENESS FOR HEALTHY LIVING INITIATIVE",
      value: "GLOBAL AWARENESS FOR HEALTHY LIVING INITIATIVE",
    },
    {
      label: "LIFE AND PEACE DEVELOPMENT ORGANIZATION",
      value: "LIFE AND PEACE DEVELOPMENT ORGANIZATION",
    },
    {
      label: "RESTORATION OF THE DIGNITY OF WOMANHOOD",
      value: "RESTORATION OF THE DIGNITY OF WOMANHOOD",
    },
    {
      label: "FEBRAM HEALTH INITIATE AND COMMUNITY DEVELOPMENT (FEBHICOD)",
      value: "FEBRAM HEALTH INITIATE AND COMMUNITY DEVELOPMENT (FEBHICOD)",
    },
    {
      label: "GRACE GREG COMPASSIONATE HOME",
      value: "GRACE GREG COMPASSIONATE HOME",
    },
    {
      label: "HEALTH SOLUTIONS AND GENDER VIOLENCE CENTRE",
      value: "HEALTH SOLUTIONS AND GENDER VIOLENCE CENTRE",
    },
    { label: "MELVILLE WOMEN INITIATIVE", value: "MELVILLE WOMEN INITIATIVE" },
    {
      label: "THE SPEAKING VOICE FOR THE HOPE AND THE LESS PRIVILEGE",
      value: "THE SPEAKING VOICE FOR THE HOPE AND THE LESS PRIVILEGE",
    },
    {
      label: "KNOWLEDGE AND CARE PROVIDERS ",
      value: "KNOWLEDGE AND CARE PROVIDERS ",
    },
    { label: "A ONE READERS FOUNDATION", value: "A ONE READERS FOUNDATION" },
    {
      label: "PACE SETTER FOR DEVELOPMENT OF RURAL COMMUNITY INITIATIVE",
      value: "PACE SETTER FOR DEVELOPMENT OF RURAL COMMUNITY INITIATIVE",
    },
    {
      label: "LUYI ROTIMI DEVELOPMENT FOUNDATION",
      value: "LUYI ROTIMI DEVELOPMENT FOUNDATION",
    },
    {
      label: "KIDS & TEENS RESOURCE CENTRE",
      value: "KIDS & TEENS RESOURCE CENTRE",
    },
    { label: "STAR RUBY ORGANIZATION", value: "STAR RUBY ORGANIZATION" },
    { label: "ALUMMA SUPPORT GROUP", value: "ALUMMA SUPPORT GROUP" },
    {
      label: "DYNAMIC FAMILY CARE CENTRE",
      value: "DYNAMIC FAMILY CARE CENTRE",
    },
    {
      label: "CARELINK RESOURCE FOUNDATION",
      value: "CARELINK RESOURCE FOUNDATION",
    },
    { label: "NASIHA SUPPORT GROUP", value: "NASIHA SUPPORT GROUP" },
    { label: "IIGES", value: "IIGES" },
    {
      label: "TALAKAWA FOCUSED INITIATIVE",
      value: "TALAKAWA FOCUSED INITIATIVE",
    },
    {
      label: "AYUNUKU HEALTH EDUCATION CENTRE (AHEC)",
      value: "AYUNUKU HEALTH EDUCATION CENTRE (AHEC)",
    },
    {
      label: "CHILD PROTECTION AND SURVIVAL FOUNDATION",
      value: "CHILD PROTECTION AND SURVIVAL FOUNDATION",
    },
    {
      label: "YOUTH ALIVE INITIATIVE (YAI)",
      value: "YOUTH ALIVE INITIATIVE (YAI)",
    },
    { label: "APYIN, KADUNA", value: "APYIN, KADUNA" },
    {
      label: "COMMUNITY AND CHILD TOTAL DEVELOPMENT FOUNDATION",
      value: "COMMUNITY AND CHILD TOTAL DEVELOPMENT FOUNDATION",
    },
    { label: "MEDAN", value: "MEDAN" },
    { label: "TISAN HEALTH FOUNDATION", value: "TISAN HEALTH FOUNDATION" },
    {
      label: "LIFE ANCHOR INTERNATIONAL DEVELOPMENT",
      value: "LIFE ANCHOR INTERNATIONAL DEVELOPMENT",
    },
    {
      label: "LIVING WITH HOPE FOUNDATION ",
      value: "LIVING WITH HOPE FOUNDATION ",
    },
    {
      label: "AGAMA CENTRE FOR PEACE AND DEVELOPMENT",
      value: "AGAMA CENTRE FOR PEACE AND DEVELOPMENT",
    },
    {
      label: "CHILD EDUCATION AND COMMUNITY DEVELOPMENT INITIATIVE",
      value: "CHILD EDUCATION AND COMMUNITY DEVELOPMENT INITIATIVE",
    },
    { label: "NASARA SUPPORT GROUP", value: "NASARA SUPPORT GROUP" },
    {
      label: "FAMILY HEALTHCARE FOUNDATION",
      value: "FAMILY HEALTHCARE FOUNDATION",
    },
    { label: "OSHLA SUPPORT GROUP", value: "OSHLA SUPPORT GROUP" },
    { label: "SOURCE OF HOPE FOUNDATION", value: "SOURCE OF HOPE FOUNDATION" },
<<<<<<< HEAD
    { label: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION", value: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION" },
    { label: "JEVARROM LIFE SUPPORT FOUNDATION", value: "JEVARROM LIFE SUPPORT FOUNDATION" },
    { label: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES", value: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES" },
    { label: "Save the Future of Children Initiative (SAFIN)", value: "Save the Future of Children Initiative (SAFIN)" },
    { label: "Women Environment and Youth Development Initiative (WOYODEV)", value: "Women Environment and Youth Development Initiative (WOYODEV)" },
    { label: "Theios Caregivers Initiative", value: "Theios Caregivers Initiative" },
    { label: "All Round Helping Hand Foundation", value: "All Round Helping Hand Foundation" },
    { label: "Vertex of Hope Initiative (VOHI)", value: "Vertex of Hope Initiative (VOHI)" },   
    {label: "TENDER CARE INITATIVE", value: "TENDER CARE INITATIVE"},
    {label: "COMMUNITY AID DEVELOPMENT FOUNDATION", value: "COMMUNITY AID DEVELOPMENT FOUNDATION"},
    {label: "RHODA HAVEN NETWORK FOR WOMEN LIVING WITH HIV/AIDS", value: "RHODA HAVEN NETWORK FOR WOMEN LIVING WITH HIV/AIDS"},
    {label: "CENTRE FOR POSITIVE HEALTH ORGANISATION", value: "CENTRE FOR POSITIVE HEALTH ORGANISATION"},
    {label: "WOMEN LIFELINE INTERNATIONAL FOUNDATION", value: "WOMEN LIFELINE INTERNATIONAL FOUNDATION"},
    {label: "THE EAGLE EYE BEHAVIOURAL REORIENTATION", value: "THE EAGLE EYE BEHAVIOURAL REORIENTATION"},
    {label: "HIS MARVELLOUS GRACE SUPPORT FOUNDATION", value: "HIS MARVELLOUS GRACE SUPPORT FOUNDATION"},
    {label: "POSITIVE PROOF WOMEN HEALTHCARE EMPOWEREMENT INITATIVE", value: "POSITIVE PROOF WOMEN HEALTHCARE EMPOWEREMENT INITATIVE"},
    {label: "JAKIN NGO", value: "JAKIN NGO"},
    {label: "DAVE ENECHUKWU FOUNDATION", value: "DAVE ENECHUKWU FOUNDATION"},
    {label: "HEALTH MATTERS INCORPORATED", value: "HEALTH MATTERS INCORPORATED"},
    {label: "COMMUNITY CARE AND DEVELOPMENT INITATIVE", value: "COMMUNITY CARE AND DEVELOPMENT INITATIVE"},
    {label: "NIGERIA YOUTH AID PROGRAMME", value: " NIGERIA YOUTH AID PROGRAMME"},
    {label: "HEALTH AWARENESS AND GENDER ADVOCACY ", value: "HEALTH AWARENESS AND GENDER ADVOCACY "},
    {label: "COMMUNITY EMPOWEREMENT FOR PEACE AND HEALTH  INITIATIVE", value: "COMMUNITY EMPOWEREMENT FOR PEACE AND HEALTH  INITIATIVE"},
    {label: "COMMUNITY CARE AND DEVELOPMENT INITATIVE", value: "COMMUNITY CARE AND DEVELOPMENT INITATIVE"},    
    { label: "Initiative for Livelihood Enhancement (ELI)", value: "Initiative for Livelihood Enhancement (ELI)"},
    { label: "Socio-Economic and Conservation Organization (SECCO)", value: "Socio-Economic and Conservation Organization (SECCO)"},
    { label: "Lafiya Jari Support Group", value: "Lafiya Jari Support Group"},
    { label: "Community Health and Development Initiative (COHDI)", value: "Community Health and Development Initiative (COHDI)"},
    { label: "Health Awareness and Rural Girls Education Initiative (HARGEI)", value: "Health Awareness and Rural Girls Education Initiative (HARGEI)"},
    { label: "Walwala Support Group ", value: "Walwala Support Group "},
    { label: "Village Community Development Initiative (VILDEV)", value: "Village Community Development Initiative (VILDEV)"},
    { label: "Partnership for Development Action Foundation (PADAC)", value: "Partnership for Development Action Foundation (PADAC)"},
    { label: "Maranda Development Association", value: "Maranda Development Association"},
    { label: "Society for Community Health Awareness & Mobilization (SOCHAM)", value: "Society for Community Health Awareness & Mobilization (SOCHAM)"},
    { label: "Society for Comprehensive Community Health (SCOCH)", value: "Society for Comprehensive Community Health (SCOCH)"},
    { label: "Hadin Kai Support Group ", value: "Hadin Kai Support Group "},
    { label: "Centre For Health and Development In Africa (CHEDA)", value: "Centre For Health and Development In Africa (CHEDA)"},
    { label: "Hadejia Concerned Citizens Network (HCCN)", value: "Hadejia Concerned Citizens Network (HCCN)"},
    { label: "Sardauna Support Group", value: "Sardauna Support Group"},

  ]
=======
    { label: "KAUNA SUPPORT GROUP", value: "KAUNA SUPPORT GROUP" },
    {
      label: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION",
      value: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION",
    },
    {
      label: "SHILD FOR WOMEN AND YOUTH EMPOWERMENT FOUNDATION",
      value: "SHILD FOR WOMEN AND YOUTH EMPOWERMENT FOUNDATION",
    },
    {
      label: "JEVARROM LIFE SUPPORT FOUNDATION",
      value: "JEVARROM LIFE SUPPORT FOUNDATION",
    },
    {
      label: "LET THEM LIVE FAMILY HEALTH FOUNDATION",
      value: "LET THEM LIVE FAMILY HEALTH FOUNDATION",
    },
    {
      label: "CENTRE FOR YOUTH CHALLENGE AND SOCIAL DEVELOPMENT",
      value: "CENTRE FOR YOUTH CHALLENGE AND SOCIAL DEVELOPMENT",
    },
    {
      label: "FIRST STEP ACTION FOR CHILDREN INITIATIVE",
      value: "FIRST STEP ACTION FOR CHILDREN INITIATIVE",
    },
    {
      label: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES",
      value: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES",
    },
    {
      label: "WIDOWS AGAINST AIDS FOUNDATION",
      value: "WIDOWS AGAINST AIDS FOUNDATION",
    },
    { label: "Lafiyama Support Group", value: "Lafiyama Support Group" },
    {
      label: "Royal Heritage Health Foundation (RHHF)",
      value: "Royal Heritage Health Foundation (RHHF)",
    },
    {
      label: "Save the Future of Children Initiative (SAFIN)",
      value: "Save the Future of Children Initiative (SAFIN)",
    },
    {
      label: "Federation of Muslim Women's Association in Nigeria (FOMWAN)",
      value: "Federation of Muslim Women's Association in Nigeria (FOMWAN)",
    },
    {
      label: "Health is Wealth Support Group",
      value: "Health is Wealth Support Group",
    },
    {
      label: "Women Environment and Youth Development Initiative (WOYODEV)",
      value: "Women Environment and Youth Development Initiative (WOYODEV)",
    },
    {
      label: "Keep Fit Health Support Group",
      value: "Keep Fit Health Support Group",
    },
    {
      label: "Theios Caregivers Initiative",
      value: "Theios Caregivers Initiative",
    },
    {
      label: "Hasiya Idris Wuro Foundation",
      value: "Hasiya Idris Wuro Foundation",
    },
    {
      label: "Living Care Community Development Foundation (LCCDF)",
      value: "Living Care Community Development Foundation (LCCDF)",
    },
    {
      label: "Love And Care Health Support Group ",
      value: "Love And Care Health Support Group ",
    },
    {
      label: "All Round Helping Hand Foundation",
      value: "All Round Helping Hand Foundation",
    },
    {
      label: "Empowerment for Female and Male with Basis (EFFEMAB)",
      value: "Empowerment for Female and Male with Basis (EFFEMAB)",
    },
    {
      label: "Vertex of Hope Initiative (VOHI)",
      value: "Vertex of Hope Initiative (VOHI)",
    },
    {
      label: "Kings Health Development Initiative",
      value: "Kings Health Development Initiative",
    },
    {
      label: "Belawu Ajoke Child and Women Foundation",
      value: "Belawu Ajoke Child and Women Foundation",
    },
  ],
>>>>>>> b030d62046f2fa8721cad8eb02fe4c5c6442fd78

  tb: [
    { label: "HeaIthy Living and Social Development Foundation ", value: "TB" },
    { label: "Kids & Teens Resource Centre (K&TRC)", value: "TB Network" },
    {
      label: "Center for Positive Development (CPD)",
      value: "Center for Positive Development (CPD)",
    },
    { label: "Tofedam Care Initiative", value: "Tofedam Care Initiative" },
    {
      label: "Bearing in Mind Action to Save Live (BAL)",
      value: "Bearing in Mind Action to Save Live (BAL)",
    },
    { label: "Gamunan Support Group", value: "Gamunan Support Group" },
    {
      label: "Center for Community Health and Development (CHAD)",
      value: "Center for Community Health and Development (CHAD)",
    },
    {
      label: "Movement Against TB, HIV/AID &Malaria in Nigeria",
      value: "Movement Against TB, HIV/AID &Malaria in Nigeria",
    },
    {
      label: "Centre for Life Support Mission",
      value: "Centre for Life Support Mission",
    },
    {
      label: "Plan Health Advocacy and Development Foundation",
      value: "Plan Health Advocacy and Development Foundation",
    },
    {
      label: "Community and Child Health Initiative",
      value: "Community and Child Health Initiative",
    },
    {
      label: "Reproductive Health Concern Organization (REHCON)",
      value: "Reproductive Health Concern Organization (REHCON)",
    },
    {
      label: "Millennium Youth Development and Empowerment Foundation",
      value: "Millennium Youth Development and Empowerment Foundation",
    },
    {
      label: "Network for Empowerment in Rural Areas and Township (NERAT)",
      value: "Network for Empowerment in Rural Areas and Township (NERAT)",
    },
    {
      label: "We Care African Development Initiative (WECAAF)",
      value: "We Care African Development Initiative (WECAAF)",
    },
    {
      label: "Family Health Care Foundation",
      value: "Family Health Care Foundation",
    },
    {
      label: "Society for Child Support & Economic Empowerment.",
      value: "Society for Child Support & Economic Empowerment.",
    },
    {
      label: "Dala Community Health Association",
      value: "Dala Community Health Association",
    },
    {
      label: "Health Development Alternative Initiative(HDAI).",
      value: "Health Development Alternative Initiative(HDAI).",
    },
    {
      label: "Muslim Clerics Health Initiative of Nigeria",
      value: "Muslim Clerics Health Initiative of Nigeria",
    },
    {
      label: "Integrated Public Health Action for Community Empowerment",
      value: "Integrated Public Health Action for Community Empowerment",
    },
    {
      label: "BETTERLIVING FOUNDATION AND CAPACITY BUILDING DEVELOPMENT",
      value: "BETTERLIVING FOUNDATION AND CAPACITY BUILDING DEVELOPMENT",
    },
    {
      label: "RESTORATION OF THE DIGNITY OF WOMANHOOD",
      value: "RESTORATION OF THE DIGNITY OF WOMANHOOD",
    },
    {
      label: "THE SPEAKING VOICE FOR THE HOPE AND THE LESS PRIVILEGE",
      value: "THE SPEAKING VOICE FOR THE HOPE AND THE LESS PRIVILEGE",
    },
    {
      label: "JUSTICE DEVELOPMENT AND PEACE CENTRE ",
      value: "JUSTICE DEVELOPMENT AND PEACE CENTRE ",
    },
    {
      label: "DYNAMIC FAMILY CARE CENTRE",
      value: "DYNAMIC FAMILY CARE CENTRE",
    },
    { label: "IIGES", value: "IIGES" },
    {
      label: "AYUNUKU HEALTH EDUCATION CENTRE (AHEC)",
      value: "AYUNUKU HEALTH EDUCATION CENTRE (AHEC)",
    },
    { label: "MEDAN", value: "MEDAN" },
    { label: "TISAN HEALTH FOUNDATION", value: "TISAN HEALTH FOUNDATION" },
    {
      label: "CHILD EDUCATION AND COMMUNITY DEVELOPMENT INITIATIVE",
      value: "CHILD EDUCATION AND COMMUNITY DEVELOPMENT INITIATIVE",
    },
    { label: "SOURCE OF HOPE FOUNDATION", value: "SOURCE OF HOPE FOUNDATION" },
    {
      label: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION",
      value: "CENTRE FOR WOMEN,YOUTH AND COMMUNITY ACTION",
    },
    {
      label: "JEVARROM LIFE SUPPORT FOUNDATION",
      value: "JEVARROM LIFE SUPPORT FOUNDATION",
    },
    {
      label: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES",
      value: "INITIATIVE FOR PREVENTION AND CONTROL OF DISEASES",
    },
    {
      label: "Save the Future of Children Initiative (SAFIN)",
      value: "Save the Future of Children Initiative (SAFIN)",
    },
    {
      label: "Women Environment and Youth Development Initiative (WOYODEV)",
      value: "Women Environment and Youth Development Initiative (WOYODEV)",
    },
    {
      label: "Theios Caregivers Initiative",
      value: "Theios Caregivers Initiative",
    },
    {
      label: "All Round Helping Hand Foundation",
      value: "All Round Helping Hand Foundation",
    },
    {
      label: "Vertex of Hope Initiative (VOHI)",
      value: "Vertex of Hope Initiative (VOHI)",
    },
  ],
};

export const ROLES = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Supervisor",
    value: "supervisor",
  },
  {
    label: "Super Admin",
    value: "super-admin",
  },
];

export const STATUS = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Suspend",
    value: "suspend",
  },
];

export const STATES = [
  {
    label: "Abia",
    value: "abia",
  },
  {
    label: "Adamawa",
    value: "adamawa",
  },
  {
    label: "Akwa Ibom",
    value: "akwa ibom",
  },
  {
    label: "Anambra",
    value: "anambra",
  },
  {
    label: "Bauchi",
    value: "bauchi",
  },
  {
    label: "Bayelsa",
    value: "bayelsa",
  },
  {
    label: "Benue",
    value: "benue",
  },
  {
    label: "Borno",
    value: "borno",
  },
  {
    label: "Cross River",
    value: "cross river",
  },
  {
    label: "Delta",
    value: "delta",
  },
  {
    label: "Ebonyi",
    value: "ebonyi",
  },
  {
    label: "Edo",
    value: "edo",
  },
  {
    label: "Ekiti",
    value: "ekiti",
  },
  {
    label: "Enugu",
    value: "enugu",
  },
  {
    label: "Gombe",
    value: "gombe",
  },
  {
    label: "Imo",
    value: "imo",
  },
  {
    label: "Jigawa",
    value: "jigawa",
  },
  {
    label: "Kaduna",
    value: "kaduna",
  },
  {
    label: "Kano",
    value: "kano",
  },
  {
    label: "Katsina",
    value: "katsina",
  },
  {
    label: "Kebbi",
    value: "kebbi",
  },
  {
    label: "Kogi",
    value: "kogi",
  },
  {
    label: "Kwara",
    value: "kwara",
  },
  {
    label: "Lagos",
    value: "lagos",
  },
  {
    label: "Nassarawa",
    value: "nassarawa",
  },
  {
    label: "Niger",
    value: "niger",
  },
  {
    label: "Ogun",
    value: "ogun",
  },
  {
    label: "Ondo",
    value: "ondo",
  },
  {
    label: "Osun",
    value: "osun",
  },
  {
    label: "Oyo",
    value: "oyo",
  },
  {
    label: "Plateau",
    value: "plateau",
  },
  {
    label: "Rivers",
    value: "rivers",
  },
  {
    label: "Sokoto",
    value: "sokoto",
  },
  {
    label: "Taraba",
    value: "taraba",
  },
  {
    label: "Yobe",
    value: "yobe",
  },
  {
    label: "Zamfara",
    value: "zamfara",
  },
  {
    label: "FCT Abuja",
    value: "fct abuja",
  },
];

export const LGAs = {
  abia: [
    { label: "Aba North", value: "Aba North" },
    { label: "Aba South", value: "Aba South" },
    { label: "Arochukwu", value: "Arochukwu" },
    { label: "Bende", value: "Bende" },
    { label: "Ikwuano", value: "Ikwuano" },
    { label: "Isiala Ngwa North", value: "Isiala Ngwa North" },
    { label: "Isiala Ngwa South", value: "Isiala Ngwa South" },
    { label: "Isuikwuato", value: "Isuikwuato" },
    { label: "Obi Ngwa", value: "Obi Ngwa" },
    { label: "Ohafia", value: "Ohafia" },
    { label: "Osisioma", value: "Osisioma" },
    { label: "Ugwunagbo", value: "Ugwunagbo" },
    { label: "Ukwa East", value: "Ukwa East" },
    { label: "Ukwa West", value: "Ukwa West" },
    { label: "Umuahia North", value: "Umuahia North" },
    { label: "Umuahia South", value: "Umuahia South" },
    { label: "Umu Nneochi", value: "Umu Nneochi" },
  ],

  adamawa: [
    { label: "Demsa", value: "Demsa" },
    { label: "Fufure", value: "Fufure" },
    { label: "Ganye", value: "Ganye" },
    { label: "Gayuk", value: "Gayuk" },
    { label: "Gombi", value: "Gombi" },
    { label: "Grie", value: "Grie" },
    { label: "Hong", value: "Hong" },
    { label: "Jada", value: "Jada" },
    { label: "Lamurde", value: "Lamurde" },
    { label: "Madagali", value: "Madagali" },
    { label: "Maiha", value: "Maiha" },
    { label: "Mayo Belwa", value: "Mayo Belwa" },
    { label: "Michika", value: "Michika" },
    { label: "Mubi North", value: "Mubi North" },
    { label: "Mubi South", value: "Mubi South" },
    { label: "Numan", value: "Numan" },
    { label: "Shelleng", value: "Shelleng" },
    { label: "Song", value: "Song" },
    { label: "Toungo", value: "Toungo" },
    { label: "Yola North", value: "Yola North" },
    { label: "Yola South", value: "Yola South" },
  ],

  //["akwa ibom"]
  "akwa ibom": [
    { label: "Abak", value: "abak" },
    { label: "Eastern Obolo", value: "eastern_obolo" },
    { label: "Eket", value: "eket" },
    { label: "Esit Eket", value: "esit_eket" },
    { label: "Essien Udim", value: "essien_udim" },
    { label: "Etim Ekpo", value: "etim_ekpo" },
    { label: "Etinan", value: "etinan" },
    { label: "Ibeno", value: "ibeno" },
    { label: "Ibesikpo Asutan", value: "ibesikpo_asutan" },
    { label: "Ibiono Ibom", value: "ibiono_ibom" },
    { label: "Ika", value: "ika" },
    { label: "Ikono", value: "ikono" },
    { label: "Ikot Abasi", value: "ikot_abasi" },
    { label: "Ikot Ekpene", value: "ikot_ekpene" },
    { label: "Ini", value: "ini" },
    { label: "Itu", value: "itu" },
    { label: "Mbo", value: "mbo" },
    { label: "Mkpat Enin", value: "mkpat_enin" },
    { label: "Nsit Atai", value: "nsit_atai" },
    { label: "Nsit Ibom", value: "nsit_ibom" },
    { label: "Nsit Ubium", value: "nsit_ubium" },
    { label: "Obot Akara", value: "obot_akara" },
    { label: "Okobo", value: "okobo" },
    { label: "Onna", value: "onna" },
    { label: "Oron", value: "oron" },
    { label: "Oruk Anam", value: "oruk_anam" },
    { label: "Udung Uko", value: "udung_uko" },
    { label: "Ukanafun", value: "ukanafun" },
    { label: "Uruan", value: "uruan" },
    { label: "Urue Offong Oruko", value: "urue_offong_oruko" },
    { label: "Uyo", value: "uyo" },
  ],

  anambra: [
    { label: "Aguata", value: "aguata" },
    { label: "Anambra East", value: "anambra_east" },
    { label: "Anambra West", value: "anambra_west" },
    { label: "Anaocha", value: "anaocha" },
    { label: "Awka North", value: "awka_north" },
    { label: "Awka South", value: "awka_south" },
    { label: "Ayamelum", value: "ayamelum" },
    { label: "Dunukofia", value: "dunukofia" },
    { label: "Ekwusigo", value: "ekwusigo" },
    { label: "Idemili North", value: "idemili_north" },
    { label: "Idemili South", value: "idemili_south" },
    { label: "Ihiala", value: "ihiala" },
    { label: "Njikoka", value: "njikoka" },
    { label: "Nnewi North", value: "nnewi_north" },
    { label: "Nnewi South", value: "nnewi_south" },
    { label: "Ogbaru", value: "ogbaru" },
    { label: "Onitsha North", value: "onitsha_north" },
    { label: "Onitsha South", value: "onitsha_south" },
    { label: "Orumba North", value: "orumba_north" },
    { label: "Orumba South", value: "orumba_south" },
    { label: "Oyi", value: "oyi" },
  ],

  bauchi: [
    { label: "Alkaleri", value: "alkaleri" },
    { label: "Bauchi", value: "bauchi" },
    { label: "Bogoro", value: "bogoro" },
    { label: "Damban", value: "damban" },
    { label: "Darazo", value: "darazo" },
    { label: "Dass", value: "dass" },
    { label: "Gamawa", value: "gamawa" },
    { label: "Ganjuwa", value: "ganjuwa" },
    { label: "Giade", value: "giade" },
    { label: "Itas/Gadau", value: "itas-gadau" },
    { label: "Jamaare", value: "jamaare" },
    { label: "Katagum", value: "katagum" },
    { label: "Kirfi", value: "kirfi" },
    { label: "Misau", value: "misau" },
    { label: "Ningi", value: "ningi" },
    { label: "Shira", value: "shira" },
    { label: "Tafawa Balewa", value: "tafawa-balewa" },
    { label: "Toro", value: "toro" },
    { label: "Warji", value: "warji" },
    { label: "Zaki", value: "zaki" },
  ],

  benue: [
    { label: "Agatu", value: "Agatu" },
    { label: "Apa", value: "Apa" },
    { label: "Ado", value: "Ado" },
    { label: "Buruku", value: "Buruku" },
    { label: "Gboko", value: "Gboko" },
    { label: "Guma", value: "Guma" },
    { label: "Gwer East", value: "Gwer East" },
    { label: "Gwer West", value: "Gwer West" },
    { label: "Katsina Ala", value: "Katsina Ala" },
    { label: "Konshisha", value: "Konshisha" },
    { label: "Kwande", value: "Kwande" },
    { label: "Logo", value: "Logo" },
    { label: "Makurdi", value: "Makurdi" },
    { label: "Obi", value: "Obi" },
    { label: "Ogbadibo", value: "Ogbadibo" },
    { label: "Ohimini", value: "Ohimini" },
    { label: "Oju", value: "Oju" },
    { label: "Okpokwu", value: "Okpokwu" },
    { label: "Otukpo", value: "Otukpo" },
    { label: "Tarka", value: "Tarka" },
    { label: "Ukum", value: "Ukum" },
    { label: "Ushongo", value: "Ushongo" },
    { label: "Vandeikya", value: "Vandeikya" },
  ],

  borno: [
    { label: "Abadam", value: "Abadam" },
    { label: "Askira/Uba", value: "Askira/Uba" },
    { label: "Bama", value: "Bama" },
    { label: "Bayo", value: "Bayo" },
    { label: "Biu", value: "Biu" },
    { label: "Chibok", value: "Chibok" },
    { label: "Damboa", value: "Damboa" },
    { label: "Dikwa", value: "Dikwa" },
    { label: "Gubio", value: "Gubio" },
    { label: "Guzamala", value: "Guzamala" },
    { label: "Gwoza", value: "Gwoza" },
    { label: "Hawul", value: "Hawul" },
    { label: "Jere", value: "Jere" },
    { label: "Kaga", value: "Kaga" },
    { label: "Kala/Balge", value: "Kala/Balge" },
    { label: "Konduga", value: "Konduga" },
    { label: "Kukawa", value: "Kukawa" },
    { label: "Mafa", value: "Mafa" },
    { label: "Magumeri", value: "Magumeri" },
    { label: "Maiduguri", value: "Maiduguri" },
    { label: "Marte", value: "Marte" },
    { label: "Mobbar", value: "Mobbar" },
    { label: "Monguno", value: "Monguno" },
    { label: "Ngala", value: "Ngala" },
    { label: "Nganzai", value: "Nganzai" },
    { label: "Shani", value: "Shani" },
  ],

  //["cross river"]
  "cross river": [
    { label: "Abi", value: "abi" },
    { label: "Akamkpa", value: "akamkpa" },
    { label: "Akpabuyo", value: "akpabuyo" },
    { label: "Bakassi", value: "bakassi" },
    { label: "Bekwarra", value: "bekwarra" },
    { label: "Biase", value: "biase" },
    { label: "Boki", value: "boki" },
    { label: "Calabar Municipal", value: "calabar_municipal" },
    { label: "Calabar South", value: "calabar_south" },
    { label: "Etung", value: "etung" },
    { label: "Ikom", value: "ikom" },
    { label: "Obanliku", value: "obanliku" },
    { label: "Obubra", value: "obubra" },
    { label: "Obudu", value: "obudu" },
    { label: "Odukpani", value: "odukpani" },
    { label: "Ogoja", value: "ogoja" },
    { label: "Yakurr", value: "yakurr" },
    { label: "Yala", value: "yala" },
  ],

  delta: [
    {
      label: "Aniocha North",
      value: "Aniocha North",
    },
    {
      label: "Aniocha South",
      value: "Aniocha South",
    },
    {
      label: "Bomadi",
      value: "Bomadi",
    },
    {
      label: "Burutu",
      value: "Burutu",
    },
    {
      label: "Ethiope East",
      value: "Ethiope East",
    },
    {
      label: "Ethiope West",
      value: "Ethiope West",
    },
    {
      label: "Ika North East",
      value: "Ika North East",
    },
    {
      label: "Ika South",
      value: "Ika South",
    },
    {
      label: "Isoko North",
      value: "Isoko North",
    },
    {
      label: "Isoko South",
      value: "Isoko South",
    },
    {
      label: "Ndokwa East",
      value: "Ndokwa East",
    },
    {
      label: "Ndokwa West",
      value: "Ndokwa West",
    },
    {
      label: "Okpe",
      value: "Okpe",
    },
    {
      label: "Oshimili North",
      value: "Oshimili North",
    },
    {
      label: "Oshimili South",
      value: "Oshimili South",
    },
    {
      label: "Patani",
      value: "Patani",
    },
    {
      label: "Sapele",
      value: "Sapele",
    },
    {
      label: "Udu",
      value: "Udu",
    },
    {
      label: "Ughelli North",
      value: "Ughelli North",
    },
    {
      label: "Ughelli South",
      value: "Ughelli South",
    },
    {
      label: "Ukwuani",
      value: "Ukwuani",
    },
    {
      label: "Uvwie",
      value: "Uvwie",
    },
    {
      label: "Warri North",
      value: "Warri North",
    },
    {
      label: "Warri South",
      value: "Warri South",
    },
    {
      label: "Warri South West",
      value: "Warri South West",
    },
  ],

  ebonyi: [
    { label: "Abakaliki", value: "Abakaliki" },
    { label: "Afikpo North", value: "Afikpo North" },
    { label: "Afikpo South (Edda)", value: "Afikpo South (Edda)" },
    { label: "Ebonyi", value: "Ebonyi" },
    { label: "Ezza North", value: "Ezza North" },
    { label: "Ezza South", value: "Ezza South" },
    { label: "Ikwo", value: "Ikwo" },
    { label: "Ishielu", value: "Ishielu" },
    { label: "Ivo", value: "Ivo" },
    { label: "Izzi", value: "Izzi" },
    { label: "Ohaozara", value: "Ohaozara" },
    { label: "Ohaukwu", value: "Ohaukwu" },
    { label: "Onicha", value: "Onicha" },
  ],

  edo: [
    { label: "Abakaliki", value: "Abakaliki" },
    { label: "Afikpo North", value: "Afikpo North" },
    { label: "Afikpo South (Edda)", value: "Afikpo South (Edda)" },
    { label: "Ebonyi", value: "Ebonyi" },
    { label: "Ezza North", value: "Ezza North" },
    { label: "Ezza South", value: "Ezza South" },
    { label: "Ikwo", value: "Ikwo" },
    { label: "Ishielu", value: "Ishielu" },
    { label: "Ivo", value: "Ivo" },
    { label: "Izzi", value: "Izzi" },
    { label: "Ohaozara", value: "Ohaozara" },
    { label: "Ohaukwu", value: "Ohaukwu" },
    { label: "Onicha", value: "Onicha" },
  ],

  ekiti: [
    {
      label: "Ado Ekiti",
      value: "Ado Ekiti",
    },
    {
      label: "Efon",
      value: "Efon",
    },
    {
      label: "Ekiti East",
      value: "Ekiti East",
    },
    {
      label: "Ekiti South-West",
      value: "Ekiti South-West",
    },
    {
      label: "Ekiti West",
      value: "Ekiti West",
    },
    {
      label: "Emure",
      value: "Emure",
    },
    {
      label: "Gbonyin",
      value: "Gbonyin",
    },
    {
      label: "Ido Osi",
      value: "Ido Osi",
    },
    {
      label: "Ijero",
      value: "Ijero",
    },
    {
      label: "Ikere",
      value: "Ikere",
    },
    {
      label: "Ikole",
      value: "Ikole",
    },
    {
      label: "Ilejemeje",
      value: "Ilejemeje",
    },
    {
      label: "Irepodun/Ifelodun",
      value: "Irepodun/Ifelodun",
    },
    {
      label: "Ise/Orun",
      value: "Ise/Orun",
    },
    {
      label: "Moba",
      value: "Moba",
    },
    {
      label: "Oye",
      value: "Oye",
    },
  ],

  enugu: [
    {
      label: "Aninri",
      value: "Aninri",
    },
    {
      label: "Awgu",
      value: "Awgu",
    },
    {
      label: "Enugu East",
      value: "Enugu East",
    },
    {
      label: "Enugu North",
      value: "Enugu North",
    },
    {
      label: "Enugu South",
      value: "Enugu South",
    },
    {
      label: "Ezeagu",
      value: "Ezeagu",
    },
    {
      label: "Igbo Etiti",
      value: "Igbo Etiti",
    },
    {
      label: "Igbo Eze North",
      value: "Igbo Eze North",
    },
    {
      label: "Igbo Eze South",
      value: "Igbo Eze South",
    },
    {
      label: "Isi Uzo",
      value: "Isi Uzo",
    },
    {
      label: "Nkanu East",
      value: "Nkanu East",
    },
    {
      label: "Nkanu West",
      value: "Nkanu West",
    },
    {
      label: "Nsukka",
      value: "Nsukka",
    },
    {
      label: "Oji River",
      value: "Oji River",
    },
    {
      label: "Udenu",
      value: "Udenu",
    },
    {
      label: "Udi",
      value: "Udi",
    },
    {
      label: "Uzo-Uwani",
      value: "Uzo-Uwani",
    },
  ],

  gombe: [
    { label: "Akko", value: "Akko" },
    { label: "Balanga", value: "Balanga" },
    { label: "Billiri", value: "Billiri" },
    { label: "Dukku", value: "Dukku" },
    { label: "Funakaye", value: "Funakaye" },
    { label: "Gombe", value: "Gombe" },
    { label: "Kaltungo", value: "Kaltungo" },
    { label: "Kwami", value: "Kwami" },
    { label: "Nafada", value: "Nafada" },
    { label: "Shomgom", value: "Shomgom" },
    { label: "Yamaltu/Deba", value: "Yamaltu/Deba" },
  ],

  imo: [
    { label: "Aboh Mbaise", value: "Aboh Mbaise" },
    { label: "Ahiazu Mbaise", value: "Ahiazu Mbaise" },
    { label: "Ehime Mbano", value: "Ehime Mbano" },
    { label: "Ezinihitte Mbaise", value: "Ezinihitte Mbaise" },
    { label: "Ideato North", value: "Ideato North" },
    { label: "Ideato South", value: "Ideato South" },
    { label: "Ihitte/Uboma", value: "Ihitte/Uboma" },
    { label: "Ikeduru", value: "Ikeduru" },
    { label: "Isiala Mbano", value: "Isiala Mbano" },
    { label: "Isu", value: "Isu" },
    { label: "Mbaitoli", value: "Mbaitoli" },
    { label: "Ngor Okpala", value: "Ngor Okpala" },
    { label: "Njaba", value: "Njaba" },
    { label: "Nkwerre", value: "Nkwerre" },
    { label: "Nwangele", value: "Nwangele" },
    { label: "Obowo", value: "Obowo" },
    { label: "Oguta", value: "Oguta" },
    { label: "Ohaji/Egbema", value: "Ohaji/Egbema" },
    { label: "Okigwe", value: "Okigwe" },
    { label: "Onuimo", value: "Onuimo" },
    { label: "Orlu", value: "Orlu" },
    { label: "Orsu", value: "Orsu" },
    { label: "Oru East", value: "Oru East" },
    { label: "Oru West", value: "Oru West" },
    { label: "Owerri Municipal", value: "Owerri Municipal" },
    { label: "Owerri North", value: "Owerri North" },
    { label: "Owerri West", value: "Owerri West" },
  ],

  jigawa: [
    {
      label: "Auyo",
      value: "Auyo",
    },
    {
      label: "Babura",
      value: "Babura",
    },
    {
      label: "Biriniwa",
      value: "Biriniwa",
    },
    {
      label: "Birnin Kudu",
      value: "Birnin Kudu",
    },
    {
      label: "Buji",
      value: "Buji",
    },
    {
      label: "Dutse",
      value: "Dutse",
    },
    {
      label: "Gagarawa",
      value: "Gagarawa",
    },
    {
      label: "Garki",
      value: "Garki",
    },
    {
      label: "Gumel",
      value: "Gumel",
    },
    {
      label: "Guri",
      value: "Guri",
    },
    {
      label: "Gwaram",
      value: "Gwaram",
    },
    {
      label: "Gwiwa",
      value: "Gwiwa",
    },
    {
      label: "Hadejia",
      value: "Hadejia",
    },
    {
      label: "Jahun",
      value: "Jahun",
    },
    {
      label: "Kafin Hausa",
      value: "Kafin Hausa",
    },
    {
      label: "Kazaure",
      value: "Kazaure",
    },
    {
      label: "Kiri Kasama",
      value: "Kiri Kasama",
    },
    {
      label: "Kiyawa",
      value: "Kiyawa",
    },
    {
      label: "Maigatari",
      value: "Maigatari",
    },
    {
      label: "Malam Madori",
      value: "Malam Madori",
    },
    {
      label: "Miga",
      value: "Miga",
    },
    {
      label: "Ringim",
      value: "Ringim",
    },
    {
      label: "Roni",
      value: "Roni",
    },
    {
      label: "Sule Tankarkar",
      value: "Sule Tankarkar",
    },
    {
      label: "Taura",
      value: "Taura",
    },
    {
      label: "Yankwashi",
      value: "Yankwashi",
    },
  ],

  kaduna: [
    { label: "Birnin Gwari", value: "Birnin Gwari" },
    { label: "Chikun", value: "Chikun" },
    { label: "Giwa", value: "Giwa" },
    { label: "Igabi", value: "Igabi" },
    { label: "Ikara", value: "Ikara" },
    { label: "Jaba", value: "Jaba" },
    { label: "Jema'a", value: "Jema'a" },
    { label: "Kachia", value: "Kachia" },
    { label: "Kaduna North", value: "Kaduna North" },
    { label: "Kaduna South", value: "Kaduna South" },
    { label: "Kagarko", value: "Kagarko" },
    { label: "Kajuru", value: "Kajuru" },
    { label: "Kaura", value: "Kaura" },
    { label: "Kauru", value: "Kauru" },
    { label: "Kubau", value: "Kubau" },
    { label: "Kudan", value: "Kudan" },
    { label: "Lere", value: "Lere" },
    { label: "Makarfi", value: "Makarfi" },
    { label: "Sabon Gari", value: "Sabon Gari" },
    { label: "Sanga", value: "Sanga" },
    { label: "Soba", value: "Soba" },
    { label: "Zangon Kataf", value: "Zangon Kataf" },
    { label: "Zaria", value: "Zaria" },
  ],

  kano: [
    { label: "Albasu", value: "Albasu" },
    { label: "Ajingi", value: "Ajingi" },
    { label: "Bagwai", value: "Bagwai" },
    { label: "Bebeji", value: "Bebeji" },
    { label: "Bichi", value: "Bichi" },
    { label: "Bunkure", value: "Bunkure" },
    { label: "Dala", value: "Dala" },
    { label: "Dambatta", value: "Dambatta" },
    { label: "Dawakin Kudu", value: "Dawakin Kudu" },
    { label: "Dawakin Tofa", value: "Dawakin Tofa" },
    { label: "Doguwa", value: "Doguwa" },
    { label: "Fagge", value: "Fagge" },
    { label: "Gabasawa", value: "Gabasawa" },
    { label: "Garko", value: "Garko" },
    { label: "Garun Mallam", value: "Garun Mallam" },
    { label: "Gaya", value: "Gaya" },
    { label: "Gezawa", value: "Gezawa" },
    { label: "Gwale", value: "Gwale" },
    { label: "Gwarzo", value: "Gwarzo" },
    { label: "Kabo", value: "Kabo" },
    { label: "Kano Municipal", value: "Kano Municipal" },
    { label: "Karaye", value: "Karaye" },
    { label: "Kibiya", value: "Kibiya" },
    { label: "Kiru", value: "Kiru" },
    { label: "Kumbotso", value: "Kumbotso" },
    { label: "Kunchi", value: "Kunchi" },
    { label: "Kura", value: "Kura" },
    { label: "Madobi", value: "Madobi" },
    { label: "Makoda", value: "Makoda" },
    { label: "Minjibir", value: "Minjibir" },
    { label: "Nasarawa", value: "Nasarawa" },
    { label: "Rano", value: "Rano" },
    { label: "Rimin Gado", value: "Rimin Gado" },
    { label: "Rogo", value: "Rogo" },
    { label: "Shanono", value: "Shanono" },
    { label: "Sumaila", value: "Sumaila" },
    { label: "Takai", value: "Takai" },
    { label: "Tarauni", value: "Tarauni" },
    { label: "Tofa", value: "Tofa" },
    { label: "Tsanyawa", value: "Tsanyawa" },
    { label: "Tudun Wada", value: "Tudun Wada" },
    { label: "Ungogo", value: "Ungogo" },
    { label: "Warawa", value: "Warawa" },
    { label: "Wudil", value: "Wudil" },
  ],

  katsina: [
    {
      label: "Bakori",
      value: "Bakori",
    },
    {
      label: "Batagarawa",
      value: "Batagarawa",
    },
    {
      label: "Batsari",
      value: "Batsari",
    },
    {
      label: "Baure",
      value: "Baure",
    },
    {
      label: "Bindawa",
      value: "Bindawa",
    },
    {
      label: "Charanchi",
      value: "Charanchi",
    },
    {
      label: "Dan Musa",
      value: "Dan Musa",
    },
    {
      label: "Dandume",
      value: "Dandume",
    },
    {
      label: "Danja",
      value: "Danja",
    },
    {
      label: "Daura",
      value: "Daura",
    },
    {
      label: "Dutsi",
      value: "Dutsi",
    },
    {
      label: "Dutsin-Ma",
      value: "Dutsin-Ma",
    },
    {
      label: "Faskari",
      value: "Faskari",
    },
    {
      label: "Funtua",
      value: "Funtua",
    },
    {
      label: "Ingawa",
      value: "Ingawa",
    },
    {
      label: "Jibia",
      value: "Jibia",
    },
    {
      label: "Kafur",
      value: "Kafur",
    },
    {
      label: "Kaita",
      value: "Kaita",
    },
    {
      label: "Kankara",
      value: "Kankara",
    },
    {
      label: "Kankia",
      value: "Kankia",
    },
    {
      label: "Katsina",
      value: "Katsina",
    },
    {
      label: "Kurfi",
      value: "Kurfi",
    },
    {
      label: "Kusada",
      value: "Kusada",
    },
    {
      label: "Mai'Adua",
      value: "Mai'Adua",
    },
    {
      label: "Malumfashi",
      value: "Malumfashi",
    },
    {
      label: "Mani",
      value: "Mani",
    },
    {
      label: "Mashi",
      value: "Mashi",
    },
    {
      label: "Matazu",
      value: "Matazu",
    },
    {
      label: "Musawa",
      value: "Musawa",
    },
    {
      label: "Rimi",
      value: "Rimi",
    },
    {
      label: "Sabuwa",
      value: "Sabuwa",
    },
    {
      label: "Safana",
      value: "Safana",
    },
    {
      label: "Sandamu",
      value: "Sandamu",
    },
    {
      label: "Zango",
      value: "Zango",
    },
  ],

  kebbi: [
    {
      label: "Aliero",
      value: "Aliero",
    },
    {
      label: "Arewa Dandi",
      value: "Arewa Dandi",
    },
    {
      label: "Argungu",
      value: "Argungu",
    },
    {
      label: "Augie",
      value: "Augie",
    },
    {
      label: "Bagudo",
      value: "Bagudo",
    },
    {
      label: "Birnin Kebbi",
      value: "Birnin Kebbi",
    },
    {
      label: "Bunza",
      value: "Bunza",
    },
    {
      label: "Dandi",
      value: "Dandi",
    },
    {
      label: "Fakai",
      value: "Fakai",
    },
    {
      label: "Gwandu",
      value: "Gwandu",
    },
    {
      label: "Jega",
      value: "Jega",
    },
    {
      label: "Kalgo",
      value: "Kalgo",
    },
    {
      label: "Koko/Besse",
      value: "Koko/Besse",
    },
    {
      label: "Maiyama",
      value: "Maiyama",
    },
    {
      label: "Ngaski",
      value: "Ngaski",
    },
    {
      label: "Sakaba",
      value: "Sakaba",
    },
    {
      label: "Shanga",
      value: "Shanga",
    },
    {
      label: "Suru",
      value: "Suru",
    },
    {
      label: "Wasagu/Danko",
      value: "Wasagu/Danko",
    },
    {
      label: "Yauri",
      value: "Yauri",
    },
    {
      label: "Zuru",
      value: "Zuru",
    },
  ],

  kogi: [
    { label: "Adavi", value: "Adavi" },
    { label: "Ajaokuta", value: "Ajaokuta" },
    { label: "Ankpa", value: "Ankpa" },
    { label: "Bassa", value: "Bassa" },
    { label: "Dekina", value: "Dekina" },
    { label: "Ibaji", value: "Ibaji" },
    { label: "Idah", value: "Idah" },
    { label: "Igalamela Odolu", value: "Igalamela Odolu" },
    { label: "Ijumu", value: "Ijumu" },
    { label: "Kabba/Bunu", value: "Kabba/Bunu" },
    { label: "Kogi", value: "Kogi" },
    { label: "Lokoja", value: "Lokoja" },
    { label: "Mopa-Muro", value: "Mopa-Muro" },
    { label: "Ofu", value: "Ofu" },
    { label: "Ogori/Magongo", value: "Ogori/Magongo" },
    { label: "Okehi", value: "Okehi" },
    { label: "Okene", value: "Okene" },
    { label: "Olamaboro", value: "Olamaboro" },
    { label: "Omala", value: "Omala" },
    { label: "Yagba East", value: "Yagba East" },
    { label: "Yagba West", value: "Yagba West" },
  ],

  kwara: [
    {
      label: "Asa",
      value: "Asa",
    },
    {
      label: "Baruten",
      value: "Baruten",
    },
    {
      label: "Edu",
      value: "Edu",
    },
    {
      label: "Ekiti",
      value: "Ekiti",
    },
    {
      label: "Ifelodun",
      value: "Ifelodun",
    },
    {
      label: "Ilorin East",
      value: "Ilorin East",
    },
    {
      label: "Ilorin South",
      value: "Ilorin South",
    },
    {
      label: "Ilorin West",
      value: "Ilorin West",
    },
    {
      label: "Irepodun",
      value: "Irepodun",
    },
    {
      label: "Isin",
      value: "Isin",
    },
    {
      label: "Kaiama",
      value: "Kaiama",
    },
    {
      label: "Moro",
      value: "Moro",
    },
    {
      label: "Offa",
      value: "Offa",
    },
    {
      label: "Oke Ero",
      value: "Oke Ero",
    },
    {
      label: "Oyun",
      value: "Oyun",
    },
    {
      label: "Pategi",
      value: "Pategi",
    },
  ],

  lagos: [
    { label: "Agege", value: "agege" },
    { label: "Ajeromi-Ifelodun", value: "ajeromi-ifelodun" },
    { label: "Alimosho", value: "alimosho" },
    { label: "Amuwo-Odofin", value: "amuwo-odofin" },
    { label: "Apapa", value: "apapa" },
    { label: "Badagry", value: "badagry" },
    { label: "Epe", value: "epe" },
    { label: "Eti-Osa", value: "eti-osa" },
    { label: "Ibeju-Lekki", value: "ibeju-lekki" },
    { label: "Ifako-Ijaiye", value: "ifako-ijaiye" },
    { label: "Ikeja", value: "ikeja" },
    { label: "Ikorodu", value: "ikorodu" },
    { label: "Kosofe", value: "kosofe" },
    { label: "Lagos Island", value: "lagos-island" },
    { label: "Lagos Mainland", value: "lagos-mainland" },
    { label: "Mushin", value: "mushin" },
    { label: "Ojo", value: "ojo" },
    { label: "Oshodi-Isolo", value: "oshodi-isolo" },
    { label: "Somolu", value: "somolu" },
    { label: "Surulere", value: "surulere" },
  ],

  nassarawa: [
    {
      label: "Akwanga",
      value: "Akwanga",
    },
    {
      label: "Awe",
      value: "Awe",
    },
    {
      label: "Doma",
      value: "Doma",
    },
    {
      label: "Karu",
      value: "Karu",
    },
    {
      label: "Keana",
      value: "Keana",
    },
    {
      label: "Keffi",
      value: "Keffi",
    },
    {
      label: "Kokona",
      value: "Kokona",
    },
    {
      label: "Lafia",
      value: "Lafia",
    },
    {
      label: "Nasarawa",
      value: "Nasarawa",
    },
    {
      label: "Nasarawa Egon",
      value: "Nasarawa Egon",
    },
    {
      label: "Obi",
      value: "Obi",
    },
    {
      label: "Toto",
      value: "Toto",
    },
    {
      label: "Wamba",
      value: "Wamba",
    },
  ],

  niger: [
    {
      label: "Agaie",
      value: "agaie",
    },
    {
      label: "Agwara",
      value: "agwara",
    },
    {
      label: "Bida",
      value: "bida",
    },
    {
      label: "Borgu",
      value: "borgu",
    },
    {
      label: "Bosso",
      value: "bosso",
    },
    {
      label: "Chanchaga",
      value: "chanchaga",
    },
    {
      label: "Edati",
      value: "edati",
    },
    {
      label: "Gbako",
      value: "gbako",
    },
    {
      label: "Gurara",
      value: "gurara",
    },
    {
      label: "Katcha",
      value: "katcha",
    },
    {
      label: "Kontagora",
      value: "kontagora",
    },
    {
      label: "Lapai",
      value: "lapai",
    },
    {
      label: "Lavun",
      value: "lavun",
    },
    {
      label: "Magama",
      value: "magama",
    },
    {
      label: "Mariga",
      value: "mariga",
    },
    {
      label: "Mashegu",
      value: "mashegu",
    },
    {
      label: "Mokwa",
      value: "mokwa",
    },
    {
      label: "Munya",
      value: "munya",
    },
    {
      label: "Paikoro",
      value: "paikoro",
    },
    {
      label: "Rafi",
      value: "rafi",
    },
    {
      label: "Rijau",
      value: "rijau",
    },
    {
      label: "Shiroro",
      value: "shiroro",
    },
    {
      label: "Suleja",
      value: "suleja",
    },
    {
      label: "Tafa",
      value: "tafa",
    },
    {
      label: "Wushishi",
      value: "wushishi",
    },
  ],

  ogun: [
    {
      label: "Abeokuta North",
      value: "Abeokuta North",
    },
    {
      label: "Abeokuta South",
      value: "Abeokuta South",
    },
    {
      label: "Ado-Odo/Ota",
      value: "Ado-Odo/Ota",
    },
    {
      label: "Egbado North",
      value: "Egbado North",
    },
    {
      label: "Egbado South",
      value: "Egbado South",
    },
    {
      label: "Ewekoro",
      value: "Ewekoro",
    },
    {
      label: "Ifo",
      value: "Ifo",
    },
    {
      label: "Ijebu East",
      value: "Ijebu East",
    },
    {
      label: "Ijebu North",
      value: "Ijebu North",
    },
    {
      label: "Ijebu North East",
      value: "Ijebu North East",
    },
    {
      label: "Ijebu Ode",
      value: "Ijebu Ode",
    },
    {
      label: "Ikenne",
      value: "Ikenne",
    },
    {
      label: "Imeko Afon",
      value: "Imeko Afon",
    },
    {
      label: "Ipokia",
      value: "Ipokia",
    },
    {
      label: "Obafemi Owode",
      value: "Obafemi Owode",
    },
    {
      label: "Odeda",
      value: "Odeda",
    },
    {
      label: "Odogbolu",
      value: "Odogbolu",
    },
    {
      label: "Ogun Waterside",
      value: "Ogun Waterside",
    },
    {
      label: "Remo North",
      value: "Remo North",
    },
    {
      label: "Sagamu",
      value: "Sagamu",
    },
  ],

  ondo: [
    { label: "Akoko North East", value: "akoko_north_east" },
    { label: "Akoko North West", value: "akoko_north_west" },
    { label: "Akoko South Akure East", value: "akoko_south_akure_east" },
    { label: "Akoko South West", value: "akoko_south_west" },
    { label: "Akure North", value: "akure_north" },
    { label: "Akure South", value: "akure_south" },
    { label: "Ese Odo", value: "ese_odo" },
    { label: "Idanre", value: "idanre" },
    { label: "Ifedore", value: "ifedore" },
    { label: "Ilaje", value: "ilaje" },
    { label: "Ile Oluji/Okeigbo", value: "ile_oluji_okeigbo" },
    { label: "Irele", value: "irele" },
    { label: "Odigbo", value: "odigbo" },
    { label: "Okitipupa", value: "okitipupa" },
    { label: "Ondo East", value: "ondo_east" },
    { label: "Ondo West", value: "ondo_west" },
    { label: "Ose", value: "ose" },
    { label: "Owo", value: "owo" },
  ],

  osun: [
    {
      label: "Atakunmosa East",
      value: "atakunmosa-east",
    },
    {
      label: "Atakunmosa West",
      value: "atakunmosa-west",
    },
    {
      label: "Aiyedaade",
      value: "aiyedaade",
    },
    {
      label: "Aiyedire",
      value: "aiyedire",
    },
    {
      label: "Boluwaduro",
      value: "boluwaduro",
    },
    {
      label: "Boripe",
      value: "boripe",
    },
    {
      label: "Ede North",
      value: "ede-north",
    },
    {
      label: "Ede South",
      value: "ede-south",
    },
    {
      label: "Ife Central",
      value: "ife-central",
    },
    {
      label: "Ife East",
      value: "ife-east",
    },
    {
      label: "Ife North",
      value: "ife-north",
    },
    {
      label: "Ife South",
      value: "ife-south",
    },
    {
      label: "Egbedore",
      value: "egbedore",
    },
    {
      label: "Ejigbo",
      value: "ejigbo",
    },
    {
      label: "Ifedayo",
      value: "ifedayo",
    },
    {
      label: "Ifelodun",
      value: "ifelodun",
    },
    {
      label: "Ila",
      value: "ila",
    },
    {
      label: "Ilesa East",
      value: "ilesa-east",
    },
    {
      label: "Ilesa West",
      value: "ilesa-west",
    },
    {
      label: "Irepodun",
      value: "irepodun",
    },
    {
      label: "Irewole",
      value: "irewole",
    },
    {
      label: "Isokan",
      value: "isokan",
    },
    {
      label: "Iwo",
      value: "iwo",
    },
    {
      label: "Obokun",
      value: "obokun",
    },
    {
      label: "Odo Otin",
      value: "odo-otin",
    },
    {
      label: "Ola Oluwa",
      value: "ola-oluwa",
    },
    {
      label: "Olorunda",
      value: "olorunda",
    },
    {
      label: "Oriade",
      value: "oriade",
    },
    {
      label: "Orolu",
      value: "orolu",
    },
    {
      label: "Osogbo",
      value: "osogbo",
    },
  ],

  oyo: [
    { label: "Afijio", value: "afijio" },
    { label: "Akinyele", value: "akinyele" },
    { label: "Atiba", value: "atiba" },
    { label: "Atisbo", value: "atisbo" },
    { label: "Egbeda", value: "egbeda" },
    { label: "Ibadan North", value: "ibadan-north" },
    { label: "Ibadan North-East", value: "ibadan-north-east" },
    { label: "Ibadan North-West", value: "ibadan-north-west" },
    { label: "Ibadan South-East", value: "ibadan-south-east" },
    { label: "Ibadan South-West", value: "ibadan-south-west" },
    { label: "Ibarapa Central", value: "ibarapa-central" },
    { label: "Ibarapa East", value: "ibarapa-east" },
    { label: "Ibarapa North", value: "ibarapa-north" },
    { label: "Ido", value: "ido" },
    { label: "Irepo", value: "irepo" },
    { label: "Iseyin", value: "iseyin" },
    { label: "Itesiwaju", value: "itesiwaju" },
    { label: "Iwajowa", value: "iwajowa" },
    { label: "Kajola", value: "kajola" },
    { label: "Lagelu", value: "lagelu" },
    { label: "Ogo Oluwa", value: "ogo-oluwa" },
    { label: "Olorunsogo", value: "olorunsogo" },
    { label: "Oluyole", value: "oluyole" },
    { label: "Ona Ara", value: "ona-ara" },
    { label: "Orelope", value: "orelope" },
    { label: "Ori Ire", value: "ori-ire" },
    { label: "Oyo East", value: "oyo-east" },
    { label: "Oyo West", value: "oyo-west" },
    { label: "Saki East", value: "saki-east" },
    { label: "Saki West", value: "saki-west" },
    { label: "Surulere", value: "surulere" },
  ],

  plateau: [
    {
      label: "Barkin Ladi",
      value: "Barkin Ladi",
    },
    {
      label: "Bassa",
      value: "Bassa",
    },
    {
      label: "Jos East",
      value: "Jos East",
    },
    {
      label: "Jos North",
      value: "Jos North",
    },
    {
      label: "Jos South",
      value: "Jos South",
    },
    {
      label: "Kanam",
      value: "Kanam",
    },
    {
      label: "Kanke",
      value: "Kanke",
    },
    {
      label: "Langtang North",
      value: "Langtang North",
    },
    {
      label: "Langtang South",
      value: "Langtang South",
    },
    {
      label: "Mangu",
      value: "Mangu",
    },
    {
      label: "Mikang",
      value: "Mikang",
    },
    {
      label: "Pankshin",
      value: "Pankshin",
    },
    {
      label: "Qua'an Pan",
      value: "Qua'an Pan",
    },
    {
      label: "Riyom",
      value: "Riyom",
    },
    {
      label: "Shendam",
      value: "Shendam",
    },
    {
      label: "Wase",
      value: "Wase",
    },
  ],

  rivers: [
    {
      label: "Abua/Odual",
      value: "Abua/Odual",
    },
    {
      label: "Ahoada East",
      value: "Ahoada East",
    },
    {
      label: "Ahoada West",
      value: "Ahoada West",
    },
    {
      label: "Akuku Toru",
      value: "Akuku Toru",
    },
    {
      label: "Andoni",
      value: "Andoni",
    },
    {
      label: "Asari-Toru",
      value: "Asari-Toru",
    },
    {
      label: "Bonny",
      value: "Bonny",
    },
    {
      label: "Degema",
      value: "Degema",
    },
    {
      label: "Eleme",
      value: "Eleme",
    },
    {
      label: "Emohua",
      value: "Emohua",
    },
    {
      label: "Etche",
      value: "Etche",
    },
    {
      label: "Gokana",
      value: "Gokana",
    },
    {
      label: "Ikwerre",
      value: "Ikwerre",
    },
    {
      label: "Khana",
      value: "Khana",
    },
    {
      label: "Obio/Akpor",
      value: "Obio/Akpor",
    },
    {
      label: "Ogba/Egbema/Ndoni",
      value: "Ogba/Egbema/Ndoni",
    },
    {
      label: "Ogu/Bolo",
      value: "Ogu/Bolo",
    },
    {
      label: "Okrika",
      value: "Okrika",
    },
    {
      label: "Omuma",
      value: "Omuma",
    },
    {
      label: "Opobo/Nkoro",
      value: "Opobo/Nkoro",
    },
    {
      label: "Oyigbo",
      value: "Oyigbo",
    },
    {
      label: "Port Harcourt",
      value: "Port Harcourt",
    },
    {
      label: "Tai",
      value: "Tai",
    },
  ],

  sokoto: [
    {
      label: "Binji",
      value: "Binji",
    },
    {
      label: "Bodinga",
      value: "Bodinga",
    },
    {
      label: "Dange Shuni",
      value: "Dange Shuni",
    },
    {
      label: "Gada",
      value: "Gada",
    },
    {
      label: "Goronyo",
      value: "Goronyo",
    },
    {
      label: "Gudu",
      value: "Gudu",
    },
    {
      label: "Gwadabawa",
      value: "Gwadabawa",
    },
    {
      label: "Illela",
      value: "Illela",
    },
    {
      label: "Isa",
      value: "Isa",
    },
    {
      label: "Kebbe",
      value: "Kebbe",
    },
    {
      label: "Kware",
      value: "Kware",
    },
    {
      label: "Rabah",
      value: "Rabah",
    },
    {
      label: "Sabon Birni",
      value: "Sabon Birni",
    },
    {
      label: "Shagari",
      value: "Shagari",
    },
    {
      label: "Silame",
      value: "Silame",
    },
    {
      label: "Sokoto North",
      value: "Sokoto North",
    },
    {
      label: "Sokoto South",
      value: "Sokoto South",
    },
    {
      label: "Tambuwal",
      value: "Tambuwal",
    },
    {
      label: "Tangaza",
      value: "Tangaza",
    },
    {
      label: "Tureta",
      value: "Tureta",
    },
    {
      label: "Wamako",
      value: "Wamako",
    },
    {
      label: "Wurno",
      value: "Wurno",
    },
    {
      label: "Yabo",
      value: "Yabo",
    },
  ],

  taraba: [
    { label: "Ardo Kola", value: "Ardo Kola" },
    { label: "Bali", value: "Bali" },
    { label: "Donga", value: "Donga" },
    { label: "Gashaka", value: "Gashaka" },
    { label: "Gassol", value: "Gassol" },
    { label: "Ibi", value: "Ibi" },
    { label: "Jalingo", value: "Jalingo" },
    { label: "Karim Lamido", value: "Karim Lamido" },
    { label: "Kurmi", value: "Kurmi" },
    { label: "Lau", value: "Lau" },
    { label: "Sardauna", value: "Sardauna" },
    { label: "Takum", value: "Takum" },
    { label: "Ussa", value: "Ussa" },
    { label: "Wukari", value: "Wukari" },
    { label: "Yorro", value: "Yorro" },
    { label: "Zing", value: "Zing" },
  ],

  yobe: [
    { label: "Bade", value: "bade" },
    { label: "Bursari", value: "bursari" },
    { label: "Damaturu", value: "damaturu" },
    { label: "Fika", value: "fika" },
    { label: "Fune", value: "fune" },
    { label: "Geidam", value: "geidam" },
    { label: "Gujba", value: "gujba" },
    { label: "Gulani", value: "gulani" },
    { label: "Jakusko", value: "jakusko" },
    { label: "Karasuwa", value: "karasuwa" },
    { label: "Machina", value: "machina" },
    { label: "Nangere", value: "nangere" },
    { label: "Nguru", value: "nguru" },
    { label: "Potiskum", value: "potiskum" },
    { label: "Tarmuwa", value: "tarmuwa" },
    { label: "Yunusari", value: "yunusari" },
    { label: "Yusufari", value: "yusufari" },
  ],

  zamfara: [
    {
      label: "Anka",
      value: "anka",
    },
    {
      label: "Bakura",
      value: "bakura",
    },
    {
      label: "Birnin Magaji/Kiyaw",
      value: "birnin magaji/kiyaw",
    },
    {
      label: "Bukkuyum",
      value: "bukkuyum",
    },
    {
      label: "Bungudu",
      value: "bungudu",
    },
    {
      label: "Gummi",
      value: "gummi",
    },
    {
      label: "Gusau",
      value: "gusau",
    },
    {
      label: "Kaura Namoda",
      value: "kaura namoda",
    },
    {
      label: "Maradun",
      value: "maradun",
    },
    {
      label: "Maru",
      value: "maru",
    },
    {
      label: "Shinkafi",
      value: "shinkafi",
    },
    {
      label: "Talata Mafara",
      value: "talata mafara",
    },
    {
      label: "Zurmi",
      value: "zurmi",
    },
  ],

  //["fct abuja"]
  "fct abuja": [
    {
      label: "Abaji",
      value: "abaji",
    },
    {
      label: "Abuja Municipal",
      value: "abuja_municipal",
    },
    {
      label: "Bwari",
      value: "bwari",
    },
    {
      label: "Gwagwalada",
      value: "gwagwalada",
    },
    {
      label: "Kuje",
      value: "kuje",
    },
    {
      label: "Kwali",
      value: "kwali",
    },
  ],
};
