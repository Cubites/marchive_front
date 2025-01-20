import './enchantHeader.css';

interface Effect {
  name: string,
  list: Array<string>
}

const EnchantHeader = () => {
  const effect: Array<Effect> = [
    {
      name: "능력치",
      list: ["체력", "지력", "솜씨", "의지", "행운", "방어", "보호", "마법 방어", "마법 보호", "최대대미지", "최소대미지", "마법 공격력", "최대생명력", "최대마나", "최대스태미나", "최대부상률", "최소부상률", "크리티컬", "밸런스"]
    },
    {
      name: "연금술",
      list: ["4대 속성 연금술 대미지", "불 속성 연금술 대미지", "물 속성 연금술 대미지", "바람 속성 연금술 대미지", "흙 속성 연금술 대미지", "연금술 생산 성공률", "합성 성공률", "결정 제작 성골률", "프로즌 블래스트 적용 범위", "프로즌 블래스트 동결 시간", "방호벽 내구"]
    },
    {
      name: "인형술",
      list: ["마리오네트 최대대미지", "마리오네트 최소대미지", "마리오네트 조종술 크리티컬", "마리오네트 생명력", "마리오네트 방어", "마리오네트 보호", "마리오네트 마법 방어력"]
    },
    {
      name: "음악",
      list: ["음악버프 효과", "음악버프 스킬 지속시간"]
    },
    { 
      name: "세트 효과",
      list: ["독면역", "폭발 저항", "스톰프 저항", "공격 속도"]
    },
    {
      name: "전투력",
      list: ["약해보임", "조금 약해보임", "조금 덜 약해보임", "아주조금 약해보임", "강해보임", "조금 강해보임",]
    },
    {
      name: "기타",
      list: ["마나 소비 감소", "스태미나 소모", "교역품 구매 할인율", "상점 판매가"]
    }
  ]

  return (
    <div id='enchantHeader'>
      <div className='nameBox'>
        <div>검색어</div>
        <div>접두/접미</div>
        <div>효과</div>
        <div>적용 장비</div>
      </div>
      <div className='infoBox'>
        <div className='searchBox'>
          <div className="inputBox">
            <select name='searchCategory' className='category'>
              <option value="1">이름</option>
              <option value="2">입수처</option>
            </select>
            <input type='text' />
          </div>
          <div className='buttonBox'>
            <div className='searchBtn'>검색</div>
            <div className='resetBtn'>검색 조건 초기화</div>
          </div>
        </div>
        <div className='locationBox'>
          <fieldset>
            <label>
              <input type="radio" name="position" value="all" defaultChecked />
              <span>전체</span>
            </label>
            <label>
              <input type="radio" name="position" value="prefix" />
              <span>접두</span>
            </label>
            <label>
              <input type="radio" name="position" value="suffix" />
              <span>접미</span>
            </label>
          </fieldset>
        </div>
        <div className='statusBox'>
          <select name='status' className='statusList'>
            <option value="">전체</option>
            {
              effect.map((data, index) => (
                <option value={data.name} key={"firstCategory" + index}>{data.name}</option>
              ))
            }
          </select>
          <select name='statusDetail' className='statusDetailList'>
            <option value="">전체</option>
            {
              effect.map((data, index) => (
                data.list.map((opt, idx) => (
                  <option value="opt">{opt}</option>
                ))
              ))
            }
          </select>
        </div>
      </div>
      
    </div>
  )
}

export default EnchantHeader