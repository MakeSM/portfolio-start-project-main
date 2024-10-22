import React from 'react';
import styled from 'styled-components';
import { TitleSection } from '../../../components/TitleSection';
import { SpanTitleSection } from '../../../components/SpanTitleSection';
import { Work } from './work/Work';
import project1 from '../../../assets/images/project1.png';
import project2 from '../../../assets/images/project2.png';
import project3 from '../../../assets/images/project3.png';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Works = () => {
   return (
      <StyledWorkd>
         <Container>
            <FlexWrapper direction={'column'} align={'center'}>
               <TitleSection>Projects</TitleSection>
               <SpanTitleSection>Things I’ve built so far</SpanTitleSection>
               <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                  <Work
                     title={'Project Tile goes here'}
                     text={
                        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                     }
                     textTech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={project1}
                  />
                  <Work
                     title={'Project Tile goes here'}
                     text={
                        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                     }
                     textTech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={project2}
                  />
                  <Work
                     title={'Project Tile goes here'}
                     text={
                        'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                     }
                     textTech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={project3}
                  />
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </StyledWorkd>
   );
};

const StyledWorkd = styled.section`
   min-height: 100%;
`;
