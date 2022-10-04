import React from 'react';
import guardian from "../../assets/TheLastGuardian.png";

const Header = () => {
  return (
    <div className='gsa__header gradient__bg-hd' id="home">
      <div className='gsa__header-content'>
        <h1>Whose is this article?<br/>Let's find out!</h1>
      </div>
      <div className='gsa__header-image'>
        <img src={guardian} alt="guardian" width="722.5" height="400" />
      </div>
    </div>
  )
}

export default Header;