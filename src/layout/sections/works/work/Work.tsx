import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';

type WorkTypeProps = {
   title: string;
   text: string;
   textTech: string;
   src: string;
};

export const Work = (props: WorkTypeProps) => {
   return (
      <StyledWork>
         <FlexWrapper justify='space-around' direction='column'>
            <ImageWork src={props.src} />
            <TitleWork>{props.title}</TitleWork>
            <TextWork>{props.text}</TextWork>
            <TechStack>{props.textTech}</TechStack>
            <LinkWork href="#">{<Icon iconId={'linkIcon'} />}Live Preview</LinkWork>
            <LinkWork href="#">{<Icon iconId={'linckGithubIcond'} />}View Code</LinkWork>
         </FlexWrapper>
      </StyledWork>
   );
};

const StyledWork = styled.div`
background-color: #363636;
height: 567px;
width: 373px;
`;

const ImageWork = styled.img`
height: 260px;
width: 100%;
object-fit: cover;
`;

const TitleWork = styled.h3`
font-weight: 500;
font-size: 28px;
line-height: 93%;
text-align: center;
color: #ccc;
`;

const TextWork = styled.p`
font-weight: 300;
font-size: 18px;
line-height: 144%;
color: #ccc;
`;

const TechStack = styled.span``;

const LinkWork = styled.a``;
