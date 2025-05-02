import './enchantPage.css';
import EnchantHeader from './enchantPart/EnchantHeader';
import EnchantList from './enchantPart/EnchantList';

const EnchantPage = () => {
  return (
    <div id="enchantPage">

      <div className='banner'>
        <p className='title jua-regular'>인챈트</p>
        <p className='jua-regular'>마비노기에 있는 인챈트를 검색 할 수 있습니다.</p>
      </div>

      <div className="enchantContainer">
        <EnchantHeader />
        <EnchantList />
      </div>

    </div>
  )
}

export default EnchantPage