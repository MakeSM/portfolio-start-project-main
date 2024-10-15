import React from 'react';
import styled from 'styled-components';

import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';

export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         <Menu />
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
background-color: #191919;
   display: flex;
	align-items: center;
	justify-content: center;
   /* justify-content: space-between; */
	gap: 306px;
`;
