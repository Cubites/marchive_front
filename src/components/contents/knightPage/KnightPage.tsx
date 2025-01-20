import "./knightPage.css";
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { selectBaltane, baltaneActions } from '../../../store/baltane';


interface AlbanMember {
  name: string;
  profile: number;
  talent: string;
}

interface member {
  member: number,
  unlock: boolean
}

const KnightPage = () => {
  const memberInfo = useAppSelector(selectBaltane);
  const dispatch = useAppDispatch();

  const profile : AlbanMember[] = [
    { name: "카나", profile: 0, talent: "신성력" }
    , { name: "로간", profile: 1, talent: "솜씨" }
    , { name: "디이", profile: 2, talent: "체력" }
    , { name: "엘시", profile: 3 , talent: "행운" }
    , { name: "카오루", profile: 4, talent: "지력" }
    , { name: "아이르리스", profile: 5, talent: "의지" }
  ];

  const unlockMember = (memberId: number, unlock: boolean) => {
    const member: member = {member: memberId, unlock: unlock};
    dispatch(baltaneActions.unlock(member));
  }

  return (
    <div id="knightPage">
      <div className='guideBox'>
        <div className='inputGuide'>
          <div>대화 회차 지정 - 현재까지 진행한 대화가 몇 회차인지 지정하는 버튼입니다.</div>
          <div>대화 완료 횟수 - 오늘 해당 캐릭터와 성공한 대화 횟수를 입력해주세요. <span>대화를 실패하면 회차가 넘어지 않으니 성공한 횟수만 입력해주세요.</span></div>
          <div>호감도 - 해당 멤버의 호감도를 입력해주세요.</div>
          <div>호감도가 특정 퍼센트에 도달하면 일반 대화가 아닌 특별 대화를 선택해야합니다. <br/>특별 대화를 선택한 후에는 마지막으로 고른 일반 대화의 다음 대화를 이어서 선택하면 됩니다.</div>
        </div>
      </div>
      <div className='memberList'>
        {
          profile.map(({name, profile, talent}) => (
            <div className='memberBox' key={`alban${profile}`}>
              <div className='memberValueBox'>
                <div className='scriptSearchBtn'>대화 회차 지정</div>
                <div className='memberName'>{name}</div>
                <img src="/images/alban_profile.png" style={{objectPosition: `left ${-profile*50}px top 0px` }} />
                <div className='memberTalent'>특기 {talent}</div>
                <div className='talkFavorBox'>
                  <div className='title'>
                    <div>대화 완료 횟수</div>
                    <div>호감도</div>
                  </div>
                  <div className="selectBox">
                    <select name="talkCount" defaultValue="0">
                      <option value="0">0회</option>
                      <option value="1">1회</option>
                      <option value="2">2회</option>
                      <option value="3">3회</option>
                    </select>
                    <select name="favor" defaultValue="1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='memberScriptBox'>
                <div className='normalScriptBox'>
                  <div className='header'>일반 대화</div>
                  <div className='subHeader'>
                    <div>회차</div>
                    <div>키워드</div>
                    <div>대화</div>
                  </div>
                </div>
                <div className='specialScriptBox'>
                  <div className='header'>특별 대화</div>
                  <div className='subHeader'>
                    <div>회차</div>
                    <div>키워드</div>
                    <div>대화</div>
                  </div>
                </div>
              </div>
              <div className='lockedMember' onClick={() => unlockMember(profile, true)} style={{display: memberInfo[profile].unlock ? 'none' : 'flex'}}>
                <div className='unlockBtn'>조원 추가</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default KnightPage