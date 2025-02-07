interface talent {
  name: string,
  eng: string,
  list: string[]
}

const talents: talent[] = [
  {
    name: "재능", 
    eng: "talent",
    list: ["근접전투", "궁술", "랜스", "마법", "축복", "전투 연금술", "연성 연금술", "격투술", "인형술", "닌자", "체인 슬래시", "슈터", "음악", "전투 점성술", "운명점성술", "여행", "무역", "펫 핸들링", "음식", "대장 기술", "재단", "약품 연구", "목공 기술"]
  },
  {
    name: "변신",
    eng: "transformation",
    list: ["팔라딘", "다크 나이트", "팔콘", "비스트", "반신화", "이신화"]
  },
  {
    name: "히든",
    eng: "hidden",
    list: []
  },
  {
    name: "아르카나",
    eng: "arcana",
    list: ["엘리멘탈 나이트", "세인트 바드", "다크 메이지", "알케믹 스팅어", "세인트 가드", "블래스트 랜서"]
  }
];
const talentId: {[key: string]: number} = {};
let i: number = 0;
for(const t of talents.map(data => data.eng)) { talentId[t] = i++; }

const abilities: string[] = ["체력(str)", "지력(int)", "솜씨(dex)", "의지(will)", "행운(luck)", "생명력(hp)", "마나(mp)", "스태미나(sp)"];
const sumHeader: string[] = ["AP", "체력", "지력", "솜씨", "의지", "행운", "생명력", "마나", "스태미나"];
const skillInfo: string[] = ["스킬", "이름", "랭크", "AP", "체력", "지력", "솜씨", "의지", "행운", "생명력", "마나", "스태미나"];

export { talents, talentId, abilities, sumHeader, skillInfo }