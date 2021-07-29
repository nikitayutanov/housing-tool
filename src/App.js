import CompanyList from 'components/company-list/CompanyList';
import HousingList from 'components/housing-list/HousingList';
import 'assets/App.css';
import { useState } from 'react';

function App() {
  const [companyId, setCompanyId] = useState(1);

  return (
    <div className="container">
      {companyId ? (
        <HousingList companyId={companyId} />
      ) : (
        <CompanyList setCompanyId={setCompanyId} />
      )}
    </div>
  );
}

export default App;
