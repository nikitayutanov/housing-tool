import CompanyList from 'components/company-list/CompanyList';
import HousingList from 'components/housing-list/HousingList';
import 'assets/App.css';
import { useState } from 'react';

function App() {
  const [companyId, setCompanyId] = useState('');

  return (
    <div className="container">
      {companyId ? (
        <HousingList companyId={companyId} setCompanyId={setCompanyId} />
      ) : (
        <CompanyList setCompanyId={setCompanyId} />
      )}
    </div>
  );
}

export default App;
