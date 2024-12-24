import React from 'react'

import DynamicImageBox from './DynamicImageBox';

const DynamicLangaugePage = ({list,goToPage}) => {
  return (
    <>
        <DynamicImageBox list={list} goToPage={goToPage} />
    </>
  )
}

export default DynamicLangaugePage