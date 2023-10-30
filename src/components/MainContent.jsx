import React, { useState } from 'react';

function MainContent() {
  const [state, setState] = useState({ pageTitle: 'Customers', customerCount: 5 });
  const onRefreshClick = () => {
    setState({ pageTitle: 'Customers', customerCount: 10 });
  };
  return (
    <div>
      <main>
        <h4 className="border-bottom m-1 p-1">
          {state.pageTitle}
          <span className="badge bg-secondary m-2">
            {
            state.customerCount
}
          </span>
          <button className="btn btn-info" onClick={onRefreshClick} type="submit">Refresh</button>
        </h4>
      </main>
    </div>
  );
}

export default MainContent;
