import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../Styles/totalMusicHome.css'

import DynamicImageBox from '../Components/DynamicImageBox'
import Header from '../Components/Header';

const MusicHome = () => {

    const navigate=useNavigate();

    const[list,setList]=useState([

        {
            Genre:"Actors",
            photos:[
                {
                    name:"Surya",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Samantha",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vijay",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vikram",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Nazriya",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },

        {
            Genre:"Music Directors",
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
            Genre:"Play Back Singers",
            photos:[
                {
                    name:"Hariharan",
                    path:"Loading/Loading.gif"
                },
                
                {
                    name:"PradeepKumar",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"S.P.B",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Shankar_Mahadevan",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Sidsriram",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },

        {
            Genre:"Lyricists",
            photos:[
                {
                    name:"Na.Muthukumar",
                    path:"Loading/Loading.gif"
                },
                
                {
                    name:"Pa.Vijay",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vaali",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vairamuthu",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Vivek",
                    path:"Loading/Loading.gif"
                },
        
            ]
        },


        {
            Genre:"English Artists",
            photos:[
                {
                    name:"BillieElish",
                    path:"Loading/Loading.gif"
                },
                
                {
                    name:"Olivia",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"MJ",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Shakira",
                    path:"Loading/Loading.gif"
                },
                {
                    name:"Eminem",
                    path:"Loading/Loading.gif"
                },
        
            ]
        }
    ]
    );

    useEffect(()=>{
        setList(
            [

                {
                    Genre:"Actors",
                    photos:[
                        {
                            name:"Surya",
                            path:"MusicHome/Surya.png"
                        },
                        {
                            name:"Samantha",
                            path:"MusicHome/Samantha.jfif"
                        },
                        {
                            name:"Vijay",
                            path:"MusicHome/Vijay.jpg"
                        },
                        {
                            name:"Vikram",
                            path:"MusicHome/Vikram.jpg"
                        },
                        {
                            name:"Nazriya",
                            path:"MusicHome/Nazriya.jpg"
                        },
                
                    ]
                },
        
                {
                    Genre:"Music Directors",
                    photos:[
                        {
                            name:"AR_Rahman",
                            path:"MusicHome/AR_Rahman.jpg"
                        },
                        {
                            name:"G.V.Prakash",
                            path:"MusicHome/G.V.Prakash.jpg"
                        },
                        {
                            name:"Aniruth",
                            path:"MusicHome/Aniruth.jpg"
                        },
                        {
                            name:"VijayAntony",
                            path:"MusicHome/VijayAntony.jfif"
                        },
                        {
                            name:"YuvanShankarraja",
                            path:"MusicHome/YuvanShankarraja.jpg"
                        },
                
                    ]
                },

                {
                    Genre:"Play Back Singers",
                    photos:[
                        {
                            name:"Hariharan",
                            path:"MusicHome/Hariharan.jpg"
                        },
                        
                        {
                            name:"PradeepKumar",
                            path:"MusicHome/PradeepKumar.jpg"
                        },
                        {
                            name:"S.P.B",
                            path:"MusicHome/S.P.B.jpg"
                        },
                        {
                            name:"Shankar_Mahadevan",
                            path:"MusicHome/ShankarMahadevan.jpeg"
                        },
                        {
                            name:"Sidsriram",
                            path:"MusicHome/Sidsriram.webp"
                        },
                
                    ]
                },
        
                {
                    Genre:"Lyricists",
                    photos:[
                        {
                            name:"Na.Muthukumar",
                            path:"MusicHome/Na.MuthuKumar.jpg"
                        },
                        
                        {
                            name:"Pa.Vijay",
                            path:"MusicHome/Pa.Vijay.jpeg"
                        },
                        {
                            name:"Vaali",
                            path:"MusicHome/Vaali.jpg"
                        },
                        {
                            name:"Vairamuthu",
                            path:"MusicHome/Vairamuthu.webp"
                        },
                        {
                            name:"Vivek",
                            path:"MusicHome/Vivek.jpg"
                        },
                
                    ]
                }
            ]
        )
    },[])

    const goToPage=(name)=>{
        setList([]);
        navigate(`/Music/${name}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);

    return (
        <>
        <Header path='Home'/>
        <div className='total-music-home'>
        <img className='background' src={require("../media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />
            <DynamicImageBox list={list} goToPage={goToPage} />
        </div>
        </>
        
    );
}

export default MusicHome