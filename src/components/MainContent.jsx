import React from 'react';

function MainContent() {
  const state = { pageTitle: 'Customers', customerCount: 5 };
  const onRefeshClick = () => {
    console.log('Refresh clicked');
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
          <button className="btn btn-info" onClick={onRefeshClick} type="submit">Refresh</button>
        </h4>
      </main>
    </div>
  );
}

export default MainContent;
