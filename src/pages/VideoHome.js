import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import DynamicImageBox from '../Components/DynamicImageBox'

import '../Styles/videoHome.css'
import Header from '../Components/Header';

const VideoHome = () => {


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

  
  const navigate=useNavigate();
  

  useEffect(()=>{
    setDynamicList([

        {
            Genre:"New Movies",
            photos:[
                {
                    name:"Garudan",
                    path:"video/Tamil/New Release/garudan.jpeg"
                },
                {
                    name:"Goat",
                    path:"video/Tamil/New Release/goat.jpeg"
                },
                {
                    name:"Indian2",
                    path:"video/Tamil/New Release/indian2.jpg"
                },
                {
                    name:"Maharaja",
                    path:"video/Tamil/New Release/maharaja.jpg"
                },
                {
                    name:"viduthalai",
                    path:"video/Tamil/Directors/vetrimaran/movies/viduthalai.jpg"
                },
            ]
        },
        {
          Genre:"Upcoming Movies",
          photos:[
            {
                name:"DoctorDoom",
                path:"video/English/Actors/RobertDowney/movies/DoctorDoom.jpg"
            },
            {
                name:"TheGoatLife",
                path:"video/Malayalam/Directors/Blessy/movies/TheGoatLife.jpg"
            },
            {
                name:"DeadpoolandWolverine",
                path:"video/English/New Release/DeadpoolandWolverine.jpg"
            },
            {
                name:"Star",
                path:"video/Tamil/New Release/star.jpg"
            },
            {
                name:"FastandFurious",
                path:"video/English/Actors/Jason/movies/FastandFurious.jpg"
            },
      
          ]
      },
      ])
  },[])
  const goToPage=(name)=>{
    navigate(`/Video/${name}`);
}

useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
    <Header path='Home' />
    <div className='total-video-home'>
    <img className='background' src={require("../media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />  
        <div className="select-container">
            <select className="custom-select" onChange={(e)=> navigate(`/VideoLanguageHome/${e.target.value}`)}>
                <option>Select-Language</option>
                <option value="Tamil">Tamil</option>
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
            </select>
        </div>
            
        <DynamicImageBox list={dynamicList} goToPage={goToPage} />
    </div>
    </>
    
  )
}

export default VideoHome