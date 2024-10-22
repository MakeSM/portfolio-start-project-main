import React from 'react';
import { Icon } from '../icon/Icon';

export const Logo = (props: {typeLogo: string}) => {
   return (
      <a href='#'>
         <Icon iconId={props.typeLogo} width="100px" height="60px" viewBox={'0 0 100 60'} />
      </a>
   );
};
