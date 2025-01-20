import './enchantPage.css';
import EnchantHeader from './enchantPart/EnchantHeader';
import EnchantList from './enchantPart/EnchantList';

const EnchantPage = () => {
  return (
    <div id="enchantPage">
      <EnchantHeader />
      <EnchantList />
    </div>
  )
}

export default EnchantPage