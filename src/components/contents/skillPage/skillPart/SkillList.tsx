import './skillList.css';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectSkill, skillActions } from '../../../../store/skill';
import { talents, abilities } from './skillData';
import { sumHeader, skillInfo } from '../skillPart/skillData';

const SkillList = () => {
  return (
    <div id='skillList'>
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
              skillInfo.map((item, id) => (
                <div className='tab' key={'skh' + id}>{item}</div>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SkillList