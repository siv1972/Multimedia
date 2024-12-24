import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/music.css"
import DynamicAudioDisplay from '../Components/DynamicAudioDisplay'
import DynamicImageDisplay from '../Components/DynamicImageDisplay'
import Header from '../Components/Header';

const Music = () => {

    const {tname}=useParams();

    const[currentActor,setCurrentActor]=useState({
      name:"Surya",
      imgPath:"Loading/Loading.gif",
      about:`Surya is a soulful artist with a rare gift for emotive and empathetic
                "I think I'm good at knowing how people feel, how I feel, and being able to 
                capture that," the Los Angeles-based singer-songwriter-actor shares. Her father 
                had Filipino ancestry. Her mother had is German, English, Irish, and some Austrian ancestry. 
                Her keen sense for conveying feeling has served her well, thus far. 
                Olivia is the star of the first two seasons of the Disney+ High School Musical series. 
                Acting has been something of a new development for her. 
                Singing since she was 4, Olivia took up acting based on a recommendation from her vocal coach. 
                "Acting and music relate in that they are both about capturing feelings and 
                moments as accurately as you can," she shares.`,
      songs:[
        `Actors/Surya/Ava_Enna_Enna.mp3`,
        `Actors/Surya/Bang_Bang_Bang.mp3`,
        `Actors/Surya/Dammaku_Dammaku.mp3`,
        `Actors/Surya/Ek_Do_Theen.mp3`,
        `Actors/Surya/Ennai_Konjam.mp3`,
        `Actors/Surya/Kaal_Mulaitha_Poovae.mp3`,
        `Actors/Surya/Kaalam_Yen_Kadhali.mp3`,
        `Actors/Surya/Kadhal_Aasai.mp3`,
        `Actors/Surya/Mundhinam_Parthene.mp3`,
        `Actors/Surya/Naani_Koni.mp3`
      ]
    });

    
    

    useEffect(()=>{

      const actormap=new Map();

      //require("../media/audio/Actors/Surya/")
    actormap.set("Surya",{
      name:"Surya",
      imgPath:"MusicHome/Surya.png",
      about:`Suriya Sivakumar, born on July 23, 1975, in Chennai, India, is a distinguished actor who has made a profound impact on Tamil cinema. As the son of the acclaimed actor Sivakumar and the younger brother of actor Karthi, Suriya was introduced to the film industry from a young age. He made his acting debut in the 1997 film Nerrukku Ner, but his career took a major leap with the 2001 film Ghajini, directed by A.R. Murugadoss. In Ghajini, Suriya's portrayal of a man grappling with short-term memory loss was widely praised for its depth and intensity, establishing him as a leading actor. His versatility is evident in his diverse roles, including the intense police officer in the Singam series, where his commanding presence and action sequences were highly acclaimed, and in 24, where he portrayed both a space scientist and a villain, showcasing his ability to handle complex characters. His performance in Soorarai Pottru, based on the life of Air Deccan founder G.R. Gopinath, was particularly notable for its emotional resonance and inspiring narrative. In addition to his cinematic achievements, Suriya is deeply involved in philanthropy through his Agaram Foundation, which supports educational and healthcare initiatives for underprivileged children. His dedication to social causes reflects his belief in giving back to the community and making a positive impact on society. Over the years, Suriya has received numerous awards and accolades for his work in both film and philanthropy, earning him a devoted fan base and a respected place in Indian cinema. His enduring influence is marked by his exceptional acting talent and his ongoing commitment to societal betterment, securing his legacy as one of the most respected and impactful figures in the film industry.`,
      songs:[
        `Actors/Surya/Ava_Enna_Enna.mp3`,
        `Actors/Surya/Bang_Bang_Bang.mp3`,
        `Actors/Surya/Dammaku_Dammaku.mp3`,
        `Actors/Surya/Ek_Do_Theen.mp3`,
        `Actors/Surya/Ennai_Konjam.mp3`,
        `Actors/Surya/Kaal_Mulaitha_Poovae.mp3`,
        `Actors/Surya/Kaalam_Yen_Kadhali.mp3`,
        `Actors/Surya/Kadhal_Aasai.mp3`,
        `Actors/Surya/Mundhinam_Parthene.mp3`,
        `Actors/Surya/Naani_Koni.mp3`
      ]
    });

    actormap.set("Samantha",{
      name:"Samantha",
      imgPath:"MusicHome/Samantha.jfif",
      about:`Samantha Ruth Prabhu is one of the most prominent actresses in South Indian cinema, known for her beauty, grace, and versatile performances across various genres. With a career spanning over a decade, Samantha has made a significant mark in Tamil and Telugu films. She debuted in 2010 with Ye Maaya Chesave, which earned her critical acclaim and won her the Nandi Award for Best Actress. Since then, she has appeared in a series of successful films, including Eega, Theri, Rangasthalam, Mersal, and Oh! Baby. Samantha is praised for her ability to effortlessly switch between commercial and content-driven roles, with films like Mahanati highlighting her acting depth. Her natural talent, along with her expressive eyes and charming screen presence, has made her a fan favorite. Over the years, she has worked alongside top actors such as Vijay, Mahesh Babu, and Allu Arjun, building a diverse filmography.Apart from her acting prowess, Samantha is known for her involvement in philanthropic activities. She founded the NGO Pratyusha Support, which provides medical support to women and children in need. Her charity work, often done without much publicity, has endeared her even more to the public.In addition to her film career, Samantha has gained recognition for her fashion sense, becoming a style icon in the South Indian film industry. Recently, she has ventured into web series, with her role in The Family Man 2 receiving widespread praise for her portrayal of a complex character, demonstrating her willingness to take on unconventional roles. Despite facing personal challenges, including her battle with a health condition and a high-profile divorce, Samantha remains resilient and focused on her career. Her strong work ethic and dedication have cemented her place as one of the most influential and respected actresses in the industry, making her an inspiration to many.`,
      songs:[
        `Actors/Samantha/Aanalum_Indha.mp3`,
        `Actors/Samantha/Aathi.mp3`,
        `Actors/Samantha/Ek_Do_Theen.mp3`,
        `Actors/Samantha/Kadhal_Aasai.mp3`,
        `Actors/Samantha/Selfie_Pulla.mp3`,
      ]
    });

    actormap.set("Vijay",{
      name:"Vijay",
      imgPath:"MusicHome/Vijay.jpg",
      about:`Vijay, born Joseph Vijay Chandrasekhar on June 22, 1974, in Chennai, India, is a prominent and influential actor in Tamil cinema known for his dynamic performances and charismatic screen presence. As the son of veteran director S.A. Chandrasekhar and a film producer, Vijay was introduced to the film industry from a young age, beginning his career as a child artist in the 1984 film Vetri. His transition to lead roles came with the 1992 film Naalaiya Theerpu, but it was his performance in the 1996 film Poove Unakkaga that marked a significant breakthrough, showcasing his ability to blend romance with drama and establishing him as a leading actor in Tamil cinema. Vijay's career is characterized by his versatility, spanning various genres including action, drama, and comedy. He is widely recognized for his roles in successful films like Ghilli (2004), which solidified his status as an action star, and Thuppakki (2012), where his portrayal of a military officer fighting terrorism received acclaim for its engaging narrative and action sequences. His performance in Mersal (2017), where he played multiple roles including a magician and a doctor, was particularly noted for its emotional depth and social commentary. Vijay's 2019 film Bigil, where he portrayed both a gangster and a football coach, was a major commercial success and showcased his ability to handle complex dual roles while addressing social issues such as women's empowerment. His 2021 film Master, where he played an engaging anti-hero, was another notable success, further cementing his status as a major star. Beyond his cinematic achievements, Vijay is also known for his philanthropic efforts. He has been involved in various charitable initiatives, including contributions to education and healthcare, reflecting his commitment to giving back to society. Vijay’s involvement in social causes and his dedication to improving the lives of others have earned him respect and admiration beyond his film career. His popularity is further evidenced by his massive fan base and his influence in the Tamil film industry, where he is regarded as one of the most beloved and influential figures. Vijay’s enduring impact is marked by his exceptional acting talent, diverse filmography, and commitment to societal betterment, securing his legacy as a revered and impactful figure in Indian cinema.`,
      songs:[
        `Actors/Vijay/Aadungada_Yennai_Suththi.mp3`,
        `Actors/Vijay/Aathi.mp3`,
        `Actors/Vijay/Alaikaa_Laikaa.mp3`,
        `Actors/Vijay/Arjunar_Villu.mp3`,
        `Actors/Vijay/Badass.mp3`,
        `Actors/Vijay/Ella_Pugazhum.mp3`,
        `Actors/Vijay/Google_Google.mp3`,
        `Actors/Vijay/Leo_Das_Entry.mp3`,
        `Actors/Vijay/Naa_Ready.mp3`,
        `Actors/Vijay/Selfie_Pulla.mp3`,
      ]
    });

    actormap.set("Vikram",{
      name:"Vikram",
      imgPath:"MusicHome/Vikram.jpg",
      about:`Vikram, born on April 17, 1966, in Chennai, India, is a highly acclaimed actor known for his exceptional versatility and dedication to Tamil cinema. With a career spanning over three decades, Vikram has established himself as one of the most respected and influential figures in Indian cinema. He began his career with minor roles in films during the 1980s, but his breakthrough came with the 1990 film Sethu, directed by Bala, where he delivered a critically acclaimed performance as a troubled young man. This role showcased his remarkable ability to immerse himself in complex characters and marked the beginning of his rise to prominence. Vikram's career is distinguished by his willingness to take on diverse and challenging roles across various genres. His performance in the 2003 film Saamy, where he played a tough, principled police officer, was widely praised and became a major commercial success. He continued to impress audiences with his versatility in films like Anniyan (2005), where he portrayed a man with multiple personalities seeking justice, and I (2015), where he underwent a dramatic physical transformation to play a model turned antagonist. His role in Raavanan (2010), where he played the antagonist in a retelling of the Ramayana, was notable for its depth and complexity, further cementing his reputation as an actor capable of handling intricate and multifaceted roles. Vikram's dedication to his craft is evident in his willingness to undergo physical transformations and invest in his characters, making his performances memorable and impactful. Beyond his cinematic achievements, Vikram is also involved in philanthropy and charitable activities, reflecting his commitment to giving back to society. His contributions to both cinema and social causes have earned him numerous awards and a dedicated fan base. Vikram's enduring influence in the film industry is marked by his exceptional acting talent, diverse filmography, and commitment to societal betterment, securing his legacy as one of Tamil cinema's most revered and impactful figures.`,
      songs:[
        `Actors/Vikram/Aanalum_Indha.mp3`,
        `Actors/Vikram/Gaana_Gaana.mp3`,
        `Actors/Vikram/Mysterious_Travel.mp3`,
        `Actors/Vikram/Pathu_Endradhukkulla_Female_Version.mp3`,
        `Actors/Vikram/Vroom_Vroom.mp3`,
      ]
    });

    actormap.set("Nazriya",{
      name:"Nazriya",
      imgPath:"MusicHome/Nazriya.jpg",
      about:`Nazriya Nazim, born on December 20, 1994, in Thiruvananthapuram, Kerala, is a distinguished Indian actress renowned for her compelling work in Malayalam and Tamil cinema. She began her acting career at a young age, debuting as a child artist in the 1999 Malayalam film Kannezhuthi Pottum Thottu. Her early involvement in the film industry laid a strong foundation for her future career. Transitioning to lead roles, Nazriya gained significant attention with her performances in Maad Dad (2013) and Neram (2013). Her breakthrough came with the critically acclaimed Malayalam film Bangalore Days (2014), where she played a key role as a vibrant and relatable young woman navigating the complexities of life and love in an urban setting. This role cemented her status as a leading actress and showcased her ability to bring depth and authenticity to her characters. Nazriya’s success extended to Tamil cinema with notable performances in films such as Raja Rani (2013), where she played a character that resonated with audiences for its emotional depth and relatability. Her versatility was further demonstrated in Thaana Serndha Kootam (2018), where her role was well-received for its engaging and dynamic portrayal. Additionally, her performance in Koode (2018), another Malayalam film, highlighted her talent for handling complex and emotionally nuanced roles with grace and sensitivity. Beyond her cinematic achievements, Nazriya is celebrated for her vibrant personality and active presence on social media, where she connects with her fans and shares aspects of her personal life. Her genuine and down-to-earth nature has endeared her to many, contributing to her widespread popularity and respect in the industry. Nazriya’s contributions to film, coupled with her growing fan base and industry acclaim, underscore her significant impact on South Indian cinema. Her journey from a child artist to a leading actress reflects her talent, dedication, and versatility, securing her place as one of the most cherished and influential figures in contemporary Indian cinema. With continued success and a diverse body of work, Nazriya Nazim remains a prominent and beloved actress in both Malayalam and Tamil film industries.`,
      songs:[
        `Actors/Nazriya/Ae_Le_Le_Etti_Parthale.mp3`,
        `Actors/Nazriya/Inikka_Inikka.mp3`,
        `Actors/Nazriya/Marriage_Marketil.mp3`,
        `Actors/Nazriya/Munnadi_Pora_Pulla.mp3`,
        `Actors/Nazriya/Teddy_Bear.mp3`,
        `Actors/Nazriya/Yendi_Padhagathi.mp3`,
      ]
    });

    actormap.set("AR_Rahman",{
      name:"A.R.Rahman",
      imgPath:"MusicHome/AR_Rahman.jpg",
      about:`A.R. Rahman, born A. S. Dileep Kumar on January 6, 1967, in Chennai, India, is a globally acclaimed composer, singer, and music producer known for his groundbreaking contributions to Indian and international music. His journey into music began at a young age, influenced by his father, R.K. Shekhar, a composer and conductor. Rahman’s career took a significant turn in the early 1990s with his work on the soundtrack of the Tamil film Roja (1992), directed by Mani Ratnam. The film's score received widespread acclaim for its innovative fusion of Indian classical music with contemporary sounds, establishing Rahman as a fresh and influential voice in film music. This success was followed by a string of memorable soundtracks including Bombay (1995), Dil Se (1998), and Lagaan (2001), each showcasing his unique ability to blend diverse musical styles and create evocative scores that transcend cultural boundaries. Rahman's work on Lagaan earned him international recognition and an Academy Award nomination for Best Original Score, marking a milestone in his career. His win of two Academy Awards for Best Original Score and Best Original Song for Slumdog Millionaire (2008) further solidified his reputation as a globally renowned composer. Rahman’s music is characterized by its innovative fusion of traditional Indian music with global genres, creating a distinctive sound that has resonated with audiences worldwide. In addition to his film work, Rahman has released several successful albums, including Vande Mataram (1997), a patriotic album that showcased his versatility as a composer and performer. His influence extends beyond music; he is known for his philanthropy and dedication to various social causes, including education and humanitarian work through his foundation, the A.R. Rahman Foundation. Rahman’s impact on both the Indian and international music scenes is profound, as he continues to push the boundaries of music and inspire new generations of artists. His contributions to film music, coupled with his global accolades and philanthropic efforts, have earned him a place among the most celebrated and influential musicians of our time. A.R. Rahman’s enduring legacy is marked by his exceptional talent, innovative spirit, and commitment to using music as a means to connect cultures and make a positive impact on the world.`,
      songs:[
        `MusicDirectors/AR_Rahman/Athiradee_Kaalam.mp3`,
        `MusicDirectors/AR_Rahman/Nee_Singam_Dhan.mp3`,
        `MusicDirectors/AR_Rahman/New_York_Nagaram.mp3`,
        `MusicDirectors/AR_Rahman/Puthiya_Manidha.mp3`,
        `MusicDirectors/AR_Rahman/Vaan_Varuvan.mp3`,
      ]
    });

    actormap.set("G.V.Prakash",{
      name:"G.V.Prakash",
      imgPath:"MusicHome/G.V.Prakash.jpg",
      about:`G.V. Prakash Kumar, born on June 13, 1987, in Chennai, India, is a prominent Indian music composer, singer, and actor known for his significant contributions to Tamil cinema. The nephew of acclaimed composer A.R. Rahman, G.V. Prakash Kumar began his career as a child artist in his uncle's film Vandicholai Chidambarams (1980). His foray into music composition began with the 2006 film Veyil, directed by Vasanthabalan. The soundtrack of Veyil was met with critical acclaim, marking G.V. Prakash as a promising new talent in the Tamil music industry. His ability to blend traditional Indian music with contemporary sounds quickly gained recognition, leading to a string of successful projects including Pasumpon (2008) and Aadukalam (2011). The soundtrack of Aadukalam, in particular, was highly praised and earned him several awards, solidifying his reputation as a versatile and innovative composer. G.V. Prakash's contributions extend beyond music composition; he made his acting debut with the film Pencil (2016), where he demonstrated his acting skills and continued to build a career in both music and acting. His subsequent film scores, such as those for Kadavul Irukaan Kumaru (2016) and Sardar (2022), have been well-received for their engaging melodies and creative arrangements. Known for his youthful energy and diverse musical style, G.V. Prakash has become a prominent figure in the Tamil film industry. His work often features a mix of genres and influences, reflecting his ability to adapt and innovate within the ever-evolving landscape of Indian cinema. In addition to his musical and acting endeavors, he is actively involved in philanthropy and social causes, contributing to various charitable initiatives. G.V. Prakash Kumar’s impact on Tamil cinema is marked by his exceptional talent, versatility, and dedication to his craft. His continued success as both a composer and actor highlights his significant role in shaping contemporary Indian music and cinema, securing his place as a respected and influential figure in the industry.`,
      songs:[
        `MusicDirectors/G.V_Prakash/A_Square_B_Square.mp3`,
        `MusicDirectors/G.V_Prakash/Enakku_Thaan.mp3`,
        `MusicDirectors/G.V_Prakash/Kannum_Kannum_Plus.mp3`,
        `MusicDirectors/G.V_Prakash/Nenjellam_Nindrayae.mp3`,
        `MusicDirectors/G.V_Prakash/Oh_Balu.mp3`,
        `MusicDirectors/G.V_Prakash/Oru_Vaanam.mp3`,
        `MusicDirectors/G.V_Prakash/That_Is_Mahalakshmi.mp3`,
        `MusicDirectors/G.V_Prakash/Thiru_Thiru_Gananatha.mp3`,
        `MusicDirectors/G.V_Prakash/Yeanadi_Yeanadi.mp3`,
      ]
    });

    actormap.set("Aniruth",{
      name:"Aniruth",
      imgPath:"MusicHome/Aniruth.jpg",
      about:`Anirudh Ravichander, born on October 16, 1990, in Chennai, India, is a highly acclaimed Indian music composer and singer known for his dynamic contributions to Tamil cinema. Emerging as one of the most influential figures in contemporary Indian music, Anirudh’s career began with a notable breakthrough in 2012 when he composed the soundtrack for the film 3, directed by Aishwarya R. Dhanush. The film’s hit single, "Why This Kolaveri Di," became a massive sensation, earning widespread acclaim for its catchy tune and innovative approach. This song established Anirudh as a fresh and exciting talent in the music industry, capturing the attention of audiences and critics alike. Following this success, Anirudh went on to compose for a series of successful films, including Kaththi (2014), Vedalam (2015), and Vivegam (2017). His work is characterized by a blend of modern sounds with traditional Indian music, creating vibrant and memorable soundtracks that resonate with diverse audiences. Anirudh’s musical style often incorporates a mix of genres, from peppy and energetic tracks to soulful melodies, showcasing his versatility and creativity. His contributions to films like Master (2021) and Beast (2022) have further solidified his reputation as a leading composer in the Tamil film industry. Known for his youthful energy and innovative approach, Anirudh has also ventured into live performances and concerts, gaining a significant fan following for his engaging stage presence and performances. In addition to his work in film music, Anirudh is involved in various philanthropic activities, reflecting his commitment to social causes. His continued success and influence in the music industry highlight his exceptional talent and ability to push the boundaries of contemporary film music. Anirudh Ravichander’s impact on Tamil cinema and Indian music is marked by his fresh sound, creative compositions, and dedication to his craft, securing his place as one of the most respected and influential music composers of his generation.`,
      songs:[
        `MusicDirectors/Aniruth/Badass.mp3`,
        `MusicDirectors/Aniruth/Hayyoda.mp3`,
        `MusicDirectors/Aniruth/Leo_Das_Entry.mp3`,
        `MusicDirectors/Aniruth/Not_Ramaiya_Vastavaiya.mp3`,
        `MusicDirectors/Aniruth/Vandha_Edam.mp3`,
      ]
    });

    actormap.set("VijayAntony",{
      name:"Vijay Antony",
      imgPath:"MusicHome/VijayAntony.jfif",
      about:`Vijay Antony, born on July 24, 1975, in Nagercoil, Tamil Nadu, India, is a versatile Indian film composer, actor, and producer, predominantly known for his work in Tamil cinema. He began his career as a music composer and gained early recognition with his breakthrough soundtrack for the film Sukran (2005). His ability to create innovative and captivating music quickly established him as a prominent composer in the Tamil film industry. Vijay Antony's unique style often blends traditional South Indian musical elements with contemporary sounds, resulting in memorable and popular film scores. His work on films such as Kundakka Mandakka (2005) and Naan (2012) showcased his ability to craft engaging and varied music that resonated with audiences. In 2012, Vijay Antony made a significant impact with the film Naan, which marked his debut as an actor. His performance was well-received, demonstrating his versatility and ability to handle diverse roles. This transition from music composition to acting was marked by further successes, including films like Salim (2014), where he played the lead role and showcased his acting prowess. His subsequent films, such as India Pakistan (2015) and Annadurai (2017), continued to highlight his acting skills and his ability to engage audiences across different genres. Vijay Antony's dual success as both a composer and an actor reflects his exceptional talent and dedication to his craft. In addition to his work in film, he is also involved in production, contributing to the growth and development of Tamil cinema. His contributions to both music and acting have earned him a dedicated fan base and respect within the industry. Vijay Antony's impact on Tamil cinema is marked by his innovative approach to music, his compelling performances as an actor, and his commitment to the film industry, securing his place as a respected and influential figure in Indian cinema.`,
      songs:[
        `MusicDirectors/Vijay_Antony/GST_Ya_Maari_Neeyum.mp3`,
        `MusicDirectors/Vijay_Antony/Makkayala.mp3`,
        `MusicDirectors/Vijay_Antony/NakkaMukka.mp3`,
        `MusicDirectors/Vijay_Antony/Oodathey_Oodathey_(Pathos).mp3`,
        `MusicDirectors/Vijay_Antony/Ottu_Motha_Pasamum_(Theme).mp3`,
        `MusicDirectors/Vijay_Antony/Thangama_Vairama_Enna_Solla.mp3`,
        `MusicDirectors/Vijay_Antony/Uthamanakura.mp3`,
      ]
    });

    actormap.set("YuvanShankarraja",{
      name:"Yuvan Shankar Raja",
      imgPath:"MusicHome/YuvanShankarraja.jpg",
      about:`Yuvan Shankar Raja, born on August 31, 1979, in Chennai, India, is a renowned Indian music composer and playback singer known for his significant contributions to Tamil cinema. As the son of the legendary composer Ilaiyaraaja, Yuvan Shankar Raja was introduced to music at a young age, and his talent became evident early on. He began his career as a music composer with the film Aravindhan (1995), but it was with his work on the soundtrack of Tamil (2002) that he gained widespread recognition. Yuvan’s innovative approach to music, characterized by a fusion of traditional Indian sounds with modern influences, quickly set him apart in the Tamil film industry. His ability to craft memorable and varied compositions has been evident in successful soundtracks such as those for Kangalal Kaidhu Sei (2003), Pudhiya Geethai (2003), and Kaadhal Kondein (2003). The latter, in particular, was a major hit and showcased his talent for creating emotionally resonant and musically diverse scores. Over the years, Yuvan has continued to impress with his versatility and creativity, contributing to a wide range of films, including Chennai 600028 (2007), Paiyaa (2010), and SIR (2022). His work often features a blend of different genres and styles, from peppy tracks and soulful melodies to intense background scores, reflecting his ability to adapt and innovate. In addition to his work as a composer, Yuvan Shankar Raja is also known for his playback singing, adding a personal touch to many of his compositions. His distinctive voice and emotional delivery have made his songs particularly popular among audiences. Yuvan’s influence extends beyond music composition, as he has also contributed to the growth of Tamil cinema through his innovative soundtracks and engaging performances. His dedication to his craft and his ability to connect with audiences through his music have earned him a dedicated fan base and significant respect in the industry. Yuvan Shankar Raja’s legacy in Indian cinema is marked by his exceptional musical talent, creative compositions, and enduring impact on the Tamil film industry, securing his place as one of the most celebrated and influential composers of his generation.`,
      songs:[
        `MusicDirectors/Yuvan/Aambalaikum_Pombalaikum.mp3`,
        `MusicDirectors/Yuvan/Adada_Mazhaida.mp3`,
        `MusicDirectors/Yuvan/Adadada_Aarambame.mp3`,
        `MusicDirectors/Yuvan/Agalaathey.mp3`,
        `MusicDirectors/Yuvan/Balle_Lakka.mp3`,
        `MusicDirectors/Yuvan/Bang_Bang_Bang.mp3`,
        `MusicDirectors/Yuvan/Billa_2_Theme_Music.mp3`,
        `MusicDirectors/Yuvan/Billa_Theme_Music.mp3`,
        `MusicDirectors/Yuvan/Edhirthu_Nil.mp3`,
        `MusicDirectors/Yuvan/Ek_Do_Theen.mp3`,
      ]
    });
























    
    actormap.set("Hariharan",{
      name:"Hariharan",
      imgPath:"MusicHome/Hariharan.jpg",
      about:`Hariharan is a renowned Indian playback singer and music composer, celebrated for his versatile vocal abilities and contribution to Indian music across multiple languages and genres. Born on April 3, 1955, in Thiruvananthapuram, Kerala, Hariharan was trained in both Hindustani classical and Carnatic music, giving him a deep foundation in traditional music that he seamlessly blended with modern styles. Over the course of his illustrious career, spanning more than four decades, he has sung in various Indian languages including Tamil, Hindi, Telugu, Malayalam, Kannada, and Marathi, making him one of the most sought-after playback singers in the country. Hariharan's distinctive, soulful voice is known for its smooth texture and ability to convey deep emotion, whether in romantic ballads, devotional songs, or fast-paced numbers. His versatility has allowed him to collaborate with a wide range of music directors, including legends like A. R. Rahman, Ilaiyaraaja, Anu Malik, and Vishal Bhardwaj, among many others. One of his most iconic collaborations has been with A. R. Rahman, particularly for songs like "Tu Hi Re" from Bombay (1995), "Roja Jaaneman" from Roja (1992), and "Nahin Saamne" from Taal (1999), all of which became timeless classics and cemented his status as a top-tier playback singer.`,
      songs:[
        `PlayBackSinger/Hariharan/Aasa_Patta_Ellathayum.mp3`,
        `PlayBackSinger/Hariharan/Eatho_Oru_Paattu.mp3`,
        `PlayBackSinger/Hariharan/En_Jeevan.mp3`,
        `PlayBackSinger/Hariharan/Vaaney_Vaaney.mp3`,
        `PlayBackSinger/Hariharan/Venmegam_Pennaga.mp3`,
      ]
    });


    actormap.set("PradeepKumar",{
      name:"Pradeep Kumar",
      imgPath:"MusicHome/PradeepKumar.jpg",
      about:`Pradeep Kumar is a talented Indian playback singer, music composer, and independent musician, predominantly working in the Tamil film industry. Known for his deep, soulful voice and emotive singing style, he has garnered attention for his ability to bring a sense of raw emotion and authenticity to his songs. Pradeep's rise to fame came with his collaborations in Tamil cinema, especially through his association with directors and composers like Santhosh Narayanan. Some of his most well-known songs include "Aagayam Thee Pidicha" from Madras (2014), "Poo Avizhum Pozhudhil" from Ennamo Yedho (2014), and "Vaanam Paarthen" from Kabali (2016).In addition to playback singing, Pradeep Kumar is also noted for his work as a composer and independent artist. He has created music that is deeply rooted in Indian classical traditions while experimenting with modern sounds, giving him a distinct identity in the music industry. His understated, yet powerful vocal delivery has earned him a dedicated fan base, and his ability to interpret songs with subtle emotion has made him a go-to singer for intense, dramatic tracks.`,
      songs:[
        `PlayBackSinger/Pradeep_Kumar/Agayam_Theepiditha.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Aval.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Enna_Naan_Seiven.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Idhayam_Love_(Megamo_Aval).mp3`,
        `PlayBackSinger/Pradeep_Kumar/Maya_Nadhi.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Mogathirai.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Nee_Kavithaigala.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Pogatha_Yennavittu.mp3`,
        `PlayBackSinger/Pradeep_Kumar/The_Life_of_Ram.mp3`,
        `PlayBackSinger/Pradeep_Kumar/Thozhi.mp3`,
      ]
    });


    actormap.set("S.P.B",{
      name:"S.P.B",
      imgPath:"MusicHome/S.P.B.jpg",
      about:`S. P. Balasubrahmanyam, commonly known as SPB, was one of India's most legendary playback singers, revered for his extraordinary vocal range, versatility, and prolific contribution to Indian cinema. Born on June 4, 1946, in Nellore, Andhra Pradesh, SPB’s career spanned over five decades, during which he sang more than 40,000 songs in multiple languages, including Telugu, Tamil, Kannada, Hindi, and Malayalam. His ability to effortlessly switch between genres—from classical to contemporary, devotional to pop—earned him immense popularity and made him a household name across India.SPB’s unique ability to infuse songs with deep emotion and technical brilliance made him the voice behind numerous iconic tracks. Some of his most memorable songs include "Tere Mere Beech Mein" from Ek Duuje Ke Liye (1981), "Sagarasangamam" from Sagara Sangamam (1983), "Mannil Intha Kaadhalanri" from Keladi Kanmani (1990), and "Thanga Thamarai" from Minsara Kanavu (1997). He was the preferred playback singer for many leading actors, especially in South Indian cinema, including Rajinikanth, Kamal Haasan, and Chiranjeevi.`,
      songs:[
        `PlayBackSinger/S.P.B/Chumma_Kizhi.mp3`,
        `PlayBackSinger/S.P.B/Devuda_Devuda.mp3`,
        `PlayBackSinger/S.P.B/Kadhal_Rojave.mp3`,
        `PlayBackSinger/S.P.B/Marana_Mass.mp3`,
        `PlayBackSinger/S.P.B/Naan_Autokaaran.mp3`,
        `PlayBackSinger/S.P.B/Pattu_Onnu.mp3`,
        `PlayBackSinger/S.P.B/Puthiya_Manidha.mp3`,
        `PlayBackSinger/S.P.B/Ra_Ra_Ramaiya.mp3`,
        `PlayBackSinger/S.P.B/Vathikuchi_Pathikadhuda.mp3`,
        `PlayBackSinger/S.P.B/Yamma_Yamma.mp3`,
      ]
    });

    
    actormap.set("Shankar_Mahadevan",{
      name:"Shankar Mahadevan",
      imgPath:"MusicHome/ShankarMahadevan.jpeg",
      about:`Shankar Mahadevan is an acclaimed Indian playback singer, composer, and part of the famous musical trio Shankar-Ehsaan-Loy. Known for his powerful voice and remarkable versatility, he has made a significant mark in Indian music, spanning both Bollywood and South Indian cinema. Shankar's classical training in Carnatic and Hindustani music has given him a strong foundation, allowing him to effortlessly blend traditional and contemporary styles across various genres.He gained national recognition with his 1998 hit single "Breathless," a song that appeared to be sung without a single pause for breath, showcasing his incredible vocal control and creativity. Following this, Shankar, along with Ehsaan Noorani and Loy Mendonsa, formed the trio Shankar-Ehsaan-Loy, which became one of Bollywood’s most successful music composing teams. Their collaborative work has produced iconic soundtracks for films like Dil Chahta Hai (2001), Kal Ho Naa Ho (2003), Bunty Aur Babli (2005), and Rock On!! (2008).`,
      songs:[
        `PlayBackSinger/Shankar_Mahadevan/Desi-Girl.mp3`,
        `PlayBackSinger/Shankar_Mahadevan/Dilbaro.mp3`,
        `PlayBackSinger/Shankar_Mahadevan/India-Waale.mp3`,
        `PlayBackSinger/Shankar_Mahadevan/Kadhale-Kadhale.mp3`,
        `PlayBackSinger/Shankar_Mahadevan/Vadi-Vadi-Nattukkattai.mp3`,
      ]
    });

    
    actormap.set("Sidsriram",{
      name:"Sid Sriram",
      imgPath:"MusicHome/Sidsriram.webp",
      about:`Sid Sriram is a prominent Indian playback singer and music composer, celebrated for his soulful voice and emotive singing style. Born on October 19, 1990, in Chennai, Tamil Nadu, Sid Sriram initially gained recognition through his performances on the reality show Super Singer, where he showcased his remarkable vocal talent. His unique blend of classical Indian music with contemporary styles quickly set him apart in the industry.He made his playback singing debut with the song "Yevadu" from the Telugu film Heart Attack (2014), which earned him widespread acclaim and opened doors to a successful career in cinema. Sid Sriram's expressive voice has since graced numerous hit songs across various languages, including Telugu, Tamil, Kannada, and Hindi. Some of his most popular tracks include "Inkem Inkem Inkem Kaavaale" from Geetha Govindam (2018), "Vaanam Kottatum" from Vaanam Kottatum (2020), and "Thaarame Thaarame" from Kadaram Kondan (2019).His collaborations with acclaimed composers like A. R. Rahman, Devi Sri Prasad, and Anirudh Ravichander have further solidified his place in the industry. Sid's ability to convey deep emotion and connect with audiences through his singing has made him a favorite among music lovers.`,
      songs:[
        `PlayBackSinger/Sidsriram/Aradhya.mp3`,
        `PlayBackSinger/Sidsriram/Ennadi_Maayavi_Nee.mp3`,
        `PlayBackSinger/Sidsriram/Ennai_Vittu.mp3`,
        `PlayBackSinger/Sidsriram/Kaadhal_En_Kaviye.mp3`,
        `PlayBackSinger/Sidsriram/Maate_Vinadhuga.mp3`,
        `PlayBackSinger/Sidsriram/Mudhal_Nee_Mudivum_Nee.mp3`,
        `PlayBackSinger/Sidsriram/Nee_Singam_Dhan.mp3`,
        `PlayBackSinger/Sidsriram/Thalli_Pogathey.mp3`,
        `PlayBackSinger/Sidsriram/Yaar_Azhaippadhu.mp3`,
        `PlayBackSinger/Sidsriram/Yey_Penney_En_Nenjil_(High_On_Love).mp3`,
      ]
    });



















    actormap.set("Na.Muthukumar",{
      name:"Na.Muthukumar",
      imgPath:"MusicHome/Na.MuthuKumar.jpg",
      about:`Na. Muthukumar was a prolific and highly respected lyricist and poet in the Tamil film industry, whose work touched the hearts of millions through his soulful and evocative songwriting. Born on July 12, 1975, in the village of Kannikapuram, Tamil Nadu, he initially aspired to be a director but found his true calling in writing lyrics. Over the course of his career, Muthukumar penned the lyrics for more than 1,000 songs, becoming one of the most sought-after lyricists in Tamil cinema. His work was characterized by its emotional depth, linguistic elegance, and the ability to express complex feelings in simple, relatable ways. Whether it was love, loss, longing, or life’s philosophical musings, Muthukumar had a unique ability to translate those emotions into words that resonated deeply with the audience. He collaborated with some of the biggest names in Tamil cinema, writing memorable songs for films like Ghajini, Vaaranam Aayiram, Thanga Meengal, Saivam, Sivaji, and Myna, to name a few. Muthukumar's lyrics were often praised for their poetic beauty and ability to elevate the emotional impact of the films. His contribution to Tamil cinema was widely recognized with several awards, including two National Film Awards for Best Lyrics. He won his first National Award for the song "Aanandha Yaazhai" from Thanga Meengal (2013), a poignant song that beautifully captured the bond between a father and daughter. His second National Award came for the song "Azhage Azhage" from Saivam (2014), which highlighted his skill in writing delicate, heartwarming lyrics.`,
      songs:[
        `Lyricists/Na.MuthuKumar/Anbe_En_Anbe.mp3`,
        `Lyricists/Na.MuthuKumar/Ninaithu_Ninaithu_Parthal.mp3`,
        `Lyricists/Na.MuthuKumar/Soora_Thenga_Addra.mp3`,
        `Lyricists/Na.MuthuKumar/Unn_Perai_Sollum.mp3`,
        `Lyricists/Na.MuthuKumar/Vetriyai_Kandavan.mp3`,
      ]
    });
    
    actormap.set("Pa.Vijay",{
      name:"Pa.Vijay",
      imgPath:"MusicHome/Pa.Vijay.jpeg",
      about:`Pa. Vijay is a prominent Indian lyricist, poet, and filmmaker known for his impactful contributions to Tamil cinema. Born on February 22, 1975, in Chennai, Tamil Nadu, he began his career in the late 1990s and quickly gained recognition for his unique lyrical style, which often blends contemporary themes with traditional Tamil poetic forms.Vijay has penned lyrics for numerous hit songs in Tamil films, collaborating with various esteemed music directors such as Vidyasagar, Yuvan Shankar Raja, and A. R. Rahman. His work spans a wide range of genres, from romantic ballads to upbeat numbers and socially conscious songs, showcasing his versatility and ability to connect with audiences. Some of his notable songs include "Nenjukkul Peidhidum" from Vada Chennai (2018), "Aathichudi" from TN 07 AL 4777 (2009), and "Muthamma Muthamma" from Pudhupettai (2006).In addition to his work as a lyricist, Pa. Vijay is also an accomplished poet and has published several poetry collections, which reflect his deep understanding of language and emotions. His ability to convey complex feelings and social issues through simple yet powerful words has resonated with many.`,
      songs:[
        `Lyricists/Pa.Vijay/Adheeraa.mp3`,
        `Lyricists/Pa.Vijay/Alaikaa_Laikaa.mp3`,
        `Lyricists/Pa.Vijay/En_Chella_Peru_Apple.mp3`,
        `Lyricists/Pa.Vijay/Oday_Oday.mp3`,
        `Lyricists/Pa.Vijay/Rangu_Rangamma.mp3`,
      ]
    });


    actormap.set("Vaali",{
      name:"Vaali",
      imgPath:"MusicHome/Vaali.jpg",
      about:`Vaali, born as T. S. S. Rajagopalan on September 29, 1931, was a legendary Indian lyricist and poet known for his profound and poetic contributions to Tamil cinema. With a career spanning several decades from the 1960s to the early 2000s, he penned thousands of songs that showcased his mastery of the Tamil language and his deep understanding of human emotions. Vaali was renowned for his unique ability to blend traditional Tamil poetic forms with contemporary themes, creating lyrics that resonated with audiences across generations.His collaborations with prominent music directors such as Ilaiyaraaja, A. R. Rahman, and M. S. Viswanathan produced some of the most memorable and iconic songs in Tamil cinema. Vaali’s notable works include timeless hits like "Anbe Anbe" from Mouna Ragam (1986), "Kanne Kanne" from Sivaji (2007), and "Ninaithale Inikkum" from the film of the same name (1970). His lyrics often explored themes of love, longing, and philosophy, reflecting a deep emotional resonance that made them unforgettable.`,
      songs:[
        `Lyricists/Vaali/Athiradee_Kaalam.mp3`,
        `Lyricists/Vaali/Azhagiya_Theeye.mp3`,
        `Lyricists/Vaali/Devuda_Devuda.mp3`,
        `Lyricists/Vaali/Girlfriend.mp3`,
        `Lyricists/Vaali/My_Name_is_Billa.mp3`,
        `Lyricists/Vaali/Nangaai.mp3`,
        `Lyricists/Vaali/New_York_Nagaram.mp3`,
        `Lyricists/Vaali/Pachai_Kiligal.mp3`,
        `Lyricists/Vaali/Sollamal_Thottu_Chellum_Thendral.mp3`,
        `Lyricists/Vaali/Vathikuchi_Pathikadhuda.mp3`,
      ]
    });

    
    actormap.set("Vairamuthu",{
      name:"Vairamuthu",
      imgPath:"MusicHome/Vairamuthu.webp",
      about:`Vairamuthu, born on July 13, 1953, is a celebrated Indian lyricist, poet, and author, known for his profound contributions to Tamil literature and cinema. With a career spanning over four decades, he has penned lyrics for thousands of songs across various genres in Tamil films, collaborating with numerous prominent music directors, including Ilaiyaraaja, A. R. Rahman, and Vidyasagar. Vairamuthu's lyrical style is characterized by its rich poetic imagery, emotional depth, and philosophical undertones, making him one of the most revered lyricists in Tamil cinema.He has been recognized with numerous accolades for his work, including several National Film Awards for Best Lyrics and the prestigious Sahitya Akademi Award for his literary contributions. Some of his most iconic songs include "Poovukkum Poovukkum" from Ninaithale Inikkum (1976), "Aathichudi" from TN 07 AL 4777 (2009), and "Thanga Thamarai" from Minsara Poove (1993). His lyrics often explore themes of love, nature, and spirituality, resonating deeply with audiences and earning him a special place in the hearts of Tamil music lovers.`,
      songs:[
        `Lyricists/Vairamuthu/Alwarpetai_Aaluda.mp3`,
        `Lyricists/Vairamuthu/Andangkaka.mp3`,
        `Lyricists/Vairamuthu/Arima_Arima.mp3`,
        `Lyricists/Vairamuthu/Kaadhal_Yaanai.mp3`,
        `Lyricists/Vairamuthu/Kandangi_Kandangi.mp3`,
        `Lyricists/Vairamuthu/Kannodu_Kaanberallam.mp3`,
        `Lyricists/Vairamuthu/Nenje_Nenje.mp3`,
        `Lyricists/Vairamuthu/Nenjukkule.mp3`,
        `Lyricists/Vairamuthu/Sahana_Saral_Thoo.mp3`,
        `Lyricists/Vairamuthu/Vaan_Varuvan.mp3`,
      ]
    });


    actormap.set("Vivek",{
      name:"Vivek",
      imgPath:"MusicHome/Vivek.jpg",
      about:`Vivek, born on November 19, 1961, was a beloved Indian film actor, comedian, and social activist known for his unique style of comedy and impactful performances in Tamil cinema. He began his career in the late 1980s and quickly rose to fame, becoming one of the most recognized and admired comic actors in the industry. Vivek was known for his ability to blend humor with social messages, often using satire to address pressing issues in society, such as education, environmental concerns, and social inequality.His signature comedic style involved witty one-liners, clever wordplay, and impersonations, making him a favorite among audiences of all ages. Some of his most memorable films include Kadhalan (1994), Minsara Poove (1993), Saamy (2003), and Run (2002). In addition to his work in films, Vivek was a popular presence on television, where he hosted several shows and participated in various stage performances.Vivek's contributions extended beyond entertainment; he was an ardent social activist who often used his platform to raise awareness about critical issues. He initiated several campaigns related to environmental conservation, education, and health awareness, showcasing his commitment to making a positive impact on society.`,
      songs:[
        `Lyricists/Vivek/Aalaporan_Thamizhan.mp3`,
        `Lyricists/Vivek/Hayyoda.mp3`,
        `Lyricists/Vivek/Hey_Suzhali.mp3`,
        `Lyricists/Vivek/Idhayam_Love_(Megamo_Aval).mp3`,
        `Lyricists/Vivek/Maacho_Ennacho.mp3`,
        `Lyricists/Vivek/Mersal_Arasan.mp3`,
        `Lyricists/Vivek/Neethanae_Neethanae.mp3`,
        `Lyricists/Vivek/Not_Ramaiya_Vastavaiya.mp3`,
        `Lyricists/Vivek/Sirukki_Vaasam.mp3`,
        `Lyricists/Vivek/Vandha_Edam.mp3`,
        //`Lyricists/Vivek/song.mp3`,
      ]
    });

    
    actormap.set("Billie",{
      name:"Billie",
      imgPath:"MusicHome",
      about:`Billie`,
      songs:[
        `lisa`,
        `lisa`,
        `anime`,
        `lisa`,
        `lisa`
      ]
    });








    actormap.set("BillieElish",{
      name:"BillieElish",
      imgPath:"MusicHome/BillieElish.jpg",
      about:`Billie Eilish, born Billie Eilish Pirate Baird O'Connell on December 18, 2001, in Los Angeles, California, is a groundbreaking American singer-songwriter known for her distinctive voice and genre-defying music. She gained prominence in 2015 with the release of her debut single, “Ocean Eyes,” which was written and produced by her brother, Finneas O'Connell. The song's success on SoundCloud and subsequent release on Spotify marked the beginning of her rise to fame. Eilish's debut EP, Don't Smile at Me (2017), further established her as a unique and influential artist, featuring a blend of pop, electro, and alternative sounds. Her debut full-length album, When We All Fall Asleep, Where Do We Go? (2019), was a commercial and critical success, showcasing her innovative approach to music with tracks like “Bad Guy” and “Bury a Friend.” The album earned her multiple Grammy Awards, including Album of the Year, Best New Artist, and Record of the Year, making her the youngest artist to win these top awards in a single night. Eilish’s music often explores themes of introspection, mental health, and personal experiences, resonating deeply with a wide audience. Her distinct style, characterized by a mix of whispery vocals, dark pop production, and introspective lyrics, has set her apart in the music industry. She continued to build on her success with her second album, Happier Than Ever (2021), which further demonstrated her growth as an artist and included hits like “Therefore I Am” and “Your Power.” The album was praised for its emotional depth and sonic evolution, earning her additional accolades and solidifying her place as a leading figure in contemporary music. Beyond her music career, Billie Eilish is known for her distinctive fashion sense, often embracing oversized clothing and unconventional styles that reflect her artistic persona. She is also recognized for her advocacy on various social and environmental issues, using her platform to raise awareness and promote change. Eilish’s impact on the music industry is marked by her innovative sound, introspective lyrics, and the ability to connect with a global audience, making her one of the most influential and celebrated artists of her generation. Her continued success and artistic evolution highlight her significant role in shaping contemporary music and popular culture.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Olivia",{
      name:"Olivia",
      imgPath:"MusicHome/Olivia.jpg",
      about:`Olivia Rodrigo, born on February 20, 2003, in Temecula, California, is a prominent American singer-songwriter and actress known for her impactful presence in contemporary pop music. She gained widespread recognition with the release of her debut single, “drivers license,” in January 2021. The song quickly became a cultural phenomenon, topping charts worldwide and resonating with audiences for its poignant lyrics and emotional depth. Rodrigo's debut album, SOUR (2021), was a critical and commercial success, showcasing her talent for crafting relatable and introspective pop music. The album features a blend of pop, rock, and indie influences, with standout tracks like “good 4 u” and “traitor,” which further solidified her status as a rising star in the music industry. Rodrigo's songwriting often explores themes of heartache, self-discovery, and personal growth, capturing the experiences of young adulthood with authenticity and emotional nuance. Her distinctive voice and raw, confessional lyrics have earned her widespread acclaim and a dedicated fan base. In addition to her music career, Olivia Rodrigo is also known for her acting work. She gained early recognition with her role as Nini Salazar-Roberts in the Disney+ series High School Musical: The Musical: The Series, which showcased her acting skills and musical talent. Her success as both a musician and actress has established her as a multifaceted and influential figure in entertainment. Rodrigo’s impact on popular culture is marked by her ability to connect with audiences through her heartfelt and relatable music, as well as her continued success and growth as an artist. Her debut achievements and ongoing contributions to music highlight her significant role in shaping contemporary pop and solidify her status as one of the most exciting and influential new artists of her generation.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("MJ",{
      name:"MJ",
      imgPath:"MusicHome/MJ.jpg",
      about:`Michael Jackson, born on August 29, 1958, in Gary, Indiana, is widely regarded as one of the most influential and iconic figures in the history of music and entertainment. Known as the "King of Pop," Jackson's career spanned over four decades, during which he revolutionized the music industry with his innovative approach to pop music, dance, and visual presentation. Starting his career as a child star with The Jackson 5, Michael Jackson gained prominence for his impressive vocal talent and stage presence. However, it was his solo career that truly cemented his status as a global superstar. His 1982 album Thriller remains the best-selling album of all time, with iconic tracks such as "Billie Jean," "Beat It," and the title track "Thriller" showcasing his groundbreaking music videos, dance moves, and genre-blending style. Jackson’s influence extended beyond music; his signature dance moves, such as the moonwalk, became legendary and were widely imitated and celebrated. His music videos, including those for "Thriller," "Bad," and "Smooth Criminal," set new standards for the genre, incorporating elaborate choreography, storytelling, and cutting-edge visual effects. Jackson's contributions to music were recognized with numerous awards, including multiple Grammy Awards and American Music Awards, highlighting his exceptional talent and impact on the industry. In addition to his musical achievements, Jackson was known for his philanthropic efforts, including support for various charities and humanitarian causes. Despite facing personal and legal challenges throughout his life, his legacy as a pioneer in music and entertainment endures. Michael Jackson's influence on pop culture, his innovative approach to music and dance, and his enduring appeal continue to inspire artists and entertain audiences worldwide. His contributions to music and performance have left an indelible mark on the world, securing his place as one of the most celebrated and transformative figures in the history of entertainment.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Shakira",{
      name:"Shakira",
      imgPath:"MusicHome/Shakira.jpg",
      about:`Shakira, born Shakira Isabel Mebarak Ripoll on February 2, 1977, in Barranquilla, Colombia, is a globally renowned singer, songwriter, dancer, and philanthropist known for her distinctive blend of Latin, Arabic, and rock influences. Her music career began in the early 1990s with her debut albums in Spanish, but she gained international fame with her crossover English-language album, Laundry Service (2001). This album featured hits like "Whenever, Wherever" and "Suerte (Whenever, Wherever)," which showcased her unique voice and eclectic style, blending Latin rhythms with pop and rock elements. Shakira's ability to combine different musical genres has made her a standout artist in the global music scene. Her subsequent albums, including Fijación Oral, Vol. 1 (2005) and She Wolf (2009), continued to highlight her versatility and innovation, with hits like "Hips Don't Lie," "Waka Waka (This Time for Africa)," and "Loca." The latter was especially notable as it became the official anthem for the 2010 FIFA World Cup, further establishing her as a prominent global artist. Shakira's music is characterized by its catchy melodies, rhythmic beats, and her signature hip-shaking dance moves, which have become a defining feature of her performances. Her influence extends beyond music; she is also known for her philanthropic work through the Barefoot Foundation, which focuses on providing education and support to underprivileged children in Colombia. Her dedication to social causes and her impactful contributions to both the music industry and global humanitarian efforts have earned her widespread acclaim and respect. Shakira’s continued success, innovative approach to music, and commitment to charitable causes highlight her significant impact on both the entertainment industry and the world at large. Her dynamic career, marked by artistic achievements and social contributions, secures her place as one of the most influential and beloved artists of her generation.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

    actormap.set("Eminem",{
      name:"Eminem",
      imgPath:"MusicHome/Eminem.jpg",
      about:`Eminem, born Marshall Bruce Mathers III on October 17, 1972, in St. Joseph, Missouri, is a highly influential American rapper, songwriter, and record producer known for his provocative lyrics and groundbreaking impact on hip-hop. Rising from a challenging upbringing in Detroit, Eminem first gained recognition with his 1996 debut album, Infinite, but it was his 1999 album, The Slim Shady LP, that catapulted him to stardom. The album's raw, confessional style and controversial themes, coupled with hits like "My Name Is," earned him critical acclaim and commercial success. Eminem's follow-up albums, including The Marshall Mathers LP (2000) and The Eminem Show (2002), solidified his position as one of the genre's leading figures. The Marshall Mathers LP became one of the best-selling albums in U.S. history, featuring iconic tracks like "Stan," "The Real Slim Shady," and "Without Me." Eminem's lyrical prowess, characterized by his rapid-fire delivery, intricate rhyme schemes, and autobiographical storytelling, has earned him widespread respect in the music industry. His work often explores themes of personal struggle, societal issues, and controversial topics, reflecting his complex and sometimes tumultuous life experiences. Despite facing significant controversy and criticism over his explicit content and provocative themes, Eminem has consistently demonstrated his ability to push boundaries and challenge norms within the music industry. His influence extends beyond his music; he has also made significant contributions to film, particularly with his semi-autobiographical movie 8 Mile (2002), which earned him an Academy Award for Best Original Song for "Lose Yourself." Eminem's continued success, marked by multiple Grammy Awards, record-breaking albums, and a lasting impact on hip-hop culture, underscores his role as a transformative and enduring figure in the music world. His career, characterized by both commercial success and artistic innovation, cements his place as one of the most influential and controversial artists of his generation.`,
      songs:[
        `lisa/As if it's your last lisa rap lyrics.mp3`,
        `lisa/BLACKPINK - Pink Venom rap part.mp3`,
        `anime/Fujii Kaze - SHINUNOGA E-WA Lyrical WhatsApp status.mp3`,
        `lisa/LALISA lyrics_Baby get the Megaphone put it on speaker, All BLIИKS  love lisa.mp3`,
        `lisa/Lisa Rap Lyrics in Shoong.mp3`
      ]
    });

      if(tname){
        setCurrentActor(actormap.get(tname));
      }
    },[tname])

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    

  return (
    <>
    <Header path='MusicHome' />
    <div className='music-person-page'>
    <img className='background' src={require("../media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />
      <div className='music-person-page-body'>
          <div className='total-music-body'>
          
          <div className='img-with-desc' style={{}}>

              <div>
                <DynamicImageDisplay path={currentActor.imgPath} />
              </div>

              <div className='total-songs'>
                <div className='total-songs-name-p'>
                  <h1>{currentActor.name}</h1>
                  <p>{currentActor.about.length>600?currentActor.about.substring(0,600)+".....":currentActor.about}</p>
                </div>

              <div className='total-audio-box'>
                    
                <div className='songs'>
                    {
                      currentActor.songs.map((e)=>(
                        <DynamicAudioDisplay 
                            path={e}
                            name={e} 
                        />
                      ))
                    }
                </div>
              </div>
              
              

          </div>
          </div>

          
        </div>
      </div>     
    </div>
    </>
    
  )
}

export default Music