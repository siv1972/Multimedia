import React, { useEffect, useState } from 'react'
import Loading from "../media/images/Loading/Loading.gif"

const DynamicImageClick = ({name,path,click}) => {
  const[loadpath,setLoadpath]=useState("Loading/Loading.gif")

  useEffect(()=>{
    setLoadpath(path)
  },[path])
  return (
    <>
      <div className='img-crop'>
        {loadpath === "Loading/Loading.gif"?
        <img className='dynamic-img' src={Loading} alt={name} />
        :
        <img className='dynamic-img' onClick={()=> click(name)} src={require(`../media/images/${loadpath}`)} alt={name} />
        }
      </div> 
    </>
  )
}

export default DynamicImageClick