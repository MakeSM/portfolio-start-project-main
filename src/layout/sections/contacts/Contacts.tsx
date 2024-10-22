import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../assets/globalStyles/Theme';

export const Contacts = () => {
   return (
      <StyledContacts>
         <Container>
            <FlexWrapper align={'center'} direction={'column'}>
               <StyledText>For any questions please mail me:</StyledText>
               <StyledContact>Crispers7437@gmail.com</StyledContact>
            </FlexWrapper>
         </Container>
      </StyledContacts>
   );
};

const StyledContacts = styled.section`
   max-height: 100%;
`;

const StyledText = styled.span`
   font-weight: 700;
   font-size: 58px;
   line-height: 121%;
   letter-spacing: -0.02em;
   text-align: center;
   color: ${theme.colors.primaryFont};
`;

const StyledContact = styled.span`
   font-weight: 700;
   font-size: 58px;
   line-height: 121%;
   letter-spacing: -0.02em;
   text-align: center;
   background: ${theme.colors.accent};
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
