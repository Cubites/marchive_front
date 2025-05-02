import React from 'react'
import './bagList.css';

const BagList = () => {
  return (
    <div id='bagList'>

      <div className="bagBox">

        <div className="imageName">
          <div className="imageBox">
            
          </div>
          <div className="bagName">
            이벤마하 스페셜리스트 프리미엄 세트 인형 가방
          </div>
        </div>

        <div className="infoBoxOne">
          <div className="resource">
            <div className="name">획득 방법</div>
            <div className="content"></div>
          </div>
          <div className="summonEffect">
            <div className="name">소환 효과</div>
            <div className="content"></div>
          </div>
          <div className="set">
            <div className="name">세트</div>
            <div className="content"></div>            
          </div>
        </div>

        <div className="infoBoxTwo">
          <div className="infoTwo category">
            <div className="name">가방 종류</div>
            <div className="content">
              인형가방
            </div>
          </div>
          <div className="infoTwo bagSize">
            <div className="name">가방 크기</div>
            <div className="content">
              4 x 2
            </div>
          </div>
          <div className="infoTwo innerSize">
            <div className="name">내부 크기</div>
            <div className="content">
              12 x 11
            </div>
          </div>
          <div className="infoTwo dye">
            <div className="name">염색</div>
            <div className="content">
              불가능
            </div>
          </div>
          <div className="infoTwo backShare">
            <div className="name">은행 공유</div>
            <div className="content">
              불가능
            </div>
          </div>
          <div className="infoTwo duplication">
            <div className="name">중복 소지</div>
            <div className="content">
              가능
            </div>
          </div>
          <div className="trade">
            <div className='tradeName'>거래</div>
            <div className="tradeBox">
              <div className="infoTwo package">
                <div className="name">교환권/상자</div>
                <div className="content">
                  가능
                </div>
              </div>
              <div className="infoTwo drop">
                <div className="name">드랍식</div>
                <div className="content">
                  가능
                </div>
              </div>
            </div>
          </div>
          <div className="infoTwo summonCost">
            <div className="name">소환 코스트</div>
            <div className="content">
              1
            </div>
          </div>
          <div className="infoTwo summonTime">
            <div className="name">소환 시간</div>
            <div className="content">
              150분
            </div>
          </div>
          <div className="infoTwo collection">
            <div className="name">수집 카테고리</div>
            <div className="content">
              방직/포션
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default BagList