import { Title } from 'components/atoms/Title/Title';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StyledList } from '../ProductsList/ProductsList.styles';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem.js';
import { ProductsContext } from 'providers/ProductsProvider';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const FoodNutrientsList = () => {
  const { productsFromAPI, foodNutrientsTotal, handleFoodNutrientsTotal } =
    useContext(ProductsContext);

  useEffect(() => {
    handleFoodNutrientsTotal();
  }, [productsFromAPI]);

  return (
    <ViewWrapper>
      <Title>Tabela wartości odżywczych</Title>
      <StyledList>
        {productsFromAPI.map((product) => (
          <>
            <p>{product.fdcId}</p>
            <p>{product.foodNutrients[0].amount}</p>
          </>
        ))}
        ;
        {foodNutrientsTotal.map((foodNutrient) => (
          <>
            <p>{foodNutrient.name}</p>
            <p>{foodNutrient.amount}</p>
          </>
        ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default FoodNutrientsList;
