import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';



export type MenuItem = {
	typeItem: 'link' | 'icon';
	label: string;
	href?: string;
	viewBox?: string;
}

// (props: {menuItems: MenuItem[]})
// (props: {menuItems: Array<{[key: string]: any}>})
// export const Menu = (props: {menuItems: Array<{[key: string]: any}>}) => {
export const Menu = (props: {menuItems: MenuItem[]})  => {
   return (
      <StyledMenu>
         <ul>
				{props.menuItems.map((item, index)=>{
					return (
						<li key={index}>
							{/* {item.typeItem === 'link' ? ():()} */}
							{/* // <a href={item.href}>{item.label}</a>
							// <a href={item.href}><Icon iconId={item.label} viewBox={item.viewBox} /></a> */}
							{item.typeItem === 'link' ? (
								<a href={item.href}>{item.label}</a>
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

// export const Menu = () => {
//    return (
//       <StyledMenu>
//          <ul>
// 				<li>
//                <a href="">Home</a>
//             </li>
//             <li>
//                <a href="">Tech Stack</a>
//             </li>
//             <li>
//                <a href="">Projects</a>
//             </li>
//             <li>
//                <a href="">Contact</a>
//             </li>
//             <li>
//                <a href="">
//                   <Icon iconId={'githubIcon'} viewBox={'0 0 30 30'}/>
//                </a>
//             </li>
//             <li>
//                <a href="">
//                   <Icon iconId={'telegramIcon'} viewBox={'0 0 30 30'}/>
//                </a>
//             </li>
//             <li>
//                <a href="">
//                   <Icon iconId={'linkedinIcon'} viewBox={'0 0 30 30'}/>
//                </a>
//             </li>
//          </ul>
//       </StyledMenu>
//    );
// };

const StyledMenu = styled.nav`
   ul {
      display: flex;
      gap: 30px;
   }
`;
