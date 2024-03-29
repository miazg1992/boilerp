import React from 'react';
import AddProduct from 'components/organisms/AddProduct/AddProduct.js';
import ProductsList from 'components/organisms/ProductsList/ProductsList.js';
import FoodNutrientsList from 'components/organisms/FoodNutrientsList/FoodNutrientsList.js';
// import AddProduct from 'components/organisms/AddProduct/AddProduct.js';
import { ResultWrapper, Wrapper } from './UserDashboard.styles';

const UserDashboard = () => {
  return (
    <Wrapper>
      <AddProduct></AddProduct>
      <ResultWrapper>
        <ProductsList></ProductsList>
        <FoodNutrientsList></FoodNutrientsList>
      </ResultWrapper>
    </Wrapper>
  );
};

export default UserDashboard;
