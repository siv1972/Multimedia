import React, { useEffect, useState } from 'react'
import "../Styles/dynamicImageBox.css";
import DynamicImageClick from './DynamicImageClick'

const DynamicImageBox = ({list,goToPage}) => {

    const[dynamicList,setDynamicList]=useState([

        {
            Genre:"New Movies",
            photos:[
                {
                    name:"AR_Rahman",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"G.V.Prakash",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Aniruth",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"VijayAntony",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"YuvanShankarraja",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },
        {
          Genre:"Upcoming Movies",
          photos:[
            {
                name:"AR_Rahman",
                path:"Loading/Loading.gif"
            },
            {
                name:"G.V.Prakash",
                path:"Loading/Loading.gif"
            },
            {
                name:"Aniruth",
                path:"Loading/Loading.gif"
            },
            {
                name:"VijayAntony",
                path:"Loading/Loading.gif"
            },
            {
                name:"YuvanShankarraja",
                path:"Loading/Loading.gif"
            },
      
          ]
      }
      ]);

      useEffect(()=>{
        setDynamicList(list)
      },[list])







  return (
    <>
        <div className='whole-music-box'>
            {
                dynamicList.map((e,i)=>(
                    <>
                        <div className='total-scroll-box'>
                            <h1 className='scroll-box-head'>{e.Genre}</h1>
                            <div className='scroll-imgbox'>
                            {
                                e.photos.map((e,i)=>(
                                    <DynamicImageClick name={e.name} path={e.path} click={goToPage} />
                                ))
                            }
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    </>
  )
}

export default DynamicImageBox