import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Content } from '../../components/content/Content';
import { LeadTitle } from '../../components/lead-title/LeadTitle';
import { ContactsForm } from '../../components/contacts-form/ContactsForm';
import { ProductsList } from '../../components/products-list/ProductsList';
import { LineIndicator } from '../../components/line-indicator/LineIndicator';
import { Button } from '../../components/button/Button';

const CartContentWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 3rem;
  padding-bottom: 2.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const NextStepButton = styled(Button)`
  margin-left: auto;
  margin-top: 1rem;
`;

const Cart = ({ cart }) => {
  const [step, setStep] = useState('cartStep');

  function renderSteps() {
    switch (step) {
      case 'cartStep':
        return <ProductsList />;
      case 'checkoutStep':
        return <ContactsForm />;
      default:
        return <ProductsList />;
    }
  }

  return (
    <Content>
      <LeadTitle>
        {step === 'cartStep' && `Корзина (${cart.length})`}
        {step === 'checkoutStep' && 'Оформление заказа'}
      </LeadTitle>
      <CartContentWrapper>
        {cart.length > 0 ? (
          <>
            <LineIndicator step={step} />
            {renderSteps()}
            {step === 'cartStep' && (
              <ButtonWrapper>
                <NextStepButton onClick={() => setStep('checkoutStep')}>
                  Перейти к оформлению
                </NextStepButton>
              </ButtonWrapper>
            )}
          </>
        ) : (
          'В корзине ничего нет 😢'
        )}
      </CartContentWrapper>
    </Content>
  );
};

const CartConnected = connect(({ cart }) => ({ cart }))(Cart);
export { CartConnected as Cart };
