import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100%;
`;

const TitleMock = styled.div`
  background-color: #e6e6e6;
  height: 24px;
  margin: 12px;
  margin-bottom: 24px;
  border-radius: 4px;
`;

const ListMock = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  padding: 12px 0;
`;

const FirstLineItemMock = styled.div`
  background-color: #eee;
  margin-right: 24px;
  height: 16px;
  margin-bottom: 6px;
  border-radius: 4px;
`;

const SecondLineItemMock = styled.div`
  background-color: #eee;
  margin-right: 48px;
  height: 16px;
  margin-bottom: 6px;
  border-radius: 4px;
`;

const ThirdLineItemMock = styled.div`
  background-color: #eee;
  margin-right: 72px;
  height: 16px;
  margin-bottom: 6px;
  border-radius: 4px;
`;

export function CategoryLoader() {
  return (
    <LoaderWrapper>
      <TitleMock />
      <ListMock>
        <FirstLineItemMock />
        <SecondLineItemMock />
        <ThirdLineItemMock />
      </ListMock>
      <ListMock>
        <FirstLineItemMock />
        <ThirdLineItemMock />
      </ListMock>
      <ListMock>
        <FirstLineItemMock />
        <SecondLineItemMock />
        <ThirdLineItemMock />
      </ListMock>
      <ListMock>
        <FirstLineItemMock />
        <SecondLineItemMock />
      </ListMock>
      <ListMock>
        <FirstLineItemMock />
        <ThirdLineItemMock />
        <SecondLineItemMock />
      </ListMock>
    </LoaderWrapper>
  );
}
