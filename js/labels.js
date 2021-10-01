const address = "EsuArt, 179 Hungerford Road, N7 9LD London Tel: 07849308440";

const scents = {
    "Baby Powder": {
        "spiceName": "Baby Powder Fragrance 10%",
        "allergents": "Benzyl Salicylate, Cinnamic Alcohol, Citronellol, Coumarin, Geraniol, Hexyl Cinnamic Aldehyde, Lyral, Lilial, Methyl Ionone(Incl. AIMIS)",
        "warning": "H317: May cause an allergic skin reaction. Avoid breathing dust/fumes/gas/mist/vapours/spray. Contaminated work clothing should not be allowed out of the workplace. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. Specific treatment(see instructions on this label) If skin irritation or rash occurs: Get medical attention.",
        "firstAid": "Skin contact: Remove all contaminated clothes and footwear immediately unless stuck to skin. Wash immediately with plenty of soap and water. Consult a doctor. Eye contact: Bathe the eye with running water for 15 minutes. Consult a doctor. Ingestion: Wash out mouth with water. Consult a doctor. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so. Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },
    "Chocolate Orange": {
        "spiceName": " Chocolate Orange Fragrance 10%",
        "allergents": "Citral, Limonene, Linalol",
        "warning": "H317: May cause an allergic skin reaction. H411: Toxic to aquatic life with long lasting effects. Avoid breathing fumes. Avoid release to the environment. Contaminated work clothing should not be allowed out of the workplace. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. Specific treatment(see instructions on this label) If skin irritation or rash occurs: Get medical attention. Wash contaminated clothing before reuse. Collect spillage. Dispose of hazardous or special waste collection point to.",
        "firstAid": "Skin contact: Remove all contaminated clothes and footwear immediately unless stuck to skin. Wash immediately with plenty of soap and water. Consult a doctor. Eye contact: Bathe the eye with running water for 15 minutes. Consult a doctor. Ingestion: Wash out mouth with water. Consult a doctor. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so. Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "environment.png"]
    },
    "Christmas Pudding": {
        "spiceName": "Christmas Pudding Fragrance 10%",
        "allergents": "Benzyl Benzoate, Cinnamal, Citral, Citronellol, Eugenol, Geraniol, Limonene, Linalol",
        "warning": "H317: May cause an allergic skin reaction. Avoid breathing fumes. Contaminated work clothing should not be allowed out of the workplace. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. Specific treatment(see instructions on this label) If skin irritation or rash occurs: Get medical attention. Wash contaminated clothing before reuse. Dispose of hazardous or special waste collection point to.",
        "firstAid": "Skin contact: Remove all contaminated clothes and footwear immediately unless stuck to skin. Wash immediately with plenty of soap and water. Consult a doctor. Eye contact: Bathe the eye with running water for 15 minutes. Consult a doctor. Ingestion: Wash out mouth with water. Consult a doctor. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so. Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },
    "Coconut": {
        "spiceName": "Coconut Fragrance 10%",
        "allergents": "Coumarin",
        "warning": "Do not ingest. Keep away from children",
        "firstAid": "Skin contact: Wash immediately with plenty of soap and water. Eye contact: Bathe the eye with running water for 15 minutes. Ingestion: Wash out mouth with water. Inhalation: Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },
    "Jasmine and Ylang": {
        "spiceName": " Jasmin and Ylang Fragrance 10%",
        "allergents": "Amyl Cinnamic Aldehyde, Benzyl Alcohol, Benzyl Benzoate, Benzyl Salicylate, Eugenol, Farnesol, Geraniol, Hexyl Cinnamic Aldehyde, Iso Eugenol, Linalol, Methyl Ionone(Incl. AIMIS)",
        "warning": "H315: Causes skin irritation. H319: Causes serious eye irritation. Wash hands thoroughly after handling. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing. Specific treatment(see instructions on this label) If skin irritation occurs: Get medical attention. If eye irritation persists. Get medical attention. Take off contaminated clothing.",
        "firstAid": "Skin contact: Wash immediately with plenty of soap and water. Eye contact: Bathe the eye with running water for 15 minutes. Transfer to hospital for specialist examination. Ingestion: Wash out mouth with water. Inhalation: Not applicable.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },
    "Marshmallow": {
        "spiceName": "Marshmallow Fragrance 10%",
        "allergents": "Benzyl Benzoate",
        "warning": "H412: Harmful to acquatic life with long lasting effects. Avoid release to the environment. Dispose of contents/container to hazardous or special waste collection point.",
        "firstAid": "Skin contact: Wash immediately with plenty of soap and water. Eye contact: Bathe the eye with running water for 15 minutes. Wash out mouth with water. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "environment.png"]
    },
    "Mulled Wine": {
        "spiceName": "Mulled Wine Fragrance 10%",
        "allergents": "Benzyl Benzoate, Cinnamal, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Iso Eugenol, Limonene, Linalol",
        "warning": "H317: May cause an allergic skin reaction. H319: Causes serious eye irritation. H334: May cause allergy or asthma symptoms or breathing difficulties if inhaled. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. IF INHALED: If breathing is difficult, remove victim to fresh air and keep at rest in a position comfortable for breathing. IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing. Specific treatment(see instructions on this label). If experiencing respiratory symptoms: Call a medical attention.",
        "firstAid": "Skin contact: Remove all contaminated clothes and footwear immediately unless stuck to skin. Wash immediately with plenty of soap and water. Consult a doctor. Eye contact: Bathe the eye with running water for 15 minutes. Consult a doctor. Ingestion: Wash out mouth with water. Consult a doctor. Do not induce vomiting. If conscious, give half a litre of water to drink immediately. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so. Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "health-hazard.png"]
    },
    "Peppermint": {
        "spiceName": "Pepperming Fragrance 10%",
        "allergents": "Limonene",
        "warning": "H315: Causes skin irritation. H317: May cause an allergic skin reaction. H319: Causes serious eye irritation. H412: Harmful to aquatic life with long lasting effects. Keep container tightly closed. Wash thoroughly after handling. Avoid release to the environment. Wear protective gloves/protective clothing/eye protection/face protection. IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing. Dispose of to.",
        "firstAid": "Skin contact: Rinse immediately with plenty of water. Eye contact: Bathe the eye with running water for 15 minutes. If irritation persists seek medical advice. Ingestion: Do not induce vomiting. Immediately call a POISON CENTRE or doctor/physician. Drink plenty of water if ingested. Inhalation: Move to fresh air in case of accidental inhalation of vapours.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },
    "Pumpkin Spice": {
        "spiceName": "Pumpkin Spice Fragrance 10%",
        "allergents": "Benzyl Benzoate, Cinnamal(Cinnamic Aldehyde), Citral, Citronellol, Coumarin, Eugenol, Geraniol, Iso Eugenol, Limonene, Linalol",
        "warning": "May cause an allergic skin reaction. Avoid breathing fumes. Contaminated work clothing should not be allowed out of the workplace. Wear protective gloves/protective clothing/eye protection/face protection. IF ON SKIN: Wash with plenty of water/soap and water. Specific treatment(see instructions on this label) If skin irritation or rash occurs: Get medical attention.",
        "firstAid": "Skin contact: Remove all contaminated clothes and footwear immediately unless stuck to skin. Wash immediately with plenty of soap and water. Consult a doctor. Eye contact: Bathe the eye with running water for 15 minutes. Consult a doctor. Ingestion: Wash out mouth with water. Consult a doctor. Inhalation: Remove casualty from exposure ensuring one´s own safety whilst doing so. Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png","address.png" ]
    },
    "Vanilla": {
        "spiceName": "Vanilla Fragrance 10%",
        "allergents": "Benzyl Alcohol, Coumarin, Eugenol",
        "warning": "Do not ingest. Keep away from children",
        "firstAid": "Skin contact: Wash immediately with plenty of soap and water. Eye contact: Bathe the eye with running water for 15 minutes. Ingestion: Wash out mouth with water. Inhalation: Consult a doctor.",
        "pictograms": ["flamable-items.png", "kids.png", "unattended.png","exclamation-white.png", "exclamation-yellow.png", "address.png"]
    },

}

const candles ={
    "Dárek": "33g",
    "Dýně": "39g",
    "Jednoduché srdce": "450g",
    "Jednoduchý jehlan": "250g",
    "Jehlan se špičkami": "230g",
    "Koule malá": "127g",
    "Koule vroubkovaná": "185g",
    "Lomenný oblouk": "395g",
    "Obdélník malý": "200g",
    "Pětihran malý": "155g",
    "Spirála": "430g",
    "Stromek 2D": "180g",
    "Stromek 3D": "96g",
    "Trojité srdce": "430g",
    "Válec - vánoční motiv": "119g",
    "Válec hladký": "300g",
    "Válec vroubkovaný": "260g",
    "Velká s dvěma knoty": "850g",
    "Vysoký šestihran": "270g"
    
}