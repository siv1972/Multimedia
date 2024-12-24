import React, { useEffect, useState } from 'react'
import Loading from "../media/images/Loading/Loading.gif"
const DynamicImageDisplay = ({name,path}) => {
  const[loadpath,setLoadpath]=useState("Loading/Loading.gif")

  useEffect(()=>{
    setLoadpath(path)
  },[path])
  return (
    <>
    <div className='img-crop'>
    {loadpath === "Loading/Loading.gif" ?
        <img className='dynamic-img' src={Loading} alt={name} />
        :
        <img src={require(`../media/images/${loadpath}`)} alt={name} />
    }
    </div> 
    </>
  )
}

export default DynamicImageDisplay