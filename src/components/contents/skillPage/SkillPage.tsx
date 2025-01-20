import { useState } from 'react';
import './skillPage.css';

const SkillPage = () => {
  const talents: String[] = ["근접전투", "궁술", "랜스", "마법", "축복", "전투 연금술", "연성 연금술", "격투술", "인형술", "닌자", "체인 슬래시", "슈터", "음악", "전투 점성술", "운명점성술", "여행", "무역", "펫 핸들링", "음식", "대장 기술", "재단", "약품 연구", "목공 기술", "히든", "변신"];
  const abilities: String[] = ["체력(str)", "지력(int)", "솜씨(dex)", "의지(will)", "행운(luck)", "생명력(hp)", "마나(mp)", "스태미나(sp)"];
  const sort: String[] = ["상승 스텟 AP 효율 순", "상승 스텟 많은 순"];
  const sumHeader: String[] = ["AP", "체력", "지력", "솜씨", "의지", "행운", "생명력", "마나", "스태미나"];
  const skillHeader: String[] = ["스킬", "이름", "랭크", "AP", "체력", "지력", "솜씨", "의지", "행운", "생명력", "마나", "스태미나"];
  const skillrank: String[] = ["F", "E", "D", "C", "B", "A", "9", "8", "7", "6", "5", "4", "3", "2", "1", "1단", "2단", "3단"];
  return (
    <div id='skillPage'>
      <div className='filterBox'>
        <div>
          <div className='filterName'>재능</div>
          <div className='filterCheckList'>
            <div className='allCheck'>전체 선택</div>
            <div className='reset'>초기화</div>
            {
              talents.map((item, id) => (
                <div className='checkOne' key={"t" + id}>
                  <input type='checkbox'></input>
                  <label>{item}</label>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <div className='filterName'>스텟</div>
          <div className='filterCheckList'>
            <div className='allCheck'>전체 선택</div>
            <div className='reset'>초기화</div>
            {
              abilities.map((item, id) => (
                <div className='checkOne' key={"a" + id}>
                  <input type='checkbox' name='ab'></input>
                  <label>{item}</label>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <div className='filterName'>정렬</div>
          <div className='filterCheckList'>
            {
              sort.map((item, id) => (
                <div className='checkOne radioOne' key={"s" + id}>
                  <input type='radio' name='ap'></input>
                  <label>{item}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='listBox'>
        <div className='totalStat'>
          <div className='tableHead'>
            {
              sumHeader.map((item, id) => (
                <div className='tab' key={'sh' + id}>{item}</div>
              ))
            }
          </div>
          <div className='values'>
            {
              sumHeader.map((item, id) => (
                <div className='value' key={'sh' + id}>10/20</div>
              ))
            }
          </div>
        </div>
        <div className='skillList'>
          <div className='skillHead'>
            {
              skillHeader.map((item, id) => (
                <div className='tab' key={'skh' + id}>{item}</div>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SkillPage