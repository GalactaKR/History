const events={
    title:{ type: String, required:true},
    startDate:{ type:Date},
    startYear:{ type:Number},
    startMonth:{ type:Number},
    startDay:{ type:Number},
    endDate:{ type:Date},
    endYear:{ type:Number},
    endMonth:{ type:Number},
    endDay:{ type:Number},
    // eraName:{ type:String},//年号
    people:{ type: [String], required:true},
    factions:{ type: [String]},
    text:{ type:String},
    mainLocation:{ type:String, required:true}, //maybe array because a event may involved not only a single place 
    relatedLocations:{ type:[String]},
    modernLocations:{ type:[String]},
    relatedEvents:{ type: [String]},
    relatedWorks:{ type: [String]},//关联作品 如诗歌，小说，游戏，影视作品
    tags:{ type: [String]}
}


const people={
    name: { type: String, required:true},
    nickname:{ type:String}, //人称
    styleName:{ type:String}, //字
    pseudonym:{ type:String}, //号
    posthumousTitle:{ type:String},//谥号
    gender: { type: String, required:true, enum:[String]},
    birthDate: { type: Date},
    birthYear:{ type:Number},
    birthMonth:{ type:Number},
    birthDay:{ type:Number},
    deathDate: { type: Date},
    deathYear:{ type:Number},
    deathMonth:{ type:Number},
    deathDay:{ type:Number},
    birthPlace: { type: String},
    MbirthPlace:{type: String}, //birth place in modern location
    deathPlace: { type: String },
    MdeathPlace: {type: String},
    factions: { type: [String]},
    loyalties:{ type: [String]}, //maybe array 主公
    titles: { type: [String], required:true}, //this should be array 职位
    // father: { type: String},
    // mother: { type: String},
    // wife: { type: [String]}, //array
    // sister: { type: [String]}, //array
    // brother: { type: [String]}, //array
    // children: { type: [String]}, //array
    involvedBattles: { type: Boolean},
    involvedEvents: { type: Boolean},
    tags: { type: [String]},
    biography: { type: String },
    relatedWork:{ type: [String]}//关联作品 如诗歌，小说，游戏，影视作品
}

// Since these people may have different lords that they pledged loyalty to 
// and have different identities or official posts 
// during different time period
// I wonder how to assign those items to the corresponding years

// factions, periods as tags
//////////////////////////////////////////// try //////////////////////////////////////

const events={
    title:["Battle of Red Cliffs"],
    startDate:{ type:Date},//AD 208
    startYear:208,
    startMonth:{ type:Number},//idk
    startDay:{ type:Number},//idk
    endDate:{ type:Date},//AD 209
    endYear:209,
    endMonth:{ type:Number},//idk
    endDay:{ type:Number},//idk
    // eraName:{ type:String},//年号
    people:["Cao cao","Liu Bei","Sun Quan","Xun You","Jia Xu","Zhuge Liang","Zhou Yu","Lu su","Cheng Pu","Huang Gai"],
    factions:["Cao Wei","Shu Han","Eastern Wu"],
    text: ".........................",
    mainLocation: "Chibi", //maybe array because a event may involved not only a single place 
    relatedLocations:["Xia Kou","Cai Sang","South Country"],
    modernLocations:["Puqi"],//This city used to be named as Chibi and change to Puqi at the end of last century,however,its government website is still named as Chibi...
    relatedEvents:{ type: [String]},
    relatedWorks:[ "Movie:Battle of Red Cliffs","Poem:Memories of the Past at Red Cliff"],//关联作品 如诗歌，小说，游戏，影视作品
    tags:{ type: [String]}
}

const people={
    name: "Zhuge Liang",
    // nickname:{ type:String}, //人称
    styleName:"Kongming", //字
    pseudonym:"WoLong", //号
    // posthumousTitle:{ type:String},//谥号
    gender: "Male",
    birthDate: { type: Date},
    birthYear:181,
    birthMonth:{ type:Number},//idk
    birthDay:{ type:Number},//idk
    deathDate: { type: Date},
    deathYear:234,
    deathMonth:10,
    deathDay:8,
    birthPlace: "Yangdu County, Langya Commandery",
    MbirthPlace:" Yinan County, Shandong", //birth place in modern location
    deathPlace: "Wuzhang Plains, border of Shu Han and Cao Wei",
    MdeathPlace: "Qishan County, Shaanxi",
    factions: ["Shu Han"],
    loyalties:["Liu Bei"], //maybe array 主公
    titles: ["Prime Minister"], //this should be array 职位
    // father: { type: String},
    // mother: { type: String},
    // wife: { type: [String]}, //array
    // sister: { type: [String]}, //array
    // brother: { type: [String]}, //array
    // children: { type: [String]}, //array
    involvedBattles: true,
    involvedEvents: true,
    tags: ["Wisdom","Militarist"],
    biography: "..............",
    relatedWork:["Novel:Romance of the Three Kingdoms","Movie:Romance of the Three Kingdoms","Movie:Battle of the Red Cliffs"]//关联作品 如诗歌，小说，游戏，影视作品
}

