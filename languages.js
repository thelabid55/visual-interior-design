const languages = [
    {
        "code":  "en",
        "name":  "English",
        "native":  "English",
        "supported":  true
    },
    {
        "code":  "id",
        "name":  "Indonesian",
        "native":  "Bahasa Indonesia",
        "supported":  true
    },
    {
        "code":  "ms",
        "name":  "Malay",
        "native":  "Bahasa Melayu",
        "supported":  true
    },
    {
        "code":  "ja",
        "name":  "Japanese",
        "native":  "日本語",
        "supported":  true
    },
    {
        "code":  "ko",
        "name":  "Korean",
        "native":  "한국어",
        "supported":  true
    },
    {
        "code":  "zh-CN",
        "name":  "Chinese (Simplified)",
        "native":  "简体中文",
        "supported":  true
    },
    {
        "code":  "zh-TW",
        "name":  "Chinese (Traditional)",
        "native":  "繁體中文",
        "supported":  true
    },
    {
        "code":  "es",
        "name":  "Spanish",
        "native":  "Español",
        "supported":  true
    },
    {
        "code":  "fr",
        "name":  "French",
        "native":  "Français",
        "supported":  true
    },
    {
        "code":  "de",
        "name":  "German",
        "native":  "Deutsch",
        "supported":  true
    },
    {
        "code":  "ar",
        "name":  "Arabic",
        "native":  "العربية",
        "supported":  true
    },
    {
        "code":  "ru",
        "name":  "Russian",
        "native":  "Русский",
        "supported":  true
    },
    {
        "code":  "pt",
        "name":  "Portuguese",
        "native":  "Português",
        "supported":  true
    },
    {
        "code":  "it",
        "name":  "Italian",
        "native":  "Italiano",
        "supported":  true
    },
    {
        "code":  "hi",
        "name":  "Hindi",
        "native":  "हिन्दी",
        "supported":  true
    },
    {
        "code":  "tr",
        "name":  "Turkish",
        "native":  "Türkçe",
        "supported":  true
    },
    {
        "code":  "vi",
        "name":  "Vietnamese",
        "native":  "Tiếng Việt",
        "supported":  true
    },
    {
        "code":  "th",
        "name":  "Thai",
        "native":  "ไทย",
        "supported":  true
    },
    {
        "code":  "nl",
        "name":  "Dutch",
        "native":  "Nederlands",
        "supported":  true
    },
    {
        "code":  "pl",
        "name":  "Polish",
        "native":  "Polski",
        "supported":  true
    },
    {
        "code":  "sv",
        "name":  "Swedish",
        "native":  "Svenska",
        "supported":  true
    },
    {
        "code":  "jv",
        "name":  "Javanese",
        "native":  "Basa Jawa",
        "supported":  true
    },
    {
        "code":  "su",
        "name":  "Sundanese",
        "native":  "Basa Sunda",
        "supported":  true
    },
    {
        "code":  "la",
        "name":  "Latin",
        "native":  "Lingua Latina",
        "supported":  true
    },
    {
        "code":  "el",
        "name":  "Greek",
        "native":  "Ελληνικά",
        "supported":  true
    },
    {
        "code":  "he",
        "name":  "Hebrew",
        "native":  "עברית",
        "supported":  true
    },
    {
        "code":  "fa",
        "name":  "Persian",
        "native":  "فارسی",
        "supported":  true
    },
    {
        "code":  "uk",
        "name":  "Ukrainian",
        "native":  "Українська",
        "supported":  true
    },
    {
        "code":  "no",
        "name":  "Norwegian",
        "native":  "Norsk",
        "supported":  true
    },
    {
        "code":  "fi",
        "name":  "Finnish",
        "native":  "Suomi",
        "supported":  true
    },
    {
        "code":  "da",
        "name":  "Danish",
        "native":  "Dansk",
        "supported":  true
    },
    {
        "code":  "cs",
        "name":  "Czech",
        "native":  "Čeština",
        "supported":  true
    },
    {
        "code":  "hu",
        "name":  "Hungarian",
        "native":  "Magyar",
        "supported":  true
    },
    {
        "code":  "ro",
        "name":  "Romanian",
        "native":  "Română",
        "supported":  true
    },
    {
        "code":  "bg",
        "name":  "Bulgarian",
        "native":  "Български",
        "supported":  true
    },
    {
        "code":  "hr",
        "name":  "Croatian",
        "native":  "Hrvatski",
        "supported":  true
    },
    {
        "code":  "sr",
        "name":  "Serbian",
        "native":  "Српски",
        "supported":  true
    },
    {
        "code":  "sk",
        "name":  "Slovak",
        "native":  "Slovenčina",
        "supported":  true
    },
    {
        "code":  "sl",
        "name":  "Slovenian",
        "native":  "Slovenščina",
        "supported":  true
    },
    {
        "code":  "et",
        "name":  "Estonian",
        "native":  "Eesti",
        "supported":  true
    },
    {
        "code":  "lv",
        "name":  "Latvian",
        "native":  "Latviešu",
        "supported":  true
    },
    {
        "code":  "lt",
        "name":  "Lithuanian",
        "native":  "Lietuvių",
        "supported":  true
    },
    {
        "code":  "tl",
        "name":  "Tagalog (Filipino)",
        "native":  "Tagalog",
        "supported":  true
    },
    {
        "code":  "aaa",
        "name":  "Ghotuo",
        "native":  "Ghotuo",
        "supported":  false
    },
    {
        "code":  "aab",
        "name":  "Alumu-Tesu",
        "native":  "Alumu-Tesu",
        "supported":  false
    },
    {
        "code":  "aac",
        "name":  "Ari",
        "native":  "Ari",
        "supported":  false
    },
    {
        "code":  "aad",
        "name":  "Amal",
        "native":  "Amal",
        "supported":  false
    },
    {
        "code":  "aae",
        "name":  "ArbÃ«reshÃ« Albanian",
        "native":  "ArbÃ«reshÃ« Albanian",
        "supported":  false
    },
    {
        "code":  "aaf",
        "name":  "Aranadan",
        "native":  "Aranadan",
        "supported":  false
    },
    {
        "code":  "aag",
        "name":  "Ambrak",
        "native":  "Ambrak",
        "supported":  false
    },
    {
        "code":  "aah",
        "name":  "Abu\u0027 Arapesh",
        "native":  "Abu\u0027 Arapesh",
        "supported":  false
    },
    {
        "code":  "aai",
        "name":  "Arifama-Miniafia",
        "native":  "Arifama-Miniafia",
        "supported":  false
    },
    {
        "code":  "aak",
        "name":  "Ankave",
        "native":  "Ankave",
        "supported":  false
    },
    {
        "code":  "aal",
        "name":  "Afade",
        "native":  "Afade",
        "supported":  false
    },
    {
        "code":  "aan",
        "name":  "AnambÃ©",
        "native":  "AnambÃ©",
        "supported":  false
    },
    {
        "code":  "aao",
        "name":  "Algerian Saharan Arabic",
        "native":  "Algerian Saharan Arabic",
        "supported":  false
    },
    {
        "code":  "aap",
        "name":  "ParÃ¡ ArÃ¡ra",
        "native":  "ParÃ¡ ArÃ¡ra",
        "supported":  false
    },
    {
        "code":  "aaq",
        "name":  "Eastern Abnaki",
        "native":  "Eastern Abnaki",
        "supported":  false
    },
    {
        "code":  "aa",
        "name":  "Afar",
        "native":  "Afar",
        "supported":  false
    },
    {
        "code":  "aas",
        "name":  "AasÃ¡x",
        "native":  "AasÃ¡x",
        "supported":  false
    },
    {
        "code":  "aat",
        "name":  "Arvanitika Albanian",
        "native":  "Arvanitika Albanian",
        "supported":  false
    },
    {
        "code":  "aau",
        "name":  "Abau",
        "native":  "Abau",
        "supported":  false
    },
    {
        "code":  "aaw",
        "name":  "Solong",
        "native":  "Solong",
        "supported":  false
    },
    {
        "code":  "aax",
        "name":  "Mandobo Atas",
        "native":  "Mandobo Atas",
        "supported":  false
    },
    {
        "code":  "aaz",
        "name":  "Amarasi",
        "native":  "Amarasi",
        "supported":  false
    },
    {
        "code":  "aba",
        "name":  "AbÃ©",
        "native":  "AbÃ©",
        "supported":  false
    },
    {
        "code":  "abb",
        "name":  "Bankon",
        "native":  "Bankon",
        "supported":  false
    },
    {
        "code":  "abc",
        "name":  "Ambala Ayta",
        "native":  "Ambala Ayta",
        "supported":  false
    },
    {
        "code":  "abd",
        "name":  "Manide",
        "native":  "Manide",
        "supported":  false
    },
    {
        "code":  "abe",
        "name":  "Western Abnaki",
        "native":  "Western Abnaki",
        "supported":  false
    },
    {
        "code":  "abf",
        "name":  "Abai Sungai",
        "native":  "Abai Sungai",
        "supported":  false
    },
    {
        "code":  "abg",
        "name":  "Abaga",
        "native":  "Abaga",
        "supported":  false
    },
    {
        "code":  "abh",
        "name":  "Tajiki Arabic",
        "native":  "Tajiki Arabic",
        "supported":  false
    },
    {
        "code":  "abi",
        "name":  "Abidji",
        "native":  "Abidji",
        "supported":  false
    },
    {
        "code":  "abj",
        "name":  "Aka-Bea",
        "native":  "Aka-Bea",
        "supported":  false
    },
    {
        "code":  "ab",
        "name":  "Abkhazian",
        "native":  "Abkhazian",
        "supported":  false
    },
    {
        "code":  "abl",
        "name":  "Lampung Nyo",
        "native":  "Lampung Nyo",
        "supported":  false
    },
    {
        "code":  "abm",
        "name":  "Abanyom",
        "native":  "Abanyom",
        "supported":  false
    },
    {
        "code":  "abn",
        "name":  "Abua",
        "native":  "Abua",
        "supported":  false
    },
    {
        "code":  "abo",
        "name":  "Abon",
        "native":  "Abon",
        "supported":  false
    },
    {
        "code":  "abp",
        "name":  "Abellen Ayta",
        "native":  "Abellen Ayta",
        "supported":  false
    },
    {
        "code":  "abq",
        "name":  "Abaza",
        "native":  "Abaza",
        "supported":  false
    },
    {
        "code":  "abr",
        "name":  "Abron",
        "native":  "Abron",
        "supported":  false
    },
    {
        "code":  "abs",
        "name":  "Ambonese Malay",
        "native":  "Ambonese Malay",
        "supported":  false
    },
    {
        "code":  "abt",
        "name":  "Ambulas",
        "native":  "Ambulas",
        "supported":  false
    },
    {
        "code":  "abu",
        "name":  "Abure",
        "native":  "Abure",
        "supported":  false
    },
    {
        "code":  "abv",
        "name":  "Baharna Arabic",
        "native":  "Baharna Arabic",
        "supported":  false
    },
    {
        "code":  "abw",
        "name":  "Pal",
        "native":  "Pal",
        "supported":  false
    },
    {
        "code":  "abx",
        "name":  "Inabaknon",
        "native":  "Inabaknon",
        "supported":  false
    },
    {
        "code":  "aby",
        "name":  "Aneme Wake",
        "native":  "Aneme Wake",
        "supported":  false
    },
    {
        "code":  "abz",
        "name":  "Abui",
        "native":  "Abui",
        "supported":  false
    },
    {
        "code":  "aca",
        "name":  "Achagua",
        "native":  "Achagua",
        "supported":  false
    },
    {
        "code":  "acb",
        "name":  "ÃncÃ¡",
        "native":  "ÃncÃ¡",
        "supported":  false
    },
    {
        "code":  "acd",
        "name":  "Gikyode",
        "native":  "Gikyode",
        "supported":  false
    },
    {
        "code":  "ace",
        "name":  "Achinese",
        "native":  "Achinese",
        "supported":  false
    },
    {
        "code":  "acf",
        "name":  "Saint Lucian Creole French",
        "native":  "Saint Lucian Creole French",
        "supported":  false
    },
    {
        "code":  "ach",
        "name":  "Acoli",
        "native":  "Acoli",
        "supported":  false
    },
    {
        "code":  "aci",
        "name":  "Aka-Cari",
        "native":  "Aka-Cari",
        "supported":  false
    },
    {
        "code":  "ack",
        "name":  "Aka-Kora",
        "native":  "Aka-Kora",
        "supported":  false
    },
    {
        "code":  "acl",
        "name":  "Akar-Bale",
        "native":  "Akar-Bale",
        "supported":  false
    },
    {
        "code":  "acm",
        "name":  "Mesopotamian Arabic",
        "native":  "Mesopotamian Arabic",
        "supported":  false
    },
    {
        "code":  "acn",
        "name":  "Achang",
        "native":  "Achang",
        "supported":  false
    },
    {
        "code":  "acp",
        "name":  "Eastern Acipa",
        "native":  "Eastern Acipa",
        "supported":  false
    },
    {
        "code":  "acq",
        "name":  "Ta\u0027izzi-Adeni Arabic",
        "native":  "Ta\u0027izzi-Adeni Arabic",
        "supported":  false
    },
    {
        "code":  "acr",
        "name":  "Achi",
        "native":  "Achi",
        "supported":  false
    },
    {
        "code":  "acs",
        "name":  "AcroÃ¡",
        "native":  "AcroÃ¡",
        "supported":  false
    },
    {
        "code":  "act",
        "name":  "Achterhoeks",
        "native":  "Achterhoeks",
        "supported":  false
    },
    {
        "code":  "acu",
        "name":  "Achuar-Shiwiar",
        "native":  "Achuar-Shiwiar",
        "supported":  false
    },
    {
        "code":  "acv",
        "name":  "Achumawi",
        "native":  "Achumawi",
        "supported":  false
    },
    {
        "code":  "acw",
        "name":  "Hijazi Arabic",
        "native":  "Hijazi Arabic",
        "supported":  false
    },
    {
        "code":  "acx",
        "name":  "Omani Arabic",
        "native":  "Omani Arabic",
        "supported":  false
    },
    {
        "code":  "acy",
        "name":  "Cypriot Arabic",
        "native":  "Cypriot Arabic",
        "supported":  false
    },
    {
        "code":  "acz",
        "name":  "Acheron",
        "native":  "Acheron",
        "supported":  false
    },
    {
        "code":  "ada",
        "name":  "Adangme",
        "native":  "Adangme",
        "supported":  false
    },
    {
        "code":  "adb",
        "name":  "Atauran",
        "native":  "Atauran",
        "supported":  false
    },
    {
        "code":  "add",
        "name":  "Lidzonka",
        "native":  "Lidzonka",
        "supported":  false
    },
    {
        "code":  "ade",
        "name":  "Adele",
        "native":  "Adele",
        "supported":  false
    },
    {
        "code":  "adf",
        "name":  "Dhofari Arabic",
        "native":  "Dhofari Arabic",
        "supported":  false
    },
    {
        "code":  "adg",
        "name":  "Andegerebinha",
        "native":  "Andegerebinha",
        "supported":  false
    },
    {
        "code":  "adh",
        "name":  "Adhola",
        "native":  "Adhola",
        "supported":  false
    },
    {
        "code":  "adi",
        "name":  "Adi",
        "native":  "Adi",
        "supported":  false
    },
    {
        "code":  "adj",
        "name":  "Adioukrou",
        "native":  "Adioukrou",
        "supported":  false
    },
    {
        "code":  "adl",
        "name":  "Galo",
        "native":  "Galo",
        "supported":  false
    },
    {
        "code":  "adn",
        "name":  "Adang",
        "native":  "Adang",
        "supported":  false
    },
    {
        "code":  "ado",
        "name":  "Abu",
        "native":  "Abu",
        "supported":  false
    },
    {
        "code":  "adq",
        "name":  "Adangbe",
        "native":  "Adangbe",
        "supported":  false
    },
    {
        "code":  "adr",
        "name":  "Adonara",
        "native":  "Adonara",
        "supported":  false
    },
    {
        "code":  "ads",
        "name":  "Adamorobe Sign Language",
        "native":  "Adamorobe Sign Language",
        "supported":  false
    },
    {
        "code":  "adt",
        "name":  "Adnyamathanha",
        "native":  "Adnyamathanha",
        "supported":  false
    },
    {
        "code":  "adu",
        "name":  "Aduge",
        "native":  "Aduge",
        "supported":  false
    },
    {
        "code":  "adw",
        "name":  "Amundava",
        "native":  "Amundava",
        "supported":  false
    },
    {
        "code":  "adx",
        "name":  "Amdo Tibetan",
        "native":  "Amdo Tibetan",
        "supported":  false
    },
    {
        "code":  "ady",
        "name":  "Adyghe",
        "native":  "Adyghe",
        "supported":  false
    },
    {
        "code":  "adz",
        "name":  "Adzera",
        "native":  "Adzera",
        "supported":  false
    },
    {
        "code":  "aea",
        "name":  "Areba",
        "native":  "Areba",
        "supported":  false
    },
    {
        "code":  "aeb",
        "name":  "Tunisian Arabic",
        "native":  "Tunisian Arabic",
        "supported":  false
    },
    {
        "code":  "aec",
        "name":  "Saidi Arabic",
        "native":  "Saidi Arabic",
        "supported":  false
    },
    {
        "code":  "aed",
        "name":  "Argentine Sign Language",
        "native":  "Argentine Sign Language",
        "supported":  false
    },
    {
        "code":  "aee",
        "name":  "Northeast Pashai",
        "native":  "Northeast Pashai",
        "supported":  false
    },
    {
        "code":  "aek",
        "name":  "Haeke",
        "native":  "Haeke",
        "supported":  false
    },
    {
        "code":  "ael",
        "name":  "Ambele",
        "native":  "Ambele",
        "supported":  false
    },
    {
        "code":  "aem",
        "name":  "Arem",
        "native":  "Arem",
        "supported":  false
    },
    {
        "code":  "aen",
        "name":  "Armenian Sign Language",
        "native":  "Armenian Sign Language",
        "supported":  false
    },
    {
        "code":  "aeq",
        "name":  "Aer",
        "native":  "Aer",
        "supported":  false
    },
    {
        "code":  "aer",
        "name":  "Eastern Arrernte",
        "native":  "Eastern Arrernte",
        "supported":  false
    },
    {
        "code":  "aes",
        "name":  "Alsea",
        "native":  "Alsea",
        "supported":  false
    },
    {
        "code":  "aeu",
        "name":  "Akeu",
        "native":  "Akeu",
        "supported":  false
    },
    {
        "code":  "aew",
        "name":  "Ambakich",
        "native":  "Ambakich",
        "supported":  false
    },
    {
        "code":  "aey",
        "name":  "Amele",
        "native":  "Amele",
        "supported":  false
    },
    {
        "code":  "aez",
        "name":  "Aeka",
        "native":  "Aeka",
        "supported":  false
    },
    {
        "code":  "afb",
        "name":  "Gulf Arabic",
        "native":  "Gulf Arabic",
        "supported":  false
    },
    {
        "code":  "afd",
        "name":  "Andai",
        "native":  "Andai",
        "supported":  false
    },
    {
        "code":  "afe",
        "name":  "Putukwam",
        "native":  "Putukwam",
        "supported":  false
    },
    {
        "code":  "afg",
        "name":  "Afghan Sign Language",
        "native":  "Afghan Sign Language",
        "supported":  false
    },
    {
        "code":  "afh",
        "name":  "Afrihili",
        "native":  "Afrihili",
        "supported":  false
    },
    {
        "code":  "afi",
        "name":  "Akrukay",
        "native":  "Akrukay",
        "supported":  false
    },
    {
        "code":  "afk",
        "name":  "Nanubae",
        "native":  "Nanubae",
        "supported":  false
    },
    {
        "code":  "afn",
        "name":  "Defaka",
        "native":  "Defaka",
        "supported":  false
    },
    {
        "code":  "afo",
        "name":  "Eloyi",
        "native":  "Eloyi",
        "supported":  false
    },
    {
        "code":  "afp",
        "name":  "Tapei",
        "native":  "Tapei",
        "supported":  false
    },
    {
        "code":  "af",
        "name":  "Afrikaans",
        "native":  "Afrikaans",
        "supported":  false
    },
    {
        "code":  "afs",
        "name":  "Afro-Seminole Creole",
        "native":  "Afro-Seminole Creole",
        "supported":  false
    },
    {
        "code":  "aft",
        "name":  "Afitti",
        "native":  "Afitti",
        "supported":  false
    },
    {
        "code":  "afu",
        "name":  "Awutu",
        "native":  "Awutu",
        "supported":  false
    },
    {
        "code":  "afz",
        "name":  "Obokuitai",
        "native":  "Obokuitai",
        "supported":  false
    },
    {
        "code":  "aga",
        "name":  "Aguano",
        "native":  "Aguano",
        "supported":  false
    },
    {
        "code":  "agb",
        "name":  "Legbo",
        "native":  "Legbo",
        "supported":  false
    },
    {
        "code":  "agc",
        "name":  "Agatu",
        "native":  "Agatu",
        "supported":  false
    },
    {
        "code":  "agd",
        "name":  "Agarabi",
        "native":  "Agarabi",
        "supported":  false
    },
    {
        "code":  "age",
        "name":  "Angal",
        "native":  "Angal",
        "supported":  false
    },
    {
        "code":  "agf",
        "name":  "Arguni",
        "native":  "Arguni",
        "supported":  false
    },
    {
        "code":  "agg",
        "name":  "Angor",
        "native":  "Angor",
        "supported":  false
    },
    {
        "code":  "agh",
        "name":  "Ngelima",
        "native":  "Ngelima",
        "supported":  false
    },
    {
        "code":  "agi",
        "name":  "Agariya",
        "native":  "Agariya",
        "supported":  false
    },
    {
        "code":  "agj",
        "name":  "Argobba",
        "native":  "Argobba",
        "supported":  false
    },
    {
        "code":  "agk",
        "name":  "Isarog Agta",
        "native":  "Isarog Agta",
        "supported":  false
    },
    {
        "code":  "agl",
        "name":  "Fembe",
        "native":  "Fembe",
        "supported":  false
    },
    {
        "code":  "agm",
        "name":  "Angaataha",
        "native":  "Angaataha",
        "supported":  false
    },
    {
        "code":  "agn",
        "name":  "Agutaynen",
        "native":  "Agutaynen",
        "supported":  false
    },
    {
        "code":  "ago",
        "name":  "Tainae",
        "native":  "Tainae",
        "supported":  false
    },
    {
        "code":  "agq",
        "name":  "Aghem",
        "native":  "Aghem",
        "supported":  false
    },
    {
        "code":  "agr",
        "name":  "Aguaruna",
        "native":  "Aguaruna",
        "supported":  false
    },
    {
        "code":  "ags",
        "name":  "Esimbi",
        "native":  "Esimbi",
        "supported":  false
    },
    {
        "code":  "agt",
        "name":  "Central Cagayan Agta",
        "native":  "Central Cagayan Agta",
        "supported":  false
    },
    {
        "code":  "agu",
        "name":  "Aguacateco",
        "native":  "Aguacateco",
        "supported":  false
    },
    {
        "code":  "agv",
        "name":  "Remontado Dumagat",
        "native":  "Remontado Dumagat",
        "supported":  false
    },
    {
        "code":  "agw",
        "name":  "Kahua",
        "native":  "Kahua",
        "supported":  false
    },
    {
        "code":  "agx",
        "name":  "Aghul",
        "native":  "Aghul",
        "supported":  false
    },
    {
        "code":  "agy",
        "name":  "Southern Alta",
        "native":  "Southern Alta",
        "supported":  false
    },
    {
        "code":  "agz",
        "name":  "Mt. Iriga Agta",
        "native":  "Mt. Iriga Agta",
        "supported":  false
    },
    {
        "code":  "aha",
        "name":  "Ahanta",
        "native":  "Ahanta",
        "supported":  false
    },
    {
        "code":  "ahb",
        "name":  "Axamb",
        "native":  "Axamb",
        "supported":  false
    },
    {
        "code":  "ahg",
        "name":  "Qimant",
        "native":  "Qimant",
        "supported":  false
    },
    {
        "code":  "ahh",
        "name":  "Aghu",
        "native":  "Aghu",
        "supported":  false
    },
    {
        "code":  "ahi",
        "name":  "Tiagbamrin Aizi",
        "native":  "Tiagbamrin Aizi",
        "supported":  false
    },
    {
        "code":  "ahk",
        "name":  "Akha",
        "native":  "Akha",
        "supported":  false
    },
    {
        "code":  "ahl",
        "name":  "Igo",
        "native":  "Igo",
        "supported":  false
    },
    {
        "code":  "ahm",
        "name":  "Mobumrin Aizi",
        "native":  "Mobumrin Aizi",
        "supported":  false
    },
    {
        "code":  "ahn",
        "name":  "ÃhÃ n",
        "native":  "ÃhÃ n",
        "supported":  false
    },
    {
        "code":  "aho",
        "name":  "Ahom",
        "native":  "Ahom",
        "supported":  false
    },
    {
        "code":  "ahp",
        "name":  "Aproumu Aizi",
        "native":  "Aproumu Aizi",
        "supported":  false
    },
    {
        "code":  "ahr",
        "name":  "Ahirani",
        "native":  "Ahirani",
        "supported":  false
    },
    {
        "code":  "ahs",
        "name":  "Ashe",
        "native":  "Ashe",
        "supported":  false
    },
    {
        "code":  "aht",
        "name":  "Ahtena",
        "native":  "Ahtena",
        "supported":  false
    },
    {
        "code":  "aia",
        "name":  "Arosi",
        "native":  "Arosi",
        "supported":  false
    },
    {
        "code":  "aib",
        "name":  "Ainu (China)",
        "native":  "Ainu (China)",
        "supported":  false
    },
    {
        "code":  "aic",
        "name":  "Ainbai",
        "native":  "Ainbai",
        "supported":  false
    },
    {
        "code":  "aid",
        "name":  "Alngith",
        "native":  "Alngith",
        "supported":  false
    },
    {
        "code":  "aie",
        "name":  "Amara",
        "native":  "Amara",
        "supported":  false
    },
    {
        "code":  "aif",
        "name":  "Agi",
        "native":  "Agi",
        "supported":  false
    },
    {
        "code":  "aig",
        "name":  "Antigua and Barbuda Creole English",
        "native":  "Antigua and Barbuda Creole English",
        "supported":  false
    },
    {
        "code":  "aih",
        "name":  "Ai-Cham",
        "native":  "Ai-Cham",
        "supported":  false
    },
    {
        "code":  "aii",
        "name":  "Assyrian Neo-Aramaic",
        "native":  "Assyrian Neo-Aramaic",
        "supported":  false
    },
    {
        "code":  "aij",
        "name":  "Lishanid Noshan",
        "native":  "Lishanid Noshan",
        "supported":  false
    },
    {
        "code":  "aik",
        "name":  "Ake",
        "native":  "Ake",
        "supported":  false
    },
    {
        "code":  "ail",
        "name":  "Aimele",
        "native":  "Aimele",
        "supported":  false
    },
    {
        "code":  "aim",
        "name":  "Aimol",
        "native":  "Aimol",
        "supported":  false
    },
    {
        "code":  "ain",
        "name":  "Ainu (Japan)",
        "native":  "Ainu (Japan)",
        "supported":  false
    },
    {
        "code":  "aio",
        "name":  "Aiton",
        "native":  "Aiton",
        "supported":  false
    },
    {
        "code":  "aip",
        "name":  "Burumakok",
        "native":  "Burumakok",
        "supported":  false
    },
    {
        "code":  "aiq",
        "name":  "Aimaq",
        "native":  "Aimaq",
        "supported":  false
    },
    {
        "code":  "air",
        "name":  "Airoran",
        "native":  "Airoran",
        "supported":  false
    },
    {
        "code":  "ait",
        "name":  "Arikem",
        "native":  "Arikem",
        "supported":  false
    },
    {
        "code":  "aiw",
        "name":  "Aari",
        "native":  "Aari",
        "supported":  false
    },
    {
        "code":  "aix",
        "name":  "Aighon",
        "native":  "Aighon",
        "supported":  false
    },
    {
        "code":  "aiy",
        "name":  "Ali",
        "native":  "Ali",
        "supported":  false
    },
    {
        "code":  "aja",
        "name":  "Aja (South Sudan)",
        "native":  "Aja (South Sudan)",
        "supported":  false
    },
    {
        "code":  "ajg",
        "name":  "Aja (Benin)",
        "native":  "Aja (Benin)",
        "supported":  false
    },
    {
        "code":  "aji",
        "name":  "AjiÃ«",
        "native":  "AjiÃ«",
        "supported":  false
    },
    {
        "code":  "ajn",
        "name":  "Andajin",
        "native":  "Andajin",
        "supported":  false
    },
    {
        "code":  "ajp",
        "name":  "South Levantine Arabic",
        "native":  "South Levantine Arabic",
        "supported":  false
    },
    {
        "code":  "ajt",
        "name":  "Judeo-Tunisian Arabic",
        "native":  "Judeo-Tunisian Arabic",
        "supported":  false
    },
    {
        "code":  "aju",
        "name":  "Judeo-Moroccan Arabic",
        "native":  "Judeo-Moroccan Arabic",
        "supported":  false
    },
    {
        "code":  "ajw",
        "name":  "Ajawa",
        "native":  "Ajawa",
        "supported":  false
    },
    {
        "code":  "ajz",
        "name":  "Amri Karbi",
        "native":  "Amri Karbi",
        "supported":  false
    },
    {
        "code":  "ak",
        "name":  "Akan",
        "native":  "Akan",
        "supported":  false
    },
    {
        "code":  "akb",
        "name":  "Batak Angkola",
        "native":  "Batak Angkola",
        "supported":  false
    },
    {
        "code":  "akc",
        "name":  "Mpur",
        "native":  "Mpur",
        "supported":  false
    },
    {
        "code":  "akd",
        "name":  "Ukpet-Ehom",
        "native":  "Ukpet-Ehom",
        "supported":  false
    },
    {
        "code":  "ake",
        "name":  "Akawaio",
        "native":  "Akawaio",
        "supported":  false
    },
    {
        "code":  "akf",
        "name":  "Akpa",
        "native":  "Akpa",
        "supported":  false
    },
    {
        "code":  "akg",
        "name":  "Anakalangu",
        "native":  "Anakalangu",
        "supported":  false
    },
    {
        "code":  "akh",
        "name":  "Angal Heneng",
        "native":  "Angal Heneng",
        "supported":  false
    },
    {
        "code":  "aki",
        "name":  "Aiome",
        "native":  "Aiome",
        "supported":  false
    },
    {
        "code":  "akj",
        "name":  "Aka-Jeru",
        "native":  "Aka-Jeru",
        "supported":  false
    },
    {
        "code":  "akk",
        "name":  "Akkadian",
        "native":  "Akkadian",
        "supported":  false
    },
    {
        "code":  "akl",
        "name":  "Aklanon",
        "native":  "Aklanon",
        "supported":  false
    },
    {
        "code":  "akm",
        "name":  "Aka-Bo",
        "native":  "Aka-Bo",
        "supported":  false
    },
    {
        "code":  "ako",
        "name":  "Akurio",
        "native":  "Akurio",
        "supported":  false
    },
    {
        "code":  "akp",
        "name":  "Siwu",
        "native":  "Siwu",
        "supported":  false
    },
    {
        "code":  "akq",
        "name":  "Ak",
        "native":  "Ak",
        "supported":  false
    },
    {
        "code":  "akr",
        "name":  "Araki",
        "native":  "Araki",
        "supported":  false
    },
    {
        "code":  "aks",
        "name":  "Akaselem",
        "native":  "Akaselem",
        "supported":  false
    },
    {
        "code":  "akt",
        "name":  "Akolet",
        "native":  "Akolet",
        "supported":  false
    },
    {
        "code":  "aku",
        "name":  "Akum",
        "native":  "Akum",
        "supported":  false
    },
    {
        "code":  "akv",
        "name":  "Akhvakh",
        "native":  "Akhvakh",
        "supported":  false
    },
    {
        "code":  "akw",
        "name":  "Akwa",
        "native":  "Akwa",
        "supported":  false
    },
    {
        "code":  "akx",
        "name":  "Aka-Kede",
        "native":  "Aka-Kede",
        "supported":  false
    },
    {
        "code":  "aky",
        "name":  "Aka-Kol",
        "native":  "Aka-Kol",
        "supported":  false
    },
    {
        "code":  "akz",
        "name":  "Alabama",
        "native":  "Alabama",
        "supported":  false
    },
    {
        "code":  "ala",
        "name":  "Alago",
        "native":  "Alago",
        "supported":  false
    },
    {
        "code":  "alc",
        "name":  "Qawasqar",
        "native":  "Qawasqar",
        "supported":  false
    },
    {
        "code":  "ald",
        "name":  "Alladian",
        "native":  "Alladian",
        "supported":  false
    },
    {
        "code":  "ale",
        "name":  "Aleut",
        "native":  "Aleut",
        "supported":  false
    },
    {
        "code":  "alf",
        "name":  "Alege",
        "native":  "Alege",
        "supported":  false
    },
    {
        "code":  "alh",
        "name":  "Alawa",
        "native":  "Alawa",
        "supported":  false
    },
    {
        "code":  "ali",
        "name":  "Amaimon",
        "native":  "Amaimon",
        "supported":  false
    },
    {
        "code":  "alj",
        "name":  "Alangan",
        "native":  "Alangan",
        "supported":  false
    },
    {
        "code":  "alk",
        "name":  "Alak",
        "native":  "Alak",
        "supported":  false
    },
    {
        "code":  "all",
        "name":  "Allar",
        "native":  "Allar",
        "supported":  false
    },
    {
        "code":  "alm",
        "name":  "Amblong",
        "native":  "Amblong",
        "supported":  false
    },
    {
        "code":  "aln",
        "name":  "Gheg Albanian",
        "native":  "Gheg Albanian",
        "supported":  false
    },
    {
        "code":  "alo",
        "name":  "Larike-Wakasihu",
        "native":  "Larike-Wakasihu",
        "supported":  false
    },
    {
        "code":  "alp",
        "name":  "Alune",
        "native":  "Alune",
        "supported":  false
    },
    {
        "code":  "alq",
        "name":  "Algonquin",
        "native":  "Algonquin",
        "supported":  false
    },
    {
        "code":  "alr",
        "name":  "Alutor",
        "native":  "Alutor",
        "supported":  false
    },
    {
        "code":  "als",
        "name":  "Tosk Albanian",
        "native":  "Tosk Albanian",
        "supported":  false
    },
    {
        "code":  "alt",
        "name":  "Southern Altai",
        "native":  "Southern Altai",
        "supported":  false
    },
    {
        "code":  "alu",
        "name":  "\u0027Are\u0027are",
        "native":  "\u0027Are\u0027are",
        "supported":  false
    },
    {
        "code":  "alw",
        "name":  "Alaba-Kâabeena",
        "native":  "Alaba-Kâabeena",
        "supported":  false
    },
    {
        "code":  "alx",
        "name":  "Amol",
        "native":  "Amol",
        "supported":  false
    },
    {
        "code":  "aly",
        "name":  "Alyawarr",
        "native":  "Alyawarr",
        "supported":  false
    },
    {
        "code":  "alz",
        "name":  "Alur",
        "native":  "Alur",
        "supported":  false
    },
    {
        "code":  "ama",
        "name":  "AmanayÃ©",
        "native":  "AmanayÃ©",
        "supported":  false
    },
    {
        "code":  "amb",
        "name":  "Ambo",
        "native":  "Ambo",
        "supported":  false
    },
    {
        "code":  "amc",
        "name":  "Amahuaca",
        "native":  "Amahuaca",
        "supported":  false
    },
    {
        "code":  "ame",
        "name":  "Yanesha\u0027",
        "native":  "Yanesha\u0027",
        "supported":  false
    },
    {
        "code":  "amf",
        "name":  "Hamer-Banna",
        "native":  "Hamer-Banna",
        "supported":  false
    },
    {
        "code":  "amg",
        "name":  "Amurdak",
        "native":  "Amurdak",
        "supported":  false
    },
    {
        "code":  "am",
        "name":  "Amharic",
        "native":  "Amharic",
        "supported":  false
    },
    {
        "code":  "ami",
        "name":  "Amis",
        "native":  "Amis",
        "supported":  false
    },
    {
        "code":  "amj",
        "name":  "Amdang",
        "native":  "Amdang",
        "supported":  false
    },
    {
        "code":  "amk",
        "name":  "Ambai",
        "native":  "Ambai",
        "supported":  false
    },
    {
        "code":  "aml",
        "name":  "War-Jaintia",
        "native":  "War-Jaintia",
        "supported":  false
    },
    {
        "code":  "amm",
        "name":  "Ama (Papua New Guinea)",
        "native":  "Ama (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "amn",
        "name":  "Amanab",
        "native":  "Amanab",
        "supported":  false
    },
    {
        "code":  "amo",
        "name":  "Amo",
        "native":  "Amo",
        "supported":  false
    },
    {
        "code":  "amp",
        "name":  "Alamblak",
        "native":  "Alamblak",
        "supported":  false
    },
    {
        "code":  "amq",
        "name":  "Amahai",
        "native":  "Amahai",
        "supported":  false
    },
    {
        "code":  "amr",
        "name":  "Amarakaeri",
        "native":  "Amarakaeri",
        "supported":  false
    },
    {
        "code":  "ams",
        "name":  "Southern Amami-Oshima",
        "native":  "Southern Amami-Oshima",
        "supported":  false
    },
    {
        "code":  "amt",
        "name":  "Amto",
        "native":  "Amto",
        "supported":  false
    },
    {
        "code":  "amu",
        "name":  "Guerrero Amuzgo",
        "native":  "Guerrero Amuzgo",
        "supported":  false
    },
    {
        "code":  "amv",
        "name":  "Ambelau",
        "native":  "Ambelau",
        "supported":  false
    },
    {
        "code":  "amw",
        "name":  "Western Neo-Aramaic",
        "native":  "Western Neo-Aramaic",
        "supported":  false
    },
    {
        "code":  "amx",
        "name":  "Anmatyerre",
        "native":  "Anmatyerre",
        "supported":  false
    },
    {
        "code":  "amy",
        "name":  "Ami",
        "native":  "Ami",
        "supported":  false
    },
    {
        "code":  "amz",
        "name":  "Atampaya",
        "native":  "Atampaya",
        "supported":  false
    },
    {
        "code":  "ana",
        "name":  "Andaqui",
        "native":  "Andaqui",
        "supported":  false
    },
    {
        "code":  "anb",
        "name":  "Andoa",
        "native":  "Andoa",
        "supported":  false
    },
    {
        "code":  "anc",
        "name":  "Ngas",
        "native":  "Ngas",
        "supported":  false
    },
    {
        "code":  "and",
        "name":  "Ansus",
        "native":  "Ansus",
        "supported":  false
    },
    {
        "code":  "ane",
        "name":  "XÃ¢rÃ¢cÃ¹Ã¹",
        "native":  "XÃ¢rÃ¢cÃ¹Ã¹",
        "supported":  false
    },
    {
        "code":  "anf",
        "name":  "Animere",
        "native":  "Animere",
        "supported":  false
    },
    {
        "code":  "ang",
        "name":  "Old English (ca. 450-1100)",
        "native":  "Old English (ca. 450-1100)",
        "supported":  false
    },
    {
        "code":  "anh",
        "name":  "Nend",
        "native":  "Nend",
        "supported":  false
    },
    {
        "code":  "ani",
        "name":  "Andi",
        "native":  "Andi",
        "supported":  false
    },
    {
        "code":  "anj",
        "name":  "Anor",
        "native":  "Anor",
        "supported":  false
    },
    {
        "code":  "ank",
        "name":  "Goemai",
        "native":  "Goemai",
        "supported":  false
    },
    {
        "code":  "anl",
        "name":  "Anu-Hkongso Chin",
        "native":  "Anu-Hkongso Chin",
        "supported":  false
    },
    {
        "code":  "anm",
        "name":  "Anal",
        "native":  "Anal",
        "supported":  false
    },
    {
        "code":  "ann",
        "name":  "Obolo",
        "native":  "Obolo",
        "supported":  false
    },
    {
        "code":  "ano",
        "name":  "Andoque",
        "native":  "Andoque",
        "supported":  false
    },
    {
        "code":  "anp",
        "name":  "Angika",
        "native":  "Angika",
        "supported":  false
    },
    {
        "code":  "anq",
        "name":  "Jarawa (India)",
        "native":  "Jarawa (India)",
        "supported":  false
    },
    {
        "code":  "anr",
        "name":  "Andh",
        "native":  "Andh",
        "supported":  false
    },
    {
        "code":  "ans",
        "name":  "Anserma",
        "native":  "Anserma",
        "supported":  false
    },
    {
        "code":  "ant",
        "name":  "Antakarinya",
        "native":  "Antakarinya",
        "supported":  false
    },
    {
        "code":  "anu",
        "name":  "Anuak",
        "native":  "Anuak",
        "supported":  false
    },
    {
        "code":  "anv",
        "name":  "Denya",
        "native":  "Denya",
        "supported":  false
    },
    {
        "code":  "anw",
        "name":  "Anaang",
        "native":  "Anaang",
        "supported":  false
    },
    {
        "code":  "anx",
        "name":  "Andra-Hus",
        "native":  "Andra-Hus",
        "supported":  false
    },
    {
        "code":  "any",
        "name":  "Anyin",
        "native":  "Anyin",
        "supported":  false
    },
    {
        "code":  "anz",
        "name":  "Anem",
        "native":  "Anem",
        "supported":  false
    },
    {
        "code":  "aoa",
        "name":  "Angolar",
        "native":  "Angolar",
        "supported":  false
    },
    {
        "code":  "aob",
        "name":  "Abom",
        "native":  "Abom",
        "supported":  false
    },
    {
        "code":  "aoc",
        "name":  "Pemon",
        "native":  "Pemon",
        "supported":  false
    },
    {
        "code":  "aod",
        "name":  "Andarum",
        "native":  "Andarum",
        "supported":  false
    },
    {
        "code":  "aoe",
        "name":  "Angal Enen",
        "native":  "Angal Enen",
        "supported":  false
    },
    {
        "code":  "aof",
        "name":  "Bragat",
        "native":  "Bragat",
        "supported":  false
    },
    {
        "code":  "aog",
        "name":  "Angoram",
        "native":  "Angoram",
        "supported":  false
    },
    {
        "code":  "aoi",
        "name":  "Anindilyakwa",
        "native":  "Anindilyakwa",
        "supported":  false
    },
    {
        "code":  "aoj",
        "name":  "Mufian",
        "native":  "Mufian",
        "supported":  false
    },
    {
        "code":  "aok",
        "name":  "ArhÃ¶",
        "native":  "ArhÃ¶",
        "supported":  false
    },
    {
        "code":  "aol",
        "name":  "Alor",
        "native":  "Alor",
        "supported":  false
    },
    {
        "code":  "aom",
        "name":  "Ãmie",
        "native":  "Ãmie",
        "supported":  false
    },
    {
        "code":  "aon",
        "name":  "Bumbita Arapesh",
        "native":  "Bumbita Arapesh",
        "supported":  false
    },
    {
        "code":  "aor",
        "name":  "Aore",
        "native":  "Aore",
        "supported":  false
    },
    {
        "code":  "aos",
        "name":  "Taikat",
        "native":  "Taikat",
        "supported":  false
    },
    {
        "code":  "aot",
        "name":  "Atong (India)",
        "native":  "Atong (India)",
        "supported":  false
    },
    {
        "code":  "aou",
        "name":  "A\u0027ou",
        "native":  "A\u0027ou",
        "supported":  false
    },
    {
        "code":  "aox",
        "name":  "Atorada",
        "native":  "Atorada",
        "supported":  false
    },
    {
        "code":  "aoz",
        "name":  "Uab Meto",
        "native":  "Uab Meto",
        "supported":  false
    },
    {
        "code":  "apb",
        "name":  "Sa\u0027a",
        "native":  "Sa\u0027a",
        "supported":  false
    },
    {
        "code":  "apc",
        "name":  "North Levantine Arabic",
        "native":  "North Levantine Arabic",
        "supported":  false
    },
    {
        "code":  "apd",
        "name":  "Sudanese Arabic",
        "native":  "Sudanese Arabic",
        "supported":  false
    },
    {
        "code":  "ape",
        "name":  "Bukiyip",
        "native":  "Bukiyip",
        "supported":  false
    },
    {
        "code":  "apf",
        "name":  "Pahanan Agta",
        "native":  "Pahanan Agta",
        "supported":  false
    },
    {
        "code":  "apg",
        "name":  "Ampanang",
        "native":  "Ampanang",
        "supported":  false
    },
    {
        "code":  "aph",
        "name":  "Athpariya",
        "native":  "Athpariya",
        "supported":  false
    },
    {
        "code":  "api",
        "name":  "ApiakÃ¡",
        "native":  "ApiakÃ¡",
        "supported":  false
    },
    {
        "code":  "apj",
        "name":  "Jicarilla Apache",
        "native":  "Jicarilla Apache",
        "supported":  false
    },
    {
        "code":  "apk",
        "name":  "Kiowa Apache",
        "native":  "Kiowa Apache",
        "supported":  false
    },
    {
        "code":  "apl",
        "name":  "Lipan Apache",
        "native":  "Lipan Apache",
        "supported":  false
    },
    {
        "code":  "apm",
        "name":  "Mescalero-Chiricahua Apache",
        "native":  "Mescalero-Chiricahua Apache",
        "supported":  false
    },
    {
        "code":  "apn",
        "name":  "ApinayÃ©",
        "native":  "ApinayÃ©",
        "supported":  false
    },
    {
        "code":  "apo",
        "name":  "Ambul",
        "native":  "Ambul",
        "supported":  false
    },
    {
        "code":  "app",
        "name":  "Apma",
        "native":  "Apma",
        "supported":  false
    },
    {
        "code":  "apq",
        "name":  "A-Pucikwar",
        "native":  "A-Pucikwar",
        "supported":  false
    },
    {
        "code":  "apr",
        "name":  "Arop-Lokep",
        "native":  "Arop-Lokep",
        "supported":  false
    },
    {
        "code":  "aps",
        "name":  "Arop-Sissano",
        "native":  "Arop-Sissano",
        "supported":  false
    },
    {
        "code":  "apt",
        "name":  "Apatani",
        "native":  "Apatani",
        "supported":  false
    },
    {
        "code":  "apu",
        "name":  "ApurinÃ£",
        "native":  "ApurinÃ£",
        "supported":  false
    },
    {
        "code":  "apv",
        "name":  "Alapmunte",
        "native":  "Alapmunte",
        "supported":  false
    },
    {
        "code":  "apw",
        "name":  "Western Apache",
        "native":  "Western Apache",
        "supported":  false
    },
    {
        "code":  "apx",
        "name":  "Aputai",
        "native":  "Aputai",
        "supported":  false
    },
    {
        "code":  "apy",
        "name":  "ApalaÃ­",
        "native":  "ApalaÃ­",
        "supported":  false
    },
    {
        "code":  "apz",
        "name":  "Safeyoka",
        "native":  "Safeyoka",
        "supported":  false
    },
    {
        "code":  "aqc",
        "name":  "Archi",
        "native":  "Archi",
        "supported":  false
    },
    {
        "code":  "aqd",
        "name":  "Ampari Dogon",
        "native":  "Ampari Dogon",
        "supported":  false
    },
    {
        "code":  "aqg",
        "name":  "Arigidi",
        "native":  "Arigidi",
        "supported":  false
    },
    {
        "code":  "aqm",
        "name":  "Atohwaim",
        "native":  "Atohwaim",
        "supported":  false
    },
    {
        "code":  "aqn",
        "name":  "Northern Alta",
        "native":  "Northern Alta",
        "supported":  false
    },
    {
        "code":  "aqp",
        "name":  "Atakapa",
        "native":  "Atakapa",
        "supported":  false
    },
    {
        "code":  "aqr",
        "name":  "ArhÃ¢",
        "native":  "ArhÃ¢",
        "supported":  false
    },
    {
        "code":  "aqt",
        "name":  "AngaitÃ©",
        "native":  "AngaitÃ©",
        "supported":  false
    },
    {
        "code":  "aqz",
        "name":  "Akuntsu",
        "native":  "Akuntsu",
        "supported":  false
    },
    {
        "code":  "arb",
        "name":  "Standard Arabic",
        "native":  "Standard Arabic",
        "supported":  false
    },
    {
        "code":  "arc",
        "name":  "Official Aramaic (700-300 BCE)",
        "native":  "Official Aramaic (700-300 BCE)",
        "supported":  false
    },
    {
        "code":  "ard",
        "name":  "Arabana",
        "native":  "Arabana",
        "supported":  false
    },
    {
        "code":  "are",
        "name":  "Western Arrarnta",
        "native":  "Western Arrarnta",
        "supported":  false
    },
    {
        "code":  "an",
        "name":  "Aragonese",
        "native":  "Aragonese",
        "supported":  false
    },
    {
        "code":  "arh",
        "name":  "Arhuaco",
        "native":  "Arhuaco",
        "supported":  false
    },
    {
        "code":  "ari",
        "name":  "Arikara",
        "native":  "Arikara",
        "supported":  false
    },
    {
        "code":  "arj",
        "name":  "Arapaso",
        "native":  "Arapaso",
        "supported":  false
    },
    {
        "code":  "ark",
        "name":  "ArikapÃº",
        "native":  "ArikapÃº",
        "supported":  false
    },
    {
        "code":  "arl",
        "name":  "Arabela",
        "native":  "Arabela",
        "supported":  false
    },
    {
        "code":  "arn",
        "name":  "Mapudungun",
        "native":  "Mapudungun",
        "supported":  false
    },
    {
        "code":  "aro",
        "name":  "Araona",
        "native":  "Araona",
        "supported":  false
    },
    {
        "code":  "arp",
        "name":  "Arapaho",
        "native":  "Arapaho",
        "supported":  false
    },
    {
        "code":  "arq",
        "name":  "Algerian Arabic",
        "native":  "Algerian Arabic",
        "supported":  false
    },
    {
        "code":  "arr",
        "name":  "Karo (Brazil)",
        "native":  "Karo (Brazil)",
        "supported":  false
    },
    {
        "code":  "ars",
        "name":  "Najdi Arabic",
        "native":  "Najdi Arabic",
        "supported":  false
    },
    {
        "code":  "aru",
        "name":  "AruÃ¡ (Amazonas State)",
        "native":  "AruÃ¡ (Amazonas State)",
        "supported":  false
    },
    {
        "code":  "arv",
        "name":  "Arbore",
        "native":  "Arbore",
        "supported":  false
    },
    {
        "code":  "arw",
        "name":  "Arawak",
        "native":  "Arawak",
        "supported":  false
    },
    {
        "code":  "arx",
        "name":  "AruÃ¡ (Rodonia State)",
        "native":  "AruÃ¡ (Rodonia State)",
        "supported":  false
    },
    {
        "code":  "ary",
        "name":  "Moroccan Arabic",
        "native":  "Moroccan Arabic",
        "supported":  false
    },
    {
        "code":  "arz",
        "name":  "Egyptian Arabic",
        "native":  "Egyptian Arabic",
        "supported":  false
    },
    {
        "code":  "asa",
        "name":  "Asu (Tanzania)",
        "native":  "Asu (Tanzania)",
        "supported":  false
    },
    {
        "code":  "asb",
        "name":  "Assiniboine",
        "native":  "Assiniboine",
        "supported":  false
    },
    {
        "code":  "asc",
        "name":  "Casuarina Coast Asmat",
        "native":  "Casuarina Coast Asmat",
        "supported":  false
    },
    {
        "code":  "ase",
        "name":  "American Sign Language",
        "native":  "American Sign Language",
        "supported":  false
    },
    {
        "code":  "asf",
        "name":  "Auslan",
        "native":  "Auslan",
        "supported":  false
    },
    {
        "code":  "asg",
        "name":  "Cishingini",
        "native":  "Cishingini",
        "supported":  false
    },
    {
        "code":  "ash",
        "name":  "Abishira",
        "native":  "Abishira",
        "supported":  false
    },
    {
        "code":  "asi",
        "name":  "Buruwai",
        "native":  "Buruwai",
        "supported":  false
    },
    {
        "code":  "asj",
        "name":  "Sari",
        "native":  "Sari",
        "supported":  false
    },
    {
        "code":  "ask",
        "name":  "Ashkun",
        "native":  "Ashkun",
        "supported":  false
    },
    {
        "code":  "asl",
        "name":  "Asilulu",
        "native":  "Asilulu",
        "supported":  false
    },
    {
        "code":  "as",
        "name":  "Assamese",
        "native":  "Assamese",
        "supported":  false
    },
    {
        "code":  "asn",
        "name":  "XingÃº AsurinÃ­",
        "native":  "XingÃº AsurinÃ­",
        "supported":  false
    },
    {
        "code":  "aso",
        "name":  "Dano",
        "native":  "Dano",
        "supported":  false
    },
    {
        "code":  "asp",
        "name":  "Algerian Sign Language",
        "native":  "Algerian Sign Language",
        "supported":  false
    },
    {
        "code":  "asq",
        "name":  "Austrian Sign Language",
        "native":  "Austrian Sign Language",
        "supported":  false
    },
    {
        "code":  "asr",
        "name":  "Asuri",
        "native":  "Asuri",
        "supported":  false
    },
    {
        "code":  "ass",
        "name":  "Ipulo",
        "native":  "Ipulo",
        "supported":  false
    },
    {
        "code":  "ast",
        "name":  "Asturian",
        "native":  "Asturian",
        "supported":  false
    },
    {
        "code":  "asu",
        "name":  "Tocantins Asurini",
        "native":  "Tocantins Asurini",
        "supported":  false
    },
    {
        "code":  "asv",
        "name":  "Asoa",
        "native":  "Asoa",
        "supported":  false
    },
    {
        "code":  "asw",
        "name":  "Australian Aborigines Sign Language",
        "native":  "Australian Aborigines Sign Language",
        "supported":  false
    },
    {
        "code":  "asx",
        "name":  "Muratayak",
        "native":  "Muratayak",
        "supported":  false
    },
    {
        "code":  "asy",
        "name":  "Yaosakor Asmat",
        "native":  "Yaosakor Asmat",
        "supported":  false
    },
    {
        "code":  "asz",
        "name":  "As",
        "native":  "As",
        "supported":  false
    },
    {
        "code":  "ata",
        "name":  "Pele-Ata",
        "native":  "Pele-Ata",
        "supported":  false
    },
    {
        "code":  "atb",
        "name":  "Zaiwa",
        "native":  "Zaiwa",
        "supported":  false
    },
    {
        "code":  "atc",
        "name":  "Atsahuaca",
        "native":  "Atsahuaca",
        "supported":  false
    },
    {
        "code":  "atd",
        "name":  "Ata Manobo",
        "native":  "Ata Manobo",
        "supported":  false
    },
    {
        "code":  "ate",
        "name":  "Atemble",
        "native":  "Atemble",
        "supported":  false
    },
    {
        "code":  "atg",
        "name":  "Ivbie North-Okpela-Arhe",
        "native":  "Ivbie North-Okpela-Arhe",
        "supported":  false
    },
    {
        "code":  "ati",
        "name":  "AttiÃ©",
        "native":  "AttiÃ©",
        "supported":  false
    },
    {
        "code":  "atj",
        "name":  "Atikamekw",
        "native":  "Atikamekw",
        "supported":  false
    },
    {
        "code":  "atk",
        "name":  "Ati",
        "native":  "Ati",
        "supported":  false
    },
    {
        "code":  "atl",
        "name":  "Mt. Iraya Agta",
        "native":  "Mt. Iraya Agta",
        "supported":  false
    },
    {
        "code":  "atm",
        "name":  "Ata",
        "native":  "Ata",
        "supported":  false
    },
    {
        "code":  "atn",
        "name":  "Ashtiani",
        "native":  "Ashtiani",
        "supported":  false
    },
    {
        "code":  "ato",
        "name":  "Atong (Cameroon)",
        "native":  "Atong (Cameroon)",
        "supported":  false
    },
    {
        "code":  "atp",
        "name":  "Pudtol Atta",
        "native":  "Pudtol Atta",
        "supported":  false
    },
    {
        "code":  "atq",
        "name":  "Aralle-Tabulahan",
        "native":  "Aralle-Tabulahan",
        "supported":  false
    },
    {
        "code":  "atr",
        "name":  "Waimiri-Atroari",
        "native":  "Waimiri-Atroari",
        "supported":  false
    },
    {
        "code":  "ats",
        "name":  "Gros Ventre",
        "native":  "Gros Ventre",
        "supported":  false
    },
    {
        "code":  "att",
        "name":  "Pamplona Atta",
        "native":  "Pamplona Atta",
        "supported":  false
    },
    {
        "code":  "atu",
        "name":  "Reel",
        "native":  "Reel",
        "supported":  false
    },
    {
        "code":  "atv",
        "name":  "Northern Altai",
        "native":  "Northern Altai",
        "supported":  false
    },
    {
        "code":  "atw",
        "name":  "Atsugewi",
        "native":  "Atsugewi",
        "supported":  false
    },
    {
        "code":  "atx",
        "name":  "Arutani",
        "native":  "Arutani",
        "supported":  false
    },
    {
        "code":  "aty",
        "name":  "Aneityum",
        "native":  "Aneityum",
        "supported":  false
    },
    {
        "code":  "atz",
        "name":  "Arta",
        "native":  "Arta",
        "supported":  false
    },
    {
        "code":  "aua",
        "name":  "Asumboa",
        "native":  "Asumboa",
        "supported":  false
    },
    {
        "code":  "aub",
        "name":  "Alugu",
        "native":  "Alugu",
        "supported":  false
    },
    {
        "code":  "auc",
        "name":  "Waorani",
        "native":  "Waorani",
        "supported":  false
    },
    {
        "code":  "aud",
        "name":  "Anuta",
        "native":  "Anuta",
        "supported":  false
    },
    {
        "code":  "aug",
        "name":  "Aguna",
        "native":  "Aguna",
        "supported":  false
    },
    {
        "code":  "auh",
        "name":  "Aushi",
        "native":  "Aushi",
        "supported":  false
    },
    {
        "code":  "aui",
        "name":  "Anuki",
        "native":  "Anuki",
        "supported":  false
    },
    {
        "code":  "auj",
        "name":  "Awjilah",
        "native":  "Awjilah",
        "supported":  false
    },
    {
        "code":  "auk",
        "name":  "Heyo",
        "native":  "Heyo",
        "supported":  false
    },
    {
        "code":  "aul",
        "name":  "Aulua",
        "native":  "Aulua",
        "supported":  false
    },
    {
        "code":  "aum",
        "name":  "Asu (Nigeria)",
        "native":  "Asu (Nigeria)",
        "supported":  false
    },
    {
        "code":  "aun",
        "name":  "Molmo One",
        "native":  "Molmo One",
        "supported":  false
    },
    {
        "code":  "auo",
        "name":  "Auyokawa",
        "native":  "Auyokawa",
        "supported":  false
    },
    {
        "code":  "aup",
        "name":  "Makayam",
        "native":  "Makayam",
        "supported":  false
    },
    {
        "code":  "auq",
        "name":  "Anus",
        "native":  "Anus",
        "supported":  false
    },
    {
        "code":  "aur",
        "name":  "Aruek",
        "native":  "Aruek",
        "supported":  false
    },
    {
        "code":  "aut",
        "name":  "Austral",
        "native":  "Austral",
        "supported":  false
    },
    {
        "code":  "auu",
        "name":  "Auye",
        "native":  "Auye",
        "supported":  false
    },
    {
        "code":  "auw",
        "name":  "Awyi",
        "native":  "Awyi",
        "supported":  false
    },
    {
        "code":  "aux",
        "name":  "AurÃ¡",
        "native":  "AurÃ¡",
        "supported":  false
    },
    {
        "code":  "auy",
        "name":  "Awiyaana",
        "native":  "Awiyaana",
        "supported":  false
    },
    {
        "code":  "auz",
        "name":  "Uzbeki Arabic",
        "native":  "Uzbeki Arabic",
        "supported":  false
    },
    {
        "code":  "av",
        "name":  "Avaric",
        "native":  "Avaric",
        "supported":  false
    },
    {
        "code":  "avb",
        "name":  "Avau",
        "native":  "Avau",
        "supported":  false
    },
    {
        "code":  "avd",
        "name":  "Alviri-Vidari",
        "native":  "Alviri-Vidari",
        "supported":  false
    },
    {
        "code":  "ae",
        "name":  "Avestan",
        "native":  "Avestan",
        "supported":  false
    },
    {
        "code":  "avi",
        "name":  "Avikam",
        "native":  "Avikam",
        "supported":  false
    },
    {
        "code":  "avk",
        "name":  "Kotava",
        "native":  "Kotava",
        "supported":  false
    },
    {
        "code":  "avl",
        "name":  "Eastern Egyptian Bedawi Arabic",
        "native":  "Eastern Egyptian Bedawi Arabic",
        "supported":  false
    },
    {
        "code":  "avm",
        "name":  "Angkamuthi",
        "native":  "Angkamuthi",
        "supported":  false
    },
    {
        "code":  "avn",
        "name":  "Avatime",
        "native":  "Avatime",
        "supported":  false
    },
    {
        "code":  "avo",
        "name":  "Agavotaguerra",
        "native":  "Agavotaguerra",
        "supported":  false
    },
    {
        "code":  "avs",
        "name":  "Aushiri",
        "native":  "Aushiri",
        "supported":  false
    },
    {
        "code":  "avt",
        "name":  "Au",
        "native":  "Au",
        "supported":  false
    },
    {
        "code":  "avu",
        "name":  "Avokaya",
        "native":  "Avokaya",
        "supported":  false
    },
    {
        "code":  "avv",
        "name":  "AvÃ¡-Canoeiro",
        "native":  "AvÃ¡-Canoeiro",
        "supported":  false
    },
    {
        "code":  "awa",
        "name":  "Awadhi",
        "native":  "Awadhi",
        "supported":  false
    },
    {
        "code":  "awb",
        "name":  "Awa (Papua New Guinea)",
        "native":  "Awa (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "awc",
        "name":  "Cicipu",
        "native":  "Cicipu",
        "supported":  false
    },
    {
        "code":  "awe",
        "name":  "AwetÃ­",
        "native":  "AwetÃ­",
        "supported":  false
    },
    {
        "code":  "awg",
        "name":  "Anguthimri",
        "native":  "Anguthimri",
        "supported":  false
    },
    {
        "code":  "awh",
        "name":  "Awbono",
        "native":  "Awbono",
        "supported":  false
    },
    {
        "code":  "awi",
        "name":  "Aekyom",
        "native":  "Aekyom",
        "supported":  false
    },
    {
        "code":  "awk",
        "name":  "Awabakal",
        "native":  "Awabakal",
        "supported":  false
    },
    {
        "code":  "awm",
        "name":  "Arawum",
        "native":  "Arawum",
        "supported":  false
    },
    {
        "code":  "awn",
        "name":  "Awngi",
        "native":  "Awngi",
        "supported":  false
    },
    {
        "code":  "awo",
        "name":  "Awak",
        "native":  "Awak",
        "supported":  false
    },
    {
        "code":  "awr",
        "name":  "Awera",
        "native":  "Awera",
        "supported":  false
    },
    {
        "code":  "aws",
        "name":  "South Awyu",
        "native":  "South Awyu",
        "supported":  false
    },
    {
        "code":  "awt",
        "name":  "ArawetÃ©",
        "native":  "ArawetÃ©",
        "supported":  false
    },
    {
        "code":  "awu",
        "name":  "Central Awyu",
        "native":  "Central Awyu",
        "supported":  false
    },
    {
        "code":  "awv",
        "name":  "Jair Awyu",
        "native":  "Jair Awyu",
        "supported":  false
    },
    {
        "code":  "aww",
        "name":  "Awun",
        "native":  "Awun",
        "supported":  false
    },
    {
        "code":  "awx",
        "name":  "Awara",
        "native":  "Awara",
        "supported":  false
    },
    {
        "code":  "awy",
        "name":  "Edera Awyu",
        "native":  "Edera Awyu",
        "supported":  false
    },
    {
        "code":  "axb",
        "name":  "Abipon",
        "native":  "Abipon",
        "supported":  false
    },
    {
        "code":  "axe",
        "name":  "Ayerrerenge",
        "native":  "Ayerrerenge",
        "supported":  false
    },
    {
        "code":  "axg",
        "name":  "Mato Grosso ArÃ¡ra",
        "native":  "Mato Grosso ArÃ¡ra",
        "supported":  false
    },
    {
        "code":  "axk",
        "name":  "Yaka (Central African Republic)",
        "native":  "Yaka (Central African Republic)",
        "supported":  false
    },
    {
        "code":  "axl",
        "name":  "Lower Southern Aranda",
        "native":  "Lower Southern Aranda",
        "supported":  false
    },
    {
        "code":  "axm",
        "name":  "Middle Armenian",
        "native":  "Middle Armenian",
        "supported":  false
    },
    {
        "code":  "axx",
        "name":  "XÃ¢rÃ¢gurÃ¨",
        "native":  "XÃ¢rÃ¢gurÃ¨",
        "supported":  false
    },
    {
        "code":  "aya",
        "name":  "Awar",
        "native":  "Awar",
        "supported":  false
    },
    {
        "code":  "ayb",
        "name":  "Ayizo Gbe",
        "native":  "Ayizo Gbe",
        "supported":  false
    },
    {
        "code":  "ayc",
        "name":  "Southern Aymara",
        "native":  "Southern Aymara",
        "supported":  false
    },
    {
        "code":  "ayd",
        "name":  "Ayabadhu",
        "native":  "Ayabadhu",
        "supported":  false
    },
    {
        "code":  "aye",
        "name":  "Ayere",
        "native":  "Ayere",
        "supported":  false
    },
    {
        "code":  "ayg",
        "name":  "Ginyanga",
        "native":  "Ginyanga",
        "supported":  false
    },
    {
        "code":  "ayh",
        "name":  "Hadrami Arabic",
        "native":  "Hadrami Arabic",
        "supported":  false
    },
    {
        "code":  "ayi",
        "name":  "Leyigha",
        "native":  "Leyigha",
        "supported":  false
    },
    {
        "code":  "ayk",
        "name":  "Akuku",
        "native":  "Akuku",
        "supported":  false
    },
    {
        "code":  "ayl",
        "name":  "Libyan Arabic",
        "native":  "Libyan Arabic",
        "supported":  false
    },
    {
        "code":  "ay",
        "name":  "Aymara",
        "native":  "Aymara",
        "supported":  false
    },
    {
        "code":  "ayn",
        "name":  "Sanaani Arabic",
        "native":  "Sanaani Arabic",
        "supported":  false
    },
    {
        "code":  "ayo",
        "name":  "Ayoreo",
        "native":  "Ayoreo",
        "supported":  false
    },
    {
        "code":  "ayp",
        "name":  "North Mesopotamian Arabic",
        "native":  "North Mesopotamian Arabic",
        "supported":  false
    },
    {
        "code":  "ayq",
        "name":  "Ayi (Papua New Guinea)",
        "native":  "Ayi (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "ayr",
        "name":  "Central Aymara",
        "native":  "Central Aymara",
        "supported":  false
    },
    {
        "code":  "ays",
        "name":  "Sorsogon Ayta",
        "native":  "Sorsogon Ayta",
        "supported":  false
    },
    {
        "code":  "ayt",
        "name":  "Magbukun Ayta",
        "native":  "Magbukun Ayta",
        "supported":  false
    },
    {
        "code":  "ayu",
        "name":  "Ayu",
        "native":  "Ayu",
        "supported":  false
    },
    {
        "code":  "ayz",
        "name":  "Mai Brat",
        "native":  "Mai Brat",
        "supported":  false
    },
    {
        "code":  "aza",
        "name":  "Azha",
        "native":  "Azha",
        "supported":  false
    },
    {
        "code":  "azb",
        "name":  "South Azerbaijani",
        "native":  "South Azerbaijani",
        "supported":  false
    },
    {
        "code":  "azd",
        "name":  "Eastern Durango Nahuatl",
        "native":  "Eastern Durango Nahuatl",
        "supported":  false
    },
    {
        "code":  "az",
        "name":  "Azerbaijani",
        "native":  "Azerbaijani",
        "supported":  false
    },
    {
        "code":  "azg",
        "name":  "San Pedro Amuzgos Amuzgo",
        "native":  "San Pedro Amuzgos Amuzgo",
        "supported":  false
    },
    {
        "code":  "azj",
        "name":  "North Azerbaijani",
        "native":  "North Azerbaijani",
        "supported":  false
    },
    {
        "code":  "azm",
        "name":  "Ipalapa Amuzgo",
        "native":  "Ipalapa Amuzgo",
        "supported":  false
    },
    {
        "code":  "azn",
        "name":  "Western Durango Nahuatl",
        "native":  "Western Durango Nahuatl",
        "supported":  false
    },
    {
        "code":  "azo",
        "name":  "Awing",
        "native":  "Awing",
        "supported":  false
    },
    {
        "code":  "azt",
        "name":  "Faire Atta",
        "native":  "Faire Atta",
        "supported":  false
    },
    {
        "code":  "azz",
        "name":  "Highland Puebla Nahuatl",
        "native":  "Highland Puebla Nahuatl",
        "supported":  false
    },
    {
        "code":  "baa",
        "name":  "Babatana",
        "native":  "Babatana",
        "supported":  false
    },
    {
        "code":  "bab",
        "name":  "Bainouk-GunyuÃ±o",
        "native":  "Bainouk-GunyuÃ±o",
        "supported":  false
    },
    {
        "code":  "bac",
        "name":  "Badui",
        "native":  "Badui",
        "supported":  false
    },
    {
        "code":  "bae",
        "name":  "BarÃ©",
        "native":  "BarÃ©",
        "supported":  false
    },
    {
        "code":  "baf",
        "name":  "Nubaca",
        "native":  "Nubaca",
        "supported":  false
    },
    {
        "code":  "bag",
        "name":  "Tuki",
        "native":  "Tuki",
        "supported":  false
    },
    {
        "code":  "bah",
        "name":  "Bahamas Creole English",
        "native":  "Bahamas Creole English",
        "supported":  false
    },
    {
        "code":  "baj",
        "name":  "Barakai",
        "native":  "Barakai",
        "supported":  false
    },
    {
        "code":  "ba",
        "name":  "Bashkir",
        "native":  "Bashkir",
        "supported":  false
    },
    {
        "code":  "bal",
        "name":  "Baluchi",
        "native":  "Baluchi",
        "supported":  false
    },
    {
        "code":  "bm",
        "name":  "Bambara",
        "native":  "Bambara",
        "supported":  false
    },
    {
        "code":  "ban",
        "name":  "Balinese",
        "native":  "Balinese",
        "supported":  false
    },
    {
        "code":  "bao",
        "name":  "Waimaha",
        "native":  "Waimaha",
        "supported":  false
    },
    {
        "code":  "bap",
        "name":  "Bantawa",
        "native":  "Bantawa",
        "supported":  false
    },
    {
        "code":  "bar",
        "name":  "Bavarian",
        "native":  "Bavarian",
        "supported":  false
    },
    {
        "code":  "bas",
        "name":  "Basa (Cameroon)",
        "native":  "Basa (Cameroon)",
        "supported":  false
    },
    {
        "code":  "bau",
        "name":  "Bada (Nigeria)",
        "native":  "Bada (Nigeria)",
        "supported":  false
    },
    {
        "code":  "bav",
        "name":  "Vengo",
        "native":  "Vengo",
        "supported":  false
    },
    {
        "code":  "baw",
        "name":  "Bambili-Bambui",
        "native":  "Bambili-Bambui",
        "supported":  false
    },
    {
        "code":  "bax",
        "name":  "Bamun",
        "native":  "Bamun",
        "supported":  false
    },
    {
        "code":  "bay",
        "name":  "Batuley",
        "native":  "Batuley",
        "supported":  false
    },
    {
        "code":  "bba",
        "name":  "Baatonum",
        "native":  "Baatonum",
        "supported":  false
    },
    {
        "code":  "bbb",
        "name":  "Barai",
        "native":  "Barai",
        "supported":  false
    },
    {
        "code":  "bbc",
        "name":  "Batak Toba",
        "native":  "Batak Toba",
        "supported":  false
    },
    {
        "code":  "bbd",
        "name":  "Bau",
        "native":  "Bau",
        "supported":  false
    },
    {
        "code":  "bbe",
        "name":  "Bangba",
        "native":  "Bangba",
        "supported":  false
    },
    {
        "code":  "bbf",
        "name":  "Baibai",
        "native":  "Baibai",
        "supported":  false
    },
    {
        "code":  "bbg",
        "name":  "Barama",
        "native":  "Barama",
        "supported":  false
    },
    {
        "code":  "bbh",
        "name":  "Bugan",
        "native":  "Bugan",
        "supported":  false
    },
    {
        "code":  "bbi",
        "name":  "Barombi",
        "native":  "Barombi",
        "supported":  false
    },
    {
        "code":  "bbj",
        "name":  "GhomÃ¡lÃ¡\u0027",
        "native":  "GhomÃ¡lÃ¡\u0027",
        "supported":  false
    },
    {
        "code":  "bbk",
        "name":  "Babanki",
        "native":  "Babanki",
        "supported":  false
    },
    {
        "code":  "bbl",
        "name":  "Bats",
        "native":  "Bats",
        "supported":  false
    },
    {
        "code":  "bbm",
        "name":  "Babango",
        "native":  "Babango",
        "supported":  false
    },
    {
        "code":  "bbn",
        "name":  "Uneapa",
        "native":  "Uneapa",
        "supported":  false
    },
    {
        "code":  "bbo",
        "name":  "Northern Bobo MadarÃ©",
        "native":  "Northern Bobo MadarÃ©",
        "supported":  false
    },
    {
        "code":  "bbp",
        "name":  "West Central Banda",
        "native":  "West Central Banda",
        "supported":  false
    },
    {
        "code":  "bbq",
        "name":  "Bamali",
        "native":  "Bamali",
        "supported":  false
    },
    {
        "code":  "bbr",
        "name":  "Girawa",
        "native":  "Girawa",
        "supported":  false
    },
    {
        "code":  "bbs",
        "name":  "Bakpinka",
        "native":  "Bakpinka",
        "supported":  false
    },
    {
        "code":  "bbt",
        "name":  "Mburku",
        "native":  "Mburku",
        "supported":  false
    },
    {
        "code":  "bbu",
        "name":  "Kulung (Nigeria)",
        "native":  "Kulung (Nigeria)",
        "supported":  false
    },
    {
        "code":  "bbv",
        "name":  "Karnai",
        "native":  "Karnai",
        "supported":  false
    },
    {
        "code":  "bbw",
        "name":  "Baba",
        "native":  "Baba",
        "supported":  false
    },
    {
        "code":  "bbx",
        "name":  "Bubia",
        "native":  "Bubia",
        "supported":  false
    },
    {
        "code":  "bby",
        "name":  "Befang",
        "native":  "Befang",
        "supported":  false
    },
    {
        "code":  "bca",
        "name":  "Central Bai",
        "native":  "Central Bai",
        "supported":  false
    },
    {
        "code":  "bcb",
        "name":  "Bainouk-Samik",
        "native":  "Bainouk-Samik",
        "supported":  false
    },
    {
        "code":  "bcc",
        "name":  "Southern Balochi",
        "native":  "Southern Balochi",
        "supported":  false
    },
    {
        "code":  "bcd",
        "name":  "North Babar",
        "native":  "North Babar",
        "supported":  false
    },
    {
        "code":  "bce",
        "name":  "Bamenyam",
        "native":  "Bamenyam",
        "supported":  false
    },
    {
        "code":  "bcf",
        "name":  "Bamu",
        "native":  "Bamu",
        "supported":  false
    },
    {
        "code":  "bcg",
        "name":  "Baga Pokur",
        "native":  "Baga Pokur",
        "supported":  false
    },
    {
        "code":  "bch",
        "name":  "Bariai",
        "native":  "Bariai",
        "supported":  false
    },
    {
        "code":  "bci",
        "name":  "BaoulÃ©",
        "native":  "BaoulÃ©",
        "supported":  false
    },
    {
        "code":  "bcj",
        "name":  "Bardi",
        "native":  "Bardi",
        "supported":  false
    },
    {
        "code":  "bck",
        "name":  "Bunuba",
        "native":  "Bunuba",
        "supported":  false
    },
    {
        "code":  "bcl",
        "name":  "Central Bikol",
        "native":  "Central Bikol",
        "supported":  false
    },
    {
        "code":  "bcm",
        "name":  "Bannoni",
        "native":  "Bannoni",
        "supported":  false
    },
    {
        "code":  "bcn",
        "name":  "Bali (Nigeria)",
        "native":  "Bali (Nigeria)",
        "supported":  false
    },
    {
        "code":  "bco",
        "name":  "Kaluli",
        "native":  "Kaluli",
        "supported":  false
    },
    {
        "code":  "bcp",
        "name":  "Bali (Democratic Republic of Congo)",
        "native":  "Bali (Democratic Republic of Congo)",
        "supported":  false
    },
    {
        "code":  "bcq",
        "name":  "Bench",
        "native":  "Bench",
        "supported":  false
    },
    {
        "code":  "bcr",
        "name":  "Babine",
        "native":  "Babine",
        "supported":  false
    },
    {
        "code":  "bcs",
        "name":  "Kohumono",
        "native":  "Kohumono",
        "supported":  false
    },
    {
        "code":  "bct",
        "name":  "Bendi",
        "native":  "Bendi",
        "supported":  false
    },
    {
        "code":  "bcu",
        "name":  "Awad Bing",
        "native":  "Awad Bing",
        "supported":  false
    },
    {
        "code":  "bcv",
        "name":  "Shoo-Minda-Nye",
        "native":  "Shoo-Minda-Nye",
        "supported":  false
    },
    {
        "code":  "bcw",
        "name":  "Bana",
        "native":  "Bana",
        "supported":  false
    },
    {
        "code":  "bcy",
        "name":  "Bacama",
        "native":  "Bacama",
        "supported":  false
    },
    {
        "code":  "bcz",
        "name":  "Bainouk-Gunyaamolo",
        "native":  "Bainouk-Gunyaamolo",
        "supported":  false
    },
    {
        "code":  "bda",
        "name":  "Bayot",
        "native":  "Bayot",
        "supported":  false
    },
    {
        "code":  "bdb",
        "name":  "Basap",
        "native":  "Basap",
        "supported":  false
    },
    {
        "code":  "bdc",
        "name":  "EmberÃ¡-BaudÃ³",
        "native":  "EmberÃ¡-BaudÃ³",
        "supported":  false
    },
    {
        "code":  "bdd",
        "name":  "Bunama",
        "native":  "Bunama",
        "supported":  false
    },
    {
        "code":  "bde",
        "name":  "Bade",
        "native":  "Bade",
        "supported":  false
    },
    {
        "code":  "bdf",
        "name":  "Biage",
        "native":  "Biage",
        "supported":  false
    },
    {
        "code":  "bdg",
        "name":  "Bonggi",
        "native":  "Bonggi",
        "supported":  false
    },
    {
        "code":  "bdh",
        "name":  "Baka (South Sudan)",
        "native":  "Baka (South Sudan)",
        "supported":  false
    },
    {
        "code":  "bdi",
        "name":  "Burun",
        "native":  "Burun",
        "supported":  false
    },
    {
        "code":  "bdj",
        "name":  "Bai (South Sudan)",
        "native":  "Bai (South Sudan)",
        "supported":  false
    },
    {
        "code":  "bdk",
        "name":  "Budukh",
        "native":  "Budukh",
        "supported":  false
    },
    {
        "code":  "bdl",
        "name":  "Indonesian Bajau",
        "native":  "Indonesian Bajau",
        "supported":  false
    },
    {
        "code":  "bdm",
        "name":  "Buduma",
        "native":  "Buduma",
        "supported":  false
    },
    {
        "code":  "bdn",
        "name":  "Baldemu",
        "native":  "Baldemu",
        "supported":  false
    },
    {
        "code":  "bdo",
        "name":  "Morom",
        "native":  "Morom",
        "supported":  false
    },
    {
        "code":  "bdp",
        "name":  "Bende",
        "native":  "Bende",
        "supported":  false
    },
    {
        "code":  "bdq",
        "name":  "Bahnar",
        "native":  "Bahnar",
        "supported":  false
    },
    {
        "code":  "bdr",
        "name":  "West Coast Bajau",
        "native":  "West Coast Bajau",
        "supported":  false
    },
    {
        "code":  "bds",
        "name":  "Burunge",
        "native":  "Burunge",
        "supported":  false
    },
    {
        "code":  "bdt",
        "name":  "Bokoto",
        "native":  "Bokoto",
        "supported":  false
    },
    {
        "code":  "bdu",
        "name":  "Oroko",
        "native":  "Oroko",
        "supported":  false
    },
    {
        "code":  "bdv",
        "name":  "Bodo Parja",
        "native":  "Bodo Parja",
        "supported":  false
    },
    {
        "code":  "bdw",
        "name":  "Baham",
        "native":  "Baham",
        "supported":  false
    },
    {
        "code":  "bdx",
        "name":  "Budong-Budong",
        "native":  "Budong-Budong",
        "supported":  false
    },
    {
        "code":  "bdy",
        "name":  "Bandjalang",
        "native":  "Bandjalang",
        "supported":  false
    },
    {
        "code":  "bdz",
        "name":  "Badeshi",
        "native":  "Badeshi",
        "supported":  false
    },
    {
        "code":  "bea",
        "name":  "Beaver",
        "native":  "Beaver",
        "supported":  false
    },
    {
        "code":  "beb",
        "name":  "Bebele",
        "native":  "Bebele",
        "supported":  false
    },
    {
        "code":  "bec",
        "name":  "Iceve-Maci",
        "native":  "Iceve-Maci",
        "supported":  false
    },
    {
        "code":  "bed",
        "name":  "Bedoanas",
        "native":  "Bedoanas",
        "supported":  false
    },
    {
        "code":  "bee",
        "name":  "Byangsi",
        "native":  "Byangsi",
        "supported":  false
    },
    {
        "code":  "bef",
        "name":  "Benabena",
        "native":  "Benabena",
        "supported":  false
    },
    {
        "code":  "beg",
        "name":  "Belait",
        "native":  "Belait",
        "supported":  false
    },
    {
        "code":  "beh",
        "name":  "Biali",
        "native":  "Biali",
        "supported":  false
    },
    {
        "code":  "bei",
        "name":  "Bekati\u0027",
        "native":  "Bekati\u0027",
        "supported":  false
    },
    {
        "code":  "bej",
        "name":  "Beja",
        "native":  "Beja",
        "supported":  false
    },
    {
        "code":  "bek",
        "name":  "Bebeli",
        "native":  "Bebeli",
        "supported":  false
    },
    {
        "code":  "be",
        "name":  "Belarusian",
        "native":  "Belarusian",
        "supported":  false
    },
    {
        "code":  "bem",
        "name":  "Bemba (Zambia)",
        "native":  "Bemba (Zambia)",
        "supported":  false
    },
    {
        "code":  "bn",
        "name":  "Bengali",
        "native":  "Bengali",
        "supported":  false
    },
    {
        "code":  "beo",
        "name":  "Beami",
        "native":  "Beami",
        "supported":  false
    },
    {
        "code":  "bep",
        "name":  "Besoa",
        "native":  "Besoa",
        "supported":  false
    },
    {
        "code":  "beq",
        "name":  "Beembe",
        "native":  "Beembe",
        "supported":  false
    },
    {
        "code":  "bes",
        "name":  "Besme",
        "native":  "Besme",
        "supported":  false
    },
    {
        "code":  "bet",
        "name":  "Guiberoua BÃ©te",
        "native":  "Guiberoua BÃ©te",
        "supported":  false
    },
    {
        "code":  "beu",
        "name":  "Blagar",
        "native":  "Blagar",
        "supported":  false
    },
    {
        "code":  "bev",
        "name":  "Daloa BÃ©tÃ©",
        "native":  "Daloa BÃ©tÃ©",
        "supported":  false
    },
    {
        "code":  "bew",
        "name":  "Betawi",
        "native":  "Betawi",
        "supported":  false
    },
    {
        "code":  "bex",
        "name":  "Jur Modo",
        "native":  "Jur Modo",
        "supported":  false
    },
    {
        "code":  "bey",
        "name":  "Beli (Papua New Guinea)",
        "native":  "Beli (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "bez",
        "name":  "Bena (Tanzania)",
        "native":  "Bena (Tanzania)",
        "supported":  false
    },
    {
        "code":  "bfa",
        "name":  "Bari",
        "native":  "Bari",
        "supported":  false
    },
    {
        "code":  "bfb",
        "name":  "Pauri Bareli",
        "native":  "Pauri Bareli",
        "supported":  false
    },
    {
        "code":  "bfc",
        "name":  "Panyi Bai",
        "native":  "Panyi Bai",
        "supported":  false
    },
    {
        "code":  "bfd",
        "name":  "Bafut",
        "native":  "Bafut",
        "supported":  false
    },
    {
        "code":  "bfe",
        "name":  "Betaf",
        "native":  "Betaf",
        "supported":  false
    },
    {
        "code":  "bff",
        "name":  "Bofi",
        "native":  "Bofi",
        "supported":  false
    },
    {
        "code":  "bfg",
        "name":  "Busang Kayan",
        "native":  "Busang Kayan",
        "supported":  false
    },
    {
        "code":  "bfh",
        "name":  "Blafe",
        "native":  "Blafe",
        "supported":  false
    },
    {
        "code":  "bfi",
        "name":  "British Sign Language",
        "native":  "British Sign Language",
        "supported":  false
    },
    {
        "code":  "bfj",
        "name":  "Bafanji",
        "native":  "Bafanji",
        "supported":  false
    },
    {
        "code":  "bfk",
        "name":  "Ban Khor Sign Language",
        "native":  "Ban Khor Sign Language",
        "supported":  false
    },
    {
        "code":  "bfl",
        "name":  "Banda-NdÃ©lÃ©",
        "native":  "Banda-NdÃ©lÃ©",
        "supported":  false
    },
    {
        "code":  "bfm",
        "name":  "Mmen",
        "native":  "Mmen",
        "supported":  false
    },
    {
        "code":  "bfn",
        "name":  "Bunak",
        "native":  "Bunak",
        "supported":  false
    },
    {
        "code":  "bfo",
        "name":  "Malba Birifor",
        "native":  "Malba Birifor",
        "supported":  false
    },
    {
        "code":  "bfp",
        "name":  "Beba",
        "native":  "Beba",
        "supported":  false
    },
    {
        "code":  "bfq",
        "name":  "Badaga",
        "native":  "Badaga",
        "supported":  false
    },
    {
        "code":  "bfr",
        "name":  "Bazigar",
        "native":  "Bazigar",
        "supported":  false
    },
    {
        "code":  "bfs",
        "name":  "Southern Bai",
        "native":  "Southern Bai",
        "supported":  false
    },
    {
        "code":  "bft",
        "name":  "Balti",
        "native":  "Balti",
        "supported":  false
    },
    {
        "code":  "bfu",
        "name":  "Gahri",
        "native":  "Gahri",
        "supported":  false
    },
    {
        "code":  "bfw",
        "name":  "Bondo",
        "native":  "Bondo",
        "supported":  false
    },
    {
        "code":  "bfx",
        "name":  "Bantayanon",
        "native":  "Bantayanon",
        "supported":  false
    },
    {
        "code":  "bfy",
        "name":  "Bagheli",
        "native":  "Bagheli",
        "supported":  false
    },
    {
        "code":  "bfz",
        "name":  "Mahasu Pahari",
        "native":  "Mahasu Pahari",
        "supported":  false
    },
    {
        "code":  "bga",
        "name":  "Gwamhi-Wuri",
        "native":  "Gwamhi-Wuri",
        "supported":  false
    },
    {
        "code":  "bgb",
        "name":  "Bobongko",
        "native":  "Bobongko",
        "supported":  false
    },
    {
        "code":  "bgc",
        "name":  "Haryanvi",
        "native":  "Haryanvi",
        "supported":  false
    },
    {
        "code":  "bgd",
        "name":  "Rathwi Bareli",
        "native":  "Rathwi Bareli",
        "supported":  false
    },
    {
        "code":  "bge",
        "name":  "Bauria",
        "native":  "Bauria",
        "supported":  false
    },
    {
        "code":  "bgf",
        "name":  "Bangandu",
        "native":  "Bangandu",
        "supported":  false
    },
    {
        "code":  "bgg",
        "name":  "Bugun",
        "native":  "Bugun",
        "supported":  false
    },
    {
        "code":  "bgi",
        "name":  "Giangan",
        "native":  "Giangan",
        "supported":  false
    },
    {
        "code":  "bgj",
        "name":  "Bangolan",
        "native":  "Bangolan",
        "supported":  false
    },
    {
        "code":  "bgk",
        "name":  "Bit",
        "native":  "Bit",
        "supported":  false
    },
    {
        "code":  "bgl",
        "name":  "Bo (Laos)",
        "native":  "Bo (Laos)",
        "supported":  false
    },
    {
        "code":  "bgn",
        "name":  "Western Balochi",
        "native":  "Western Balochi",
        "supported":  false
    },
    {
        "code":  "bgo",
        "name":  "Baga Koga",
        "native":  "Baga Koga",
        "supported":  false
    },
    {
        "code":  "bgp",
        "name":  "Eastern Balochi",
        "native":  "Eastern Balochi",
        "supported":  false
    },
    {
        "code":  "bgq",
        "name":  "Bagri",
        "native":  "Bagri",
        "supported":  false
    },
    {
        "code":  "bgr",
        "name":  "Bawm Chin",
        "native":  "Bawm Chin",
        "supported":  false
    },
    {
        "code":  "bgs",
        "name":  "Tagabawa",
        "native":  "Tagabawa",
        "supported":  false
    },
    {
        "code":  "bgt",
        "name":  "Bughotu",
        "native":  "Bughotu",
        "supported":  false
    },
    {
        "code":  "bgu",
        "name":  "Mbongno",
        "native":  "Mbongno",
        "supported":  false
    },
    {
        "code":  "bgv",
        "name":  "Warkay-Bipim",
        "native":  "Warkay-Bipim",
        "supported":  false
    },
    {
        "code":  "bgw",
        "name":  "Bhatri",
        "native":  "Bhatri",
        "supported":  false
    },
    {
        "code":  "bgx",
        "name":  "Balkan Gagauz Turkish",
        "native":  "Balkan Gagauz Turkish",
        "supported":  false
    },
    {
        "code":  "bgy",
        "name":  "Benggoi",
        "native":  "Benggoi",
        "supported":  false
    },
    {
        "code":  "bgz",
        "name":  "Banggai",
        "native":  "Banggai",
        "supported":  false
    },
    {
        "code":  "bha",
        "name":  "Bharia",
        "native":  "Bharia",
        "supported":  false
    },
    {
        "code":  "bhb",
        "name":  "Bhili",
        "native":  "Bhili",
        "supported":  false
    },
    {
        "code":  "bhc",
        "name":  "Biga",
        "native":  "Biga",
        "supported":  false
    },
    {
        "code":  "bhd",
        "name":  "Bhadrawahi",
        "native":  "Bhadrawahi",
        "supported":  false
    },
    {
        "code":  "bhe",
        "name":  "Bhaya",
        "native":  "Bhaya",
        "supported":  false
    },
    {
        "code":  "bhf",
        "name":  "Odiai",
        "native":  "Odiai",
        "supported":  false
    },
    {
        "code":  "bhg",
        "name":  "Binandere",
        "native":  "Binandere",
        "supported":  false
    },
    {
        "code":  "bhh",
        "name":  "Bukharic",
        "native":  "Bukharic",
        "supported":  false
    },
    {
        "code":  "bhi",
        "name":  "Bhilali",
        "native":  "Bhilali",
        "supported":  false
    },
    {
        "code":  "bhj",
        "name":  "Bahing",
        "native":  "Bahing",
        "supported":  false
    },
    {
        "code":  "bhl",
        "name":  "Bimin",
        "native":  "Bimin",
        "supported":  false
    },
    {
        "code":  "bhm",
        "name":  "Bathari",
        "native":  "Bathari",
        "supported":  false
    },
    {
        "code":  "bhn",
        "name":  "Bohtan Neo-Aramaic",
        "native":  "Bohtan Neo-Aramaic",
        "supported":  false
    },
    {
        "code":  "bho",
        "name":  "Bhojpuri",
        "native":  "Bhojpuri",
        "supported":  false
    },
    {
        "code":  "bhp",
        "name":  "Bima",
        "native":  "Bima",
        "supported":  false
    },
    {
        "code":  "bhq",
        "name":  "Tukang Besi South",
        "native":  "Tukang Besi South",
        "supported":  false
    },
    {
        "code":  "bhr",
        "name":  "Bara Malagasy",
        "native":  "Bara Malagasy",
        "supported":  false
    },
    {
        "code":  "bhs",
        "name":  "Buwal",
        "native":  "Buwal",
        "supported":  false
    },
    {
        "code":  "bht",
        "name":  "Bhattiyali",
        "native":  "Bhattiyali",
        "supported":  false
    },
    {
        "code":  "bhu",
        "name":  "Bhunjia",
        "native":  "Bhunjia",
        "supported":  false
    },
    {
        "code":  "bhv",
        "name":  "Bahau",
        "native":  "Bahau",
        "supported":  false
    },
    {
        "code":  "bhw",
        "name":  "Biak",
        "native":  "Biak",
        "supported":  false
    },
    {
        "code":  "bhx",
        "name":  "Bhalay",
        "native":  "Bhalay",
        "supported":  false
    },
    {
        "code":  "bhy",
        "name":  "Bhele",
        "native":  "Bhele",
        "supported":  false
    },
    {
        "code":  "bhz",
        "name":  "Bada (Indonesia)",
        "native":  "Bada (Indonesia)",
        "supported":  false
    },
    {
        "code":  "bia",
        "name":  "Badimaya",
        "native":  "Badimaya",
        "supported":  false
    },
    {
        "code":  "bib",
        "name":  "Bissa",
        "native":  "Bissa",
        "supported":  false
    },
    {
        "code":  "bic",
        "name":  "Bikaru",
        "native":  "Bikaru",
        "supported":  false
    },
    {
        "code":  "bid",
        "name":  "Bidiyo",
        "native":  "Bidiyo",
        "supported":  false
    },
    {
        "code":  "bie",
        "name":  "Bepour",
        "native":  "Bepour",
        "supported":  false
    },
    {
        "code":  "bif",
        "name":  "Biafada",
        "native":  "Biafada",
        "supported":  false
    },
    {
        "code":  "big",
        "name":  "Biangai",
        "native":  "Biangai",
        "supported":  false
    },
    {
        "code":  "bij",
        "name":  "Vaghat-Ya-Bijim-Legeri",
        "native":  "Vaghat-Ya-Bijim-Legeri",
        "supported":  false
    },
    {
        "code":  "bik",
        "name":  "Bikol",
        "native":  "Bikol",
        "supported":  false
    },
    {
        "code":  "bil",
        "name":  "Bile",
        "native":  "Bile",
        "supported":  false
    },
    {
        "code":  "bim",
        "name":  "Bimoba",
        "native":  "Bimoba",
        "supported":  false
    },
    {
        "code":  "bin",
        "name":  "Bini",
        "native":  "Bini",
        "supported":  false
    },
    {
        "code":  "bio",
        "name":  "Nai",
        "native":  "Nai",
        "supported":  false
    },
    {
        "code":  "bip",
        "name":  "Bila",
        "native":  "Bila",
        "supported":  false
    },
    {
        "code":  "biq",
        "name":  "Bipi",
        "native":  "Bipi",
        "supported":  false
    },
    {
        "code":  "bir",
        "name":  "Bisorio",
        "native":  "Bisorio",
        "supported":  false
    },
    {
        "code":  "bi",
        "name":  "Bislama",
        "native":  "Bislama",
        "supported":  false
    },
    {
        "code":  "bit",
        "name":  "Berinomo",
        "native":  "Berinomo",
        "supported":  false
    },
    {
        "code":  "biu",
        "name":  "Biete",
        "native":  "Biete",
        "supported":  false
    },
    {
        "code":  "biv",
        "name":  "Southern Birifor",
        "native":  "Southern Birifor",
        "supported":  false
    },
    {
        "code":  "biw",
        "name":  "Kol (Cameroon)",
        "native":  "Kol (Cameroon)",
        "supported":  false
    },
    {
        "code":  "bix",
        "name":  "Bijori",
        "native":  "Bijori",
        "supported":  false
    },
    {
        "code":  "biy",
        "name":  "Birhor",
        "native":  "Birhor",
        "supported":  false
    },
    {
        "code":  "biz",
        "name":  "Baloi",
        "native":  "Baloi",
        "supported":  false
    },
    {
        "code":  "bja",
        "name":  "Budza",
        "native":  "Budza",
        "supported":  false
    },
    {
        "code":  "bjb",
        "name":  "Banggarla",
        "native":  "Banggarla",
        "supported":  false
    },
    {
        "code":  "bjc",
        "name":  "Bariji",
        "native":  "Bariji",
        "supported":  false
    },
    {
        "code":  "bje",
        "name":  "Biao-Jiao Mien",
        "native":  "Biao-Jiao Mien",
        "supported":  false
    },
    {
        "code":  "bjf",
        "name":  "Barzani Jewish Neo-Aramaic",
        "native":  "Barzani Jewish Neo-Aramaic",
        "supported":  false
    },
    {
        "code":  "bjg",
        "name":  "Bidyogo",
        "native":  "Bidyogo",
        "supported":  false
    },
    {
        "code":  "bjh",
        "name":  "Bahinemo",
        "native":  "Bahinemo",
        "supported":  false
    },
    {
        "code":  "bji",
        "name":  "Burji",
        "native":  "Burji",
        "supported":  false
    },
    {
        "code":  "bjj",
        "name":  "Kanauji",
        "native":  "Kanauji",
        "supported":  false
    },
    {
        "code":  "bjk",
        "name":  "Barok",
        "native":  "Barok",
        "supported":  false
    },
    {
        "code":  "bjl",
        "name":  "Bulu (Papua New Guinea)",
        "native":  "Bulu (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "bjm",
        "name":  "Bajelani",
        "native":  "Bajelani",
        "supported":  false
    },
    {
        "code":  "bjn",
        "name":  "Banjar",
        "native":  "Banjar",
        "supported":  false
    },
    {
        "code":  "bjo",
        "name":  "Mid-Southern Banda",
        "native":  "Mid-Southern Banda",
        "supported":  false
    },
    {
        "code":  "bjp",
        "name":  "Fanamaket",
        "native":  "Fanamaket",
        "supported":  false
    },
    {
        "code":  "bjr",
        "name":  "Binumarien",
        "native":  "Binumarien",
        "supported":  false
    },
    {
        "code":  "bjs",
        "name":  "Bajan",
        "native":  "Bajan",
        "supported":  false
    },
    {
        "code":  "bjt",
        "name":  "Balanta-Ganja",
        "native":  "Balanta-Ganja",
        "supported":  false
    },
    {
        "code":  "bju",
        "name":  "Busuu",
        "native":  "Busuu",
        "supported":  false
    },
    {
        "code":  "bjv",
        "name":  "Bedjond",
        "native":  "Bedjond",
        "supported":  false
    },
    {
        "code":  "bjw",
        "name":  "BakwÃ©",
        "native":  "BakwÃ©",
        "supported":  false
    },
    {
        "code":  "bjx",
        "name":  "Banao Itneg",
        "native":  "Banao Itneg",
        "supported":  false
    },
    {
        "code":  "bjy",
        "name":  "Bayali",
        "native":  "Bayali",
        "supported":  false
    },
    {
        "code":  "bjz",
        "name":  "Baruga",
        "native":  "Baruga",
        "supported":  false
    },
    {
        "code":  "bka",
        "name":  "Kyak",
        "native":  "Kyak",
        "supported":  false
    },
    {
        "code":  "bkc",
        "name":  "Baka (Cameroon)",
        "native":  "Baka (Cameroon)",
        "supported":  false
    },
    {
        "code":  "bkd",
        "name":  "Binukid",
        "native":  "Binukid",
        "supported":  false
    },
    {
        "code":  "bkf",
        "name":  "Beeke",
        "native":  "Beeke",
        "supported":  false
    },
    {
        "code":  "bkg",
        "name":  "Buraka",
        "native":  "Buraka",
        "supported":  false
    },
    {
        "code":  "bkh",
        "name":  "Bakoko",
        "native":  "Bakoko",
        "supported":  false
    },
    {
        "code":  "bki",
        "name":  "Baki",
        "native":  "Baki",
        "supported":  false
    },
    {
        "code":  "bkj",
        "name":  "Pande",
        "native":  "Pande",
        "supported":  false
    },
    {
        "code":  "bkk",
        "name":  "Brokskat",
        "native":  "Brokskat",
        "supported":  false
    },
    {
        "code":  "bkl",
        "name":  "Berik",
        "native":  "Berik",
        "supported":  false
    },
    {
        "code":  "bkm",
        "name":  "Kom (Cameroon)",
        "native":  "Kom (Cameroon)",
        "supported":  false
    },
    {
        "code":  "bkn",
        "name":  "Bukitan",
        "native":  "Bukitan",
        "supported":  false
    },
    {
        "code":  "bko",
        "name":  "Kwa\u0027",
        "native":  "Kwa\u0027",
        "supported":  false
    },
    {
        "code":  "bkp",
        "name":  "Boko (Democratic Republic of Congo)",
        "native":  "Boko (Democratic Republic of Congo)",
        "supported":  false
    },
    {
        "code":  "bkq",
        "name":  "BakairÃ­",
        "native":  "BakairÃ­",
        "supported":  false
    },
    {
        "code":  "bkr",
        "name":  "Bakumpai",
        "native":  "Bakumpai",
        "supported":  false
    },
    {
        "code":  "bks",
        "name":  "Northern Sorsoganon",
        "native":  "Northern Sorsoganon",
        "supported":  false
    },
    {
        "code":  "bkt",
        "name":  "Boloki",
        "native":  "Boloki",
        "supported":  false
    },
    {
        "code":  "bku",
        "name":  "Buhid",
        "native":  "Buhid",
        "supported":  false
    },
    {
        "code":  "bkv",
        "name":  "Bekwarra",
        "native":  "Bekwarra",
        "supported":  false
    },
    {
        "code":  "bkw",
        "name":  "Bekwel",
        "native":  "Bekwel",
        "supported":  false
    },
    {
        "code":  "bkx",
        "name":  "Baikeno",
        "native":  "Baikeno",
        "supported":  false
    },
    {
        "code":  "bky",
        "name":  "Bokyi",
        "native":  "Bokyi",
        "supported":  false
    },
    {
        "code":  "bkz",
        "name":  "Bungku",
        "native":  "Bungku",
        "supported":  false
    },
    {
        "code":  "bla",
        "name":  "Siksika",
        "native":  "Siksika",
        "supported":  false
    },
    {
        "code":  "blb",
        "name":  "Bilua",
        "native":  "Bilua",
        "supported":  false
    },
    {
        "code":  "blc",
        "name":  "Bella Coola",
        "native":  "Bella Coola",
        "supported":  false
    },
    {
        "code":  "bld",
        "name":  "Bolango",
        "native":  "Bolango",
        "supported":  false
    },
    {
        "code":  "ble",
        "name":  "Balanta-Kentohe",
        "native":  "Balanta-Kentohe",
        "supported":  false
    },
    {
        "code":  "blf",
        "name":  "Buol",
        "native":  "Buol",
        "supported":  false
    },
    {
        "code":  "blg",
        "name":  "Balau",
        "native":  "Balau",
        "supported":  false
    },
    {
        "code":  "blh",
        "name":  "Kuwaa",
        "native":  "Kuwaa",
        "supported":  false
    },
    {
        "code":  "bli",
        "name":  "Bolia",
        "native":  "Bolia",
        "supported":  false
    },
    {
        "code":  "blj",
        "name":  "Bolongan",
        "native":  "Bolongan",
        "supported":  false
    },
    {
        "code":  "blk",
        "name":  "Pa\u0027o Karen",
        "native":  "Pa\u0027o Karen",
        "supported":  false
    },
    {
        "code":  "bll",
        "name":  "Biloxi",
        "native":  "Biloxi",
        "supported":  false
    },
    {
        "code":  "blm",
        "name":  "Beli (South Sudan)",
        "native":  "Beli (South Sudan)",
        "supported":  false
    },
    {
        "code":  "bln",
        "name":  "Southern Catanduanes Bikol",
        "native":  "Southern Catanduanes Bikol",
        "supported":  false
    },
    {
        "code":  "blo",
        "name":  "Anii",
        "native":  "Anii",
        "supported":  false
    },
    {
        "code":  "blp",
        "name":  "Blablanga",
        "native":  "Blablanga",
        "supported":  false
    },
    {
        "code":  "blq",
        "name":  "Baluan-Pam",
        "native":  "Baluan-Pam",
        "supported":  false
    },
    {
        "code":  "blr",
        "name":  "Blang",
        "native":  "Blang",
        "supported":  false
    },
    {
        "code":  "bls",
        "name":  "Balaesang",
        "native":  "Balaesang",
        "supported":  false
    },
    {
        "code":  "blt",
        "name":  "Tai Dam",
        "native":  "Tai Dam",
        "supported":  false
    },
    {
        "code":  "blv",
        "name":  "Kibala",
        "native":  "Kibala",
        "supported":  false
    },
    {
        "code":  "blw",
        "name":  "Balangao",
        "native":  "Balangao",
        "supported":  false
    },
    {
        "code":  "blx",
        "name":  "Mag-Indi Ayta",
        "native":  "Mag-Indi Ayta",
        "supported":  false
    },
    {
        "code":  "bly",
        "name":  "Notre",
        "native":  "Notre",
        "supported":  false
    },
    {
        "code":  "blz",
        "name":  "Balantak",
        "native":  "Balantak",
        "supported":  false
    },
    {
        "code":  "bma",
        "name":  "Lame",
        "native":  "Lame",
        "supported":  false
    },
    {
        "code":  "bmb",
        "name":  "Bembe",
        "native":  "Bembe",
        "supported":  false
    },
    {
        "code":  "bmc",
        "name":  "Biem",
        "native":  "Biem",
        "supported":  false
    },
    {
        "code":  "bmd",
        "name":  "Baga Manduri",
        "native":  "Baga Manduri",
        "supported":  false
    },
    {
        "code":  "bme",
        "name":  "Limassa",
        "native":  "Limassa",
        "supported":  false
    },
    {
        "code":  "bmf",
        "name":  "Bom-Kim",
        "native":  "Bom-Kim",
        "supported":  false
    },
    {
        "code":  "bmg",
        "name":  "Bamwe",
        "native":  "Bamwe",
        "supported":  false
    },
    {
        "code":  "bmh",
        "name":  "Kein",
        "native":  "Kein",
        "supported":  false
    },
    {
        "code":  "bmi",
        "name":  "Bagirmi",
        "native":  "Bagirmi",
        "supported":  false
    },
    {
        "code":  "bmj",
        "name":  "Bote-Majhi",
        "native":  "Bote-Majhi",
        "supported":  false
    },
    {
        "code":  "bmk",
        "name":  "Ghayavi",
        "native":  "Ghayavi",
        "supported":  false
    },
    {
        "code":  "bml",
        "name":  "Bomboli",
        "native":  "Bomboli",
        "supported":  false
    },
    {
        "code":  "bmm",
        "name":  "Northern Betsimisaraka Malagasy",
        "native":  "Northern Betsimisaraka Malagasy",
        "supported":  false
    },
    {
        "code":  "bmn",
        "name":  "Bina (Papua New Guinea)",
        "native":  "Bina (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "bmo",
        "name":  "Bambalang",
        "native":  "Bambalang",
        "supported":  false
    },
    {
        "code":  "bmp",
        "name":  "Bulgebi",
        "native":  "Bulgebi",
        "supported":  false
    },
    {
        "code":  "bmq",
        "name":  "Bomu",
        "native":  "Bomu",
        "supported":  false
    },
    {
        "code":  "bmr",
        "name":  "Muinane",
        "native":  "Muinane",
        "supported":  false
    },
    {
        "code":  "bms",
        "name":  "Bilma Kanuri",
        "native":  "Bilma Kanuri",
        "supported":  false
    },
    {
        "code":  "bmt",
        "name":  "Biao Mon",
        "native":  "Biao Mon",
        "supported":  false
    },
    {
        "code":  "bmu",
        "name":  "Somba-Siawari",
        "native":  "Somba-Siawari",
        "supported":  false
    },
    {
        "code":  "bmv",
        "name":  "Bum",
        "native":  "Bum",
        "supported":  false
    },
    {
        "code":  "bmw",
        "name":  "Bomwali",
        "native":  "Bomwali",
        "supported":  false
    },
    {
        "code":  "bmx",
        "name":  "Baimak",
        "native":  "Baimak",
        "supported":  false
    },
    {
        "code":  "bmz",
        "name":  "Baramu",
        "native":  "Baramu",
        "supported":  false
    },
    {
        "code":  "bna",
        "name":  "Bonerate",
        "native":  "Bonerate",
        "supported":  false
    },
    {
        "code":  "bnb",
        "name":  "Bookan",
        "native":  "Bookan",
        "supported":  false
    },
    {
        "code":  "bnc",
        "name":  "Bontok",
        "native":  "Bontok",
        "supported":  false
    },
    {
        "code":  "bnd",
        "name":  "Banda (Indonesia)",
        "native":  "Banda (Indonesia)",
        "supported":  false
    },
    {
        "code":  "bne",
        "name":  "Bintauna",
        "native":  "Bintauna",
        "supported":  false
    },
    {
        "code":  "bnf",
        "name":  "Masiwang",
        "native":  "Masiwang",
        "supported":  false
    },
    {
        "code":  "bng",
        "name":  "Benga",
        "native":  "Benga",
        "supported":  false
    },
    {
        "code":  "bni",
        "name":  "Bangi",
        "native":  "Bangi",
        "supported":  false
    },
    {
        "code":  "bnj",
        "name":  "Eastern Tawbuid",
        "native":  "Eastern Tawbuid",
        "supported":  false
    },
    {
        "code":  "bnk",
        "name":  "Bierebo",
        "native":  "Bierebo",
        "supported":  false
    },
    {
        "code":  "bnl",
        "name":  "Boon",
        "native":  "Boon",
        "supported":  false
    },
    {
        "code":  "bnm",
        "name":  "Batanga",
        "native":  "Batanga",
        "supported":  false
    },
    {
        "code":  "bnn",
        "name":  "Bunun",
        "native":  "Bunun",
        "supported":  false
    },
    {
        "code":  "bno",
        "name":  "Bantoanon",
        "native":  "Bantoanon",
        "supported":  false
    },
    {
        "code":  "bnp",
        "name":  "Bola",
        "native":  "Bola",
        "supported":  false
    },
    {
        "code":  "bnq",
        "name":  "Bantik",
        "native":  "Bantik",
        "supported":  false
    },
    {
        "code":  "bnr",
        "name":  "Butmas-Tur",
        "native":  "Butmas-Tur",
        "supported":  false
    },
    {
        "code":  "bns",
        "name":  "Bundeli",
        "native":  "Bundeli",
        "supported":  false
    },
    {
        "code":  "bnu",
        "name":  "Bentong",
        "native":  "Bentong",
        "supported":  false
    },
    {
        "code":  "bnv",
        "name":  "Bonerif",
        "native":  "Bonerif",
        "supported":  false
    },
    {
        "code":  "bnw",
        "name":  "Bisis",
        "native":  "Bisis",
        "supported":  false
    },
    {
        "code":  "bnx",
        "name":  "Bangubangu",
        "native":  "Bangubangu",
        "supported":  false
    },
    {
        "code":  "bny",
        "name":  "Bintulu",
        "native":  "Bintulu",
        "supported":  false
    },
    {
        "code":  "bnz",
        "name":  "Beezen",
        "native":  "Beezen",
        "supported":  false
    },
    {
        "code":  "boa",
        "name":  "Bora",
        "native":  "Bora",
        "supported":  false
    },
    {
        "code":  "bob",
        "name":  "Aweer",
        "native":  "Aweer",
        "supported":  false
    },
    {
        "code":  "bo",
        "name":  "Tibetan",
        "native":  "Tibetan",
        "supported":  false
    },
    {
        "code":  "boe",
        "name":  "Mundabli",
        "native":  "Mundabli",
        "supported":  false
    },
    {
        "code":  "bof",
        "name":  "Bolon",
        "native":  "Bolon",
        "supported":  false
    },
    {
        "code":  "bog",
        "name":  "Bamako Sign Language",
        "native":  "Bamako Sign Language",
        "supported":  false
    },
    {
        "code":  "boh",
        "name":  "Boma",
        "native":  "Boma",
        "supported":  false
    },
    {
        "code":  "boi",
        "name":  "BarbareÃ±o",
        "native":  "BarbareÃ±o",
        "supported":  false
    },
    {
        "code":  "boj",
        "name":  "Anjam",
        "native":  "Anjam",
        "supported":  false
    },
    {
        "code":  "bok",
        "name":  "Bonjo",
        "native":  "Bonjo",
        "supported":  false
    },
    {
        "code":  "bol",
        "name":  "Bole",
        "native":  "Bole",
        "supported":  false
    },
    {
        "code":  "bom",
        "name":  "Berom",
        "native":  "Berom",
        "supported":  false
    },
    {
        "code":  "bon",
        "name":  "Bine",
        "native":  "Bine",
        "supported":  false
    },
    {
        "code":  "boo",
        "name":  "TiemacÃ¨wÃ¨ Bozo",
        "native":  "TiemacÃ¨wÃ¨ Bozo",
        "supported":  false
    },
    {
        "code":  "bop",
        "name":  "Bonkiman",
        "native":  "Bonkiman",
        "supported":  false
    },
    {
        "code":  "boq",
        "name":  "Bogaya",
        "native":  "Bogaya",
        "supported":  false
    },
    {
        "code":  "bor",
        "name":  "BorÃ´ro",
        "native":  "BorÃ´ro",
        "supported":  false
    },
    {
        "code":  "bs",
        "name":  "Bosnian",
        "native":  "Bosnian",
        "supported":  false
    },
    {
        "code":  "bot",
        "name":  "Bongo",
        "native":  "Bongo",
        "supported":  false
    },
    {
        "code":  "bou",
        "name":  "Bondei",
        "native":  "Bondei",
        "supported":  false
    },
    {
        "code":  "bov",
        "name":  "Tuwuli",
        "native":  "Tuwuli",
        "supported":  false
    },
    {
        "code":  "bow",
        "name":  "Rema",
        "native":  "Rema",
        "supported":  false
    },
    {
        "code":  "box",
        "name":  "Buamu",
        "native":  "Buamu",
        "supported":  false
    },
    {
        "code":  "boy",
        "name":  "Bodo (Central African Republic)",
        "native":  "Bodo (Central African Republic)",
        "supported":  false
    },
    {
        "code":  "boz",
        "name":  "TiÃ©yaxo Bozo",
        "native":  "TiÃ©yaxo Bozo",
        "supported":  false
    },
    {
        "code":  "bpa",
        "name":  "Daakaka",
        "native":  "Daakaka",
        "supported":  false
    },
    {
        "code":  "bpd",
        "name":  "Banda-Banda",
        "native":  "Banda-Banda",
        "supported":  false
    },
    {
        "code":  "bpg",
        "name":  "Bonggo",
        "native":  "Bonggo",
        "supported":  false
    },
    {
        "code":  "bph",
        "name":  "Botlikh",
        "native":  "Botlikh",
        "supported":  false
    },
    {
        "code":  "bpi",
        "name":  "Bagupi",
        "native":  "Bagupi",
        "supported":  false
    },
    {
        "code":  "bpj",
        "name":  "Binji",
        "native":  "Binji",
        "supported":  false
    },
    {
        "code":  "bpk",
        "name":  "Orowe",
        "native":  "Orowe",
        "supported":  false
    },
    {
        "code":  "bpl",
        "name":  "Broome Pearling Lugger Pidgin",
        "native":  "Broome Pearling Lugger Pidgin",
        "supported":  false
    },
    {
        "code":  "bpm",
        "name":  "Biyom",
        "native":  "Biyom",
        "supported":  false
    },
    {
        "code":  "bpn",
        "name":  "Dzao Min",
        "native":  "Dzao Min",
        "supported":  false
    },
    {
        "code":  "bpo",
        "name":  "Anasi",
        "native":  "Anasi",
        "supported":  false
    },
    {
        "code":  "bpp",
        "name":  "Kaure",
        "native":  "Kaure",
        "supported":  false
    },
    {
        "code":  "bpq",
        "name":  "Banda Malay",
        "native":  "Banda Malay",
        "supported":  false
    },
    {
        "code":  "bpr",
        "name":  "Koronadal Blaan",
        "native":  "Koronadal Blaan",
        "supported":  false
    },
    {
        "code":  "bps",
        "name":  "Sarangani Blaan",
        "native":  "Sarangani Blaan",
        "supported":  false
    },
    {
        "code":  "bpt",
        "name":  "Barrow Point",
        "native":  "Barrow Point",
        "supported":  false
    },
    {
        "code":  "bpu",
        "name":  "Bongu",
        "native":  "Bongu",
        "supported":  false
    },
    {
        "code":  "bpv",
        "name":  "Bian Marind",
        "native":  "Bian Marind",
        "supported":  false
    },
    {
        "code":  "bpw",
        "name":  "Bo (Papua New Guinea)",
        "native":  "Bo (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "bpx",
        "name":  "Palya Bareli",
        "native":  "Palya Bareli",
        "supported":  false
    },
    {
        "code":  "bpy",
        "name":  "Bishnupriya",
        "native":  "Bishnupriya",
        "supported":  false
    },
    {
        "code":  "bpz",
        "name":  "Bilba",
        "native":  "Bilba",
        "supported":  false
    },
    {
        "code":  "bqa",
        "name":  "Tchumbuli",
        "native":  "Tchumbuli",
        "supported":  false
    },
    {
        "code":  "bqb",
        "name":  "Bagusa",
        "native":  "Bagusa",
        "supported":  false
    },
    {
        "code":  "bqc",
        "name":  "Boko (Benin)",
        "native":  "Boko (Benin)",
        "supported":  false
    },
    {
        "code":  "bqd",
        "name":  "Bung",
        "native":  "Bung",
        "supported":  false
    },
    {
        "code":  "bqf",
        "name":  "Baga Kaloum",
        "native":  "Baga Kaloum",
        "supported":  false
    },
    {
        "code":  "bqg",
        "name":  "Bago-Kusuntu",
        "native":  "Bago-Kusuntu",
        "supported":  false
    },
    {
        "code":  "bqh",
        "name":  "Baima",
        "native":  "Baima",
        "supported":  false
    },
    {
        "code":  "bqi",
        "name":  "Bakhtiari",
        "native":  "Bakhtiari",
        "supported":  false
    },
    {
        "code":  "bqj",
        "name":  "Bandial",
        "native":  "Bandial",
        "supported":  false
    },
    {
        "code":  "bqk",
        "name":  "Banda-MbrÃ¨s",
        "native":  "Banda-MbrÃ¨s",
        "supported":  false
    },
    {
        "code":  "bql",
        "name":  "Bilakura",
        "native":  "Bilakura",
        "supported":  false
    },
    {
        "code":  "bqm",
        "name":  "Wumboko",
        "native":  "Wumboko",
        "supported":  false
    },
    {
        "code":  "bqn",
        "name":  "Bulgarian Sign Language",
        "native":  "Bulgarian Sign Language",
        "supported":  false
    },
    {
        "code":  "bqo",
        "name":  "Balo",
        "native":  "Balo",
        "supported":  false
    },
    {
        "code":  "bqp",
        "name":  "Busa",
        "native":  "Busa",
        "supported":  false
    },
    {
        "code":  "bqq",
        "name":  "Biritai",
        "native":  "Biritai",
        "supported":  false
    },
    {
        "code":  "bqr",
        "name":  "Burusu",
        "native":  "Burusu",
        "supported":  false
    },
    {
        "code":  "bqs",
        "name":  "Bosngun",
        "native":  "Bosngun",
        "supported":  false
    },
    {
        "code":  "bqt",
        "name":  "Bamukumbit",
        "native":  "Bamukumbit",
        "supported":  false
    },
    {
        "code":  "bqu",
        "name":  "Boguru",
        "native":  "Boguru",
        "supported":  false
    },
    {
        "code":  "bqv",
        "name":  "Koro Wachi",
        "native":  "Koro Wachi",
        "supported":  false
    },
    {
        "code":  "bqw",
        "name":  "Buru (Nigeria)",
        "native":  "Buru (Nigeria)",
        "supported":  false
    },
    {
        "code":  "bqx",
        "name":  "Baangi",
        "native":  "Baangi",
        "supported":  false
    },
    {
        "code":  "bqy",
        "name":  "Bengkala Sign Language",
        "native":  "Bengkala Sign Language",
        "supported":  false
    },
    {
        "code":  "bqz",
        "name":  "Bakaka",
        "native":  "Bakaka",
        "supported":  false
    },
    {
        "code":  "bra",
        "name":  "Braj",
        "native":  "Braj",
        "supported":  false
    },
    {
        "code":  "brb",
        "name":  "Lave",
        "native":  "Lave",
        "supported":  false
    },
    {
        "code":  "brc",
        "name":  "Berbice Creole Dutch",
        "native":  "Berbice Creole Dutch",
        "supported":  false
    },
    {
        "code":  "brd",
        "name":  "Baraamu",
        "native":  "Baraamu",
        "supported":  false
    },
    {
        "code":  "br",
        "name":  "Breton",
        "native":  "Breton",
        "supported":  false
    },
    {
        "code":  "brf",
        "name":  "Bira",
        "native":  "Bira",
        "supported":  false
    },
    {
        "code":  "brg",
        "name":  "Baure",
        "native":  "Baure",
        "supported":  false
    },
    {
        "code":  "brh",
        "name":  "Brahui",
        "native":  "Brahui",
        "supported":  false
    },
    {
        "code":  "bri",
        "name":  "Mokpwe",
        "native":  "Mokpwe",
        "supported":  false
    },
    {
        "code":  "brj",
        "name":  "Bieria",
        "native":  "Bieria",
        "supported":  false
    },
    {
        "code":  "brk",
        "name":  "Birked",
        "native":  "Birked",
        "supported":  false
    },
    {
        "code":  "brl",
        "name":  "Birwa",
        "native":  "Birwa",
        "supported":  false
    },
    {
        "code":  "brm",
        "name":  "Barambu",
        "native":  "Barambu",
        "supported":  false
    },
    {
        "code":  "brn",
        "name":  "Boruca",
        "native":  "Boruca",
        "supported":  false
    },
    {
        "code":  "bro",
        "name":  "Brokkat",
        "native":  "Brokkat",
        "supported":  false
    },
    {
        "code":  "brp",
        "name":  "Barapasi",
        "native":  "Barapasi",
        "supported":  false
    },
    {
        "code":  "brq",
        "name":  "Breri",
        "native":  "Breri",
        "supported":  false
    },
    {
        "code":  "brr",
        "name":  "Birao",
        "native":  "Birao",
        "supported":  false
    },
    {
        "code":  "brs",
        "name":  "Baras",
        "native":  "Baras",
        "supported":  false
    },
    {
        "code":  "brt",
        "name":  "Bitare",
        "native":  "Bitare",
        "supported":  false
    },
    {
        "code":  "bru",
        "name":  "Eastern Bru",
        "native":  "Eastern Bru",
        "supported":  false
    },
    {
        "code":  "brv",
        "name":  "Western Bru",
        "native":  "Western Bru",
        "supported":  false
    },
    {
        "code":  "brw",
        "name":  "Bellari",
        "native":  "Bellari",
        "supported":  false
    },
    {
        "code":  "brx",
        "name":  "Bodo (India)",
        "native":  "Bodo (India)",
        "supported":  false
    },
    {
        "code":  "bry",
        "name":  "Burui",
        "native":  "Burui",
        "supported":  false
    },
    {
        "code":  "brz",
        "name":  "Bilbil",
        "native":  "Bilbil",
        "supported":  false
    },
    {
        "code":  "bsa",
        "name":  "Abinomn",
        "native":  "Abinomn",
        "supported":  false
    },
    {
        "code":  "bsb",
        "name":  "Brunei Bisaya",
        "native":  "Brunei Bisaya",
        "supported":  false
    },
    {
        "code":  "bsc",
        "name":  "Bassari",
        "native":  "Bassari",
        "supported":  false
    },
    {
        "code":  "bse",
        "name":  "Wushi",
        "native":  "Wushi",
        "supported":  false
    },
    {
        "code":  "bsf",
        "name":  "Bauchi",
        "native":  "Bauchi",
        "supported":  false
    },
    {
        "code":  "bsg",
        "name":  "Bashkardi",
        "native":  "Bashkardi",
        "supported":  false
    },
    {
        "code":  "bsh",
        "name":  "Kati",
        "native":  "Kati",
        "supported":  false
    },
    {
        "code":  "bsi",
        "name":  "Bassossi",
        "native":  "Bassossi",
        "supported":  false
    },
    {
        "code":  "bsj",
        "name":  "Bangwinji",
        "native":  "Bangwinji",
        "supported":  false
    },
    {
        "code":  "bsk",
        "name":  "Burushaski",
        "native":  "Burushaski",
        "supported":  false
    },
    {
        "code":  "bsl",
        "name":  "Basa-Gumna",
        "native":  "Basa-Gumna",
        "supported":  false
    },
    {
        "code":  "bsm",
        "name":  "Busami",
        "native":  "Busami",
        "supported":  false
    },
    {
        "code":  "bsn",
        "name":  "Barasana-Eduria",
        "native":  "Barasana-Eduria",
        "supported":  false
    },
    {
        "code":  "bso",
        "name":  "Buso",
        "native":  "Buso",
        "supported":  false
    },
    {
        "code":  "bsp",
        "name":  "Baga Sitemu",
        "native":  "Baga Sitemu",
        "supported":  false
    },
    {
        "code":  "bsq",
        "name":  "Bassa",
        "native":  "Bassa",
        "supported":  false
    },
    {
        "code":  "bsr",
        "name":  "Bassa-Kontagora",
        "native":  "Bassa-Kontagora",
        "supported":  false
    },
    {
        "code":  "bss",
        "name":  "Akoose",
        "native":  "Akoose",
        "supported":  false
    },
    {
        "code":  "bst",
        "name":  "Basketo",
        "native":  "Basketo",
        "supported":  false
    },
    {
        "code":  "bsu",
        "name":  "Bahonsuai",
        "native":  "Bahonsuai",
        "supported":  false
    },
    {
        "code":  "bsv",
        "name":  "Baga SobanÃ©",
        "native":  "Baga SobanÃ©",
        "supported":  false
    },
    {
        "code":  "bsw",
        "name":  "Baiso",
        "native":  "Baiso",
        "supported":  false
    },
    {
        "code":  "bsx",
        "name":  "Yangkam",
        "native":  "Yangkam",
        "supported":  false
    },
    {
        "code":  "bsy",
        "name":  "Sabah Bisaya",
        "native":  "Sabah Bisaya",
        "supported":  false
    },
    {
        "code":  "bta",
        "name":  "Bata",
        "native":  "Bata",
        "supported":  false
    },
    {
        "code":  "btc",
        "name":  "Bati (Cameroon)",
        "native":  "Bati (Cameroon)",
        "supported":  false
    },
    {
        "code":  "btd",
        "name":  "Batak Dairi",
        "native":  "Batak Dairi",
        "supported":  false
    },
    {
        "code":  "bte",
        "name":  "Gamo-Ningi",
        "native":  "Gamo-Ningi",
        "supported":  false
    },
    {
        "code":  "btf",
        "name":  "Birgit",
        "native":  "Birgit",
        "supported":  false
    },
    {
        "code":  "btg",
        "name":  "Gagnoa BÃ©tÃ©",
        "native":  "Gagnoa BÃ©tÃ©",
        "supported":  false
    },
    {
        "code":  "bth",
        "name":  "Biatah Bidayuh",
        "native":  "Biatah Bidayuh",
        "supported":  false
    },
    {
        "code":  "bti",
        "name":  "Burate",
        "native":  "Burate",
        "supported":  false
    },
    {
        "code":  "btj",
        "name":  "Bacanese Malay",
        "native":  "Bacanese Malay",
        "supported":  false
    },
    {
        "code":  "btm",
        "name":  "Batak Mandailing",
        "native":  "Batak Mandailing",
        "supported":  false
    },
    {
        "code":  "btn",
        "name":  "Ratagnon",
        "native":  "Ratagnon",
        "supported":  false
    },
    {
        "code":  "bto",
        "name":  "Rinconada Bikol",
        "native":  "Rinconada Bikol",
        "supported":  false
    },
    {
        "code":  "btp",
        "name":  "Budibud",
        "native":  "Budibud",
        "supported":  false
    },
    {
        "code":  "btq",
        "name":  "Batek",
        "native":  "Batek",
        "supported":  false
    },
    {
        "code":  "btr",
        "name":  "Baetora",
        "native":  "Baetora",
        "supported":  false
    },
    {
        "code":  "bts",
        "name":  "Batak Simalungun",
        "native":  "Batak Simalungun",
        "supported":  false
    },
    {
        "code":  "btt",
        "name":  "Bete-Bendi",
        "native":  "Bete-Bendi",
        "supported":  false
    },
    {
        "code":  "btu",
        "name":  "Batu",
        "native":  "Batu",
        "supported":  false
    },
    {
        "code":  "btv",
        "name":  "Bateri",
        "native":  "Bateri",
        "supported":  false
    },
    {
        "code":  "btw",
        "name":  "Butuanon",
        "native":  "Butuanon",
        "supported":  false
    },
    {
        "code":  "btx",
        "name":  "Batak Karo",
        "native":  "Batak Karo",
        "supported":  false
    },
    {
        "code":  "bty",
        "name":  "Bobot",
        "native":  "Bobot",
        "supported":  false
    },
    {
        "code":  "btz",
        "name":  "Batak Alas-Kluet",
        "native":  "Batak Alas-Kluet",
        "supported":  false
    },
    {
        "code":  "bua",
        "name":  "Buriat",
        "native":  "Buriat",
        "supported":  false
    },
    {
        "code":  "bub",
        "name":  "Bua",
        "native":  "Bua",
        "supported":  false
    },
    {
        "code":  "buc",
        "name":  "Bushi",
        "native":  "Bushi",
        "supported":  false
    },
    {
        "code":  "bud",
        "name":  "Ntcham",
        "native":  "Ntcham",
        "supported":  false
    },
    {
        "code":  "bue",
        "name":  "Beothuk",
        "native":  "Beothuk",
        "supported":  false
    },
    {
        "code":  "buf",
        "name":  "Bushoong",
        "native":  "Bushoong",
        "supported":  false
    },
    {
        "code":  "bug",
        "name":  "Buginese",
        "native":  "Buginese",
        "supported":  false
    },
    {
        "code":  "buh",
        "name":  "Younuo Bunu",
        "native":  "Younuo Bunu",
        "supported":  false
    },
    {
        "code":  "bui",
        "name":  "Bongili",
        "native":  "Bongili",
        "supported":  false
    },
    {
        "code":  "buj",
        "name":  "Basa-Gurmana",
        "native":  "Basa-Gurmana",
        "supported":  false
    },
    {
        "code":  "buk",
        "name":  "Bugawac",
        "native":  "Bugawac",
        "supported":  false
    },
    {
        "code":  "bum",
        "name":  "Bulu (Cameroon)",
        "native":  "Bulu (Cameroon)",
        "supported":  false
    },
    {
        "code":  "bun",
        "name":  "Sherbro",
        "native":  "Sherbro",
        "supported":  false
    },
    {
        "code":  "buo",
        "name":  "Terei",
        "native":  "Terei",
        "supported":  false
    },
    {
        "code":  "bup",
        "name":  "Busoa",
        "native":  "Busoa",
        "supported":  false
    },
    {
        "code":  "buq",
        "name":  "Brem",
        "native":  "Brem",
        "supported":  false
    },
    {
        "code":  "bus",
        "name":  "Bokobaru",
        "native":  "Bokobaru",
        "supported":  false
    },
    {
        "code":  "but",
        "name":  "Bungain",
        "native":  "Bungain",
        "supported":  false
    },
    {
        "code":  "buu",
        "name":  "Budu",
        "native":  "Budu",
        "supported":  false
    },
    {
        "code":  "buv",
        "name":  "Bun",
        "native":  "Bun",
        "supported":  false
    },
    {
        "code":  "buw",
        "name":  "Bubi",
        "native":  "Bubi",
        "supported":  false
    },
    {
        "code":  "bux",
        "name":  "Boghom",
        "native":  "Boghom",
        "supported":  false
    },
    {
        "code":  "buy",
        "name":  "Bullom So",
        "native":  "Bullom So",
        "supported":  false
    },
    {
        "code":  "buz",
        "name":  "Bukwen",
        "native":  "Bukwen",
        "supported":  false
    },
    {
        "code":  "bva",
        "name":  "Barein",
        "native":  "Barein",
        "supported":  false
    },
    {
        "code":  "bvb",
        "name":  "Bube",
        "native":  "Bube",
        "supported":  false
    },
    {
        "code":  "bvc",
        "name":  "Baelelea",
        "native":  "Baelelea",
        "supported":  false
    },
    {
        "code":  "bvd",
        "name":  "Baeggu",
        "native":  "Baeggu",
        "supported":  false
    },
    {
        "code":  "bve",
        "name":  "Berau Malay",
        "native":  "Berau Malay",
        "supported":  false
    },
    {
        "code":  "bvf",
        "name":  "Boor",
        "native":  "Boor",
        "supported":  false
    },
    {
        "code":  "bvg",
        "name":  "Bonkeng",
        "native":  "Bonkeng",
        "supported":  false
    },
    {
        "code":  "bvh",
        "name":  "Bure",
        "native":  "Bure",
        "supported":  false
    },
    {
        "code":  "bvi",
        "name":  "Belanda Viri",
        "native":  "Belanda Viri",
        "supported":  false
    },
    {
        "code":  "bvj",
        "name":  "Baan",
        "native":  "Baan",
        "supported":  false
    },
    {
        "code":  "bvk",
        "name":  "Bukat",
        "native":  "Bukat",
        "supported":  false
    },
    {
        "code":  "bvl",
        "name":  "Bolivian Sign Language",
        "native":  "Bolivian Sign Language",
        "supported":  false
    },
    {
        "code":  "bvm",
        "name":  "Bamunka",
        "native":  "Bamunka",
        "supported":  false
    },
    {
        "code":  "bvn",
        "name":  "Buna",
        "native":  "Buna",
        "supported":  false
    },
    {
        "code":  "bvo",
        "name":  "Bolgo",
        "native":  "Bolgo",
        "supported":  false
    },
    {
        "code":  "bvp",
        "name":  "Bumang",
        "native":  "Bumang",
        "supported":  false
    },
    {
        "code":  "bvq",
        "name":  "Birri",
        "native":  "Birri",
        "supported":  false
    },
    {
        "code":  "bvr",
        "name":  "Burarra",
        "native":  "Burarra",
        "supported":  false
    },
    {
        "code":  "bvt",
        "name":  "Bati (Indonesia)",
        "native":  "Bati (Indonesia)",
        "supported":  false
    },
    {
        "code":  "bvu",
        "name":  "Bukit Malay",
        "native":  "Bukit Malay",
        "supported":  false
    },
    {
        "code":  "bvv",
        "name":  "Baniva",
        "native":  "Baniva",
        "supported":  false
    },
    {
        "code":  "bvw",
        "name":  "Boga",
        "native":  "Boga",
        "supported":  false
    },
    {
        "code":  "bvx",
        "name":  "Dibole",
        "native":  "Dibole",
        "supported":  false
    },
    {
        "code":  "bvy",
        "name":  "Baybayanon",
        "native":  "Baybayanon",
        "supported":  false
    },
    {
        "code":  "bvz",
        "name":  "Bauzi",
        "native":  "Bauzi",
        "supported":  false
    },
    {
        "code":  "bwa",
        "name":  "Bwatoo",
        "native":  "Bwatoo",
        "supported":  false
    },
    {
        "code":  "bwb",
        "name":  "Namosi-Naitasiri-Serua",
        "native":  "Namosi-Naitasiri-Serua",
        "supported":  false
    },
    {
        "code":  "bwc",
        "name":  "Bwile",
        "native":  "Bwile",
        "supported":  false
    },
    {
        "code":  "bwd",
        "name":  "Bwaidoka",
        "native":  "Bwaidoka",
        "supported":  false
    },
    {
        "code":  "bwe",
        "name":  "Bwe Karen",
        "native":  "Bwe Karen",
        "supported":  false
    },
    {
        "code":  "bwf",
        "name":  "Boselewa",
        "native":  "Boselewa",
        "supported":  false
    },
    {
        "code":  "bwg",
        "name":  "Barwe",
        "native":  "Barwe",
        "supported":  false
    },
    {
        "code":  "bwh",
        "name":  "Bishuo",
        "native":  "Bishuo",
        "supported":  false
    },
    {
        "code":  "bwi",
        "name":  "Baniwa",
        "native":  "Baniwa",
        "supported":  false
    },
    {
        "code":  "bwj",
        "name":  "LÃ¡Ã¡ LÃ¡Ã¡ Bwamu",
        "native":  "LÃ¡Ã¡ LÃ¡Ã¡ Bwamu",
        "supported":  false
    },
    {
        "code":  "bwk",
        "name":  "Bauwaki",
        "native":  "Bauwaki",
        "supported":  false
    },
    {
        "code":  "bwl",
        "name":  "Bwela",
        "native":  "Bwela",
        "supported":  false
    },
    {
        "code":  "bwm",
        "name":  "Biwat",
        "native":  "Biwat",
        "supported":  false
    },
    {
        "code":  "bwn",
        "name":  "Wunai Bunu",
        "native":  "Wunai Bunu",
        "supported":  false
    },
    {
        "code":  "bwo",
        "name":  "Boro (Ethiopia)",
        "native":  "Boro (Ethiopia)",
        "supported":  false
    },
    {
        "code":  "bwp",
        "name":  "Mandobo Bawah",
        "native":  "Mandobo Bawah",
        "supported":  false
    },
    {
        "code":  "bwq",
        "name":  "Southern Bobo MadarÃ©",
        "native":  "Southern Bobo MadarÃ©",
        "supported":  false
    },
    {
        "code":  "bwr",
        "name":  "Bura-Pabir",
        "native":  "Bura-Pabir",
        "supported":  false
    },
    {
        "code":  "bws",
        "name":  "Bomboma",
        "native":  "Bomboma",
        "supported":  false
    },
    {
        "code":  "bwt",
        "name":  "Bafaw-Balong",
        "native":  "Bafaw-Balong",
        "supported":  false
    },
    {
        "code":  "bwu",
        "name":  "Buli (Ghana)",
        "native":  "Buli (Ghana)",
        "supported":  false
    },
    {
        "code":  "bww",
        "name":  "Bwa",
        "native":  "Bwa",
        "supported":  false
    },
    {
        "code":  "bwx",
        "name":  "Bu-Nao Bunu",
        "native":  "Bu-Nao Bunu",
        "supported":  false
    },
    {
        "code":  "bwy",
        "name":  "Cwi Bwamu",
        "native":  "Cwi Bwamu",
        "supported":  false
    },
    {
        "code":  "bwz",
        "name":  "Bwisi",
        "native":  "Bwisi",
        "supported":  false
    },
    {
        "code":  "bxa",
        "name":  "Tairaha",
        "native":  "Tairaha",
        "supported":  false
    },
    {
        "code":  "bxb",
        "name":  "Belanda Bor",
        "native":  "Belanda Bor",
        "supported":  false
    },
    {
        "code":  "bxc",
        "name":  "Molengue",
        "native":  "Molengue",
        "supported":  false
    },
    {
        "code":  "bxd",
        "name":  "Pela",
        "native":  "Pela",
        "supported":  false
    },
    {
        "code":  "bxe",
        "name":  "Birale",
        "native":  "Birale",
        "supported":  false
    },
    {
        "code":  "bxf",
        "name":  "Bilur",
        "native":  "Bilur",
        "supported":  false
    },
    {
        "code":  "bxg",
        "name":  "Bangala",
        "native":  "Bangala",
        "supported":  false
    },
    {
        "code":  "bxh",
        "name":  "Buhutu",
        "native":  "Buhutu",
        "supported":  false
    },
    {
        "code":  "bxi",
        "name":  "Pirlatapa",
        "native":  "Pirlatapa",
        "supported":  false
    },
    {
        "code":  "bxj",
        "name":  "Bayungu",
        "native":  "Bayungu",
        "supported":  false
    },
    {
        "code":  "bxk",
        "name":  "Bukusu",
        "native":  "Bukusu",
        "supported":  false
    },
    {
        "code":  "bxl",
        "name":  "Jalkunan",
        "native":  "Jalkunan",
        "supported":  false
    },
    {
        "code":  "bxm",
        "name":  "Mongolia Buriat",
        "native":  "Mongolia Buriat",
        "supported":  false
    },
    {
        "code":  "bxn",
        "name":  "Burduna",
        "native":  "Burduna",
        "supported":  false
    },
    {
        "code":  "bxo",
        "name":  "Barikanchi",
        "native":  "Barikanchi",
        "supported":  false
    },
    {
        "code":  "bxp",
        "name":  "Bebil",
        "native":  "Bebil",
        "supported":  false
    },
    {
        "code":  "bxq",
        "name":  "Beele",
        "native":  "Beele",
        "supported":  false
    },
    {
        "code":  "bxr",
        "name":  "Russia Buriat",
        "native":  "Russia Buriat",
        "supported":  false
    },
    {
        "code":  "bxs",
        "name":  "Busam",
        "native":  "Busam",
        "supported":  false
    },
    {
        "code":  "bxu",
        "name":  "China Buriat",
        "native":  "China Buriat",
        "supported":  false
    },
    {
        "code":  "bxv",
        "name":  "Berakou",
        "native":  "Berakou",
        "supported":  false
    },
    {
        "code":  "bxw",
        "name":  "Bankagooma",
        "native":  "Bankagooma",
        "supported":  false
    },
    {
        "code":  "bxz",
        "name":  "Binahari",
        "native":  "Binahari",
        "supported":  false
    },
    {
        "code":  "bya",
        "name":  "Batak",
        "native":  "Batak",
        "supported":  false
    },
    {
        "code":  "byb",
        "name":  "Bikya",
        "native":  "Bikya",
        "supported":  false
    },
    {
        "code":  "byc",
        "name":  "Ubaghara",
        "native":  "Ubaghara",
        "supported":  false
    },
    {
        "code":  "byd",
        "name":  "Benyadu\u0027",
        "native":  "Benyadu\u0027",
        "supported":  false
    },
    {
        "code":  "bye",
        "name":  "Pouye",
        "native":  "Pouye",
        "supported":  false
    },
    {
        "code":  "byf",
        "name":  "Bete",
        "native":  "Bete",
        "supported":  false
    },
    {
        "code":  "byg",
        "name":  "Baygo",
        "native":  "Baygo",
        "supported":  false
    },
    {
        "code":  "byh",
        "name":  "Bhujel",
        "native":  "Bhujel",
        "supported":  false
    },
    {
        "code":  "byi",
        "name":  "Buyu",
        "native":  "Buyu",
        "supported":  false
    },
    {
        "code":  "byj",
        "name":  "Bina (Nigeria)",
        "native":  "Bina (Nigeria)",
        "supported":  false
    },
    {
        "code":  "byk",
        "name":  "Biao",
        "native":  "Biao",
        "supported":  false
    },
    {
        "code":  "byl",
        "name":  "Bayono",
        "native":  "Bayono",
        "supported":  false
    },
    {
        "code":  "bym",
        "name":  "Bidjara",
        "native":  "Bidjara",
        "supported":  false
    },
    {
        "code":  "byn",
        "name":  "Bilin",
        "native":  "Bilin",
        "supported":  false
    },
    {
        "code":  "byo",
        "name":  "Biyo",
        "native":  "Biyo",
        "supported":  false
    },
    {
        "code":  "byp",
        "name":  "Bumaji",
        "native":  "Bumaji",
        "supported":  false
    },
    {
        "code":  "byq",
        "name":  "Basay",
        "native":  "Basay",
        "supported":  false
    },
    {
        "code":  "byr",
        "name":  "Baruya",
        "native":  "Baruya",
        "supported":  false
    },
    {
        "code":  "bys",
        "name":  "Burak",
        "native":  "Burak",
        "supported":  false
    },
    {
        "code":  "byt",
        "name":  "Berti",
        "native":  "Berti",
        "supported":  false
    },
    {
        "code":  "byv",
        "name":  "Medumba",
        "native":  "Medumba",
        "supported":  false
    },
    {
        "code":  "byw",
        "name":  "Belhariya",
        "native":  "Belhariya",
        "supported":  false
    },
    {
        "code":  "byx",
        "name":  "Qaqet",
        "native":  "Qaqet",
        "supported":  false
    },
    {
        "code":  "byz",
        "name":  "Banaro",
        "native":  "Banaro",
        "supported":  false
    },
    {
        "code":  "bza",
        "name":  "Bandi",
        "native":  "Bandi",
        "supported":  false
    },
    {
        "code":  "bzb",
        "name":  "Andio",
        "native":  "Andio",
        "supported":  false
    },
    {
        "code":  "bzc",
        "name":  "Southern Betsimisaraka Malagasy",
        "native":  "Southern Betsimisaraka Malagasy",
        "supported":  false
    },
    {
        "code":  "bzd",
        "name":  "Bribri",
        "native":  "Bribri",
        "supported":  false
    },
    {
        "code":  "bze",
        "name":  "Jenaama Bozo",
        "native":  "Jenaama Bozo",
        "supported":  false
    },
    {
        "code":  "bzf",
        "name":  "Boikin",
        "native":  "Boikin",
        "supported":  false
    },
    {
        "code":  "bzg",
        "name":  "Babuza",
        "native":  "Babuza",
        "supported":  false
    },
    {
        "code":  "bzh",
        "name":  "Mapos Buang",
        "native":  "Mapos Buang",
        "supported":  false
    },
    {
        "code":  "bzi",
        "name":  "Bisu",
        "native":  "Bisu",
        "supported":  false
    },
    {
        "code":  "bzj",
        "name":  "Belize Kriol English",
        "native":  "Belize Kriol English",
        "supported":  false
    },
    {
        "code":  "bzk",
        "name":  "Nicaragua Creole English",
        "native":  "Nicaragua Creole English",
        "supported":  false
    },
    {
        "code":  "bzl",
        "name":  "Boano (Sulawesi)",
        "native":  "Boano (Sulawesi)",
        "supported":  false
    },
    {
        "code":  "bzm",
        "name":  "Bolondo",
        "native":  "Bolondo",
        "supported":  false
    },
    {
        "code":  "bzn",
        "name":  "Boano (Maluku)",
        "native":  "Boano (Maluku)",
        "supported":  false
    },
    {
        "code":  "bzo",
        "name":  "Bozaba",
        "native":  "Bozaba",
        "supported":  false
    },
    {
        "code":  "bzp",
        "name":  "Kemberano",
        "native":  "Kemberano",
        "supported":  false
    },
    {
        "code":  "bzq",
        "name":  "Buli (Indonesia)",
        "native":  "Buli (Indonesia)",
        "supported":  false
    },
    {
        "code":  "bzr",
        "name":  "Biri",
        "native":  "Biri",
        "supported":  false
    },
    {
        "code":  "bzs",
        "name":  "Brazilian Sign Language",
        "native":  "Brazilian Sign Language",
        "supported":  false
    },
    {
        "code":  "bzt",
        "name":  "Brithenig",
        "native":  "Brithenig",
        "supported":  false
    },
    {
        "code":  "bzu",
        "name":  "Burmeso",
        "native":  "Burmeso",
        "supported":  false
    },
    {
        "code":  "bzv",
        "name":  "Naami",
        "native":  "Naami",
        "supported":  false
    },
    {
        "code":  "bzw",
        "name":  "Basa (Nigeria)",
        "native":  "Basa (Nigeria)",
        "supported":  false
    },
    {
        "code":  "bzx",
        "name":  "KÉlÉngaxo Bozo",
        "native":  "KÉlÉngaxo Bozo",
        "supported":  false
    },
    {
        "code":  "bzy",
        "name":  "Obanliku",
        "native":  "Obanliku",
        "supported":  false
    },
    {
        "code":  "bzz",
        "name":  "Evant",
        "native":  "Evant",
        "supported":  false
    },
    {
        "code":  "caa",
        "name":  "ChortÃ­",
        "native":  "ChortÃ­",
        "supported":  false
    },
    {
        "code":  "cab",
        "name":  "Garifuna",
        "native":  "Garifuna",
        "supported":  false
    },
    {
        "code":  "cac",
        "name":  "Chuj",
        "native":  "Chuj",
        "supported":  false
    },
    {
        "code":  "cad",
        "name":  "Caddo",
        "native":  "Caddo",
        "supported":  false
    },
    {
        "code":  "cae",
        "name":  "Lehar",
        "native":  "Lehar",
        "supported":  false
    },
    {
        "code":  "caf",
        "name":  "Southern Carrier",
        "native":  "Southern Carrier",
        "supported":  false
    },
    {
        "code":  "cag",
        "name":  "NivaclÃ©",
        "native":  "NivaclÃ©",
        "supported":  false
    },
    {
        "code":  "cah",
        "name":  "Cahuarano",
        "native":  "Cahuarano",
        "supported":  false
    },
    {
        "code":  "caj",
        "name":  "ChanÃ©",
        "native":  "ChanÃ©",
        "supported":  false
    },
    {
        "code":  "cak",
        "name":  "Kaqchikel",
        "native":  "Kaqchikel",
        "supported":  false
    },
    {
        "code":  "cal",
        "name":  "Carolinian",
        "native":  "Carolinian",
        "supported":  false
    },
    {
        "code":  "cam",
        "name":  "CemuhÃ®",
        "native":  "CemuhÃ®",
        "supported":  false
    },
    {
        "code":  "can",
        "name":  "Chambri",
        "native":  "Chambri",
        "supported":  false
    },
    {
        "code":  "cao",
        "name":  "ChÃ¡cobo",
        "native":  "ChÃ¡cobo",
        "supported":  false
    },
    {
        "code":  "cap",
        "name":  "Chipaya",
        "native":  "Chipaya",
        "supported":  false
    },
    {
        "code":  "caq",
        "name":  "Car Nicobarese",
        "native":  "Car Nicobarese",
        "supported":  false
    },
    {
        "code":  "car",
        "name":  "Galibi Carib",
        "native":  "Galibi Carib",
        "supported":  false
    },
    {
        "code":  "cas",
        "name":  "TsimanÃ©",
        "native":  "TsimanÃ©",
        "supported":  false
    },
    {
        "code":  "ca",
        "name":  "Catalan",
        "native":  "Catalan",
        "supported":  false
    },
    {
        "code":  "cav",
        "name":  "CavineÃ±a",
        "native":  "CavineÃ±a",
        "supported":  false
    },
    {
        "code":  "caw",
        "name":  "Callawalla",
        "native":  "Callawalla",
        "supported":  false
    },
    {
        "code":  "cax",
        "name":  "Chiquitano",
        "native":  "Chiquitano",
        "supported":  false
    },
    {
        "code":  "cay",
        "name":  "Cayuga",
        "native":  "Cayuga",
        "supported":  false
    },
    {
        "code":  "caz",
        "name":  "Canichana",
        "native":  "Canichana",
        "supported":  false
    },
    {
        "code":  "cbb",
        "name":  "CabiyarÃ­",
        "native":  "CabiyarÃ­",
        "supported":  false
    },
    {
        "code":  "cbc",
        "name":  "Carapana",
        "native":  "Carapana",
        "supported":  false
    },
    {
        "code":  "cbd",
        "name":  "Carijona",
        "native":  "Carijona",
        "supported":  false
    },
    {
        "code":  "cbg",
        "name":  "Chimila",
        "native":  "Chimila",
        "supported":  false
    },
    {
        "code":  "cbi",
        "name":  "Chachi",
        "native":  "Chachi",
        "supported":  false
    },
    {
        "code":  "cbj",
        "name":  "Ede Cabe",
        "native":  "Ede Cabe",
        "supported":  false
    },
    {
        "code":  "cbk",
        "name":  "Chavacano",
        "native":  "Chavacano",
        "supported":  false
    },
    {
        "code":  "cbl",
        "name":  "Bualkhaw Chin",
        "native":  "Bualkhaw Chin",
        "supported":  false
    },
    {
        "code":  "cbn",
        "name":  "Nyahkur",
        "native":  "Nyahkur",
        "supported":  false
    },
    {
        "code":  "cbo",
        "name":  "Izora",
        "native":  "Izora",
        "supported":  false
    },
    {
        "code":  "cbq",
        "name":  "Tsucuba",
        "native":  "Tsucuba",
        "supported":  false
    },
    {
        "code":  "cbr",
        "name":  "Cashibo-Cacataibo",
        "native":  "Cashibo-Cacataibo",
        "supported":  false
    },
    {
        "code":  "cbs",
        "name":  "Cashinahua",
        "native":  "Cashinahua",
        "supported":  false
    },
    {
        "code":  "cbt",
        "name":  "Chayahuita",
        "native":  "Chayahuita",
        "supported":  false
    },
    {
        "code":  "cbu",
        "name":  "Candoshi-Shapra",
        "native":  "Candoshi-Shapra",
        "supported":  false
    },
    {
        "code":  "cbv",
        "name":  "Cacua",
        "native":  "Cacua",
        "supported":  false
    },
    {
        "code":  "cbw",
        "name":  "Kinabalian",
        "native":  "Kinabalian",
        "supported":  false
    },
    {
        "code":  "cby",
        "name":  "Carabayo",
        "native":  "Carabayo",
        "supported":  false
    },
    {
        "code":  "ccc",
        "name":  "Chamicuro",
        "native":  "Chamicuro",
        "supported":  false
    },
    {
        "code":  "ccd",
        "name":  "Cafundo Creole",
        "native":  "Cafundo Creole",
        "supported":  false
    },
    {
        "code":  "cce",
        "name":  "Chopi",
        "native":  "Chopi",
        "supported":  false
    },
    {
        "code":  "ccg",
        "name":  "Samba Daka",
        "native":  "Samba Daka",
        "supported":  false
    },
    {
        "code":  "cch",
        "name":  "Atsam",
        "native":  "Atsam",
        "supported":  false
    },
    {
        "code":  "ccj",
        "name":  "Kasanga",
        "native":  "Kasanga",
        "supported":  false
    },
    {
        "code":  "ccl",
        "name":  "Cutchi-Swahili",
        "native":  "Cutchi-Swahili",
        "supported":  false
    },
    {
        "code":  "ccm",
        "name":  "Malaccan Creole Malay",
        "native":  "Malaccan Creole Malay",
        "supported":  false
    },
    {
        "code":  "cco",
        "name":  "Comaltepec Chinantec",
        "native":  "Comaltepec Chinantec",
        "supported":  false
    },
    {
        "code":  "ccp",
        "name":  "Chakma",
        "native":  "Chakma",
        "supported":  false
    },
    {
        "code":  "ccr",
        "name":  "Cacaopera",
        "native":  "Cacaopera",
        "supported":  false
    },
    {
        "code":  "cda",
        "name":  "Choni",
        "native":  "Choni",
        "supported":  false
    },
    {
        "code":  "cde",
        "name":  "Chenchu",
        "native":  "Chenchu",
        "supported":  false
    },
    {
        "code":  "cdf",
        "name":  "Chiru",
        "native":  "Chiru",
        "supported":  false
    },
    {
        "code":  "cdh",
        "name":  "Chambeali",
        "native":  "Chambeali",
        "supported":  false
    },
    {
        "code":  "cdi",
        "name":  "Chodri",
        "native":  "Chodri",
        "supported":  false
    },
    {
        "code":  "cdj",
        "name":  "Churahi",
        "native":  "Churahi",
        "supported":  false
    },
    {
        "code":  "cdm",
        "name":  "Chepang",
        "native":  "Chepang",
        "supported":  false
    },
    {
        "code":  "cdn",
        "name":  "Chaudangsi",
        "native":  "Chaudangsi",
        "supported":  false
    },
    {
        "code":  "cdo",
        "name":  "Min Dong Chinese",
        "native":  "Min Dong Chinese",
        "supported":  false
    },
    {
        "code":  "cdr",
        "name":  "Cinda-Regi-Tiyal",
        "native":  "Cinda-Regi-Tiyal",
        "supported":  false
    },
    {
        "code":  "cds",
        "name":  "Chadian Sign Language",
        "native":  "Chadian Sign Language",
        "supported":  false
    },
    {
        "code":  "cdy",
        "name":  "Chadong",
        "native":  "Chadong",
        "supported":  false
    },
    {
        "code":  "cdz",
        "name":  "Koda",
        "native":  "Koda",
        "supported":  false
    },
    {
        "code":  "cea",
        "name":  "Lower Chehalis",
        "native":  "Lower Chehalis",
        "supported":  false
    },
    {
        "code":  "ceb",
        "name":  "Cebuano",
        "native":  "Cebuano",
        "supported":  false
    },
    {
        "code":  "ceg",
        "name":  "Chamacoco",
        "native":  "Chamacoco",
        "supported":  false
    },
    {
        "code":  "cek",
        "name":  "Eastern Khumi Chin",
        "native":  "Eastern Khumi Chin",
        "supported":  false
    },
    {
        "code":  "cen",
        "name":  "Cen",
        "native":  "Cen",
        "supported":  false
    },
    {
        "code":  "cet",
        "name":  "CentÃºÃºm",
        "native":  "CentÃºÃºm",
        "supported":  false
    },
    {
        "code":  "cey",
        "name":  "Ekai Chin",
        "native":  "Ekai Chin",
        "supported":  false
    },
    {
        "code":  "cfa",
        "name":  "Dijim-Bwilim",
        "native":  "Dijim-Bwilim",
        "supported":  false
    },
    {
        "code":  "cfd",
        "name":  "Cara",
        "native":  "Cara",
        "supported":  false
    },
    {
        "code":  "cfg",
        "name":  "Como Karim",
        "native":  "Como Karim",
        "supported":  false
    },
    {
        "code":  "cfm",
        "name":  "Falam Chin",
        "native":  "Falam Chin",
        "supported":  false
    },
    {
        "code":  "cga",
        "name":  "Changriwa",
        "native":  "Changriwa",
        "supported":  false
    },
    {
        "code":  "cgc",
        "name":  "Kagayanen",
        "native":  "Kagayanen",
        "supported":  false
    },
    {
        "code":  "cgg",
        "name":  "Chiga",
        "native":  "Chiga",
        "supported":  false
    },
    {
        "code":  "cgk",
        "name":  "Chocangacakha",
        "native":  "Chocangacakha",
        "supported":  false
    },
    {
        "code":  "ch",
        "name":  "Chamorro",
        "native":  "Chamorro",
        "supported":  false
    },
    {
        "code":  "chb",
        "name":  "Chibcha",
        "native":  "Chibcha",
        "supported":  false
    },
    {
        "code":  "chc",
        "name":  "Catawba",
        "native":  "Catawba",
        "supported":  false
    },
    {
        "code":  "chd",
        "name":  "Highland Oaxaca Chontal",
        "native":  "Highland Oaxaca Chontal",
        "supported":  false
    },
    {
        "code":  "ce",
        "name":  "Chechen",
        "native":  "Chechen",
        "supported":  false
    },
    {
        "code":  "chf",
        "name":  "Tabasco Chontal",
        "native":  "Tabasco Chontal",
        "supported":  false
    },
    {
        "code":  "chg",
        "name":  "Chagatai",
        "native":  "Chagatai",
        "supported":  false
    },
    {
        "code":  "chh",
        "name":  "Chinook",
        "native":  "Chinook",
        "supported":  false
    },
    {
        "code":  "chj",
        "name":  "OjitlÃ¡n Chinantec",
        "native":  "OjitlÃ¡n Chinantec",
        "supported":  false
    },
    {
        "code":  "chk",
        "name":  "Chuukese",
        "native":  "Chuukese",
        "supported":  false
    },
    {
        "code":  "chl",
        "name":  "Cahuilla",
        "native":  "Cahuilla",
        "supported":  false
    },
    {
        "code":  "chm",
        "name":  "Mari (Russia)",
        "native":  "Mari (Russia)",
        "supported":  false
    },
    {
        "code":  "chn",
        "name":  "Chinook jargon",
        "native":  "Chinook jargon",
        "supported":  false
    },
    {
        "code":  "cho",
        "name":  "Choctaw",
        "native":  "Choctaw",
        "supported":  false
    },
    {
        "code":  "chp",
        "name":  "Chipewyan",
        "native":  "Chipewyan",
        "supported":  false
    },
    {
        "code":  "chq",
        "name":  "Quiotepec Chinantec",
        "native":  "Quiotepec Chinantec",
        "supported":  false
    },
    {
        "code":  "chr",
        "name":  "Cherokee",
        "native":  "Cherokee",
        "supported":  false
    },
    {
        "code":  "cht",
        "name":  "CholÃ³n",
        "native":  "CholÃ³n",
        "supported":  false
    },
    {
        "code":  "cu",
        "name":  "Church Slavic",
        "native":  "Church Slavic",
        "supported":  false
    },
    {
        "code":  "cv",
        "name":  "Chuvash",
        "native":  "Chuvash",
        "supported":  false
    },
    {
        "code":  "chw",
        "name":  "Chuwabu",
        "native":  "Chuwabu",
        "supported":  false
    },
    {
        "code":  "chx",
        "name":  "Chantyal",
        "native":  "Chantyal",
        "supported":  false
    },
    {
        "code":  "chy",
        "name":  "Cheyenne",
        "native":  "Cheyenne",
        "supported":  false
    },
    {
        "code":  "chz",
        "name":  "OzumacÃ­n Chinantec",
        "native":  "OzumacÃ­n Chinantec",
        "supported":  false
    },
    {
        "code":  "cia",
        "name":  "Cia-Cia",
        "native":  "Cia-Cia",
        "supported":  false
    },
    {
        "code":  "cib",
        "name":  "Ci Gbe",
        "native":  "Ci Gbe",
        "supported":  false
    },
    {
        "code":  "cic",
        "name":  "Chickasaw",
        "native":  "Chickasaw",
        "supported":  false
    },
    {
        "code":  "cid",
        "name":  "Chimariko",
        "native":  "Chimariko",
        "supported":  false
    },
    {
        "code":  "cie",
        "name":  "Cineni",
        "native":  "Cineni",
        "supported":  false
    },
    {
        "code":  "cih",
        "name":  "Chinali",
        "native":  "Chinali",
        "supported":  false
    },
    {
        "code":  "cik",
        "name":  "Chitkuli Kinnauri",
        "native":  "Chitkuli Kinnauri",
        "supported":  false
    },
    {
        "code":  "cim",
        "name":  "Cimbrian",
        "native":  "Cimbrian",
        "supported":  false
    },
    {
        "code":  "cin",
        "name":  "Cinta Larga",
        "native":  "Cinta Larga",
        "supported":  false
    },
    {
        "code":  "cip",
        "name":  "Chiapanec",
        "native":  "Chiapanec",
        "supported":  false
    },
    {
        "code":  "cir",
        "name":  "Tiri",
        "native":  "Tiri",
        "supported":  false
    },
    {
        "code":  "ciw",
        "name":  "Chippewa",
        "native":  "Chippewa",
        "supported":  false
    },
    {
        "code":  "ciy",
        "name":  "Chaima",
        "native":  "Chaima",
        "supported":  false
    },
    {
        "code":  "cja",
        "name":  "Western Cham",
        "native":  "Western Cham",
        "supported":  false
    },
    {
        "code":  "cje",
        "name":  "Chru",
        "native":  "Chru",
        "supported":  false
    },
    {
        "code":  "cjh",
        "name":  "Upper Chehalis",
        "native":  "Upper Chehalis",
        "supported":  false
    },
    {
        "code":  "cji",
        "name":  "Chamalal",
        "native":  "Chamalal",
        "supported":  false
    },
    {
        "code":  "cjk",
        "name":  "Chokwe",
        "native":  "Chokwe",
        "supported":  false
    },
    {
        "code":  "cjm",
        "name":  "Eastern Cham",
        "native":  "Eastern Cham",
        "supported":  false
    },
    {
        "code":  "cjn",
        "name":  "Chenapian",
        "native":  "Chenapian",
        "supported":  false
    },
    {
        "code":  "cjo",
        "name":  "AshÃ©ninka Pajonal",
        "native":  "AshÃ©ninka Pajonal",
        "supported":  false
    },
    {
        "code":  "cjp",
        "name":  "CabÃ©car",
        "native":  "CabÃ©car",
        "supported":  false
    },
    {
        "code":  "cjs",
        "name":  "Shor",
        "native":  "Shor",
        "supported":  false
    },
    {
        "code":  "cjv",
        "name":  "Chuave",
        "native":  "Chuave",
        "supported":  false
    },
    {
        "code":  "cjy",
        "name":  "Jinyu Chinese",
        "native":  "Jinyu Chinese",
        "supported":  false
    },
    {
        "code":  "ckb",
        "name":  "Central Kurdish",
        "native":  "Central Kurdish",
        "supported":  false
    },
    {
        "code":  "ckh",
        "name":  "Chak",
        "native":  "Chak",
        "supported":  false
    },
    {
        "code":  "ckl",
        "name":  "Cibak",
        "native":  "Cibak",
        "supported":  false
    },
    {
        "code":  "ckm",
        "name":  "Chakavian",
        "native":  "Chakavian",
        "supported":  false
    },
    {
        "code":  "ckn",
        "name":  "Kaang Chin",
        "native":  "Kaang Chin",
        "supported":  false
    },
    {
        "code":  "cko",
        "name":  "Anufo",
        "native":  "Anufo",
        "supported":  false
    },
    {
        "code":  "ckq",
        "name":  "Kajakse",
        "native":  "Kajakse",
        "supported":  false
    },
    {
        "code":  "ckr",
        "name":  "Kairak",
        "native":  "Kairak",
        "supported":  false
    },
    {
        "code":  "cks",
        "name":  "Tayo",
        "native":  "Tayo",
        "supported":  false
    },
    {
        "code":  "ckt",
        "name":  "Chukot",
        "native":  "Chukot",
        "supported":  false
    },
    {
        "code":  "cku",
        "name":  "Koasati",
        "native":  "Koasati",
        "supported":  false
    },
    {
        "code":  "ckv",
        "name":  "Kavalan",
        "native":  "Kavalan",
        "supported":  false
    },
    {
        "code":  "ckx",
        "name":  "Caka",
        "native":  "Caka",
        "supported":  false
    },
    {
        "code":  "cky",
        "name":  "Cakfem-Mushere",
        "native":  "Cakfem-Mushere",
        "supported":  false
    },
    {
        "code":  "ckz",
        "name":  "Cakchiquel-QuichÃ© Mixed Language",
        "native":  "Cakchiquel-QuichÃ© Mixed Language",
        "supported":  false
    },
    {
        "code":  "cla",
        "name":  "Ron",
        "native":  "Ron",
        "supported":  false
    },
    {
        "code":  "clc",
        "name":  "Chilcotin",
        "native":  "Chilcotin",
        "supported":  false
    },
    {
        "code":  "cld",
        "name":  "Chaldean Neo-Aramaic",
        "native":  "Chaldean Neo-Aramaic",
        "supported":  false
    },
    {
        "code":  "cle",
        "name":  "Lealao Chinantec",
        "native":  "Lealao Chinantec",
        "supported":  false
    },
    {
        "code":  "clh",
        "name":  "Chilisso",
        "native":  "Chilisso",
        "supported":  false
    },
    {
        "code":  "cli",
        "name":  "Chakali",
        "native":  "Chakali",
        "supported":  false
    },
    {
        "code":  "clj",
        "name":  "Laitu Chin",
        "native":  "Laitu Chin",
        "supported":  false
    },
    {
        "code":  "clk",
        "name":  "Idu-Mishmi",
        "native":  "Idu-Mishmi",
        "supported":  false
    },
    {
        "code":  "cll",
        "name":  "Chala",
        "native":  "Chala",
        "supported":  false
    },
    {
        "code":  "clm",
        "name":  "Clallam",
        "native":  "Clallam",
        "supported":  false
    },
    {
        "code":  "clo",
        "name":  "Lowland Oaxaca Chontal",
        "native":  "Lowland Oaxaca Chontal",
        "supported":  false
    },
    {
        "code":  "clt",
        "name":  "Lautu Chin",
        "native":  "Lautu Chin",
        "supported":  false
    },
    {
        "code":  "clu",
        "name":  "Caluyanun",
        "native":  "Caluyanun",
        "supported":  false
    },
    {
        "code":  "clw",
        "name":  "Chulym",
        "native":  "Chulym",
        "supported":  false
    },
    {
        "code":  "cly",
        "name":  "Eastern Highland Chatino",
        "native":  "Eastern Highland Chatino",
        "supported":  false
    },
    {
        "code":  "cma",
        "name":  "Maa",
        "native":  "Maa",
        "supported":  false
    },
    {
        "code":  "cme",
        "name":  "Cerma",
        "native":  "Cerma",
        "supported":  false
    },
    {
        "code":  "cmg",
        "name":  "Classical Mongolian",
        "native":  "Classical Mongolian",
        "supported":  false
    },
    {
        "code":  "cmi",
        "name":  "EmberÃ¡-ChamÃ­",
        "native":  "EmberÃ¡-ChamÃ­",
        "supported":  false
    },
    {
        "code":  "cml",
        "name":  "Campalagian",
        "native":  "Campalagian",
        "supported":  false
    },
    {
        "code":  "cmm",
        "name":  "Michigamea",
        "native":  "Michigamea",
        "supported":  false
    },
    {
        "code":  "cmn",
        "name":  "Mandarin Chinese",
        "native":  "Mandarin Chinese",
        "supported":  false
    },
    {
        "code":  "cmo",
        "name":  "Central Mnong",
        "native":  "Central Mnong",
        "supported":  false
    },
    {
        "code":  "cmr",
        "name":  "Mro-Khimi Chin",
        "native":  "Mro-Khimi Chin",
        "supported":  false
    },
    {
        "code":  "cms",
        "name":  "Messapic",
        "native":  "Messapic",
        "supported":  false
    },
    {
        "code":  "cmt",
        "name":  "Camtho",
        "native":  "Camtho",
        "supported":  false
    },
    {
        "code":  "cna",
        "name":  "Changthang",
        "native":  "Changthang",
        "supported":  false
    },
    {
        "code":  "cnb",
        "name":  "Chinbon Chin",
        "native":  "Chinbon Chin",
        "supported":  false
    },
    {
        "code":  "cnc",
        "name":  "CÃ´Ã´ng",
        "native":  "CÃ´Ã´ng",
        "supported":  false
    },
    {
        "code":  "cng",
        "name":  "Northern Qiang",
        "native":  "Northern Qiang",
        "supported":  false
    },
    {
        "code":  "cnh",
        "name":  "Hakha Chin",
        "native":  "Hakha Chin",
        "supported":  false
    },
    {
        "code":  "cni",
        "name":  "AshÃ¡ninka",
        "native":  "AshÃ¡ninka",
        "supported":  false
    },
    {
        "code":  "cnk",
        "name":  "Khumi Chin",
        "native":  "Khumi Chin",
        "supported":  false
    },
    {
        "code":  "cnl",
        "name":  "Lalana Chinantec",
        "native":  "Lalana Chinantec",
        "supported":  false
    },
    {
        "code":  "cno",
        "name":  "Con",
        "native":  "Con",
        "supported":  false
    },
    {
        "code":  "cnp",
        "name":  "Northern Ping Chinese",
        "native":  "Northern Ping Chinese",
        "supported":  false
    },
    {
        "code":  "cnr",
        "name":  "Montenegrin",
        "native":  "Montenegrin",
        "supported":  false
    },
    {
        "code":  "cns",
        "name":  "Central Asmat",
        "native":  "Central Asmat",
        "supported":  false
    },
    {
        "code":  "cnt",
        "name":  "Tepetotutla Chinantec",
        "native":  "Tepetotutla Chinantec",
        "supported":  false
    },
    {
        "code":  "cnu",
        "name":  "Chenoua",
        "native":  "Chenoua",
        "supported":  false
    },
    {
        "code":  "cnw",
        "name":  "Ngawn Chin",
        "native":  "Ngawn Chin",
        "supported":  false
    },
    {
        "code":  "cnx",
        "name":  "Middle Cornish",
        "native":  "Middle Cornish",
        "supported":  false
    },
    {
        "code":  "coa",
        "name":  "Cocos Islands Malay",
        "native":  "Cocos Islands Malay",
        "supported":  false
    },
    {
        "code":  "cob",
        "name":  "Chicomuceltec",
        "native":  "Chicomuceltec",
        "supported":  false
    },
    {
        "code":  "coc",
        "name":  "Cocopa",
        "native":  "Cocopa",
        "supported":  false
    },
    {
        "code":  "cod",
        "name":  "Cocama-Cocamilla",
        "native":  "Cocama-Cocamilla",
        "supported":  false
    },
    {
        "code":  "coe",
        "name":  "Koreguaje",
        "native":  "Koreguaje",
        "supported":  false
    },
    {
        "code":  "cof",
        "name":  "Colorado",
        "native":  "Colorado",
        "supported":  false
    },
    {
        "code":  "cog",
        "name":  "Chong",
        "native":  "Chong",
        "supported":  false
    },
    {
        "code":  "coh",
        "name":  "Chonyi-Dzihana-Kauma",
        "native":  "Chonyi-Dzihana-Kauma",
        "supported":  false
    },
    {
        "code":  "coj",
        "name":  "Cochimi",
        "native":  "Cochimi",
        "supported":  false
    },
    {
        "code":  "cok",
        "name":  "Santa Teresa Cora",
        "native":  "Santa Teresa Cora",
        "supported":  false
    },
    {
        "code":  "col",
        "name":  "Columbia-Wenatchi",
        "native":  "Columbia-Wenatchi",
        "supported":  false
    },
    {
        "code":  "com",
        "name":  "Comanche",
        "native":  "Comanche",
        "supported":  false
    },
    {
        "code":  "con",
        "name":  "CofÃ¡n",
        "native":  "CofÃ¡n",
        "supported":  false
    },
    {
        "code":  "coo",
        "name":  "Comox",
        "native":  "Comox",
        "supported":  false
    },
    {
        "code":  "cop",
        "name":  "Coptic",
        "native":  "Coptic",
        "supported":  false
    },
    {
        "code":  "coq",
        "name":  "Coquille",
        "native":  "Coquille",
        "supported":  false
    },
    {
        "code":  "kw",
        "name":  "Cornish",
        "native":  "Cornish",
        "supported":  false
    },
    {
        "code":  "co",
        "name":  "Corsican",
        "native":  "Corsican",
        "supported":  false
    },
    {
        "code":  "cot",
        "name":  "Caquinte",
        "native":  "Caquinte",
        "supported":  false
    },
    {
        "code":  "cou",
        "name":  "Wamey",
        "native":  "Wamey",
        "supported":  false
    },
    {
        "code":  "cov",
        "name":  "Cao Miao",
        "native":  "Cao Miao",
        "supported":  false
    },
    {
        "code":  "cow",
        "name":  "Cowlitz",
        "native":  "Cowlitz",
        "supported":  false
    },
    {
        "code":  "cox",
        "name":  "Nanti",
        "native":  "Nanti",
        "supported":  false
    },
    {
        "code":  "coz",
        "name":  "Chochotec",
        "native":  "Chochotec",
        "supported":  false
    },
    {
        "code":  "cpa",
        "name":  "Palantla Chinantec",
        "native":  "Palantla Chinantec",
        "supported":  false
    },
    {
        "code":  "cpb",
        "name":  "Ucayali-YurÃºa AshÃ©ninka",
        "native":  "Ucayali-YurÃºa AshÃ©ninka",
        "supported":  false
    },
    {
        "code":  "cpc",
        "name":  "AjyÃ­ninka Apurucayali",
        "native":  "AjyÃ­ninka Apurucayali",
        "supported":  false
    },
    {
        "code":  "cpg",
        "name":  "Cappadocian Greek",
        "native":  "Cappadocian Greek",
        "supported":  false
    },
    {
        "code":  "cpi",
        "name":  "Chinese Pidgin English",
        "native":  "Chinese Pidgin English",
        "supported":  false
    },
    {
        "code":  "cpn",
        "name":  "Cherepon",
        "native":  "Cherepon",
        "supported":  false
    },
    {
        "code":  "cpo",
        "name":  "Kpeego",
        "native":  "Kpeego",
        "supported":  false
    },
    {
        "code":  "cps",
        "name":  "Capiznon",
        "native":  "Capiznon",
        "supported":  false
    },
    {
        "code":  "cpu",
        "name":  "Pichis AshÃ©ninka",
        "native":  "Pichis AshÃ©ninka",
        "supported":  false
    },
    {
        "code":  "cpx",
        "name":  "Pu-Xian Chinese",
        "native":  "Pu-Xian Chinese",
        "supported":  false
    },
    {
        "code":  "cpy",
        "name":  "South Ucayali AshÃ©ninka",
        "native":  "South Ucayali AshÃ©ninka",
        "supported":  false
    },
    {
        "code":  "cqd",
        "name":  "Chuanqiandian Cluster Miao",
        "native":  "Chuanqiandian Cluster Miao",
        "supported":  false
    },
    {
        "code":  "cra",
        "name":  "Chara",
        "native":  "Chara",
        "supported":  false
    },
    {
        "code":  "crb",
        "name":  "Island Carib",
        "native":  "Island Carib",
        "supported":  false
    },
    {
        "code":  "crc",
        "name":  "Lonwolwol",
        "native":  "Lonwolwol",
        "supported":  false
    },
    {
        "code":  "crd",
        "name":  "Coeur d\u0027Alene",
        "native":  "Coeur d\u0027Alene",
        "supported":  false
    },
    {
        "code":  "cr",
        "name":  "Cree",
        "native":  "Cree",
        "supported":  false
    },
    {
        "code":  "crf",
        "name":  "Caramanta",
        "native":  "Caramanta",
        "supported":  false
    },
    {
        "code":  "crg",
        "name":  "Michif",
        "native":  "Michif",
        "supported":  false
    },
    {
        "code":  "crh",
        "name":  "Crimean Tatar",
        "native":  "Crimean Tatar",
        "supported":  false
    },
    {
        "code":  "cri",
        "name":  "SÃ£otomense",
        "native":  "SÃ£otomense",
        "supported":  false
    },
    {
        "code":  "crj",
        "name":  "Southern East Cree",
        "native":  "Southern East Cree",
        "supported":  false
    },
    {
        "code":  "crk",
        "name":  "Plains Cree",
        "native":  "Plains Cree",
        "supported":  false
    },
    {
        "code":  "crl",
        "name":  "Northern East Cree",
        "native":  "Northern East Cree",
        "supported":  false
    },
    {
        "code":  "crm",
        "name":  "Moose Cree",
        "native":  "Moose Cree",
        "supported":  false
    },
    {
        "code":  "crn",
        "name":  "El Nayar Cora",
        "native":  "El Nayar Cora",
        "supported":  false
    },
    {
        "code":  "cro",
        "name":  "Crow",
        "native":  "Crow",
        "supported":  false
    },
    {
        "code":  "crq",
        "name":  "Iyo\u0027wujwa Chorote",
        "native":  "Iyo\u0027wujwa Chorote",
        "supported":  false
    },
    {
        "code":  "crr",
        "name":  "Carolina Algonquian",
        "native":  "Carolina Algonquian",
        "supported":  false
    },
    {
        "code":  "crs",
        "name":  "Seselwa Creole French",
        "native":  "Seselwa Creole French",
        "supported":  false
    },
    {
        "code":  "crt",
        "name":  "Iyojwa\u0027ja Chorote",
        "native":  "Iyojwa\u0027ja Chorote",
        "supported":  false
    },
    {
        "code":  "crv",
        "name":  "Chaura",
        "native":  "Chaura",
        "supported":  false
    },
    {
        "code":  "crw",
        "name":  "Chrau",
        "native":  "Chrau",
        "supported":  false
    },
    {
        "code":  "crx",
        "name":  "Carrier",
        "native":  "Carrier",
        "supported":  false
    },
    {
        "code":  "cry",
        "name":  "Cori",
        "native":  "Cori",
        "supported":  false
    },
    {
        "code":  "crz",
        "name":  "CruzeÃ±o",
        "native":  "CruzeÃ±o",
        "supported":  false
    },
    {
        "code":  "csa",
        "name":  "Chiltepec Chinantec",
        "native":  "Chiltepec Chinantec",
        "supported":  false
    },
    {
        "code":  "csb",
        "name":  "Kashubian",
        "native":  "Kashubian",
        "supported":  false
    },
    {
        "code":  "csc",
        "name":  "Catalan Sign Language",
        "native":  "Catalan Sign Language",
        "supported":  false
    },
    {
        "code":  "csd",
        "name":  "Chiangmai Sign Language",
        "native":  "Chiangmai Sign Language",
        "supported":  false
    },
    {
        "code":  "cse",
        "name":  "Czech Sign Language",
        "native":  "Czech Sign Language",
        "supported":  false
    },
    {
        "code":  "csf",
        "name":  "Cuba Sign Language",
        "native":  "Cuba Sign Language",
        "supported":  false
    },
    {
        "code":  "csg",
        "name":  "Chilean Sign Language",
        "native":  "Chilean Sign Language",
        "supported":  false
    },
    {
        "code":  "csh",
        "name":  "Asho Chin",
        "native":  "Asho Chin",
        "supported":  false
    },
    {
        "code":  "csi",
        "name":  "Coast Miwok",
        "native":  "Coast Miwok",
        "supported":  false
    },
    {
        "code":  "csj",
        "name":  "Songlai Chin",
        "native":  "Songlai Chin",
        "supported":  false
    },
    {
        "code":  "csk",
        "name":  "Jola-Kasa",
        "native":  "Jola-Kasa",
        "supported":  false
    },
    {
        "code":  "csl",
        "name":  "Chinese Sign Language",
        "native":  "Chinese Sign Language",
        "supported":  false
    },
    {
        "code":  "csm",
        "name":  "Central Sierra Miwok",
        "native":  "Central Sierra Miwok",
        "supported":  false
    },
    {
        "code":  "csn",
        "name":  "Colombian Sign Language",
        "native":  "Colombian Sign Language",
        "supported":  false
    },
    {
        "code":  "cso",
        "name":  "Sochiapam Chinantec",
        "native":  "Sochiapam Chinantec",
        "supported":  false
    },
    {
        "code":  "csp",
        "name":  "Southern Ping Chinese",
        "native":  "Southern Ping Chinese",
        "supported":  false
    },
    {
        "code":  "csq",
        "name":  "Croatia Sign Language",
        "native":  "Croatia Sign Language",
        "supported":  false
    },
    {
        "code":  "csr",
        "name":  "Costa Rican Sign Language",
        "native":  "Costa Rican Sign Language",
        "supported":  false
    },
    {
        "code":  "css",
        "name":  "Southern Ohlone",
        "native":  "Southern Ohlone",
        "supported":  false
    },
    {
        "code":  "cst",
        "name":  "Northern Ohlone",
        "native":  "Northern Ohlone",
        "supported":  false
    },
    {
        "code":  "csv",
        "name":  "Sumtu Chin",
        "native":  "Sumtu Chin",
        "supported":  false
    },
    {
        "code":  "csw",
        "name":  "Swampy Cree",
        "native":  "Swampy Cree",
        "supported":  false
    },
    {
        "code":  "csy",
        "name":  "Siyin Chin",
        "native":  "Siyin Chin",
        "supported":  false
    },
    {
        "code":  "csz",
        "name":  "Coos",
        "native":  "Coos",
        "supported":  false
    },
    {
        "code":  "cta",
        "name":  "Tataltepec Chatino",
        "native":  "Tataltepec Chatino",
        "supported":  false
    },
    {
        "code":  "ctc",
        "name":  "Chetco",
        "native":  "Chetco",
        "supported":  false
    },
    {
        "code":  "ctd",
        "name":  "Tedim Chin",
        "native":  "Tedim Chin",
        "supported":  false
    },
    {
        "code":  "cte",
        "name":  "Tepinapa Chinantec",
        "native":  "Tepinapa Chinantec",
        "supported":  false
    },
    {
        "code":  "ctg",
        "name":  "Chittagonian",
        "native":  "Chittagonian",
        "supported":  false
    },
    {
        "code":  "cth",
        "name":  "Thaiphum Chin",
        "native":  "Thaiphum Chin",
        "supported":  false
    },
    {
        "code":  "ctl",
        "name":  "Tlacoatzintepec Chinantec",
        "native":  "Tlacoatzintepec Chinantec",
        "supported":  false
    },
    {
        "code":  "ctm",
        "name":  "Chitimacha",
        "native":  "Chitimacha",
        "supported":  false
    },
    {
        "code":  "ctn",
        "name":  "Chhintange",
        "native":  "Chhintange",
        "supported":  false
    },
    {
        "code":  "cto",
        "name":  "EmberÃ¡-CatÃ­o",
        "native":  "EmberÃ¡-CatÃ­o",
        "supported":  false
    },
    {
        "code":  "ctp",
        "name":  "Western Highland Chatino",
        "native":  "Western Highland Chatino",
        "supported":  false
    },
    {
        "code":  "cts",
        "name":  "Northern Catanduanes Bikol",
        "native":  "Northern Catanduanes Bikol",
        "supported":  false
    },
    {
        "code":  "ctt",
        "name":  "Wayanad Chetti",
        "native":  "Wayanad Chetti",
        "supported":  false
    },
    {
        "code":  "ctu",
        "name":  "Chol",
        "native":  "Chol",
        "supported":  false
    },
    {
        "code":  "ctz",
        "name":  "Zacatepec Chatino",
        "native":  "Zacatepec Chatino",
        "supported":  false
    },
    {
        "code":  "cua",
        "name":  "Cua",
        "native":  "Cua",
        "supported":  false
    },
    {
        "code":  "cub",
        "name":  "Cubeo",
        "native":  "Cubeo",
        "supported":  false
    },
    {
        "code":  "cuc",
        "name":  "Usila Chinantec",
        "native":  "Usila Chinantec",
        "supported":  false
    },
    {
        "code":  "cug",
        "name":  "Chungmboko",
        "native":  "Chungmboko",
        "supported":  false
    },
    {
        "code":  "cuh",
        "name":  "Chuka",
        "native":  "Chuka",
        "supported":  false
    },
    {
        "code":  "cui",
        "name":  "Cuiba",
        "native":  "Cuiba",
        "supported":  false
    },
    {
        "code":  "cuj",
        "name":  "Mashco Piro",
        "native":  "Mashco Piro",
        "supported":  false
    },
    {
        "code":  "cuk",
        "name":  "San Blas Kuna",
        "native":  "San Blas Kuna",
        "supported":  false
    },
    {
        "code":  "cul",
        "name":  "Culina",
        "native":  "Culina",
        "supported":  false
    },
    {
        "code":  "cuo",
        "name":  "Cumanagoto",
        "native":  "Cumanagoto",
        "supported":  false
    },
    {
        "code":  "cup",
        "name":  "CupeÃ±o",
        "native":  "CupeÃ±o",
        "supported":  false
    },
    {
        "code":  "cuq",
        "name":  "Cun",
        "native":  "Cun",
        "supported":  false
    },
    {
        "code":  "cur",
        "name":  "Chhulung",
        "native":  "Chhulung",
        "supported":  false
    },
    {
        "code":  "cut",
        "name":  "Teutila Cuicatec",
        "native":  "Teutila Cuicatec",
        "supported":  false
    },
    {
        "code":  "cuu",
        "name":  "Tai Ya",
        "native":  "Tai Ya",
        "supported":  false
    },
    {
        "code":  "cuv",
        "name":  "Cuvok",
        "native":  "Cuvok",
        "supported":  false
    },
    {
        "code":  "cuw",
        "name":  "Chukwa",
        "native":  "Chukwa",
        "supported":  false
    },
    {
        "code":  "cux",
        "name":  "Tepeuxila Cuicatec",
        "native":  "Tepeuxila Cuicatec",
        "supported":  false
    },
    {
        "code":  "cuy",
        "name":  "Cuitlatec",
        "native":  "Cuitlatec",
        "supported":  false
    },
    {
        "code":  "cvg",
        "name":  "Chug",
        "native":  "Chug",
        "supported":  false
    },
    {
        "code":  "cvn",
        "name":  "Valle Nacional Chinantec",
        "native":  "Valle Nacional Chinantec",
        "supported":  false
    },
    {
        "code":  "cwa",
        "name":  "Kabwa",
        "native":  "Kabwa",
        "supported":  false
    },
    {
        "code":  "cwb",
        "name":  "Maindo",
        "native":  "Maindo",
        "supported":  false
    },
    {
        "code":  "cwd",
        "name":  "Woods Cree",
        "native":  "Woods Cree",
        "supported":  false
    },
    {
        "code":  "cwe",
        "name":  "Kwere",
        "native":  "Kwere",
        "supported":  false
    },
    {
        "code":  "cwg",
        "name":  "Chewong",
        "native":  "Chewong",
        "supported":  false
    },
    {
        "code":  "cwt",
        "name":  "Kuwaataay",
        "native":  "Kuwaataay",
        "supported":  false
    },
    {
        "code":  "cya",
        "name":  "Nopala Chatino",
        "native":  "Nopala Chatino",
        "supported":  false
    },
    {
        "code":  "cyb",
        "name":  "Cayubaba",
        "native":  "Cayubaba",
        "supported":  false
    },
    {
        "code":  "cy",
        "name":  "Welsh",
        "native":  "Welsh",
        "supported":  false
    },
    {
        "code":  "cyo",
        "name":  "Cuyonon",
        "native":  "Cuyonon",
        "supported":  false
    },
    {
        "code":  "czh",
        "name":  "Huizhou Chinese",
        "native":  "Huizhou Chinese",
        "supported":  false
    },
    {
        "code":  "czk",
        "name":  "Knaanic",
        "native":  "Knaanic",
        "supported":  false
    },
    {
        "code":  "czn",
        "name":  "Zenzontepec Chatino",
        "native":  "Zenzontepec Chatino",
        "supported":  false
    },
    {
        "code":  "czo",
        "name":  "Min Zhong Chinese",
        "native":  "Min Zhong Chinese",
        "supported":  false
    },
    {
        "code":  "czt",
        "name":  "Zotung Chin",
        "native":  "Zotung Chin",
        "supported":  false
    },
    {
        "code":  "daa",
        "name":  "DangalÃ©at",
        "native":  "DangalÃ©at",
        "supported":  false
    },
    {
        "code":  "dac",
        "name":  "Dambi",
        "native":  "Dambi",
        "supported":  false
    },
    {
        "code":  "dad",
        "name":  "Marik",
        "native":  "Marik",
        "supported":  false
    },
    {
        "code":  "dae",
        "name":  "Duupa",
        "native":  "Duupa",
        "supported":  false
    },
    {
        "code":  "dag",
        "name":  "Dagbani",
        "native":  "Dagbani",
        "supported":  false
    },
    {
        "code":  "dah",
        "name":  "Gwahatike",
        "native":  "Gwahatike",
        "supported":  false
    },
    {
        "code":  "dai",
        "name":  "Day",
        "native":  "Day",
        "supported":  false
    },
    {
        "code":  "daj",
        "name":  "Dar Fur Daju",
        "native":  "Dar Fur Daju",
        "supported":  false
    },
    {
        "code":  "dak",
        "name":  "Dakota",
        "native":  "Dakota",
        "supported":  false
    },
    {
        "code":  "dal",
        "name":  "Dahalo",
        "native":  "Dahalo",
        "supported":  false
    },
    {
        "code":  "dam",
        "name":  "Damakawa",
        "native":  "Damakawa",
        "supported":  false
    },
    {
        "code":  "dao",
        "name":  "Daai Chin",
        "native":  "Daai Chin",
        "supported":  false
    },
    {
        "code":  "daq",
        "name":  "Dandami Maria",
        "native":  "Dandami Maria",
        "supported":  false
    },
    {
        "code":  "dar",
        "name":  "Dargwa",
        "native":  "Dargwa",
        "supported":  false
    },
    {
        "code":  "das",
        "name":  "Daho-Doo",
        "native":  "Daho-Doo",
        "supported":  false
    },
    {
        "code":  "dau",
        "name":  "Dar Sila Daju",
        "native":  "Dar Sila Daju",
        "supported":  false
    },
    {
        "code":  "dav",
        "name":  "Taita",
        "native":  "Taita",
        "supported":  false
    },
    {
        "code":  "daw",
        "name":  "Davawenyo",
        "native":  "Davawenyo",
        "supported":  false
    },
    {
        "code":  "dax",
        "name":  "Dayi",
        "native":  "Dayi",
        "supported":  false
    },
    {
        "code":  "daz",
        "name":  "Dao",
        "native":  "Dao",
        "supported":  false
    },
    {
        "code":  "dba",
        "name":  "Bangime",
        "native":  "Bangime",
        "supported":  false
    },
    {
        "code":  "dbb",
        "name":  "Deno",
        "native":  "Deno",
        "supported":  false
    },
    {
        "code":  "dbd",
        "name":  "Dadiya",
        "native":  "Dadiya",
        "supported":  false
    },
    {
        "code":  "dbe",
        "name":  "Dabe",
        "native":  "Dabe",
        "supported":  false
    },
    {
        "code":  "dbf",
        "name":  "Edopi",
        "native":  "Edopi",
        "supported":  false
    },
    {
        "code":  "dbg",
        "name":  "Dogul Dom Dogon",
        "native":  "Dogul Dom Dogon",
        "supported":  false
    },
    {
        "code":  "dbi",
        "name":  "Doka",
        "native":  "Doka",
        "supported":  false
    },
    {
        "code":  "dbj",
        "name":  "Ida\u0027an",
        "native":  "Ida\u0027an",
        "supported":  false
    },
    {
        "code":  "dbl",
        "name":  "Dyirbal",
        "native":  "Dyirbal",
        "supported":  false
    },
    {
        "code":  "dbm",
        "name":  "Duguri",
        "native":  "Duguri",
        "supported":  false
    },
    {
        "code":  "dbn",
        "name":  "Duriankere",
        "native":  "Duriankere",
        "supported":  false
    },
    {
        "code":  "dbo",
        "name":  "Dulbu",
        "native":  "Dulbu",
        "supported":  false
    },
    {
        "code":  "dbp",
        "name":  "Duwai",
        "native":  "Duwai",
        "supported":  false
    },
    {
        "code":  "dbq",
        "name":  "Daba",
        "native":  "Daba",
        "supported":  false
    },
    {
        "code":  "dbr",
        "name":  "Dabarre",
        "native":  "Dabarre",
        "supported":  false
    },
    {
        "code":  "dbt",
        "name":  "Ben Tey Dogon",
        "native":  "Ben Tey Dogon",
        "supported":  false
    },
    {
        "code":  "dbu",
        "name":  "Bondum Dom Dogon",
        "native":  "Bondum Dom Dogon",
        "supported":  false
    },
    {
        "code":  "dbv",
        "name":  "Dungu",
        "native":  "Dungu",
        "supported":  false
    },
    {
        "code":  "dbw",
        "name":  "Bankan Tey Dogon",
        "native":  "Bankan Tey Dogon",
        "supported":  false
    },
    {
        "code":  "dby",
        "name":  "Dibiyaso",
        "native":  "Dibiyaso",
        "supported":  false
    },
    {
        "code":  "dcc",
        "name":  "Deccan",
        "native":  "Deccan",
        "supported":  false
    },
    {
        "code":  "dcr",
        "name":  "Negerhollands",
        "native":  "Negerhollands",
        "supported":  false
    },
    {
        "code":  "dda",
        "name":  "Dadi Dadi",
        "native":  "Dadi Dadi",
        "supported":  false
    },
    {
        "code":  "ddd",
        "name":  "Dongotono",
        "native":  "Dongotono",
        "supported":  false
    },
    {
        "code":  "dde",
        "name":  "Doondo",
        "native":  "Doondo",
        "supported":  false
    },
    {
        "code":  "ddg",
        "name":  "Fataluku",
        "native":  "Fataluku",
        "supported":  false
    },
    {
        "code":  "ddi",
        "name":  "West Goodenough",
        "native":  "West Goodenough",
        "supported":  false
    },
    {
        "code":  "ddj",
        "name":  "Jaru",
        "native":  "Jaru",
        "supported":  false
    },
    {
        "code":  "ddn",
        "name":  "Dendi (Benin)",
        "native":  "Dendi (Benin)",
        "supported":  false
    },
    {
        "code":  "ddo",
        "name":  "Dido",
        "native":  "Dido",
        "supported":  false
    },
    {
        "code":  "ddr",
        "name":  "Dhudhuroa",
        "native":  "Dhudhuroa",
        "supported":  false
    },
    {
        "code":  "dds",
        "name":  "Donno So Dogon",
        "native":  "Donno So Dogon",
        "supported":  false
    },
    {
        "code":  "ddw",
        "name":  "Dawera-Daweloor",
        "native":  "Dawera-Daweloor",
        "supported":  false
    },
    {
        "code":  "dec",
        "name":  "Dagik",
        "native":  "Dagik",
        "supported":  false
    },
    {
        "code":  "ded",
        "name":  "Dedua",
        "native":  "Dedua",
        "supported":  false
    },
    {
        "code":  "dee",
        "name":  "Dewoin",
        "native":  "Dewoin",
        "supported":  false
    },
    {
        "code":  "def",
        "name":  "Dezfuli",
        "native":  "Dezfuli",
        "supported":  false
    },
    {
        "code":  "deg",
        "name":  "Degema",
        "native":  "Degema",
        "supported":  false
    },
    {
        "code":  "deh",
        "name":  "Dehwari",
        "native":  "Dehwari",
        "supported":  false
    },
    {
        "code":  "dei",
        "name":  "Demisa",
        "native":  "Demisa",
        "supported":  false
    },
    {
        "code":  "dek",
        "name":  "Dek",
        "native":  "Dek",
        "supported":  false
    },
    {
        "code":  "del",
        "name":  "Delaware",
        "native":  "Delaware",
        "supported":  false
    },
    {
        "code":  "dem",
        "name":  "Dem",
        "native":  "Dem",
        "supported":  false
    },
    {
        "code":  "den",
        "name":  "Slave (Athapascan)",
        "native":  "Slave (Athapascan)",
        "supported":  false
    },
    {
        "code":  "dep",
        "name":  "Pidgin Delaware",
        "native":  "Pidgin Delaware",
        "supported":  false
    },
    {
        "code":  "deq",
        "name":  "Dendi (Central African Republic)",
        "native":  "Dendi (Central African Republic)",
        "supported":  false
    },
    {
        "code":  "der",
        "name":  "Deori",
        "native":  "Deori",
        "supported":  false
    },
    {
        "code":  "des",
        "name":  "Desano",
        "native":  "Desano",
        "supported":  false
    },
    {
        "code":  "dev",
        "name":  "Domung",
        "native":  "Domung",
        "supported":  false
    },
    {
        "code":  "dez",
        "name":  "Dengese",
        "native":  "Dengese",
        "supported":  false
    },
    {
        "code":  "dga",
        "name":  "Southern Dagaare",
        "native":  "Southern Dagaare",
        "supported":  false
    },
    {
        "code":  "dgb",
        "name":  "Bunoge Dogon",
        "native":  "Bunoge Dogon",
        "supported":  false
    },
    {
        "code":  "dgc",
        "name":  "Casiguran Dumagat Agta",
        "native":  "Casiguran Dumagat Agta",
        "supported":  false
    },
    {
        "code":  "dgd",
        "name":  "Dagaari Dioula",
        "native":  "Dagaari Dioula",
        "supported":  false
    },
    {
        "code":  "dge",
        "name":  "Degenan",
        "native":  "Degenan",
        "supported":  false
    },
    {
        "code":  "dgg",
        "name":  "Doga",
        "native":  "Doga",
        "supported":  false
    },
    {
        "code":  "dgh",
        "name":  "Dghwede",
        "native":  "Dghwede",
        "supported":  false
    },
    {
        "code":  "dgi",
        "name":  "Northern Dagara",
        "native":  "Northern Dagara",
        "supported":  false
    },
    {
        "code":  "dgk",
        "name":  "Dagba",
        "native":  "Dagba",
        "supported":  false
    },
    {
        "code":  "dgl",
        "name":  "Andaandi",
        "native":  "Andaandi",
        "supported":  false
    },
    {
        "code":  "dgn",
        "name":  "Dagoman",
        "native":  "Dagoman",
        "supported":  false
    },
    {
        "code":  "dgo",
        "name":  "Dogri (individual language)",
        "native":  "Dogri (individual language)",
        "supported":  false
    },
    {
        "code":  "dgr",
        "name":  "Dogrib",
        "native":  "Dogrib",
        "supported":  false
    },
    {
        "code":  "dgs",
        "name":  "Dogoso",
        "native":  "Dogoso",
        "supported":  false
    },
    {
        "code":  "dgt",
        "name":  "Ndra\u0027ngith",
        "native":  "Ndra\u0027ngith",
        "supported":  false
    },
    {
        "code":  "dgw",
        "name":  "Daungwurrung",
        "native":  "Daungwurrung",
        "supported":  false
    },
    {
        "code":  "dgx",
        "name":  "Doghoro",
        "native":  "Doghoro",
        "supported":  false
    },
    {
        "code":  "dgz",
        "name":  "Daga",
        "native":  "Daga",
        "supported":  false
    },
    {
        "code":  "dhd",
        "name":  "Dhundari",
        "native":  "Dhundari",
        "supported":  false
    },
    {
        "code":  "dhg",
        "name":  "Dhangu-Djangu",
        "native":  "Dhangu-Djangu",
        "supported":  false
    },
    {
        "code":  "dhi",
        "name":  "Dhimal",
        "native":  "Dhimal",
        "supported":  false
    },
    {
        "code":  "dhl",
        "name":  "Dhalandji",
        "native":  "Dhalandji",
        "supported":  false
    },
    {
        "code":  "dhm",
        "name":  "Zemba",
        "native":  "Zemba",
        "supported":  false
    },
    {
        "code":  "dhn",
        "name":  "Dhanki",
        "native":  "Dhanki",
        "supported":  false
    },
    {
        "code":  "dho",
        "name":  "Dhodia",
        "native":  "Dhodia",
        "supported":  false
    },
    {
        "code":  "dhr",
        "name":  "Dhargari",
        "native":  "Dhargari",
        "supported":  false
    },
    {
        "code":  "dhs",
        "name":  "Dhaiso",
        "native":  "Dhaiso",
        "supported":  false
    },
    {
        "code":  "dhu",
        "name":  "Dhurga",
        "native":  "Dhurga",
        "supported":  false
    },
    {
        "code":  "dhv",
        "name":  "Dehu",
        "native":  "Dehu",
        "supported":  false
    },
    {
        "code":  "dhw",
        "name":  "Dhanwar (Nepal)",
        "native":  "Dhanwar (Nepal)",
        "supported":  false
    },
    {
        "code":  "dhx",
        "name":  "Dhungaloo",
        "native":  "Dhungaloo",
        "supported":  false
    },
    {
        "code":  "dia",
        "name":  "Dia",
        "native":  "Dia",
        "supported":  false
    },
    {
        "code":  "dib",
        "name":  "South Central Dinka",
        "native":  "South Central Dinka",
        "supported":  false
    },
    {
        "code":  "dic",
        "name":  "Lakota Dida",
        "native":  "Lakota Dida",
        "supported":  false
    },
    {
        "code":  "did",
        "name":  "Didinga",
        "native":  "Didinga",
        "supported":  false
    },
    {
        "code":  "dif",
        "name":  "Dieri",
        "native":  "Dieri",
        "supported":  false
    },
    {
        "code":  "dig",
        "name":  "Digo",
        "native":  "Digo",
        "supported":  false
    },
    {
        "code":  "dih",
        "name":  "Kumiai",
        "native":  "Kumiai",
        "supported":  false
    },
    {
        "code":  "dii",
        "name":  "Dimbong",
        "native":  "Dimbong",
        "supported":  false
    },
    {
        "code":  "dij",
        "name":  "Dai",
        "native":  "Dai",
        "supported":  false
    },
    {
        "code":  "dik",
        "name":  "Southwestern Dinka",
        "native":  "Southwestern Dinka",
        "supported":  false
    },
    {
        "code":  "dil",
        "name":  "Dilling",
        "native":  "Dilling",
        "supported":  false
    },
    {
        "code":  "dim",
        "name":  "Dime",
        "native":  "Dime",
        "supported":  false
    },
    {
        "code":  "din",
        "name":  "Dinka",
        "native":  "Dinka",
        "supported":  false
    },
    {
        "code":  "dio",
        "name":  "Dibo",
        "native":  "Dibo",
        "supported":  false
    },
    {
        "code":  "dip",
        "name":  "Northeastern Dinka",
        "native":  "Northeastern Dinka",
        "supported":  false
    },
    {
        "code":  "diq",
        "name":  "Dimli (individual language)",
        "native":  "Dimli (individual language)",
        "supported":  false
    },
    {
        "code":  "dir",
        "name":  "Dirim",
        "native":  "Dirim",
        "supported":  false
    },
    {
        "code":  "dis",
        "name":  "Dimasa",
        "native":  "Dimasa",
        "supported":  false
    },
    {
        "code":  "diu",
        "name":  "Diriku",
        "native":  "Diriku",
        "supported":  false
    },
    {
        "code":  "dv",
        "name":  "Dhivehi",
        "native":  "Dhivehi",
        "supported":  false
    },
    {
        "code":  "diw",
        "name":  "Northwestern Dinka",
        "native":  "Northwestern Dinka",
        "supported":  false
    },
    {
        "code":  "dix",
        "name":  "Dixon Reef",
        "native":  "Dixon Reef",
        "supported":  false
    },
    {
        "code":  "diy",
        "name":  "Diuwe",
        "native":  "Diuwe",
        "supported":  false
    },
    {
        "code":  "diz",
        "name":  "Ding",
        "native":  "Ding",
        "supported":  false
    },
    {
        "code":  "dja",
        "name":  "Djadjawurrung",
        "native":  "Djadjawurrung",
        "supported":  false
    },
    {
        "code":  "djb",
        "name":  "Djinba",
        "native":  "Djinba",
        "supported":  false
    },
    {
        "code":  "djc",
        "name":  "Dar Daju Daju",
        "native":  "Dar Daju Daju",
        "supported":  false
    },
    {
        "code":  "djd",
        "name":  "Djamindjung",
        "native":  "Djamindjung",
        "supported":  false
    },
    {
        "code":  "dje",
        "name":  "Zarma",
        "native":  "Zarma",
        "supported":  false
    },
    {
        "code":  "djf",
        "name":  "Djangun",
        "native":  "Djangun",
        "supported":  false
    },
    {
        "code":  "dji",
        "name":  "Djinang",
        "native":  "Djinang",
        "supported":  false
    },
    {
        "code":  "djj",
        "name":  "Djeebbana",
        "native":  "Djeebbana",
        "supported":  false
    },
    {
        "code":  "djk",
        "name":  "Eastern Maroon Creole",
        "native":  "Eastern Maroon Creole",
        "supported":  false
    },
    {
        "code":  "djm",
        "name":  "Jamsay Dogon",
        "native":  "Jamsay Dogon",
        "supported":  false
    },
    {
        "code":  "djn",
        "name":  "Jawoyn",
        "native":  "Jawoyn",
        "supported":  false
    },
    {
        "code":  "djo",
        "name":  "Jangkang",
        "native":  "Jangkang",
        "supported":  false
    },
    {
        "code":  "djr",
        "name":  "Djambarrpuyngu",
        "native":  "Djambarrpuyngu",
        "supported":  false
    },
    {
        "code":  "dju",
        "name":  "Kapriman",
        "native":  "Kapriman",
        "supported":  false
    },
    {
        "code":  "djw",
        "name":  "Djawi",
        "native":  "Djawi",
        "supported":  false
    },
    {
        "code":  "dka",
        "name":  "Dakpakha",
        "native":  "Dakpakha",
        "supported":  false
    },
    {
        "code":  "dkk",
        "name":  "Dakka",
        "native":  "Dakka",
        "supported":  false
    },
    {
        "code":  "dkr",
        "name":  "Kuijau",
        "native":  "Kuijau",
        "supported":  false
    },
    {
        "code":  "dks",
        "name":  "Southeastern Dinka",
        "native":  "Southeastern Dinka",
        "supported":  false
    },
    {
        "code":  "dkx",
        "name":  "Mazagway",
        "native":  "Mazagway",
        "supported":  false
    },
    {
        "code":  "dlg",
        "name":  "Dolgan",
        "native":  "Dolgan",
        "supported":  false
    },
    {
        "code":  "dlk",
        "name":  "Dahalik",
        "native":  "Dahalik",
        "supported":  false
    },
    {
        "code":  "dlm",
        "name":  "Dalmatian",
        "native":  "Dalmatian",
        "supported":  false
    },
    {
        "code":  "dln",
        "name":  "Darlong",
        "native":  "Darlong",
        "supported":  false
    },
    {
        "code":  "dma",
        "name":  "Duma",
        "native":  "Duma",
        "supported":  false
    },
    {
        "code":  "dmb",
        "name":  "Mombo Dogon",
        "native":  "Mombo Dogon",
        "supported":  false
    },
    {
        "code":  "dmc",
        "name":  "Gavak",
        "native":  "Gavak",
        "supported":  false
    },
    {
        "code":  "dmd",
        "name":  "Madhi Madhi",
        "native":  "Madhi Madhi",
        "supported":  false
    },
    {
        "code":  "dme",
        "name":  "Dugwor",
        "native":  "Dugwor",
        "supported":  false
    },
    {
        "code":  "dmf",
        "name":  "Medefaidrin",
        "native":  "Medefaidrin",
        "supported":  false
    },
    {
        "code":  "dmg",
        "name":  "Upper Kinabatangan",
        "native":  "Upper Kinabatangan",
        "supported":  false
    },
    {
        "code":  "dmk",
        "name":  "Domaaki",
        "native":  "Domaaki",
        "supported":  false
    },
    {
        "code":  "dml",
        "name":  "Dameli",
        "native":  "Dameli",
        "supported":  false
    },
    {
        "code":  "dmm",
        "name":  "Dama",
        "native":  "Dama",
        "supported":  false
    },
    {
        "code":  "dmo",
        "name":  "Kemedzung",
        "native":  "Kemedzung",
        "supported":  false
    },
    {
        "code":  "dmr",
        "name":  "East Damar",
        "native":  "East Damar",
        "supported":  false
    },
    {
        "code":  "dms",
        "name":  "Dampelas",
        "native":  "Dampelas",
        "supported":  false
    },
    {
        "code":  "dmu",
        "name":  "Dubu",
        "native":  "Dubu",
        "supported":  false
    },
    {
        "code":  "dmv",
        "name":  "Dumpas",
        "native":  "Dumpas",
        "supported":  false
    },
    {
        "code":  "dmw",
        "name":  "Mudburra",
        "native":  "Mudburra",
        "supported":  false
    },
    {
        "code":  "dmx",
        "name":  "Dema",
        "native":  "Dema",
        "supported":  false
    },
    {
        "code":  "dmy",
        "name":  "Demta",
        "native":  "Demta",
        "supported":  false
    },
    {
        "code":  "dna",
        "name":  "Upper Grand Valley Dani",
        "native":  "Upper Grand Valley Dani",
        "supported":  false
    },
    {
        "code":  "dnd",
        "name":  "Daonda",
        "native":  "Daonda",
        "supported":  false
    },
    {
        "code":  "dne",
        "name":  "Ndendeule",
        "native":  "Ndendeule",
        "supported":  false
    },
    {
        "code":  "dng",
        "name":  "Dungan",
        "native":  "Dungan",
        "supported":  false
    },
    {
        "code":  "dni",
        "name":  "Lower Grand Valley Dani",
        "native":  "Lower Grand Valley Dani",
        "supported":  false
    },
    {
        "code":  "dnj",
        "name":  "Dan",
        "native":  "Dan",
        "supported":  false
    },
    {
        "code":  "dnk",
        "name":  "Dengka",
        "native":  "Dengka",
        "supported":  false
    },
    {
        "code":  "dnn",
        "name":  "DzÃ¹Ã¹ngoo",
        "native":  "DzÃ¹Ã¹ngoo",
        "supported":  false
    },
    {
        "code":  "dno",
        "name":  "Ndrulo",
        "native":  "Ndrulo",
        "supported":  false
    },
    {
        "code":  "dnr",
        "name":  "Danaru",
        "native":  "Danaru",
        "supported":  false
    },
    {
        "code":  "dnt",
        "name":  "Mid Grand Valley Dani",
        "native":  "Mid Grand Valley Dani",
        "supported":  false
    },
    {
        "code":  "dnu",
        "name":  "Danau",
        "native":  "Danau",
        "supported":  false
    },
    {
        "code":  "dnv",
        "name":  "Danu",
        "native":  "Danu",
        "supported":  false
    },
    {
        "code":  "dnw",
        "name":  "Western Dani",
        "native":  "Western Dani",
        "supported":  false
    },
    {
        "code":  "dny",
        "name":  "DenÃ­",
        "native":  "DenÃ­",
        "supported":  false
    },
    {
        "code":  "doa",
        "name":  "Dom",
        "native":  "Dom",
        "supported":  false
    },
    {
        "code":  "dob",
        "name":  "Dobu",
        "native":  "Dobu",
        "supported":  false
    },
    {
        "code":  "doc",
        "name":  "Northern Dong",
        "native":  "Northern Dong",
        "supported":  false
    },
    {
        "code":  "doe",
        "name":  "Doe",
        "native":  "Doe",
        "supported":  false
    },
    {
        "code":  "dof",
        "name":  "Domu",
        "native":  "Domu",
        "supported":  false
    },
    {
        "code":  "doh",
        "name":  "Dong",
        "native":  "Dong",
        "supported":  false
    },
    {
        "code":  "doi",
        "name":  "Dogri (macrolanguage)",
        "native":  "Dogri (macrolanguage)",
        "supported":  false
    },
    {
        "code":  "dok",
        "name":  "Dondo",
        "native":  "Dondo",
        "supported":  false
    },
    {
        "code":  "dol",
        "name":  "Doso",
        "native":  "Doso",
        "supported":  false
    },
    {
        "code":  "don",
        "name":  "Toura (Papua New Guinea)",
        "native":  "Toura (Papua New Guinea)",
        "supported":  false
    },
    {
        "code":  "doo",
        "name":  "Dongo",
        "native":  "Dongo",
        "supported":  false
    },
    {
        "code":  "dop",
        "name":  "Lukpa",
        "native":  "Lukpa",
        "supported":  false
    },
    {
        "code":  "doq",
        "name":  "Dominican Sign Language",
        "native":  "Dominican Sign Language",
        "supported":  false
    },
    {
        "code":  "dor",
        "name":  "Dori\u0027o",
        "native":  "Dori\u0027o",
        "supported":  false
    },
    {
        "code":  "dos",
        "name":  "DogosÃ©",
        "native":  "DogosÃ©",
        "supported":  false
    },
    {
        "code":  "dot",
        "name":  "Dass",
        "native":  "Dass",
        "supported":  false
    },
    {
        "code":  "dov",
        "name":  "Dombe",
        "native":  "Dombe",
        "supported":  false
    },
    {
        "code":  "dow",
        "name":  "Doyayo",
        "native":  "Doyayo",
        "supported":  false
    },
    {
        "code":  "dox",
        "name":  "Bussa",
        "native":  "Bussa",
        "supported":  false
    },
    {
        "code":  "doy",
        "name":  "Dompo",
        "native":  "Dompo",
        "supported":  false
    },
    {
        "code":  "doz",
        "name":  "Dorze",
        "native":  "Dorze",
        "supported":  false
    }
];
