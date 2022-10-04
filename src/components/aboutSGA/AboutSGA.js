import React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";

const AboutSGA = () => {
  return (
    <div className='gsa__aboutSGA section__padding'>
      <h2 id="aboutSGA">About SGA</h2>
      <div className="gsa__aboutSGA-container">
        <div className='gsa__aboutSGA-container_collabs'>
          <h3>Collaborators</h3>
          <h4><a href="https://www.linkedin.com/in/dionisis-papadopoulos-b837b9130/">Dio-P</a> <MdKeyboardArrowLeft size="1.2rem" /> </h4>
          <h4><a href="#aboutMe">kZo</a> <MdKeyboardArrowLeft size="1.2rem" /> </h4>
        </div>
        <div className='gsa__aboutSGA-container_aim'>
          <h3>Aim</h3>
          <p>SGA is a <strong>project</strong> that exploits The Guardian's API searching for articles that refer to Greece. Its aim is
          to collect info that could lead to make a more holistic and outside view for our country, exploring different points of view.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSGA;