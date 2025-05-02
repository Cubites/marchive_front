import './bagPage.css';
import BagHeader from './bagPart/BagHeader';
import BagList from './bagPart/BagList';

const BagPage = () => {
  return (
    <div id='bagPage'>

      <div className='banner'>
        <p className='title jua-regular'>가방</p>
        <p className='jua-regular'>마비노기에 있는 가방을 검색 할 수 있습니다.</p>
      </div>

      <div className="bagContainer">
        <BagHeader />
        <BagList />
      </div>
      
    </div>
  )
}

export default BagPage