import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { client } from '../../libs/graphqlClient';
import { CREATE_REQUEST_MUTATION } from '../../queries/createRequest';

import { Input } from '../input/Input';
import { Notification } from '../notification/Notification';

const OrderButtonStyled = styled.button`
  color: ${(props) => props.theme.titleColor};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.mainColor};
  color: ${(props) => props.theme.titleColor};
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  font-weight: 400;
  margin-bottom: 1rem;
  transition-duration: 300ms;
  cursor: pointer;
  height: 48px;
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.activeColor};
  }
`;

function ContactsForm({ cart }) {
  const [successMessage, setSuccesMessage] = useState(false);

  async function sendRequest() {
    const { data } = await client.mutate({
      mutation: CREATE_REQUEST_MUTATION,
      variables: {
        products: cart.map((product) => ({
          name: product.name,
          quantity: product.quantity,
        })),
      },
    });

    return data.create_request.msg;
  }

  return (
    <>
      <Notification
        text="Заявка отправлена"
        messageType="success"
        show={successMessage}
      />
      <form
        name="order"
        onSubmit={async (e) => {
          e.preventDefault();
          const msg = await sendRequest();
          if (msg === 'Заявка отправлена') {
            setSuccesMessage(true);
          }
        }}
      >
        <Input name="name" type="text" placeholder="ФИО" required />
        <Input name="tel" type="tel" placeholder="Телефон для связи" required />
        <Input
          name="inn"
          type="number"
          placeholder="ИНН для выставления счета"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email для отправки счета"
          required
        />
        <Input name="notation" type="text" placeholder="Примечание" />
        <OrderButtonStyled disabled={successMessage} type="submit">
          Оформить заказ
        </OrderButtonStyled>
      </form>
    </>
  );
}

const ContactsFormConnected = connect(({ cart }) => ({ cart }))(ContactsForm);
export { ContactsFormConnected as ContactsForm };
