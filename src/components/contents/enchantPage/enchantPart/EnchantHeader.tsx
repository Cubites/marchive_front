import './enchantHeader.css';
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { selectEnchant, enchantActions } from '../../../../store/enchant';
import { effect, part, partId } from './enchantData';

const EnchantHeader = () => {
  const searchData = useAppSelector(selectEnchant);
  const dispatch = useAppDispatch();

  const handleSearchType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(enchantActions.updateSearchType(e.target.value));
  }
  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(enchantActions.updateSearchWord(e.target.value));
  }
  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(enchantActions.updateLocation(e.target.value));
  }
  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(enchantActions.updateStatus(e.target.value));
  }
  const handleStatusDetail = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(enchantActions.updateStatusDetail(e.target.value));
  }
  const handlePart = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(enchantActions.updatePart(e.target.value));
  }
  const handlePartDetail = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(enchantActions.updatePartDetail(e.target.value));
  }
  const reset = () => { dispatch(enchantActions.reset()) }

  return (
    <div id='enchantHeader'>
      <div className='mainBox'>

        {/* searchBox */}
        <div className='searchBox'>
          <div className='nameBox dragNo'>
            <div>검색어</div>
          </div>
          <div className="searchInputBox">
            <div className="inputBox">
              <select 
                name='searchCategory' className='category'
                onChange={handleSearchType}
                value={searchData.searchType}
              >
                <option value="1">이름</option>
                <option value="2">입수처</option>
              </select>
              <input type='text' onChange={handleSearchWord} />
            </div>
            <div className='buttonBox'>
              <div className='searchBtn dragNo'>검색</div>
              <div className='resetBtn dragNo' onClick={reset}>검색 초기화</div>
            </div>
          </div>
        </div>

        {/* locationBox */}
        <div className='locationBox dragNo'>
          <div className='nameBox'>
            <div>접두/접미</div>
          </div>
          <div className="locationInputBox">
            <label>
              <input 
                type="radio" name="position" value="" 
                onChange={handleLocation} 
                checked={searchData.location === "" ? true : false} />
              <span>전체</span>
            </label>
            <label>
              <input type="radio" name="position" value="접두" 
              onChange={handleLocation} 
              checked={searchData.location === "접두" ? true : false} />
              <span>접두</span>
            </label>
            <label>
              <input type="radio" name="position" value="접미" 
              onChange={handleLocation}
              checked={searchData.location === "접미" ? true : false} />
              <span>접미</span>
            </label>
          </div>
        </div>

        {/* statusBox */}
        <div className='statusBox'>
          <div className='nameBox dragNo'>
            <div>효과</div>
          </div>
          <div className="statusInputBox">
            <select 
              name='status'
              className='statusList'
              onChange={handleStatus}
              value={searchData.status}
            >
              <option value="">전체</option>
              {
                effect.map((data, index) => (
                  <option value={data.name} key={"statusFirstCategory" + index}>
                    {data.name}
                  </option>
                ))
              }
            </select>
            <select 
              name='statusDetail'
              className='statusDetailList'
              disabled={searchData.status === "" ? true : false}
              onChange={handleStatusDetail}
              value={searchData.statusDetail}
            >
              <option value="">전체</option>
              {
                effect.map((data, index) => (
                  data.list.map((opt, idx) => (
                    <option 
                      value={opt}
                      key={"statusSecondCategory"+index+`0${idx}`.substr(-2,2)}
                      style={{display: searchData.status === data.name ? "block" : "none"}}
                    >
                      {opt}
                    </option>
                  ))
                ))
              }
            </select>
          </div>
        </div>

        {/* partBox */}
        <div className="partBox">
          <div className='nameBox dragNo'>
            <div>적용 장비</div>
          </div>
          <div className="partInputBox">
            <select 
              name='part'
              className='partList'
              onChange={handlePart}
              value={searchData.part}
            >
              <option value="">전체</option>
              {
                part.map((data, index) => (
                  <option value={data.name} key={"partFirstCategory" + index}>
                    {data.name}
                  </option>
                ))
              }
            </select>
            <select 
              name='partDetail'
              className='partDetailList' 
              disabled={searchData.part === "" || part[partId[searchData.part]].list.length === 0 ? true : false}
              onChange={handlePartDetail}
              value={searchData.partDetail}
            >
              <option value="">전체</option>
              {
                part.map((data, index) => (
                  data.list.map((partOne, idx) => (
                    <option 
                      value={partOne} 
                      key={"partSecondCategory" + index + `0${idx}`.substr(-2, 2)}
                      style={{display: searchData.part === data.name ? "block" : "none"}}
                    >
                      {partOne}
                    </option>
                  ))
                ))
              }
            </select>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EnchantHeader