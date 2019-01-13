import React from 'react';
import Prod from "./components/Product/Product";
import productsData from './components/Product/api/productsData';

let ProdArr = productsData.map(
  apiResponse => 
  <Prod 
    key={apiResponse.id}
    name={apiResponse.name}
    price={apiResponse.price}
    desc={apiResponse.description}
  />
);

const App = () => {
  return(
    <div className="prod">
      {ProdArr}
    </div>
  );
};

export default App;