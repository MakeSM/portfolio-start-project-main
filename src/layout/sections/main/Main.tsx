import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import photo from '../../../assets/images/myPhoto.jpeg'

export const Main = () => {
   return (
      <StyledMain>
         <FlexWrapper justify={'space-around'} align={'center'}>
            <FlexWrapper direction={'column'}>
               <StyledText>Hi 👋, My name is Daniil Romadanov</StyledText>
               <StyledNick>@MakeSM</StyledNick>
               <StyledMainTitel> A Web Developer</StyledMainTitel>
            </FlexWrapper>
            <div>
               <StyledPhoto src={photo}/>
            </div>
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledMain = styled.div`
	background-color: #191919;
	min-height: 100vh;
`

const StyledText = styled.span`
	
`

const StyledNick = styled.h2`
	
`

const StyledMainTitel = styled.h1`
	
`

const StyledPhoto = styled.img`
	width: 349px;
	height: 349px;
	object-fit: cover;
`


