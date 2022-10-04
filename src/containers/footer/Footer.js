import React from 'react'
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='gsa__footer gradient__bg-ft'>
      <div className='gsa__footer-copyright'>
        <p>
          Copyright <FaRegCopyright size="11"/> 2022 kZo
        </p>
      </div>
    </div>
  )
}

export default Footer;