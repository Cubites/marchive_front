import './skillHeader.css';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectSkill, skillActions } from '../../../../store/skill';
import { talents, talentId, abilities } from './skillData';

const SkillHeader = () => {
  const searchData = useAppSelector(selectSkill);
  const dispatch = useAppDispatch();

  const handleTalent1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(skillActions.updateTalent1(e.target.value));
  }
  const handleTalent2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(skillActions.updateTalent2(e.target.value));
  }
  const handleStatus1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(skillActions.updateStatus1(e.target.value));
  }
  const handleStatus2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(skillActions.updateStatus2(e.target.value));
  }
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(skillActions.updateSort(e.target.value));
  }

  return (
    <div id="skillHeader">
      <div className="mainBox">
        <div className="talentBox">
          <div className='nameBox dragNo'>
            <div>재능</div>
          </div>
          <div className="talentInputBox">
            <select 
              name='talentList'
              className='talent'
              onChange={handleTalent1}
              value={searchData.talent1}
            >
              <option value="">전체</option>
              {
                talents.map((data, index) => (
                  <option value={data.eng} key={"talentFirst" + index}>
                    {data.name}
                  </option>
                ))
              }
            </select>
            <select 
              name='talentDetail'
              className='talentDetailList'
              disabled={searchData.talent1 === "" || talents[talentId[searchData.talent1]].list.length === 0 ? true : false}
              onChange={handleTalent2}
              value={searchData.talent2}
            >
              <option value="">전체</option>
              {
                talents.map((data, index) => (
                  data.list.map((opt, idx) => (
                    <option 
                      value={opt}
                      key={"talentSecond"+index+`0${idx}`.substr(-2,2)}
                      style={{display: searchData.talent1 === data.eng ? "block" : "none"}}
                    >
                      {opt}
                    </option>
                  ))
                ))
              }
            </select>
          </div>
        </div>
        <div className="statusBox">
          <div className='nameBox dragNo'>
            <div>스텟</div>
          </div>
          <div className="statusInputBox">
            <select 
              name='statusList1'
              className='status1'
              onChange={handleStatus1}
              value={searchData.status1}
            >
              <option value="">선택 1</option>
              {
                abilities.map((data, index) => (
                  <option value={data} key={"abilityFirst" + index}>
                    {data}
                  </option>
                ))
              }
            </select>
            <select 
              name='statusList2'
              className='status2'
              disabled={searchData.status1 === "" ? true : false}
              onChange={handleStatus2}
              value={searchData.status2}
            >
              <option value="">선택 2</option>
              {
                abilities.map((data, index) => (
                  <option 
                    value={data}
                    key={"abilitySecond" + index}
                    style={{display: searchData.status1 === data ? "none" : "block"}}
                  >
                    {data}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='sortList'>
          <div className='nameBox dragNo'>
            <div>정렬</div>
          </div>
          <div className="sortInputBox">
            <div className='checkOne' style={{display: searchData.status1 === "" ? "none" : "flex"}}>
              <input type='radio' name='ap' value="ability" onChange={handleSort} />
              <label>상승 스텟 AP 효율 순</label>
            </div>
            <div className='checkOne' style={{display: searchData.status1 === "" ? "none" : "flex"}}>
              <input type='radio' name='ap' value="status" onChange={handleSort} />
              <label>상승 스텟 많은 순</label>
            </div>
            <div className='checkOne'>
              <input type='radio' name='ap' value="name" onChange={handleSort} checked={searchData.status1 === "" || searchData.sort === "name" ? true : false} />
              <label>이름 순</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillHeader