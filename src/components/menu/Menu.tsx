import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../assets/globalStyles/Theme';



export type MenuItemPropsType = {
	typeItem: 'link' | 'icon';
	label: string;
	href?: string;
	viewBox?: string;
}

export const Menu = (props: {menuItems: MenuItemPropsType[]})  => {
   return (
      <StyledMenu>
         <ul>
				{props.menuItems.map((item, index)=>{
					return (
						<li key={index}>
							{item.typeItem === 'link' ? (
								<StyledLink href={item.href}>{item.label}</StyledLink>
							) : (
								<a href={item.href}><Icon iconId={item.label} viewBox={item.viewBox} /></a>
							)}
						</li>
					)
				})}
         </ul>
      </StyledMenu>
   );
};


const StyledMenu = styled.nav`
   ul {
      display: flex;
		gap: 30px;
   }
`;

const StyledLink = styled.a`
	color:${theme.colors.secondaryFont};
`