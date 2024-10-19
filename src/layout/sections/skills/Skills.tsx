import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { SpanTitleSection } from '../../../components/SpanTitleSection';

export const Skills = () => {
   return (
      <StyledSkills>
         <FlexWrapper direction={'column'} align={'center'}>
            <TitleSection>My Tech Stack</TitleSection>
            <SpanTitleSection> Technologies I’ve been working with recently</SpanTitleSection>
         </FlexWrapper>
         <FlexWrapper justify={'center'} wrap={'wrap'}>
            <Icon iconId={'htmlIcon'} width={'25%'}  height={'120px'} viewBox={'0 0 120 120'}/>
            <Icon iconId={'cssIcon'} width={'25%'} height={'119px'} viewBox={'0 0 120 119'}/>
            <Icon iconId={'jsIcon'} width={'25%'} height={'120px'} viewBox={'0 0 120 120'}/>
            <Icon iconId={'reactIcon'} height={'25%'} width={'101'} viewBox={'0 0 113 101'}/>
            <Icon iconId={'styledComponentsIcon'} width={'25%'} height={'110'} viewBox={'0 0 120 130'}/>
            <Icon iconId={'gitIcon'} height={'105px'} width={'25%'} viewBox={'0 0 105 105'}/>
            <Icon iconId={'githubSkillIcon'} height={'88px'} width={'25%'} viewBox={'0 0 88 88'}/>
            <Icon iconId={'vscodeIcon'} height={'112px'} width={'25%'} viewBox={'0 0 112 112'}/>
         </FlexWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.div`
	background-color: #191919;
	min-height: 100vh;
	display: flex;
	flex-direction: column; 
`