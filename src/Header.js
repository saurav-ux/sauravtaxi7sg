import React from 'react';

export default function Header()
{
  return(
    <header>
    <nav className='nav1'>
    {/* <h1><a href="google.com">Saurav</a></h1> */}
    <div className='fact'>
    <img src="logo192.png" alt="Saurav" className='img1' ></img>
    <h3 className='h3'> ReactFact</h3>
    </div>
    <div>
        <ul className='navClass'>
            <li>Pricing</li>  
            <li>About</li>
            <li>Contact</li>
        </ul>

    </div>
    </nav>
</header>
  )
}