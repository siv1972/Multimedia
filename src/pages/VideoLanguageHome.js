import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


import DynamicImageBox from '../Components/DynamicImageBox';
import Header from '../Components/Header';
import ImageSlider from '../Components/ImageSlider';

const VideoLanguageHome = () => {
  let {lang}=useParams(); 

  const navigate=useNavigate();

  const [currentLanguage,setCurrentLanguage]=useState([]);

  
  useEffect(()=>{

    const langMap=new Map();

  langMap.set("Tamil",[
    {
        Genre:"Actors",
        photos:[
            {
                name:"Ajith",
                path:"video/Tamil/Actors/Ajith/Actorimg/Ajith.webp"
            },
            
            {
                name:"Samantha",
                path:"video/Tamil/Actors/Samantha/Actorimg/Samantha.jpg"
            },
            {
                name:"Surya",
                path:"video/Tamil/Actors/Surya/Actorimg/Surya.png"
            },
            {
                name:"VijayAntony",
                path:"video/Tamil/Actors/VijayAntony/Actorimg/VijayAntony.jfif"
            },
            {
                name:"Vikram",
                path:"video/Tamil/Actors/Vikram/Actorimg/Vikram.jpg"
            }
        ]
    },
    {
        Genre:"Directors",
        photos:[
            {
                name:"Loki",
                path:"video/Tamil/Directors/loki/Directorimg/Loki.jpg"
            },
            
            {
                name:"Maniratnam",
                path:"video/Tamil/Directors/maniratnam/Directorimg/Maniratnam.jpg"
            },
            {
                name:"Murugadoss",
                path:"video/Tamil/Directors/murugadoss/Directorimg/Murugadoss.jpg"
            },
            {
                name:"Shankar",
                path:"video/Tamil/Directors/shankar/Directorimg/Shankar.jpg"
            },
            {
                name:"Vetrimaran",
                path:"video/Tamil/Directors/vetrimaran/Directorimg/Vetrimaran.jpg"
            }
        ]
    },
    {
        Genre:"New Release",
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
                name:"Star",
                path:"video/Tamil/New Release/star.jpg"
            }
        ]
    },
    {
        Genre:"Action",
        photos:[
            {
                name:"KGF",
                path:"video/Tamil/Action/KGF.jpg"
            },
            
            {
                name:"Maari2",
                path:"video/Tamil/Action/Maari2.jpg"
            },
            {
                name:"Mahaan",
                path:"video/Tamil/Action/Mahaan.jpg"
            },
            {
                name:"Vikram",
                path:"video/Tamil/Action/Vikram.jpg"
            },
            {
                name:"Vikram-Vedha",
                path:"video/Tamil/Action/Vikram-Vedha.jpg"
            }
        ]
    }
  ]);


  langMap.set("English",[
    {
        Genre:"Actors",
        photos:[
            {
                name:"BradPitt",
                path:"video/English/Actors/BradPitt/Actorimg/BradPitt.jpg"
            },
            {
                name:"Jason",
                path:"video/English/Actors/Jason/Actorimg/Jason.jpg"
            },
            {
                name:"JhonnyDepp",
                path:"video/English/Actors/JhonnyDepp/Actorimg/Jhonny.jpg"
            },
            {
                name:"RobertDowney",
                path:"video/English/Actors/RobertDowney/Actorimg/RobertDowney.jpg"
            },
            {
                name:"WillSmith",
                path:"video/English/Actors/WillSmith/Actorimg/WillSmith.jpg"
            },
        ]
    },
    {
        Genre:"Directors",
        photos:[
            {
                name:"ChadStahelski",
                path:"video/English/Directors/ChadStahelski/Directorimg/ChadStahelski.jpg"
            },
            
            {
                name:"ChristopherNolan",
                path:"video/English/Directors/ChristopherNolan/Directorimg/ChristopherNolan.jpg"
            },
            {
                name:"JamesCameron",
                path:"video/English/Directors/JamesCameron/Directorimg/JamesCameron.jpg"
            },
            {
                name:"JamesWan",
                path:"video/English/Directors/JamesWan/Directorimg/JamesWan.jpg"
            },
            {
                name:"Stephen",
                path:"video/English/Directors/Stephen/Directorimg/Stephen.jpg"
            }
        ]
    },
    {
        Genre:"New Release",
        photos:[
            {
                name:"DeadpoolandWolverine",
                path:"video/English/New Release/DeadpoolandWolverine.jpg"
            },
            {
                name:"DoctorDoom",
                path:"video/English/Actors/RobertDowney/movies/DoctorDoom.jpg"
            },
            {
                name:"Worldwarz",
                path:"video/English/Actors/BradPitt/movies/Worldwarz.jpg"
            },
            {
                name:"FastandFurious",
                path:"video/English/Actors/Jason/movies/FastandFurious.jpg"
            },
            {
                name:"POC",
                path:"video/English/Actors/JhonnyDepp/movies/POC.jfif"
            },
        ]
    },
    {
        Genre:"Action",
        photos:[
            {
                name:"Seven",
                path:"video/English/Actors/BradPitt/movies/Seven.jpg"
            },
            {
                name:"Expandables",
                path:"video/English/Actors/Jason/movies/Expandables.jpg"
            },
            {
                name:"Edward",
                path:"video/English/Actors/JhonnyDepp/movies/Edward.jfif"
            },
            {
                name:"Ironman",
                path:"video/English/Actors/RobertDowney/movies/Ironman.jfif"
            },
            {
                name:"MIB",
                path:"video/English/Actors/WillSmith/movies/MIB.jpg"
            }
        ]
    }
  ]);


  langMap.set("Malayalam",[
    {
        Genre:"Actors",
        photos:[
            {
                name:"FahadhFaasil",
                path:"video/Malayalam/Actors/FahadhFaasil/Actorimg/FahadhFaasil.jpg"
            },
            
            {
                name:"Mammootty",
                path:"video/Malayalam/Actors/Mammootty/Actorimg/Mammootty.jpg"
            },
            {
                name:"Mohanlal",
                path:"video/Malayalam/Actors/Mohanlal/Actorimg/Mohanlal.jpg"
            },
            {
                name:"NivinPauly",
                path:"video/Malayalam/Actors/NivinPauly/Actorimg/NivinPauly.jpg"
            },
            {
                name:"SaiPallavi",
                path:"video/Malayalam/Actors/SaiPallavi/Actorimg/SaiPallavi.jpg"
            }
        ]
    },
    {
        Genre:"Directors",
        photos:[
            {
                name:"BasilJoseph",
                path:"video/Malayalam/Directors/BasilJoseph/Directorimg/BasilJoseph.jpg"
            },
            
            {
                name:"Blessy",
                path:"video/Malayalam/Directors/Blessy/Directorimg/Blessy.jpg"
            },
            {
                name:"Joshiy",
                path:"video/Malayalam/Directors/Joshiy/Directorimg/Joshiy.jpg"
            },
            {
                name:"Ranjith",
                path:"video/Malayalam/Directors/Ranjith/Directorimg/Ranjith.jpg"
            },
            {
                name:"SantoshSivan",
                path:"video/Malayalam/Directors/SantoshSivan/Directorimg/SantoshSivan.jpg"
            }
        ]
    },
    {
        Genre:"New Release",
        photos:[
            {
                name:"TheGoatLife",
                path:"video/Malayalam/Directors/Blessy/movies/TheGoatLife.jpg"
            },
            {
                name:"Aavesham",
                path:"video/Malayalam/Actors/FahadhFaasil/movies/Aavesham.jpg",
            },
            {
                name:"Lucifer",
                path:"video/Malayalam/Actors/Mohanlal/movies/Lucifer.jpg"
            },
            {
                name:"ActionHeroBiju",
                path:"video/Malayalam/Actors/NivinPauly/movies/ActionHeroBiju.jpg",
            },
            {
                name:"MinnalMurali",
                path:"video/Malayalam/Directors/BasilJoseph/movies/MinnalMurali.jpg"
            }
        ]
    },
    {
        Genre:"Action",
        photos:[
            {
                name:"Godha",
                path:"video/Malayalam/Directors/BasilJoseph/movies/Godha.jpg",
            },
            {
                name:"Antony",
                path:"video/Malayalam/Directors/Joshiy/movies/Antony.jpg",
            },
            {
                name:"DoubleBarrel",
                path:"video/Malayalam/Directors/SantoshSivan/movies/DoubleBarrel.jpg"
            },
            {
                name:"Kotthu",
                path:"video/Malayalam/Directors/Ranjith/movies/Kotthu.jpg"
            },
            {
                name:"Drishyam",
                path:"video/Malayalam/Actors/Mohanlal/movies/Drishyam.jpg",
            }
        ]
    }
  ]);

    setCurrentLanguage(langMap.get(lang));
  },[lang])

  const goToPage1=(name)=>{
    navigate(`/CelebrityMoviePage/${name}`);
  }
    

  const goToPage2=(name)=>{
    navigate(`/Video/${name}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <> 
    <Header path='VideoHome' />
    <div className='total-music-home'>        
        <ImageSlider lang={lang}/>
        {
        
        (currentLanguage || []).map((e,k)=>(
            <>
                <p>{e.Genre==="Actors" || e.Genre==="Directors"?<>
                    <DynamicImageBox list={[e]} goToPage={goToPage1} />
                </>:
                    <DynamicImageBox list={[e]} goToPage={goToPage2} />
                }</p>
                
            </>
                
        ))
    } 
    </div>
      
    </>
  )
}

export default VideoLanguageHome