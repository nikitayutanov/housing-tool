import CompanyList from 'components/company-list/CompanyList';
import HousingList from 'components/housing-list/HousingList';
import 'assets/App.css';
import { useSelector } from 'react-redux';
import { selectSelectedCompany } from 'selectors';

function App() {
  const selectedCompany = useSelector(selectSelectedCompany);

  return (
    <div className="container">
      {selectedCompany ? <HousingList /> : <CompanyList />}
    </div>
  );
}

export default App;
