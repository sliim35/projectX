import React from 'react';
import styled from 'styled-components';

import { Container } from '../../components/container/Container';
import { Content } from '../../components/content/Content';
import { LeadTitle } from '../../components/lead-title/LeadTitle';
import { Title } from '../../components/title/Title';
import { Text } from '../../components/text/Text';

const DescriptionWrapper = styled.section`
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem 2rem;
`;

export const Home = () => {
  return (
    <Content>
      <Container>
        <LeadTitle>Положительный контакт вместе с Kantu!</LeadTitle>
        <DescriptionWrapper>
          <Title>Чем мы занимаемся?</Title>
          <Text lineHeight="1.8">
            Занимаемcя производством электротехнического оборудования под маркой
            Texenergo. Работаем со всеми брендами в сфере энергораспределения и
            промышленной автоматизации. Самая мощная и прозрачная на рынке
            система для самостоятельной работы.
            <br /> Производим и делаем шеф-монтаж щитового оборудования. Вы
            видели других производителей "щитовухи" со складом в 10 000 метров?
            За все время пребывания на рынке электрооборудования мы успели
            поработать с многочисленными мировыми брендами, получили больше 10
            000 положительных отзывов и комментириев, максимально облегчили
            поиск товаров, автоматизировали личный кабинет, выпустили более 2000
            наименований товаров под своим брендом. Всегда готовы к
            сотрудничеству с новыми клиентами. Может это будете Вы?
          </Text>
        </DescriptionWrapper>
      </Container>
    </Content>
  );
};
