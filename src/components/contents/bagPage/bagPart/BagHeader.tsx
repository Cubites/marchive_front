import './bagHeader.css';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectBag, bagActions } from '../../../../store/bag';
import { effect, category } from './bagData';

const BagHeader = () => {
  const searchData = useAppSelector(selectBag);
  const dispatch = useAppDispatch();

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(bagActions.updateName(e.target.value));
  }
  const handleBagWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
    dispatch(bagActions.updateBagWidth(Number(e.target.value)));
  }
  const handleBagHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
    dispatch(bagActions.updateBagHeight(Number(e.target.value)));
  }
  const handleInnerWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
    dispatch(bagActions.updateInnerWidth(Number(e.target.value)));
  }
  const handleInnerHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
    dispatch(bagActions.updateInnerHeight(Number(e.target.value)));
  }
  const handleEffect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(bagActions.updateEffect(e.target.value));
  }
  const handleEffectNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
    dispatch(bagActions.updateEffectNum(Number(e.target.value)));
  }
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(bagActions.updateCategory(e.target.value));
  }
  const reset = () => { dispatch(bagActions.reset()); }

  return (
    <div id="bagHeader">

      <div className='mainBox'>

        <div className='boxTitle'>검색 조건</div>
        
        <input
          type="text"
          className='nameSearch'
          placeholder='가방 이름'
          onChange={handleSearchName}
          value={searchData.name} />

        <div className='bagSizeBox dragNo'>
          <div className="sizeW">
            <img src="/images/ui.png" alt="width" style={{objectPosition: 'left 0px top 0px'}} />
            <input 
              type="text"
              placeholder='가로'
              onFocus={e => e.target.select()} 
              onChange={handleBagWidth} 
              value={searchData.bagWidth === 0 ? "" : searchData.bagWidth} />
          </div>
          <div className="sizeH">
            <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -29px top 0px'}}/>
            <input
              type="text"
              placeholder='세로'
              onFocus={e => e.target.select()}
              onChange={handleBagHeight} 
              value={searchData.bagHeight === 0 ? "" : searchData.bagHeight} />
          </div>
        </div>

        <div className='innerSizeBox dragNo'>
          <div className="sizeW">
            <img src="/images/ui.png" alt="width" style={{objectPosition: 'left 0px top 0px'}} />
            <input
              type="text"
              placeholder='최소'
              onFocus={e => e.target.select()} 
              onChange={handleInnerWidth}
              value={searchData.innerWidth === 0 ? "" : searchData.innerWidth} />
          </div>
          <div className="sizeH">
            <img src="/images/ui.png" alt="height" style={{objectPosition: 'left -29px top 0px'}}/>
            <input
              type="text"
              placeholder='최소'
              onFocus={e => e.target.select()}
              onChange={handleInnerHeight} 
              value={searchData.innerHeight === 0 ? "" : searchData.innerHeight} />
          </div>
        </div>

        <div className="summonEffectBox dragNo">
          <select 
            name="effectList"
            className="effect"
            onChange={handleEffect}
            value={searchData.effect}
          >
            <option value="">소환 효과 선택</option>
            {
              effect.map((data, index) => (
                <option value={data} key={"effect" + index}>
                  {data}
                </option>
              ))
            }
          </select>
          <input
            type="text"
            className='effectNumber'
            placeholder='최소'
            onFocus={e => e.target.select()} 
            onChange={handleEffectNum}
            value={searchData.effectNum === 0 ? "" : searchData.effectNum} />
        </div>

        <select
          name="bagCategory"
          className="categoryBox dragNo"
          onChange={handleCategory}
          value={searchData.category}
        >
          <option value="">가방 종류 선택</option>
          {
            category.map((data, index) => (
              <option value={data} key={"effect" + index}>
                {data}
              </option>
            ))
          }
        </select>

        <div className="buttonBox dragNo">
          <div className="resetBtn" onClick={reset}>초기화</div>
          <div className="searchBtn">검색</div>
        </div>

      </div>

    </div>
  )
}

export default BagHeader