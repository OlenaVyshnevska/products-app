import React from 'react';
import Prod from "./components/Product/Product";
import productsData from './components/Product/api/productsData';

let ProdArr = productsData.map(
  apiResponse =>
  <Prod key={apiResponse.id} product={apiResponse}/>
);

const App = () => {
  return(
    <div className="prodBox">
      <h1 className="heading">Products in Stock</h1>
      {ProdArr}
    </div>
  );
};

export default App;
