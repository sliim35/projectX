import React, { useContext } from 'react';
import styled from 'styled-components';

import { CartContext } from '../../store/contexts/CartContext';

import { Container } from '../../components/container/Container';
import { Content } from '../../components/content/Content';
import { LeadTitle } from '../../components/lead-title/LeadTitle';
import { ContactsForm } from '../../components/contacts-form/ContactsForm';
import { ProductsList } from '../../components/products-list/ProductsList';
import { Total } from '../../components/total/Total';

const CartContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

export const Cart = () => {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;

  return (
    <Content>
      <Container>
        <LeadTitle>{`Корзина (${cart.length})`}</LeadTitle>
        <CartContentWrapper>
          {cart.length > 0 ? (
            <>
              <ProductsList products={cart} />
              <Total products={cart} />
              <ContactsForm />
            </>
          ) : (
            'В корзине ничего нет 😢'
          )}
        </CartContentWrapper>
      </Container>
    </Content>
  );
};
