import React from 'react'
import {authService} from "../../services";
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const user = authService.getCurrentUser();
  return (
    <React.Fragment>
      <DesktopNavigation user={user}/>
      <MobileNavigation user={user}/>
    </React.Fragment>
  )
};

export default Navigation
