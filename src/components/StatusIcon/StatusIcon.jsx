import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

export const StatusIcon = ({ on, showOn = true, showOff = true }) => {
  if (Boolean(on)) {
    return showOn ? <BsCheckLg color='green' size={18} /> : null
  }
  else {
    return showOff ? <MdClose color='red' size={24} /> : null
  }
}



