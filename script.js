// Liste des pays africains enrichie avec langues, indépendance, relief
const countries = [
  {
    id: "algeria",
    name: "Algérie",
    lat: 28.0,
    lon: 1.7,
    population: "47 millions",
    leader: "Abdelmadjid Tebboune",
    currency: "Dinar algérien",
    neighbors:
      "Maroc, Sahara occidental, Mauritanie, Mali, Niger, Libye, Tunisie",
    flag: "https://flagcdn.com/w320/dz.png",
    languages: "Arabe, berbère (tamazight)",
    independence: "5 juillet 1962",
    relief: "Atlas tellien, Hauts Plateaux, Sahara",
  },
  {
    id: "angola",
    name: "Angola",
    lat: -11.2,
    lon: 17.8,
    population: "39 millions",
    leader: "João Lourenço",
    currency: "Kwanza",
    neighbors: "Namibie, Zambie, RDC, Congo",
    flag: "https://flagcdn.com/w320/ao.png",
    languages: "Portugais, umbundu, kimbundu",
    independence: "11 novembre 1975",
    relief: "Plateau de Bié, plaines côtières",
  },
  {
    id: "benin",
    name: "Bénin",
    lat: 9.3,
    lon: 2.3,
    population: "13,7 millions",
    leader: "Patrice Talon",
    currency: "Franc CFA (XOF)",
    neighbors: "Togo, Burkina Faso, Niger, Nigeria",
    flag: "https://flagcdn.com/w320/bj.png",
    languages: "Français, fon, yoruba",
    independence: "1er août 1960",
    relief: "Plaines côtières, plateaux",
  },
  {
    id: "botswana",
    name: "Botswana",
    lat: -22.3,
    lon: 24.7,
    population: "2,7 millions",
    leader: "Duma Boko",
    currency: "Pula",
    neighbors: "Namibie, Zambie, Zimbabwe, Afrique du Sud",
    flag: "https://flagcdn.com/w320/bw.png",
    languages: "Anglais, tswana",
    independence: "30 septembre 1966",
    relief: "Désert du Kalahari, delta de l'Okavango",
  },
  {
    id: "burkina",
    name: "Burkina Faso",
    lat: 12.2,
    lon: -1.6,
    population: "24 millions",
    leader: "Ibrahim Traoré",
    currency: "Franc CFA (XOF)",
    neighbors: "Mali, Niger, Bénin, Togo, Ghana, Côte d’Ivoire",
    flag: "https://flagcdn.com/w320/bf.png",
    languages: "Français, mooré",
    independence: "5 août 1960",
    relief: "Plateaux, plaines",
  },
  {
    id: "burundi",
    name: "Burundi",
    lat: -3.3,
    lon: 29.9,
    population: "14 millions",
    leader: "Évariste Ndayishimiye",
    currency: "Franc burundais",
    neighbors: "RDC, Rwanda, Tanzanie",
    flag: "https://flagcdn.com/w320/bi.png",
    languages: "Kirundi, français",
    independence: "1er juillet 1962",
    relief: "Collines, plateau central",
  },
  {
    id: "cameroon",
    name: "Cameroun",
    lat: 5.7,
    lon: 12.7,
    population: "30 millions",
    leader: "Paul Biya",
    currency: "Franc CFA (XAF)",
    neighbors: "Nigeria, Tchad, RCA, Congo, Gabon, Guinée équatoriale",
    flag: "https://flagcdn.com/w320/cm.png",
    languages: "Français, anglais",
    independence: "1er janvier 1960",
    relief: "Montagnes (Cameroun), plateaux, plaines",
  },
  {
    id: "capeverde",
    name: "Cap-Vert",
    lat: 16.0,
    lon: -24.0,
    population: "600 000",
    leader: "José Maria Neves",
    currency: "Escudo cap-verdien",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/cv.png",
    languages: "Portugais, créole capverdien",
    independence: "5 juillet 1975",
    relief: "Volcanique, montagnes",
  },
  {
    id: "car",
    name: "Centrafrique",
    lat: 6.6,
    lon: 20.9,
    population: "5,8 millions",
    leader: "Faustin-Archange Touadéra",
    currency: "Franc CFA (XAF)",
    neighbors: "Tchad, Soudan, Soudan du Sud, RDC, Congo, Cameroun",
    flag: "https://flagcdn.com/w320/cf.png",
    languages: "Français, sango",
    independence: "13 août 1960",
    relief: "Plateaux, savanes",
  },
  {
    id: "chad",
    name: "Tchad",
    lat: 15.4,
    lon: 18.7,
    population: "21 millions",
    leader: "Mahamat Déby",
    currency: "Franc CFA (XAF)",
    neighbors: "Libye, Soudan, RCA, Cameroun, Nigeria, Niger",
    flag: "https://flagcdn.com/w320/td.png",
    languages: "Français, arabe",
    independence: "11 août 1960",
    relief: "Désert du Sahara au nord, savane au sud",
  },
  {
    id: "comoros",
    name: "Comores",
    lat: -11.9,
    lon: 43.3,
    population: "900 000",
    leader: "Azali Assoumani",
    currency: "Franc comorien",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/km.png",
    languages: "Comorien, arabe, français",
    independence: "6 juillet 1975",
    relief: "Volcanique, montagnes",
  },
  {
    id: "congo",
    name: "République du Congo",
    lat: -0.2,
    lon: 15.8,
    population: "6 millions",
    leader: "Denis Sassou-Nguesso",
    currency: "Franc CFA (XAF)",
    neighbors: "Gabon, Cameroun, RCA, RDC, Angola",
    flag: "https://flagcdn.com/w320/cg.png",
    languages: "Français, lingala",
    independence: "15 août 1960",
    relief: "Plaines côtières, plateaux",
  },
  {
    id: "ivorycoast",
    name: "Côte d’Ivoire",
    lat: 7.5,
    lon: -5.5,
    population: "32 millions",
    leader: "Alassane Ouattara",
    currency: "Franc CFA (XOF)",
    neighbors: "Liberia, Guinée, Mali, Burkina Faso, Ghana",
    flag: "https://flagcdn.com/w320/ci.png",
    languages: "Français, dioula",
    independence: "7 août 1960",
    relief: "Plaines, montagnes (mont Nimba)",
  },
  {
    id: "djibouti",
    name: "Djibouti",
    lat: 11.8,
    lon: 42.6,
    population: "1,2 million",
    leader: "Ismaïl Omar Guelleh",
    currency: "Franc djiboutien",
    neighbors: "Érythrée, Éthiopie, Somalie",
    flag: "https://flagcdn.com/w320/dj.png",
    languages: "Français, arabe, somali",
    independence: "27 juin 1977",
    relief: "Montagnes, plaines désertiques",
  },
  {
    id: "egypt",
    name: "Égypte",
    lat: 26.8,
    lon: 30.8,
    population: "118 millions",
    leader: "Abdel Fattah al-Sissi",
    currency: "Livre égyptienne",
    neighbors: "Libye, Soudan, Israël",
    flag: "https://flagcdn.com/w320/eg.png",
    languages: "Arabe",
    independence: "28 février 1922",
    relief: "Nil, delta, déserts",
  },
  {
    id: "eritrea",
    name: "Érythrée",
    lat: 15.3,
    lon: 39.8,
    population: "3,7 millions",
    leader: "Isaias Afwerki",
    currency: "Nakfa",
    neighbors: "Soudan, Éthiopie, Djibouti",
    flag: "https://flagcdn.com/w320/er.png",
    languages: "Tigrinya, arabe, anglais",
    independence: "24 mai 1993",
    relief: "Hauts plateaux, plaines côtières",
  },
  {
    id: "eswatini",
    name: "Eswatini",
    lat: -26.5,
    lon: 31.5,
    population: "1,3 million",
    leader: "Mswati III",
    currency: "Lilangeni",
    neighbors: "Afrique du Sud, Mozambique",
    flag: "https://flagcdn.com/w320/sz.png",
    languages: "Swati, anglais",
    independence: "6 septembre 1968",
    relief: "Montagnes, savanes",
  },
  {
    id: "ethiopia",
    name: "Éthiopie",
    lat: 9.1,
    lon: 40.5,
    population: "132 millions",
    leader: "Abiy Ahmed",
    currency: "Birr éthiopien",
    neighbors: "Érythrée, Djibouti, Somalie, Kenya, Soudan du Sud, Soudan",
    flag: "https://flagcdn.com/w320/et.png",
    languages: "Amharique, oromo, tigrinya",
    independence: "Jamais colonisée (sauf occupation italienne 1936-1941)",
    relief: "Hauts plateaux (Abyssinie), dépression de Danakil",
  },
  {
    id: "gabon",
    name: "Gabon",
    lat: -0.8,
    lon: 11.6,
    population: "2,5 millions",
    leader: "Brice Oligui Nguema",
    currency: "Franc CFA (XAF)",
    neighbors: "Cameroun, Congo, Guinée équatoriale",
    flag: "https://flagcdn.com/w320/ga.png",
    languages: "Français, fang",
    independence: "17 août 1960",
    relief: "Plaines côtières, massifs",
  },
  {
    id: "gambia",
    name: "Gambie",
    lat: 13.4,
    lon: -15.3,
    population: "2,9 millions",
    leader: "Adama Barrow",
    currency: "Dalasi",
    neighbors: "Sénégal",
    flag: "https://flagcdn.com/w320/gm.png",
    languages: "Anglais, mandingue",
    independence: "18 février 1965",
    relief: "Plaine fluviale",
  },
  {
    id: "ghana",
    name: "Ghana",
    lat: 7.9,
    lon: -1.0,
    population: "34 millions",
    leader: "John Mahama",
    currency: "Cedi",
    neighbors: "Côte d’Ivoire, Burkina Faso, Togo",
    flag: "https://flagcdn.com/w320/gh.png",
    languages: "Anglais, twi, ewe",
    independence: "6 mars 1957",
    relief: "Plaines, plateau de Kwahu",
  },
  {
    id: "guinea",
    name: "Guinée",
    lat: 10.4,
    lon: -10.9,
    population: "15 millions",
    leader: "Mamadi Doumbouya",
    currency: "Franc guinéen",
    neighbors:
      "Guinée-Bissau, Sénégal, Mali, Côte d’Ivoire, Liberia, Sierra Leone",
    flag: "https://flagcdn.com/w320/gn.png",
    languages: "Français, peul, mandingue",
    independence: "2 octobre 1958",
    relief: "Monts Fouta-Djalon, plaines",
  },
  {
    id: "guineabissau",
    name: "Guinée-Bissau",
    lat: 12.0,
    lon: -15.0,
    population: "2,2 millions",
    leader: "Umaro Sissoco Embaló",
    currency: "Franc CFA (XOF)",
    neighbors: "Sénégal, Guinée",
    flag: "https://flagcdn.com/w320/gw.png",
    languages: "Portugais, créole",
    independence: "24 septembre 1973",
    relief: "Plaines côtières, mangroves",
  },
  {
    id: "equatorialguinea",
    name: "Guinée équatoriale",
    lat: 1.6,
    lon: 10.5,
    population: "1,8 million",
    leader: "Teodoro Obiang Nguema",
    currency: "Franc CFA (XAF)",
    neighbors: "Cameroun, Gabon",
    flag: "https://flagcdn.com/w320/gq.png",
    languages: "Espagnol, français",
    independence: "12 octobre 1968",
    relief: "Volcanique (Bioko), plaines (Río Muni)",
  },
  {
    id: "kenya",
    name: "Kenya",
    lat: 0.1,
    lon: 37.9,
    population: "57 millions",
    leader: "William Ruto",
    currency: "Shilling kényan",
    neighbors: "Somalie, Éthiopie, Soudan du Sud, Ouganda, Tanzanie",
    flag: "https://flagcdn.com/w320/ke.png",
    languages: "Swahili, anglais",
    independence: "12 décembre 1963",
    relief: "Rift Valley, mont Kenya",
  },
  {
    id: "lesotho",
    name: "Lesotho",
    lat: -29.6,
    lon: 28.2,
    population: "2,3 millions",
    leader: "Sam Matekane",
    currency: "Loti",
    neighbors: "Afrique du Sud",
    flag: "https://flagcdn.com/w320/ls.png",
    languages: "Sotho, anglais",
    independence: "4 octobre 1966",
    relief: "Montagnes (Drakensberg)",
  },
  {
    id: "liberia",
    name: "Liberia",
    lat: 6.4,
    lon: -9.3,
    population: "5,7 millions",
    leader: "Joseph Boakai",
    currency: "Dollar libérien",
    neighbors: "Sierra Leone, Guinée, Côte d’Ivoire",
    flag: "https://flagcdn.com/w320/lr.png",
    languages: "Anglais, kpelle",
    independence: "26 juillet 1847",
    relief: "Plaines côtières, plateaux",
  },
  {
    id: "libya",
    name: "Libye",
    lat: 26.3,
    lon: 17.2,
    population: "7,5 millions",
    leader: "Abdul Hamid Dbeibeh",
    currency: "Dinar libyen",
    neighbors: "Tunisie, Algérie, Niger, Tchad, Soudan, Égypte",
    flag: "https://flagcdn.com/w320/ly.png",
    languages: "Arabe",
    independence: "24 décembre 1951",
    relief: "Désert du Sahara, massifs",
  },
  {
    id: "madagascar",
    name: "Madagascar",
    lat: -18.8,
    lon: 46.9,
    population: "32 millions",
    leader: "Andry Rajoelina",
    currency: "Ariary",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/mg.png",
    languages: "Malgache, français",
    independence: "26 juin 1960",
    relief: "Hauts plateaux, plaines côtières",
  },
  {
    id: "malawi",
    name: "Malawi",
    lat: -13.3,
    lon: 34.3,
    population: "22 millions",
    leader: "Lazarus Chakwera",
    currency: "Kwacha malawite",
    neighbors: "Zambie, Tanzanie, Mozambique",
    flag: "https://flagcdn.com/w320/mw.png",
    languages: "Anglais, chewa",
    independence: "6 juillet 1964",
    relief: "Rift Valley, plateaux",
  },
  {
    id: "mali",
    name: "Mali",
    lat: 17.6,
    lon: -3.9,
    population: "24 millions",
    leader: "Assimi Goïta",
    currency: "Franc CFA (XOF)",
    neighbors:
      "Algérie, Niger, Burkina Faso, Côte d’Ivoire, Guinée, Sénégal, Mauritanie",
    flag: "https://flagcdn.com/w320/ml.png",
    languages: "Français, bambara",
    independence: "22 septembre 1960",
    relief: "Plaines, désert, delta intérieur du Niger",
  },
  {
    id: "mauritania",
    name: "Mauritanie",
    lat: 20.3,
    lon: -10.9,
    population: "5 millions",
    leader: "Mohamed Ould Ghazouani",
    currency: "Ouguiya",
    neighbors: "Sahara occidental, Algérie, Mali, Sénégal",
    flag: "https://flagcdn.com/w320/mr.png",
    languages: "Arabe, français",
    independence: "28 novembre 1960",
    relief: "Désert, plaines côtières",
  },
  {
    id: "mauritius",
    name: "Maurice",
    lat: -20.3,
    lon: 57.5,
    population: "1,3 million",
    leader: "Prithvirajsing Roopun",
    currency: "Roupie mauricienne",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/mu.png",
    languages: "Anglais, français, créole",
    independence: "12 mars 1968",
    relief: "Volcanique, plaines",
  },
  {
    id: "morocco",
    name: "Maroc",
    lat: 31.8,
    lon: -7.1,
    population: "38 millions",
    leader: "Mohammed VI",
    currency: "Dirham marocain",
    neighbors: "Algérie, Sahara occidental",
    flag: "https://flagcdn.com/w320/ma.png",
    languages: "Arabe, berbère",
    independence: "2 mars 1956",
    relief: "Atlas, plaines côtières, désert",
  },
  {
    id: "mozambique",
    name: "Mozambique",
    lat: -18.7,
    lon: 35.5,
    population: "35 millions",
    leader: "Daniel Chapo",
    currency: "Metical",
    neighbors: "Tanzanie, Malawi, Zambie, Zimbabwe, Afrique du Sud, Eswatini",
    flag: "https://flagcdn.com/w320/mz.png",
    languages: "Portugais, émakhuwa",
    independence: "25 juin 1975",
    relief: "Plaines côtières, plateaux",
  },
  {
    id: "namibia",
    name: "Namibie",
    lat: -22.6,
    lon: 17.1,
    population: "3 millions",
    leader: "Netumbo Nandi-Ndaitwah",
    currency: "Dollar namibien",
    neighbors: "Angola, Botswana, Zambie, Afrique du Sud",
    flag: "https://flagcdn.com/w320/na.png",
    languages: "Anglais, afrikaans",
    independence: "21 mars 1990",
    relief: "Désert du Namib, plateau central",
  },
  {
    id: "niger",
    name: "Niger",
    lat: 17.6,
    lon: 8.1,
    population: "28 millions",
    leader: "Abdourahamane Tiani",
    currency: "Franc CFA (XOF)",
    neighbors: "Algérie, Libye, Tchad, Nigeria, Bénin, Burkina Faso, Mali",
    flag: "https://flagcdn.com/w320/ne.png",
    languages: "Français, haoussa",
    independence: "3 août 1960",
    relief: "Désert du Sahara, plaines",
  },
  {
    id: "nigeria",
    name: "Nigeria",
    lat: 9.1,
    lon: 8.7,
    population: "229 millions",
    leader: "Bola Tinubu",
    currency: "Naira",
    neighbors: "Bénin, Niger, Tchad, Cameroun",
    flag: "https://flagcdn.com/w320/ng.png",
    languages: "Anglais, haoussa, yoruba, igbo",
    independence: "1er octobre 1960",
    relief: "Plaines, plateaux",
  },
  {
    id: "rwanda",
    name: "Rwanda",
    lat: -1.9,
    lon: 29.9,
    population: "14 millions",
    leader: "Paul Kagame",
    currency: "Franc rwandais",
    neighbors: "Ouganda, Tanzanie, Burundi, RDC",
    flag: "https://flagcdn.com/w320/rw.png",
    languages: "Kinyarwanda, français, anglais",
    independence: "1er juillet 1962",
    relief: "Collines (pays des mille collines)",
  },
  {
    id: "saotome",
    name: "Sao Tomé-et-Principe",
    lat: 0.2,
    lon: 6.7,
    population: "240 000",
    leader: "Carlos Vila Nova",
    currency: "Dobra",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/st.png",
    languages: "Portugais, forro",
    independence: "12 juillet 1975",
    relief: "Volcanique, montagnes",
  },
  {
    id: "senegal",
    name: "Sénégal",
    lat: 14.5,
    lon: -14.4,
    population: "19 millions",
    leader: "Bassirou Diomaye Faye",
    currency: "Franc CFA (XOF)",
    neighbors: "Mauritanie, Mali, Guinée, Guinée-Bissau, Gambie",
    flag: "https://flagcdn.com/w320/sn.png",
    languages: "Français, wolof",
    independence: "4 avril 1960",
    relief: "Plaines, savanes",
  },
  {
    id: "seychelles",
    name: "Seychelles",
    lat: -4.7,
    lon: 55.5,
    population: "110 000",
    leader: "Wavel Ramkalawan",
    currency: "Roupie seychelloise",
    neighbors: "Aucun",
    flag: "https://flagcdn.com/w320/sc.png",
    languages: "Créole, anglais, français",
    independence: "29 juin 1976",
    relief: "Îles granitiques et coralliennes",
  },
  {
    id: "sierraleone",
    name: "Sierra Leone",
    lat: 8.5,
    lon: -11.8,
    population: "9 millions",
    leader: "Julius Maada Bio",
    currency: "Leone",
    neighbors: "Guinée, Liberia",
    flag: "https://flagcdn.com/w320/sl.png",
    languages: "Anglais, krio",
    independence: "27 avril 1961",
    relief: "Plaines côtières, monts Loma",
  },
  {
    id: "somalia",
    name: "Somalie",
    lat: 5.2,
    lon: 46.2,
    population: "20 millions",
    leader: "Hassan Sheikh Mohamud",
    currency: "Shilling somalien",
    neighbors: "Djibouti, Éthiopie, Kenya",
    flag: "https://flagcdn.com/w320/so.png",
    languages: "Somali, arabe",
    independence: "1er juillet 1960",
    relief: "Plateaux, plaines côtières",
  },
  {
    id: "southafrica",
    name: "Afrique du Sud",
    lat: -30.6,
    lon: 22.9,
    population: "63 millions",
    leader: "Cyril Ramaphosa",
    currency: "Rand",
    neighbors: "Namibie, Botswana, Zimbabwe, Mozambique, Eswatini, Lesotho",
    flag: "https://flagcdn.com/w320/za.png",
    languages: "Afrikaans, anglais, zoulou, xhosa",
    independence: "31 mai 1910 (Union), 31 mai 1961 (République)",
    relief: "Plateau intérieur, Drakensberg",
  },
  {
    id: "southsudan",
    name: "Soudan du Sud",
    lat: 7.3,
    lon: 30.2,
    population: "12 millions",
    leader: "Salva Kiir",
    currency: "Livre sud-soudanaise",
    neighbors: "Soudan, Éthiopie, Kenya, Ouganda, RDC, RCA",
    flag: "https://flagcdn.com/w320/ss.png",
    languages: "Anglais",
    independence: "9 juillet 2011",
    relief: "Plaines, marais",
  },
  {
    id: "sudan",
    name: "Soudan",
    lat: 15.6,
    lon: 32.5,
    population: "50 millions",
    leader: "Abdel Fattah al-Burhan",
    currency: "Livre soudanaise",
    neighbors: "Égypte, Libye, Tchad, RCA, Soudan du Sud, Éthiopie, Érythrée",
    flag: "https://flagcdn.com/w320/sd.png",
    languages: "Arabe, anglais",
    independence: "1er janvier 1956",
    relief: "Désert de Nubie, plaines",
  },
  {
    id: "tanzania",
    name: "Tanzanie",
    lat: -6.3,
    lon: 34.9,
    population: "69 millions",
    leader: "Samia Suluhu Hassan",
    currency: "Shilling tanzanien",
    neighbors:
      "Kenya, Ouganda, Rwanda, Burundi, RDC, Zambie, Malawi, Mozambique",
    flag: "https://flagcdn.com/w320/tz.png",
    languages: "Swahili, anglais",
    independence: "9 décembre 1961 (Tanganyika), 1964 (Zanzibar)",
    relief: "Plaines, monts Kilimandjaro",
  },
  {
    id: "togo",
    name: "Togo",
    lat: 8.6,
    lon: 0.8,
    population: "9 millions",
    leader: "Faure Gnassingbé",
    currency: "Franc CFA (XOF)",
    neighbors: "Ghana, Bénin, Burkina Faso",
    flag: "https://flagcdn.com/w320/tg.png",
    languages: "Français, éwé",
    independence: "27 avril 1960",
    relief: "Plaines, plateaux",
  },
  {
    id: "tunisia",
    name: "Tunisie",
    lat: 34.0,
    lon: 9.0,
    population: "12 millions",
    leader: "Kaïs Saïed",
    currency: "Dinar tunisien",
    neighbors: "Algérie, Libye",
    flag: "https://flagcdn.com/w320/tn.png",
    languages: "Arabe, français",
    independence: "20 mars 1956",
    relief: "Atlas saharien, plaines côtières",
  },
  {
    id: "uganda",
    name: "Ouganda",
    lat: 1.3,
    lon: 32.3,
    population: "51 millions",
    leader: "Yoweri Museveni",
    currency: "Shilling ougandais",
    neighbors: "Kenya, Tanzanie, Rwanda, RDC, Soudan du Sud",
    flag: "https://flagcdn.com/w320/ug.png",
    languages: "Anglais, swahili",
    independence: "9 octobre 1962",
    relief: "Plateaux, montagnes (Rwenzori)",
  },
  {
    id: "drc",
    name: "RDC",
    lat: -2.8,
    lon: 23.6,
    population: "112 millions",
    leader: "Félix Tshisekedi",
    currency: "Franc congolais",
    neighbors:
      "Congo, RCA, Soudan du Sud, Ouganda, Rwanda, Burundi, Tanzanie, Zambie, Angola",
    flag: "https://flagcdn.com/w320/cd.png",
    languages: "Français, lingala, swahili",
    independence: "30 juin 1960",
    relief: "Bassin du Congo, montagnes",
  },
  {
    id: "zambia",
    name: "Zambie",
    lat: -13.1,
    lon: 27.8,
    population: "21 millions",
    leader: "Hakainde Hichilema",
    currency: "Kwacha zambien",
    neighbors:
      "RDC, Tanzanie, Malawi, Mozambique, Zimbabwe, Botswana, Namibie, Angola",
    flag: "https://flagcdn.com/w320/zm.png",
    languages: "Anglais, bemba",
    independence: "24 octobre 1964",
    relief: "Plateau",
  },
  {
    id: "zimbabwe",
    name: "Zimbabwe",
    lat: -19.0,
    lon: 29.2,
    population: "17 millions",
    leader: "Emmerson Mnangagwa",
    currency: "Dollar zimbabwéen",
    neighbors: "Zambie, Mozambique, Afrique du Sud, Botswana",
    flag: "https://flagcdn.com/w320/zw.png",
    languages: "Anglais, shona, ndébélé",
    independence: "18 avril 1980",
    relief: "Plateau, montagnes",
  },
];

// Son Web Audio
function playClickSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.value = 0.15;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.25);
    osc.stop(ctx.currentTime + 0.25);
    if (ctx.state === "suspended") ctx.resume();
  } catch (e) {
    console.log("Audio non supporté", e);
  }
}

function latLonToPosition(lat, lon, radius = 1.32) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

// Initialisation après chargement du DOM
window.addEventListener("DOMContentLoaded", () => {
  const visitedCountries = new Set();
  let score = 0;
  const scoreLabel = document.getElementById("scoreLabel");
  const questionText = document.getElementById("questionText");
  const answersDiv = document.getElementById("answers");
  const quizResult = document.getElementById("quizResult");
  const infoPanel = document.getElementById("infoPanel");
  const closeInfoBtn = document.getElementById("closeInfoBtn");
  closeInfoBtn.addEventListener(
    "click",
    () => (infoPanel.style.display = "none"),
  );

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function generateQuestion() {
    quizResult.textContent = "";
    answersDiv.innerHTML = "";
    const country = countries[Math.floor(Math.random() * countries.length)];
    const questionTypes = [
      {
        text: `Quelle est la monnaie de ${country.name} ?`,
        correct: country.currency,
        getWrong: () =>
          shuffle(
            countries.filter((c) => c.id !== country.id).map((c) => c.currency),
          ).slice(0, 2),
      },
      {
        text: `Quel pays est limitrophe de ${country.name} ?`,
        correct: country.neighbors.split(",")[0].trim(),
        getWrong: () =>
          shuffle(
            countries
              .filter((c) => !country.neighbors.includes(c.name))
              .map((c) => c.name),
          ).slice(0, 2),
      },
      {
        text: `Combien d'habitants compte environ ${country.name} ?`,
        correct: country.population,
        getWrong: () =>
          shuffle(
            countries
              .filter((c) => c.id !== country.id)
              .map((c) => c.population),
          ).slice(0, 2),
      },
      {
        text: `Quelle(s) langue(s) parle-t-on principalement au ${country.name} ?`,
        correct: country.languages,
        getWrong: () =>
          shuffle(
            countries
              .filter((c) => c.id !== country.id)
              .map((c) => c.languages),
          ).slice(0, 2),
      },
      {
        text: `Quand le ${country.name} a-t-il obtenu son indépendance ?`,
        correct: country.independence,
        getWrong: () =>
          shuffle(
            countries
              .filter((c) => c.id !== country.id)
              .map((c) => c.independence),
          ).slice(0, 2),
      },
      {
        text: `Quel est le relief caractéristique du ${country.name} ?`,
        correct: country.relief,
        getWrong: () =>
          shuffle(
            countries.filter((c) => c.id !== country.id).map((c) => c.relief),
          ).slice(0, 2),
      },
    ];
    const q = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    questionText.textContent = q.text;
    const choices = shuffle([q.correct, ...q.getWrong()]);
    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        if (choice === q.correct) {
          score += 10;
          scoreLabel.textContent = `Score : ${score}`;
          quizResult.textContent = "Bonne réponse ! +10 points";
          quizResult.style.color = "#aaffaa";
        } else {
          quizResult.textContent = `Mauvaise réponse. Réponse : ${q.correct}`;
          quizResult.style.color = "#ffaa88";
        }
      });
      answersDiv.appendChild(btn);
    });
  }

  document
    .getElementById("nextQuestionBtn")
    .addEventListener("click", generateQuestion);

  const globe = document.getElementById("globeContainer");

  countries.forEach((country) => {
    const pos = latLonToPosition(country.lat, country.lon);
    const marker = document.createElement("a-sphere");
    marker.setAttribute("class", "country-marker clickable");
    marker.setAttribute("data-country", country.id);
    marker.setAttribute("radius", "0.022");
    marker.setAttribute("color", "#00ff66");
    marker.setAttribute("emissive", "#00ff66");
    marker.setAttribute("emissiveIntensity", "0.8");
    marker.setAttribute("position", `${pos.x} ${pos.y} ${pos.z}`);
    marker.setAttribute(
      "animation__blink",
      "property: emissiveIntensity; dir: alternate; dur: 500; loop: true; from: 0.4; to: 1.2",
    );
    marker.setAttribute(
      "animation__scale",
      "property: scale; dir: alternate; dur: 800; loop: true; to: 1.7 1.7 1.7",
    );

    const border = document.createElement("a-ring");
    border.setAttribute("radius-inner", "0.028");
    border.setAttribute("radius-outer", "0.036");
    border.setAttribute("color", "#ffff66");
    border.setAttribute("position", `${pos.x} ${pos.y} ${pos.z}`);
    border.setAttribute("look-at", "0 0 0");
    border.setAttribute("opacity", "0.7");

    const halo = document.createElement("a-circle");
    halo.setAttribute("radius", "0.055");
    halo.setAttribute("segments", "20");
    halo.setAttribute("color", "#1f8f4a");
    halo.setAttribute("opacity", "0.22");
    halo.setAttribute(
      "position",
      `${pos.x * 0.995} ${pos.y * 0.995} ${pos.z * 0.995}`,
    );
    halo.setAttribute("look-at", "0 0 0");

    marker.addEventListener("click", () => {
      playClickSound();
      document.getElementById("countryName").textContent = country.name;
      document.getElementById("countryFlag").src = country.flag;
      document.getElementById("countryPopulation").textContent =
        country.population;
      document.getElementById("countryLeader").textContent = country.leader;
      document.getElementById("countryCurrency").textContent = country.currency;
      document.getElementById("countryNeighbors").textContent =
        country.neighbors;
      document.getElementById("countryLanguages").textContent =
        country.languages;
      document.getElementById("countryIndependence").textContent =
        country.independence;
      document.getElementById("countryRelief").textContent = country.relief;
      infoPanel.style.display = "block";

      const flag3D = document.getElementById("flag3D");
      flag3D.setAttribute("material", "src", country.flag);
      flag3D.setAttribute("visible", true);
      flag3D.setAttribute("position", {
        x: pos.x * 1.35,
        y: pos.y * 1.35,
        z: pos.z * 1.35,
      });

      document.querySelectorAll(".country-shape-selected").forEach((el) => {
        el.setAttribute("color", "#1f8f4a");
        el.setAttribute("opacity", "0.22");
        el.classList.remove("country-shape-selected");
      });
      halo.setAttribute("color", "#63ff8f");
      halo.setAttribute("opacity", "0.55");
      halo.classList.add("country-shape-selected");

      if (!visitedCountries.has(country.id)) {
        visitedCountries.add(country.id);
        marker.setAttribute("color", "#ff5555");
        marker.setAttribute("emissive", "#ff5555");
        marker.removeAttribute("animation__blink");
        border.setAttribute("color", "#ff8888");
        halo.setAttribute("color", "#ff8888");
      }
    });

    globe.appendChild(halo);
    globe.appendChild(border);
    globe.appendChild(marker);
  });
});

// Composants A-Frame
AFRAME.registerComponent("drag-rotate", {
  init: function () {
    let dragging = false,
      lastX = 0;
    this.el.sceneEl.canvas.addEventListener("mousedown", (e) => {
      dragging = true;
      lastX = e.clientX;
    });
    window.addEventListener("mouseup", () => (dragging = false));
    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      const rot = this.el.getAttribute("rotation");
      this.el.setAttribute("rotation", {
        x: rot.x,
        y: rot.y + dx * 0.5,
        z: rot.z,
      });
    });
  },
});

AFRAME.registerComponent("orbiting-planets", {
  init: function () {
    const center = { x: 0, y: 1.6, z: -3 };
    const planets = [
      {
        radius: 0.16,
        color: "#c07c5c",
        dist: 2.5,
        speed: 0.012,
        emis: "#442200",
      },
      {
        radius: 0.19,
        color: "#e6b856",
        dist: 3.3,
        speed: 0.008,
        emis: "#664400",
      },
      {
        radius: 0.17,
        color: "#c46b3e",
        dist: 4.1,
        speed: 0.006,
        emis: "#442200",
      },
      {
        radius: 0.4,
        color: "#c9aa7f",
        dist: 5.6,
        speed: 0.0035,
        emis: "#664422",
      },
      {
        radius: 0.36,
        color: "#e8cfaa",
        dist: 7.2,
        speed: 0.0025,
        emis: "#886644",
        ring: true,
      },
    ];
    this.planetsData = [];
    this.time = 0;
    planets.forEach((p, idx) => {
      const orbit = document.createElement("a-ring");
      orbit.setAttribute("radius-inner", p.dist - 0.05);
      orbit.setAttribute("radius-outer", p.dist + 0.05);
      orbit.setAttribute("color", "#88aaff");
      orbit.setAttribute("opacity", "0.2");
      orbit.setAttribute("rotation", "-90 0 0");
      orbit.setAttribute("position", `${center.x} ${center.y} ${center.z}`);
      this.el.sceneEl.appendChild(orbit);

      const planet = document.createElement("a-sphere");
      planet.setAttribute("radius", p.radius);
      planet.setAttribute("color", p.color);
      planet.setAttribute("emissive", p.emis);
      planet.setAttribute("emissiveIntensity", "0.15");
      planet.setAttribute(
        "position",
        `${center.x + p.dist} ${center.y} ${center.z}`,
      );
      this.el.sceneEl.appendChild(planet);

      let ringObj = null;
      if (p.ring) {
        ringObj = document.createElement("a-torus");
        ringObj.setAttribute("radius", p.radius * 1.35);
        ringObj.setAttribute("radius-tubular", "0.05");
        ringObj.setAttribute("color", "#d4b87a");
        ringObj.setAttribute("rotation", "30 40 0");
        ringObj.setAttribute("opacity", "0.75");
        planet.appendChild(ringObj);
      }
      this.planetsData.push({
        planet,
        dist: p.dist,
        speed: p.speed,
        ring: ringObj,
      });
    });
    this.center = center;
  },
  tick: function (t) {
    if (!this.planetsData) return;
    this.time += t / 1000;
    this.planetsData.forEach((d, i) => {
      const angle = this.time * d.speed + i;
      const x = this.center.x + Math.cos(angle) * d.dist;
      const z = this.center.z + Math.sin(angle) * d.dist;
      d.planet.setAttribute("position", `${x} ${this.center.y} ${z}`);
      if (d.ring)
        d.ring.setAttribute("rotation", `25 ${(this.time * 40) % 360} 10`);
    });
  },
});
