import './skillPage.css';
import SkillHeader from './skillPart/SkillHeader';
import SkillList from './skillPart/SkillList';

const SkillPage = () => {


  return (
    <div id='skillPage'>

      <div className='banner'>
        <p className='title jua-regular'>스킬</p>
        <p className='jua-regular'>스킬에 관련된 정보를 확인할 수 있습니다</p>
        <p className='jua-regular'>로그인 후 캐릭터를 생성하면 스킬 랭크를 저장해 둘 수 있습니다</p>
      </div>

      <div className="skillContainer">
        <SkillHeader />
        <SkillList />
      </div>
      
    </div>
  )
}

export default SkillPage