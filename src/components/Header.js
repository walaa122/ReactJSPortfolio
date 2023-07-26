import React from 'react';
//images
import Logo from '../assets/logo.svg';

const Header = () => {
  return ( 
  <header className='py-4'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        { /* Logo */ }
        <a href='home'>
          <img src={Logo} alt=''/>
        </a>
        {/*button*/}
        <button className='btn btn-sm'><a href='https://khamsat.com/user/walaa_gamal1'>Work with me</a></button>
      </div>
    </div>
  </header>
  );
};

export default Header;
