import CompanyList from 'components/CompanyList';
import 'assets/App.css';
import { useState } from 'react';

function App() {
  const [companyId, setCompanyId] = useState('');

  return (
    <div className="container">
      <CompanyList setCompanyId={setCompanyId} />
    </div>
  );
}

export default App;
