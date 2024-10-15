import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Menu = () => {
   return (
      <StyledMenu>
         <ul>
            <li>
               <a href="">Home</a>
            </li>
            <li>
               <a href="">Tech Stack</a>
            </li>
            <li>
               <a href="">Projects</a>
            </li>
            <li>
               <a href="">Contact</a>
            </li>
            <li>
               <a href="">
                  <Icon iconId={'githubIcon'} viewBox={'0 0 30 30'}/>
               </a>
            </li>
            <li>
               <a href="">
                  <Icon iconId={'telegramIcon'} viewBox={'0 0 30 30'}/>
               </a>
            </li>
            <li>
               <a href="">
                  <Icon iconId={'linkedinIcon'} viewBox={'0 0 30 30'}/>
               </a>
            </li>
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
