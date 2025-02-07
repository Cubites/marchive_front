import './dyeHeader.css';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectDye, dyeActions } from '../../../../store/dye';
import { sources, colorType } from './dyeData';

const DyeHeader = () => {
  const searchData = useAppSelector(selectDye);
  const dispatch = useAppDispatch();

  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dyeActions.updateSearchWord(e.target.value));
  }
  const handleFirstSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(dyeActions.updateFirstSource(e.target.value));
  }
  const handleSecondSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(dyeActions.updateSecondSource(e.target.value));
  }
  const handleRGB = {
    seleced: () => {
      dispatch(dyeActions.updateRgbSelected(true));
    },
    r: (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
      dispatch(dyeActions.updateRgbR(Number(e.target.value)));
    },
    g: (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
      dispatch(dyeActions.updateRgbG(Number(e.target.value)));
    },
    b: (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = String(Number(e.target.value.replace(/[^0-9]/g, "")));
      dispatch(dyeActions.updateRgbB(Number(e.target.value)));
    }
  }
  const handleHex = {
    selected: () => {
      dispatch(dyeActions.updateHexSelected(true));
    },
    hex: (e:React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/[^0-9ABCDEFabcdef]/g, "").substring(0, 6);
      dispatch(dyeActions.updateHex(e.target.value));
    }
  }
  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(dyeActions.updateType(e.target.value));
  }
  const reset = () => { dispatch(dyeActions.reset()) }

  return (
    <div id='dyeHeader'>
      <div className='mainBox'>

        {/* searchBox */}
        <div className='searchBox'>
          <div className='nameBox dragNo'>
            <div>이름</div>
          </div>
          <div className="searchInputBox">
            <input type='text' value={searchData.searchWord} onChange={handleSearchWord}/>
            <div className="buttonBox">
              <div className='searchBtn'>검색</div>
              <div className='resetBtn' onClick={reset}>초기화</div>
            </div>
          </div>
        </div>

        {/* sourceBox */}
        <div className='sourceBox'>
          <div className='nameBox dragNo'>
            <div>출처</div>
          </div>
          <div className="sourceInputBox">
            <select 
              name='firstSourceCategory'
              className='firstSourceCategory'
              onChange={handleFirstSource}
              value={searchData.firstSource}
            >
              <option value="">전체</option>
              {
                sources.map((data, index) => (
                  <option value={data.eng} key={"firstSourceCategory" + index}>
                    {data.name}
                  </option>
                ))
              }
            </select>
            <select
              name='secondSourceCategory'
              className='secondSourceCategory'
              disabled={searchData.firstSource === "" ? true : false}
              onChange={handleSecondSource}
              value={searchData.secondSource}
            >
              <option value="">전체</option>
              {
                sources.map((data, index) => (
                  data.list.map((dd, idx) => (
                    <option 
                      value={dd}
                      key={"secondSourceCategory"+index+`0${idx}`.substr(-2,2)}
                      style={{display: searchData.firstSource === data.eng ? "block" : "none"}}
                    >
                      {dd}
                    </option>
                  ))
                ))
              }
            </select>
          </div>
        </div>

        {/* colorBox */}
        <div className="colorBox">
          <div className='nameBox dragNo'>
            <div>색코드</div>
          </div>
          <div className="colorInputBox">
            <div className="rgbBox">
              <div className="selectBox">
                <input 
                  type="radio"
                  name='colorType'
                  id='rgb'
                  className='colorType cursor'
                  onChange={handleRGB.seleced}
                  checked={searchData.color.rgb.selected} />
                <label htmlFor='rgb' className='cursor'>RGB</label>
              </div>
              <input 
                type='text' 
                className='rgbValue' 
                onFocus={e => e.target.select()} 
                placeholder='red'
                disabled={!searchData.color.rgb.selected}
                onChange={handleRGB.r}
                value={searchData.color.rgb.r}
                />
              <input 
                type='text' 
                className='rgbValue' 
                onFocus={e => e.target.select()} 
                placeholder='green'
                disabled={!searchData.color.rgb.selected}
                onChange={handleRGB.g}
                value={searchData.color.rgb.g} />
              <input 
                type='text' 
                className='rgbValue' 
                onFocus={e => e.target.select()} 
                placeholder='blue'
                disabled={!searchData.color.rgb.selected}
                onChange={handleRGB.b}
                value={searchData.color.rgb.b} />
            </div>
            <div className="hexBox">
              <div className="selectBox">
                <input 
                  type="radio"
                  name='colorType'
                  id='hex'
                  className='colorType cursor'
                  onChange={handleHex.selected}
                  checked={searchData.color.hex.selected} />
                <label htmlFor='hex' className='cursor'>HEX</label>
              </div>
              <input 
                type="text"
                name='hexValue'
                className='hexValue'
                onFocus={e => e.target.select()} 
                placeholder='000000'
                disabled={!searchData.color.hex.selected}
                onChange={handleHex.hex}
                value={searchData.color.hex.c} />
            </div>
          </div>
        </div>

        {/* typeBox */}
        <div className="typeBox">
          <div className='nameBox dragNo'>
            <div>종류</div>
          </div>
          <div className="typeInputBox">
            <select 
              name='typeCategory'
              className='typeCategory'
              onChange={handleType}
              value={searchData.type}
            >
              <option value="">전체</option>
              {
                colorType.map((data, index) => (
                  <option value={data} key={"typeCategory" + index}>
                    {data}
                  </option>
                ))
              }
            </select>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DyeHeader