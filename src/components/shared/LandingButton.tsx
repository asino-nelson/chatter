import React from 'react'
import PropTypes from "prop-types";
import { PiArrowCircleRightLight } from 'react-icons/pi';

const LandingButton = ({label}) => {
  return (
    <div className='flex items-center  justify-items-center'>
      <PiArrowCircleRightLight size={50}/>
      <p className='text-xl mb-1 '>{label}</p>
    </div>
  )
}

export default LandingButton

LandingButton.propTypes = {
    label: PropTypes.string.isRequired
  };
