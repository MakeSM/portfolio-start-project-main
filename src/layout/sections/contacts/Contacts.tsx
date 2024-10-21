import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Contacts = () => {
   return (
      <StyledContacts>
         <FlexWrapper align={'center'} direction={'column'}>
            <StyledText>For any questions please mail me:</StyledText>
            <StyledContact>Crispers7437@gmail.com</StyledContact>
         </FlexWrapper>
      </StyledContacts>
   );
};

const StyledContacts = styled.div`
   background-color: #191919;
   min-height: 30vh;
`;

const StyledText = styled.span`
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;
text-align: center;
color: #ccc;
`;

const StyledContact = styled.span`
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;
text-align: center;
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;
