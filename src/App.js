import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import MenuList from './Components/MenuList/MenuList';
import GeneralInformation from './Components/GeneralInformation/GeneralInformation';
import Local from './Components/Local/Local';
import Activities from './Components/Activities/Activities';
import Opportunities from './Components/Opportunities/Opportunities';
import CreditLimit from './Components/CreditLimit/CreditLimit';
import Sales from './Components/Sales/Sales';
import FinancialBonds from './Components/FinancialBonds/FinancialBonds';

function App() {
  return (
    <div className="container">
      <MenuBar />
      <MenuList />
      <div className="content">
        <GeneralInformation />
        <Local />
        <Activities />
        <Opportunities />
        <CreditLimit />
        <Sales />
        <FinancialBonds />
      </div>
    </div>
  );
}

export default App;
