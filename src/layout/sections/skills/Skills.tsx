import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { TitleSection } from '../../../components/TitleSection';
import { SpanTitleSection } from '../../../components/SpanTitleSection';
import { Container } from '../../../components/Container';

export const Skills = () => {
   return (
      <StyledSkills>
         <Container>
            <FlexWrapper direction={'column'} align={'center'}>
               <TitleSection>My Tech Stack</TitleSection>
               <SpanTitleSection>
                  Technologies I’ve been working with recently
               </SpanTitleSection>
            </FlexWrapper>
            <FlexWrapper justify={'space-between'} wrap={'wrap'} align={'center'}>
               <Icon
                  iconId={'htmlIcon'}
                  width={'25%'}
                  height={'120px'}
                  viewBox={'0 0 120 120'}
               />
               <Icon
                  iconId={'cssIcon'}
                  width={'25%'}
                  height={'119px'}
                  viewBox={'0 0 120 119'}
               />
               <Icon
                  iconId={'jsIcon'}
                  width={'25%'}
                  height={'120px'}
                  viewBox={'0 0 120 120'}
               />
               <Icon
                  iconId={'reactIcon'}
						width={'101'}
                  height={'25%'}
                  viewBox={'0 0 113 101'}
               />
               <Icon
                  iconId={'styledComponentsIcon'}
                  width={'25%'}
                  height={'110'}
                  viewBox={'0 0 120 130'}
               />
               <Icon
                  iconId={'gitIcon'}
						width={'25%'}
                  height={'105px'}
                  viewBox={'0 0 105 105'}
               />
               <Icon
                  iconId={'githubSkillIcon'}
						width={'25%'}
                  height={'88px'}
                  viewBox={'0 0 88 88'}
               />
               <Icon
                  iconId={'vscodeIcon'}
						width={'25%'}
                  height={'112px'}
                  viewBox={'0 0 112 112'}
               />
            </FlexWrapper>
         </Container>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   min-height: 100%;
`;
