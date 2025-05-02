import './dyePage.css';
import DyeHeader from './dyePart/DyeHeader';
import DyeList from './dyePart/DyeList';

const DyePage = () => {
  return (
    <div id="dyePage">

      <div className='banner'>
        <p className='title jua-regular'>염색 앰플</p>
        <p className='jua-regular'>마비노기에 있는 염색 앰플을 검색 할 수 있습니다.</p>
      </div>

      <div className="dyeContainer">
        <DyeHeader />
        <DyeList />
      </div>
    </div>
  )
}

export default DyePage