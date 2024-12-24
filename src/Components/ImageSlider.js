// src/ImageSlider.js

import React, { useState, useEffect } from 'react';
import '../Styles/imageSlider.css'; // Import CSS for styling
import DynamicImageDisplay from './DynamicImageDisplay';



const ImageSlider = ({lang}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [images,setImages] =useState([
        'Loading/SliderLoading.gif',
    ]);

    require("../media/images/video/Tamil/Slider/Vikram.jpg")

    // Looping through the images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 9 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(()=>{
        if(lang==="Tamil"){
            setImages([
                'video/Tamil/Slider/Vikram.jpg',
                'video/Tamil/Slider/Garudan.jpg',
                'video/Tamil/Slider/Romeo.webp',
                'video/Tamil/Slider/Asuran.jpg',
                'video/Tamil/Slider/Kappan.jpg',
                'video/Tamil/Slider/Anjan.jpg',
                'video/Tamil/Slider/Kaththi2.jpg',
                'video/Tamil/Slider/Thunivu.jpg',
                'video/Tamil/Slider/Kaththi.jpg',
                'video/Tamil/Slider/Rudhran.webp'
            ])
        }

        if(lang==="English"){
            setImages([
                'video/English/Slider/Expandables.jpg',
                'video/English/Slider/POC.jpg',
                'video/English/Slider/Avengers.webp',
                'video/English/Slider/DoctorDoom.jpg',
                'video/English/Slider/FastandFurious.jpg',
                'video/English/Slider/Tourist.jpg',
                'video/English/Slider/Spy.jpg',
                'video/English/Slider/Ironman.webp',
                'video/English/Slider/Babylon.jpg',
                'video/English/Slider/POH.jpg',
                'video/English/Slider/Worldwarz.jpg'
            ])
        }

        if(lang==="Malayalam"){
            setImages([
                'video/Malayalam/Slider/AbhiyumNanum.jfif',
                'video/Malayalam/Slider/BabySam.jpg',
                'video/Malayalam/Slider/Kali.webp',
                'video/Malayalam/Slider/Majili.jpg',
                'video/Malayalam/Slider/Mukundan.jfif',
                'video/Malayalam/Slider/OneStills.jpg',
                'video/Malayalam/Slider/OruKuprasidha.jpg',
                'video/Malayalam/Slider/Prema.jpg',
                'video/Malayalam/Slider/Trivandrum.jfif',
                'video/Malayalam/Slider/Vayyari.jpg',
                'video/Malayalam/Slider/Vishnu.jfif'
            ])
        }
    },[lang])

    return (
        <div className="slider">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {
                    image==="Loading/SliderLoading.gif"?
                        <div className='slider-img-crop'>
                            <img src={require(`../media/images/Loading/SliderLoading.gif`)} style={{objectFit:"cover"}} alt={"Loading.gif"} />
                        </div>
                        :
                        <DynamicImageDisplay name={image} path={image}/>
                    }
                    
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
