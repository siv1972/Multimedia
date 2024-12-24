import React, { useEffect, useState } from 'react'

import DynamicImageBox from '../Components/DynamicImageBox'

import DynamicImageDisplay from '../Components/DynamicImageDisplay'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';

import '../Styles/celebrityMoviePage.css'

const CelebrityMoviePage = () => {


  let {celeb}=useParams();
  
  

  const navigate=useNavigate();

  const[celebrity,setCelebrity]=useState({
      name:"Ajith",
      path:"Loading/Loading.gif",
      about:`Ajith Kumar, affectionately known as "Thala" by his legion of fans, is one of the most admired and versatile actors in Tamil cinema. Over a career spanning more than three decades, he has carved out a unique space for himself through his ability to perform a wide variety of roles with ease, whether it be romantic, action, or drama. Ajith began his career in the 1990s, initially gaining recognition for his romantic roles in films like Kadhal Kottai and Aasai. These early films showcased his charming on-screen presence, which made him a favorite among younger audiences. However, it was his shift to action-packed, mass-appeal roles in the 2000s that truly redefined his career, with films such as Mankatha, Veeram, Vedalam, and Viswasam becoming blockbuster hits and solidifying his status as a leading action hero. Ajith is also highly regarded for his nuanced performances in films like Vaali, where he portrayed dual roles, and Mugavaree, where he played a struggling musician, demonstrating his impressive range as an actor.In addition to his flourishing acting career, Ajith is a professional racer with a deep passion for motorsports. He has competed in events such as Formula 2 and Formula BMW Asia, earning accolades for his racing skills. His commitment to both acting and racing is a testament to his multifaceted talents and dedication. Off-screen, Ajith maintains a reputation for being extremely private, shying away from public and media attention. He rarely participates in promotional events or social gatherings, preferring to keep his personal life out of the limelight. Despite his reserved nature, Ajith's philanthropic work is well-known, though he often carries out these charitable activities quietly, without much media coverage. His humility and grounded personality have earned him immense respect within the film industry, as well as deep affection from his fans. Ajith Kumar continues to be an influential figure in Tamil cinema, with each new release eagerly anticipated by millions.`,
      movies:[
        {
          name:"Aegan",
          path:"Loading/Loading.gif",
        },
        {
          name:"Billa",
          path:"Loading/Loading.gif"
        },
        {
          name:"Mankatha",
          path:"Loading/Loading.gif"
        },
        {
          name:"Thunivu",
          path:"Loading/Loading.gif"
        }
      ]
  });

  


  useEffect(()=>{

    const currentCelebrity=new Map();

    currentCelebrity.set("Ajith",{
      name:"Ajith",
      path:"video/Tamil/Actors/Ajith/Actorimg/Ajith.webp",
      about:`Ajith Kumar, affectionately known as "Thala" by his legion of fans, is one of the most admired and versatile actors in Tamil cinema. Over a career spanning more than three decades, he has carved out a unique space for himself through his ability to perform a wide variety of roles with ease, whether it be romantic, action, or drama. Ajith began his career in the 1990s, initially gaining recognition for his romantic roles in films like Kadhal Kottai and Aasai. These early films showcased his charming on-screen presence, which made him a favorite among younger audiences. However, it was his shift to action-packed, mass-appeal roles in the 2000s that truly redefined his career, with films such as Mankatha, Veeram, Vedalam, and Viswasam becoming blockbuster hits and solidifying his status as a leading action hero. Ajith is also highly regarded for his nuanced performances in films like Vaali, where he portrayed dual roles, and Mugavaree, where he played a struggling musician, demonstrating his impressive range as an actor.

In addition to his flourishing acting career, Ajith is a professional racer with a deep passion for motorsports. He has competed in events such as Formula 2 and Formula BMW Asia, earning accolades for his racing skills. His commitment to both acting and racing is a testament to his multifaceted talents and dedication. Off-screen, Ajith maintains a reputation for being extremely private, shying away from public and media attention. He rarely participates in promotional events or social gatherings, preferring to keep his personal life out of the limelight. Despite his reserved nature, Ajith's philanthropic work is well-known, though he often carries out these charitable activities quietly, without much media coverage. His humility and grounded personality have earned him immense respect within the film industry, as well as deep affection from his fans.`,
      movies:[
        {
          name:"Aegan",
          path:"video/Tamil/Actors/Ajith/movies/Aegan.jpg",
        },
        {
          name:"Billa",
          path:"video/Tamil/Actors/Ajith/movies/Billa.webp"
        },
        {
          name:"Mankatha",
          path:"video/Tamil/Actors/Ajith/movies/Mankatha.jpg"
        },
        {
          name:"Thunivu",
          path:"video/Tamil/Actors/Ajith/movies/Thunivu.jpg"
        }
      ]
  });
    
  currentCelebrity.set("Samantha",{
    name:"Samantha",
    path:"video/Tamil/Actors/Samantha/Actorimg/Samantha.jpg",
    about:`Samantha Ruth Prabhu is one of the most prominent actresses in South Indian cinema, known for her beauty, grace, and versatile performances across various genres. With a career spanning over a decade, Samantha has made a significant mark in Tamil and Telugu films. She debuted in 2010 with Ye Maaya Chesave, which earned her critical acclaim and won her the Nandi Award for Best Actress. Since then, she has appeared in a series of successful films, including Eega, Theri, Rangasthalam, Mersal, and Oh! Baby. Samantha is praised for her ability to effortlessly switch between commercial and content-driven roles, with films like Mahanati highlighting her acting depth. Her natural talent, along with her expressive eyes and charming screen presence, has made her a fan favorite. Over the years, she has worked alongside top actors such as Vijay, Mahesh Babu, and Allu Arjun, building a diverse filmography.

Apart from her acting prowess, Samantha is known for her involvement in philanthropic activities. She founded the NGO Pratyusha Support, which provides medical support to women and children in need. Her charity work, often done without much publicity, has endeared her even more to the public.

In addition to her film career, Samantha has gained recognition for her fashion sense, becoming a style icon in the South Indian film industry. Recently, she has ventured into web series, with her role in The Family Man 2 receiving widespread praise for her portrayal of a complex character, demonstrating her willingness to take on unconventional roles. Despite facing personal challenges, including her battle with a health condition and a high-profile divorce, Samantha remains resilient and focused on her career. Her strong work ethic and dedication have cemented her place as one of the most influential and respected actresses in the industry, making her an inspiration to many.`,
     movies:[
      {
        name:"24",
        path:"video/Tamil/Actors/Samantha/movies/24.jpg"
      },
      {
        name:"BanaKaathadi",
        path:"video/Tamil/Actors/Samantha/movies/BanaKaathadi.jpg"
      },
      {
        name:"Kaththi",
        path:"video/Tamil/Actors/Samantha/movies/Kaththi.jpg"
      },
      {
        name:"Theri",
        path:"video/Tamil/Actors/Samantha/movies/Theri.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Surya",{
    name:"Surya",
    path:"video/Tamil/Actors/Surya/Actorimg/Surya.png",
    about:`Suriya, born Saravanan Sivakumar on July 23, 1975, in Chennai, India, is a prominent Indian actor and producer primarily known for his work in Tamil cinema. The son of veteran actor Sivakumar, Suriya began his acting career in the late 1990s with his debut film Nerrukku Ner (1997), directed by Vasanth. His early career featured a mix of roles across genres, but it was with films like Ghajini (2005) and Sillunu Oru Kaadhal (2006) that he began to gain significant recognition. Ghajini, directed by A.R. Murugadoss, was particularly notable for its intense portrayal of a man with short-term memory loss seeking revenge, and it established Suriya as a versatile and compelling actor. His performance in Singam (2010), directed by Hari, as a fierce and principled police officer was widely acclaimed and led to successful sequels, further cementing his place as a leading actor in Tamil cinema. Suriya’s ability to portray a wide range of characters, from action heroes to romantic leads, has been a hallmark of his career. His roles in films such as 24 (2016), where he played dual roles involving science fiction elements, and Soorarai Pottru (2020), a biographical drama inspired by the life of Air Deccan founder G.R. Gopinath, have been particularly praised for their depth and nuance. Beyond his acting career, Suriya is also a producer and co-owner of the production company 2D Entertainment, which has been involved in producing several successful films. His commitment to social causes, including his support for education and healthcare initiatives, reflects his dedication to using his platform for positive impact. Suriya’s contributions to cinema, marked by his dynamic performances and commitment to quality storytelling, have earned him widespread acclaim and a significant fan following. His continued success in both acting and production highlights his influential role in Tamil cinema and his lasting impact on the industry.`,
    movies:[
      {
        name:"Ayan",
        path:"video/Tamil/Actors/Surya/movies/Ayan.jpg"
      },
      {
        name:"Kappan",
        path:"video/Tamil/Actors/Surya/movies/Kappan.jpg"
      },
      {
        name:"Mattran",
        path:"video/Tamil/Actors/Surya/movies/Mattran.jpg"
      },
      {
        name:"Vikram",
        path:"video/Tamil/Actors/Surya/movies/Vikram.jpg"
      }
    ]
  });
  
  currentCelebrity.set("VijayAntony",{
    name:"Vijay Antony",
    path:"video/Tamil/Actors/VijayAntony/Actorimg/VijayAntony.jfif",
    about:`Vijay Antony, born on July 24, 1975, in Nagercoil, Tamil Nadu, is a distinguished Indian film composer, actor, and producer recognized for his contributions to Tamil cinema. His journey in the entertainment industry began as a music composer, making his debut with the 2005 film Sukran. His innovative approach to music, blending traditional and contemporary styles, garnered attention and set the foundation for his future success. However, it was with his 2008 film Naan that Vijay Antony truly made his mark. Not only did he compose the soundtrack, but he also starred in the film, marking his debut as an actor. His performance was widely praised, showcasing his versatility and establishing him as a formidable presence in Tamil cinema. Vijay Antony’s dual role as a composer and actor continued to shine with his subsequent projects. His music compositions in films such as Raththa Sarithiran (2011), Salim (2014), and India Pakistan (2015) were well-received, further cementing his reputation as a talented and innovative music director. Salim, in particular, was notable for its engaging soundtrack and his compelling lead performance, reflecting his ability to excel in both music and acting. His film Annadurai (2017) demonstrated his knack for portraying complex characters, and his performance was highly appreciated. Vijay Antony's versatility is evident in his varied roles, from intense dramatic performances to more light-hearted roles, highlighting his range as an actor. Beyond his work in front of and behind the camera, Vijay Antony is also an accomplished producer. His production company has been involved in several successful projects, contributing to the growth and diversification of Tamil cinema. His commitment to quality storytelling and innovative filmmaking continues to influence the industry. Vijay Antony’s impact on Tamil cinema is underscored by his ability to seamlessly blend his roles as a composer, actor, and producer. His innovative music, compelling performances, and contributions to production have earned him a significant following and respect within the industry. His career reflects his dedication to his craft and his ability to connect with audiences through a multifaceted approach to entertainment. Vijay Antony’s ongoing success and influence in Tamil cinema demonstrate his lasting impact and his role as a key figure in the industry.`,
    movies:[
      {
        name:"IndiaPakistan",
        path:"video/Tamil/Actors/VijayAntony/movies/IndiaPakistan.jpg"
      },
      {
        name:"Naan",
        path:"video/Tamil/Actors/VijayAntony/movies/Naan.jpg"
      },
      {
        name:"Pichaikaran",
        path:"video/Tamil/Actors/VijayAntony/movies/Pichaikaran.jpg"
      },
      {
        name:"Salim",
        path:"video/Tamil/Actors/VijayAntony/movies/Salim.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Vikram",{
    name:"Vikram",
    path:"video/Tamil/Actors/Vikram/Actorimg/Vikram.jpg",
    about:`Vikram, born as Kennedy John Victor on April 17, 1966, in Chennai, India, is a highly acclaimed Indian actor known for his remarkable versatility and dynamic performances in Tamil cinema. Emerging as one of the most talented and influential actors in Indian film, Vikram began his career in the early 1990s with his debut in the film En Kadhal Kanmani (1990). His breakthrough came with Sethu (1999), directed by Bala, where his portrayal of a troubled young man earned him widespread acclaim and established him as a significant actor in Tamil cinema. Vikram’s ability to immerse himself in diverse roles has been a hallmark of his career. His performances in films such as Pithamagan (2003) and Anniyan (2005) demonstrated his range and commitment to his craft, earning him numerous awards and accolades. Pithamagan, in particular, showcased his exceptional talent in playing a complex character, further solidifying his reputation as a versatile actor. Vikram’s collaboration with director Shankar on Anniyan was notable for its ambitious scope and his transformative performance, which included multiple roles and extensive physical transformation. His commitment to roles often involves significant preparation and physical changes, reflecting his dedication and professionalism. His subsequent films, including Raavanan (2010) and I (2015), continued to highlight his ability to tackle a wide range of characters, from heroic figures to antagonists, with equal finesse. I was particularly notable for its elaborate production design and Vikram’s extensive transformation for the role. Vikram’s impact extends beyond acting; he has also been involved in film production and is known for his philanthropic efforts. His production company, Aascar Films, has been involved in several successful projects, and his charitable work focuses on education and healthcare. Vikram’s contribution to Tamil cinema is marked by his exceptional performances, his ability to reinvent himself with each role, and his influence on the industry through both his acting and production work. His career, characterized by a blend of artistic excellence and dedication, continues to inspire and entertain audiences, securing his place as one of the most respected and dynamic actors in Indian cinema.`,
    movies:[
      {
        name:"10endrathukulla",
        path:"video/Tamil/Actors/Vikram/movies/10endrathukulla.jpg"
      },
      {
        name:"I",
        path:"video/Tamil/Actors/Vikram/movies/I.jpg"
      },
      {
        name:"Irumugan",
        path:"video/Tamil/Actors/Vikram/movies/Irumugan.jpg"
      },
      {
        name:"Mahan",
        path:"video/Tamil/Actors/Vikram/movies/Mahan.webp"
      },
    ]
  });
  
  currentCelebrity.set("Loki",{
    name:"Loki",
    path:"video/Tamil/Directors/loki/Directorimg/Loki.jpg",
    about:`Lokesh Kanagaraj, born on March 14, 1988, in Kovilpatti, Tamil Nadu, is a prominent Indian film director and writer known for his influential work in Tamil cinema. Emerging as one of the leading voices in contemporary Tamil filmmaking, Lokesh Kanagaraj began his career with a distinct approach to storytelling and direction. He made his directorial debut with the critically acclaimed film Maanagaram (2017), which was praised for its gripping narrative and portrayal of urban life in Chennai. The film's success established him as a director with a unique vision and a knack for crafting engaging and realistic stories. Lokesh Kanagaraj continued to gain recognition with his subsequent projects, including Kaithi (2019), which further solidified his reputation. Kaithi is noted for its intense, real-time storytelling and minimalistic approach, focusing on a single night of action involving a prisoner who gets entangled in a police operation. The film's innovative structure and compelling execution were highly appreciated, and it was a commercial and critical success. His collaboration with actor Kamal Haasan on Vikram (2022) marked a significant milestone in his career. The film, featuring an ensemble cast and a complex, multi-layered narrative, was notable for its ambitious scope and execution. Vikram demonstrated Kanagaraj's ability to handle large-scale projects while maintaining his distinctive style of storytelling. Lokesh Kanagaraj’s filmmaking is characterized by his attention to detail, strong narrative structure, and ability to blend different genres. His work often explores themes of crime, justice, and human complexity, and he is known for his ability to create high-stakes, intense cinematic experiences. In addition to his directorial achievements, Kanagaraj is recognized for his collaborations with talented actors and his contributions to the evolving landscape of Tamil cinema. His impact on the industry is marked by his innovative approach to storytelling and his ability to connect with audiences through compelling and well-crafted films. As a leading filmmaker, Lokesh Kanagaraj’s continued success and influence in Tamil cinema reflect his significant role in shaping contemporary Indian filmmaking.`,
    movies:[
      {
        name:"kaithi",
        path:"video/Tamil/Directors/loki/movies/kaithi.jpg",
      },
      {
        name:"leo",
        path:"video/Tamil/Directors/loki/movies/leo.jpg"
      },
      {
        name:"managaram",
        path:"video/Tamil/Directors/loki/movies/managaram.jpg"
      },
      {
        name:"master",
        path:"video/Tamil/Directors/loki/movies/master.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Maniratnam",{
    name:"Maniratnam",
    path:"video/Tamil/Directors/maniratnam/Directorimg/Maniratnam.jpg",
    about:`Mani Ratnam, born Gangi Reddy Mani Ratnam on June 2, 1956, in Chennai, India, is a highly acclaimed Indian film director, screenwriter, and producer known for his profound contributions to Indian cinema, particularly in Tamil and Hindi films. With a career spanning over four decades, Ratnam is celebrated for his innovative storytelling, strong visual style, and ability to blend diverse cinematic influences. He made his directorial debut with Pallavi Anu Pallavi (1983), but it was his 1987 film Nayakan, starring Kamal Haasan, that brought him widespread recognition. Nayakan was praised for its compelling narrative and its portrayal of a gangster’s life, drawing from real-life events and showcasing Ratnam’s knack for blending social issues with engaging storytelling. His subsequent films, such as Raja Hindustani (1992), Bombay (1995), and Dil Se (1998), further established his reputation as a master filmmaker. Bombay, in particular, was noted for its poignant portrayal of the communal riots in Mumbai and its evocative soundtrack, reflecting Ratnam’s ability to address sensitive issues with sensitivity and depth. Dil Se, starring Shah Rukh Khan and Manisha Koirala, was another major success, featuring a memorable soundtrack and exploring themes of love and terrorism. Mani Ratnam’s films are often characterized by their strong narratives, complex characters, and rich visual style. He is known for his ability to tackle diverse genres, from political dramas to romantic thrillers, and his collaborations with renowned composers like A.R. Rahman have resulted in some of the most memorable soundtracks in Indian cinema. His later works, such as Guru (2007), Raavan (2010), and Chekka Chivantha Vaanam (2018), continue to reflect his innovative approach and storytelling prowess. Ratnam’s impact on Indian cinema is marked by his artistic vision, ability to push boundaries, and his role in shaping modern Indian filmmaking. His contributions have earned him numerous awards and accolades, and he remains a significant and influential figure in the industry. Mani Ratnam’s legacy is defined by his dedication to crafting thought-provoking and visually stunning films, securing his place as one of the most respected and celebrated directors in Indian cinema.`,
    movies:[
      {
        name:"kaatru-veliyidai",
        path:"video/Tamil/Directors/maniratnam/movies/kaatru-veliyidai.jpg"
      },
      {
        name:"ok-kanmani",
        path:"video/Tamil/Directors/maniratnam/movies/ok-kanmani.jpg"
      },
      {
        name:"ps2",
        path:"video/Tamil/Directors/maniratnam/movies/ps2.jpg"
      },
      {
        name:"ravanan",
        path:"video/Tamil/Directors/maniratnam/movies/ravanan.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Murugadoss",{
    name:"Murugadoss",
    path:"video/Tamil/Directors/murugadoss/Directorimg/Murugadoss.jpg",
    about:`A.R. Murugadoss, born on September 25, 1974, in Chennai, Tamil Nadu, is a prominent Indian film director and screenwriter known for his significant contributions to Tamil and Telugu cinema. Renowned for his innovative storytelling and successful commercial films, Murugadoss has established himself as a leading figure in Indian filmmaking. He began his career as a director with the 2002 Tamil film Ramana, which was a critical and commercial success. The film's engaging narrative and social commentary, combined with its strong performances, earned him acclaim and set the stage for his future successes. Murugadoss gained widespread recognition with his 2005 film Ghajini, which featured a unique storyline about a man suffering from short-term memory loss seeking revenge for his fiancée's murder. The film's success was marked by its innovative approach to storytelling and its strong performances, particularly by lead actor Suriya. The film was later remade in Hindi with Aamir Khan in the lead role, further cementing Murugadoss's reputation as a filmmaker with a distinctive vision. His subsequent films, such as Thuppakki (2012) and Kaththi (2014), continued to showcase his ability to blend action and social themes with engaging narratives. Thuppakki, starring Vijay, was a major success and praised for its high-octane action sequences and its portrayal of terrorism and national security. Kaththi, featuring Vijay again, explored issues of corporate exploitation and farmers' rights, reflecting Murugadoss's penchant for addressing contemporary social issues through popular cinema. His 2017 film Sarkar, also starring Vijay, was notable for its political themes and its portrayal of electoral corruption. Murugadoss's films are characterized by their strong narratives, well-crafted action sequences, and the incorporation of social and political themes. His ability to blend entertainment with meaningful commentary has made him a significant and influential director in Indian cinema. Murugadoss's impact on the industry is underscored by his successful collaborations with major stars and his contributions to shaping contemporary commercial cinema. His continued success and influence reflect his role as a key figure in Indian filmmaking, known for his innovative approach and engaging storytelling.`,
    movies:[
      {
        name:"kathi",
        path:"video/Tamil/Directors/murugadoss/movies/kathi.jpg"
      },
      {
        name:"sarkar",
        path:"video/Tamil/Directors/murugadoss/movies/sarkar.jpg"
      },
      {
        name:"spyder",
        path:"video/Tamil/Directors/murugadoss/movies/spyder.jpg"
      },
      {
        name:"thuppaki",
        path:"video/Tamil/Directors/murugadoss/movies/thuppaki.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Shankar",{
    name:"Shankar",
    path:"video/Tamil/Directors/shankar/Directorimg/Shankar.jpg",
    about:`S. Shankar, born on August 17, 1963, in Kumbakonam, Tamil Nadu, is a renowned Indian film director and screenwriter celebrated for his innovative and grandiose contributions to Tamil and Indian cinema. Known for his unique blend of social themes and high-octane entertainment, Shankar has established himself as one of the leading figures in contemporary Indian filmmaking. He began his career in the early 1990s with the film Gentleman (1993), which was a significant success and marked his entry into the industry. The film’s compelling narrative and socially relevant themes, combined with its commercial appeal, set the stage for Shankar’s future success. His subsequent film, Indian (1996), featuring Kamal Haasan in dual roles, was a major milestone in his career. The film, which dealt with themes of corruption and vigilante justice, showcased Shankar’s ability to handle complex narratives and large-scale productions. It was both a critical and commercial success and is considered a classic in Indian cinema. Shankar’s work continued to make waves with films like Jeans (1998), Boys (2003), and Anniyan (2005), each noted for their impressive visual effects and elaborate storytelling. Anniyan was particularly praised for its ambitious scope, blending elements of action, drama, and fantasy, and showcased Shankar’s ability to tackle diverse genres with flair. His 2010 film, Enthiran (also known as Robot), starring Rajinikanth, was a landmark in Indian cinema, known for its groundbreaking visual effects and ambitious narrative. The film was a massive commercial success and is considered one of the most technologically advanced films in Indian cinema history. Shankar continued his success with I (2015), which featured extensive physical transformations and was noted for its visual splendor and complex narrative. His 2022 film, Indian 2, the sequel to Indian, was highly anticipated and continued his tradition of tackling socially relevant issues with a blend of entertainment and commentary. Shankar’s films are characterized by their high production values, elaborate special effects, and a knack for incorporating social and political themes into engaging narratives. His contributions to cinema reflect his innovative approach and his ability to push the boundaries of Indian filmmaking. Shankar’s impact on the industry is marked by his creative vision and his role in shaping the landscape of contemporary Indian cinema, making him one of the most influential and celebrated directors in the industry.`,
    movies:[
      {
        name:"2.0",
        path:"video/Tamil/Directors/shankar/movies/2.0.jpg"
      },
      {
        name:"anniyan",
        path:"video/Tamil/Directors/shankar/movies/anniyan.jpg"
      },
      {
        name:"endhiran",
        path:"video/Tamil/Directors/shankar/movies/endhiran.jpg"
      },
      {
        name:"i",
        path:"video/Tamil/Directors/shankar/movies/i.jpg"
      },
    ]
  });
  
  currentCelebrity.set("Vetrimaran",{
    name:"Vetrimaran",
    path:"video/Tamil/Directors/vetrimaran/Directorimg/Vetrimaran.jpg",
    about:`Vetrimaran, born on June 4, 1975, in Cuddalore, Tamil Nadu, is a highly acclaimed Indian film director and screenwriter known for his impactful and critically acclaimed work in Tamil cinema. Emerging as a prominent filmmaker in contemporary Indian cinema, Vetrimaran is celebrated for his gritty, realistic storytelling and his focus on social issues and human struggles. He made his directorial debut with Polladhavan (2007), a film that was well-received for its gripping narrative and realistic portrayal of the struggles of a young man in Chennai. The film’s success established him as a filmmaker with a unique voice and a keen understanding of urban life. Vetrimaran’s subsequent film, Aadukalam (2011), further solidified his reputation. Starring Dhanush, the film, set against the backdrop of cockfighting in a rural Tamil Nadu village, was praised for its authentic portrayal of local culture and its compelling storytelling. Aadukalam was a major critical and commercial success and won several awards, including the National Film Award for Best Director and Best Screenplay. His next film, Vada Chennai (2018), was a highly anticipated project and was praised for its ambitious narrative structure, spanning several decades and exploring the life of a gangster in Chennai. The film, starring Dhanush again, showcased Vetrimaran’s ability to craft complex characters and narratives, reflecting his deep engagement with social issues and human experiences. Vetrimaran’s storytelling often focuses on the lives of marginalized communities and the harsh realities they face, delivered with a raw and unfiltered approach. His attention to detail, strong character development, and commitment to authenticity have earned him significant respect and acclaim in the film industry. His work is noted for its realistic portrayal of societal issues and its ability to engage audiences with compelling narratives. Vetrimaran’s impact on Tamil cinema is marked by his dedication to creating thought-provoking and socially relevant films. His contributions reflect his role as one of the most influential filmmakers in contemporary Indian cinema, known for his innovative approach and commitment to storytelling that resonates with audiences on a deep level.`,
    movies:[
      {
        name:"asuran",
        path:"video/Tamil/Directors/vetrimaran/movies/asuran.jpg",
      },
      {
        name:"paava-kadaigal",
        path:"video/Tamil/Directors/vetrimaran/movies/paava-kadaigal.jpg"
      },
      {
        name:"vada-chennai",
        path:"video/Tamil/Directors/vetrimaran/movies/vada-chennai.jpg"
      },
      {
        name:"viduthalai",
        path:"video/Tamil/Directors/vetrimaran/movies/viduthalai.jpg"
      },
    ]
  });















  currentCelebrity.set("BradPitt",{
    name:"Brad Pitt",
    path:"video/English/Actors/BradPitt/Actorimg/BradPitt.jpg",
    about:`Brad Pitt, born William Bradley Pitt on December 18, 1963, in Shawnee, Oklahoma, is one of the most acclaimed and versatile actors in Hollywood, known for his diverse roles and remarkable acting range. Pitt rose to fame in the early 1990s with his breakthrough role in Thelma & Louise (1991), where his portrayal of the charming drifter J.D. made him an instant heartthrob and catapulted him into stardom. He quickly established himself as more than just a pretty face, taking on challenging and varied roles across different genres. His performances in A River Runs Through It (1992) and Legends of the Fall (1994) further demonstrated his acting prowess, showing his ability to bring depth and emotional weight to his characters. Pitt’s collaboration with director David Fincher in films like Se7en (1995) and Fight Club (1999) solidified his status as a serious actor. His performance as the tormented Detective Mills in Se7en and the rebellious Tyler Durden in Fight Club earned him critical acclaim and showcased his ability to tackle complex, psychologically intense roles. Over the years, Pitt has displayed remarkable versatility, seamlessly transitioning between roles in big-budget blockbusters like Ocean’s Eleven (2001) and Mr. & Mrs. Smith (2005) to more intimate, character-driven films like Babel (2006) and The Curious Case of Benjamin Button (2008). His portrayal of the reverse-aging Benjamin Button earned him an Academy Award nomination for Best Actor, further solidifying his reputation as one of the best actors of his generation. Pitt's performance in Quentin Tarantino’s Inglourious Basterds (2009) and Once Upon a Time in Hollywood (2019) were standout moments in his career, with the latter earning him his first Oscar for Best Supporting Actor. In addition to his acting achievements, Pitt is a successful producer through his production company, Plan B Entertainment. Under Plan B, he has produced critically acclaimed films like 12 Years a Slave (2013), The Big Short (2015), and Moonlight (2016), with 12 Years a Slave winning the Academy Award for Best Picture. His career reflects not only his talent in front of the camera but also his keen eye for producing meaningful and impactful cinema. Throughout his career, Pitt has also been a significant cultural icon, recognized for his looks, style, and philanthropic efforts. He has used his platform to advocate for various causes, including rebuilding efforts in New Orleans after Hurricane Katrina and supporting initiatives related to climate change and housing for the underprivileged. Brad Pitt's enduring appeal, both as an actor and producer, lies in his ability to continuously challenge himself with diverse roles while maintaining a deep connection with audiences worldwide. He remains one of the most influential and respected figures in Hollywood.`,
    movies:[
      {
        name:"Babylon",
        path:"video/English/Actors/BradPitt/movies/Babylon.jpg",
      },
      {
        name:"MoneyBall",
        path:"video/English/Actors/BradPitt/movies/MoneyBall.jpg"
      },
      {
        name:"Seven",
        path:"video/English/Actors/BradPitt/movies/Seven.jpg"
      },
      {
        name:"Worldwarz",
        path:"video/English/Actors/BradPitt/movies/Worldwarz.jpg"
      },
    ]
  });

  currentCelebrity.set("Jason",{
    name:"Jason",
    path:"video/English/Actors/Jason/Actorimg/Jason.jpg",
    about:`Jason Statham, born on July 26, 1967, in Shirebrook, Derbyshire, England, is one of Hollywood’s most iconic and enduring action stars, renowned for his tough-guy persona, martial arts expertise, and ability to perform most of his own stunts. Before entering the film industry, Statham was a competitive diver and a member of the British National Diving Team, an experience that would later influence his ability to perform the highly physical roles that define his career. His journey into acting began when he was discovered by British director Guy Ritchie, who cast him in the 1998 crime-comedy Lock, Stock and Two Smoking Barrels. In the film, Statham played a slick, streetwise con artist, a role that showcased his natural charisma and instantly caught the attention of audiences and critics alike. His performance led to a continued collaboration with Ritchie, most notably in the critically acclaimed Snatch (2000), where Statham portrayed the character Turkish, a boxing promoter caught up in a chaotic world of gangsters and criminals. This early success in British cinema established him as a rising star, but it was his breakout Hollywood role in The Transporter (2002) that truly catapulted him to international fame. In The Transporter, Statham played Frank Martin, a former Special Forces operative turned driver-for-hire, whose strict code of conduct and unparalleled combat skills made him a fan favorite. The film’s success led to two sequels, Transporter 2 (2005) and Transporter 3 (2008), each featuring Statham in increasingly dangerous and physically demanding action sequences that cemented his reputation as one of the most reliable action stars in the industry. Known for his physicality and commitment to realism, Statham has always been dedicated to performing his own stunts, which has set him apart in the action genre and earned him widespread respect from peers and fans. Over the years, Statham’s filmography has grown to include a wide array of action films, from the adrenaline-pumping Crank (2006) to the dystopian Death Race (2008), further demonstrating his ability to dominate the action landscape. His participation in the Expendables franchise (2010, 2012, 2014) alongside some of the greatest action heroes of all time, such as Sylvester Stallone and Arnold Schwarzenegger, solidified his position as a modern action legend. In these films, his role as Lee Christmas, a knife-wielding mercenary, highlighted his trademark mix of gritty combat skills, charm, and intensity. One of the most defining chapters of Statham’s career came with his involvement in the globally successful Fast & Furious franchise, starting with Fast & Furious 6 (2013). In the film, Statham played the role of Deckard Shaw, a former British special forces assassin, and quickly became a key figure in the franchise. His appearances in Furious 7 (2015) and The Fate of the Furious (2017) further established him as an integral part of the high-octane, explosive world of Fast & Furious. In 2019, he starred alongside Dwayne “The Rock” Johnson in the spin-off Fast & Furious Presents: Hobbs & Shaw, where the dynamic between the two action titans, combined with Statham’s trademark wit and fighting prowess, made the film a commercial hit. While Statham is best known for his action roles, he has also demonstrated his range with occasional forays into comedy, such as in Spy (2015), where his over-the-top portrayal of a bumbling yet overconfident secret agent showcased his comedic timing and ability to not take himself too seriously. Despite his tough-guy image, Statham’s self-deprecating humor and willingness to experiment with different genres have broadened his appeal across a diverse audience. Throughout his career, Jason Statham has maintained a consistent work ethic and commitment to authenticity, often pushing the limits of what is expected in action films. His background in martial arts, diving, and gymnastics has allowed him to perform complex fight choreography and dangerous stunts, making each of his performances feel genuine and intense. Statham’s influence on the action genre has been profound, and his ability to deliver both in high-octane, fast-paced films and more grounded, gritty roles has secured his place as one of Hollywood’s most dependable and enduring stars.`,
    movies:[
      {
        name:"BankJob",
        path:"video/English/Actors/Jason/movies/BankJob.jpg",
      },
      {
        name:"Expandables",
        path:"video/English/Actors/Jason/movies/Expandables.jpg"
      },
      {
        name:"FastandFurious",
        path:"video/English/Actors/Jason/movies/FastandFurious.jpg"
      },
      {
        name:"Spy",
        path:"video/English/Actors/Jason/movies/Spy.jfif"
      },
    ]
  });

  currentCelebrity.set("JhonnyDepp",{
    name:"Jhonny Depp",
    path:"video/English/Actors/JhonnyDepp/Actorimg/Jhonny.jpg",
    about:`Johnny Depp, born on June 9, 1963, in Owensboro, Kentucky, is one of the most versatile and iconic actors in Hollywood, renowned for his ability to completely immerse himself in a wide range of eccentric, complex, and unforgettable characters. Depp's journey into acting began somewhat serendipitously after a brief career in music, when he landed his first major acting role in the horror classic A Nightmare on Elm Street (1984). However, it wasn’t until his role on the hit TV series 21 Jump Street (1987-1990) that Depp gained widespread fame, playing Officer Tom Hanson, a young undercover cop. While the series made him a teen idol, Depp was never content with the heartthrob status and sought roles that challenged him artistically. His collaboration with visionary director Tim Burton began with Edward Scissorhands (1990), where he portrayed the gentle and misunderstood title character. This marked the beginning of a long-standing creative partnership that would yield some of Depp’s most iconic roles. Depp’s portrayal of Edward, a man with scissor blades for hands who is ostracized by society, showcased his ability to bring depth and humanity to oddball characters, and it became a defining moment in his career. Throughout the 1990s, Depp cemented his reputation as a serious and unconventional actor, with standout performances in films like Benny & Joon (1993), What's Eating Gilbert Grape (1993), and Donnie Brasco (1997), where he played an undercover FBI agent opposite Al Pacino. His choices in roles reflected his desire to work on offbeat, indie projects rather than mainstream Hollywood fare. Depp’s range as an actor was further exemplified in his collaborations with Burton on films like Sleepy Hollow (1999) and Charlie and the Chocolate Factory (2005), where his unique interpretations of both Ichabod Crane and Willy Wonka demonstrated his flair for the bizarre and whimsical. However, it was Depp’s portrayal of Captain Jack Sparrow in Disney's Pirates of the Caribbean: The Curse of the Black Pearl (2003) that catapulted him into global superstardom. His quirky, drunken, and charismatic pirate, inspired by rock legend Keith Richards, became a cultural phenomenon and earned Depp his first Academy Award nomination for Best Actor. Jack Sparrow's success led to a multi-film franchise, with Depp reprising the role in several sequels, solidifying him as one of the most bankable stars in Hollywood. Beyond Pirates of the Caribbean, Depp continued to take on diverse and challenging roles, from the dark and twisted Sweeney Todd: The Demon Barber of Fleet Street (2007), which earned him another Oscar nomination, to his portrayal of the infamous gangster John Dillinger in Public Enemies (2009). His versatility was again on display when he took on the role of the Mad Hatter in Alice in Wonderland (2010), another Burton collaboration, blending his unique ability to inhabit surreal characters with mainstream appeal. Depp's personal life has often made headlines, especially due to his high-profile relationships and legal battles, including his tumultuous relationship with actress Amber Heard, which resulted in several court cases that garnered global media attention. Despite personal controversies, Depp's work in film has continued to earn critical and fan appreciation. In addition to his acting career, Depp is also a musician, having played guitar in bands such as Hollywood Vampires, showcasing his passion for music alongside his film career. Over the years, Johnny Depp has built a legacy as one of the most inventive and daring actors in the industry. Known for his chameleon-like ability to disappear into characters and his dedication to portraying unconventional and often misunderstood figures, Depp has become a symbol of artistic integrity in Hollywood. His collaborations with directors like Tim Burton, his memorable performances in both blockbuster hits and smaller independent films, and his enduring popularity among fans make him one of the most respected and influential actors of his generation.`,
    movies:[
      {
        name:"Chocolat",
        path:"video/English/Actors/JhonnyDepp/movies/Chocolat.jpg",
      },
      {
        name:"Edward",
        path:"video/English/Actors/JhonnyDepp/movies/Edward.jfif"
      },
      {
        name:"POC",
        path:"video/English/Actors/JhonnyDepp/movies/POC.jfif"
      },
      {
        name:"Tourist",
        path:"video/English/Actors/JhonnyDepp/movies/Tourist.jpg"
      },
    ]
  });

  currentCelebrity.set("RobertDowney",{
    name:"Robert Downey",
    path:"video/English/Actors/RobertDowney/Actorimg/RobertDowney.jpg",
    about:`Robert Downey Jr., born April 4, 1965, in Manhattan, New York, is a globally renowned actor whose career is marked by immense talent, resilience, and one of the most remarkable comebacks in Hollywood history. The son of filmmaker Robert Downey Sr., Downey made his acting debut at a young age and rose to prominence in the 1980s with roles in films like Less Than Zero (1987), where his portrayal of a troubled, drug-addicted youth was both riveting and haunting, reflecting some of his own personal struggles. His career reached new heights with his brilliant portrayal of Charlie Chaplin in Chaplin (1992), which earned him an Academy Award nomination for Best Actor and solidified his reputation as one of the most talented actors of his generation. However, Downey's personal battles with substance abuse soon began to overshadow his professional achievements. Throughout the late 1990s and early 2000s, he faced multiple arrests, stints in rehab, and became an uninsurable risk for studios, leading many to believe that his career was over. Despite these challenges, Downey never fully disappeared from the industry, continuing to take on smaller roles in indie films and television, even earning a Golden Globe for his work on Ally McBeal. His true comeback, however, began in 2008 when he was cast as Tony Stark in Iron Man. Downey’s witty, charismatic, and deeply human portrayal of the flawed genius billionaire not only revitalized his career but also launched the Marvel Cinematic Universe, making Iron Man a massive global success and transforming Downey into a worldwide superstar. His embodiment of Stark over more than a decade, through The Avengers films and other Marvel entries, made him the central figure of the MCU and one of the highest-paid actors in Hollywood. His performance in Avengers: Endgame (2019), where his character sacrifices himself to save the universe, became an iconic moment in cinema, resonating emotionally with fans and critics alike. Outside of the MCU, Downey also found success in the Sherlock Holmes franchise, bringing his signature charm and sharp wit to the role of the famous detective. His portrayal, alongside Jude Law, made both Sherlock Holmes (2009) and its sequel major box office hits. Downey’s remarkable comeback story, from the depths of addiction and personal turmoil to becoming a beloved and influential figure in Hollywood, is a testament to his talent, resilience, and perseverance. Today, Robert Downey Jr. is not only admired for his acting prowess but also for his ability to overcome life's greatest obstacles, inspiring fans and peers alike.`,
    movies:[
      {
        name:"Avengers",
        path:"video/English/Actors/RobertDowney/movies/Avengers.jfif",
      },
      {
        name:"DoctorDoom",
        path:"video/English/Actors/RobertDowney/movies/DoctorDoom.jpg"
      },
      {
        name:"Ironman",
        path:"video/English/Actors/RobertDowney/movies/Ironman.jfif"
      },
      {
        name:"Sherlock",
        path:"video/English/Actors/RobertDowney/movies/Sherlock.jpg"
      },
    ]
  });


  currentCelebrity.set("WillSmith",{
    name:"Will Smith",
    path:"video/English/Actors/WillSmith/Actorimg/WillSmith.jpg",
    about:`Will Smith, born on September 25, 1968, in Philadelphia, Pennsylvania, is one of Hollywood’s most versatile and charismatic stars, known for his impressive range as an actor, rapper, and producer. Smith first rose to fame as a rapper under the name “The Fresh Prince” in the late 1980s, achieving early success with his partner DJ Jazzy Jeff. The duo’s music, known for its clean and humorous lyrics, led to hits like "Parents Just Don't Understand" and "Summertime," earning them the first-ever Grammy Award for Best Rap Performance in 1989. However, Smith's real breakthrough came in 1990 when he transitioned into television as the star of the NBC sitcom The Fresh Prince of Bel-Air, where he played a fictionalized version of himself. The show became a cultural phenomenon and remains iconic for its blend of comedy, family dynamics, and social commentary, propelling Smith into mainstream stardom. As the 1990s progressed, Smith began to transition into film, marking his debut in the drama Six Degrees of Separation (1993) and solidifying his status as a box-office draw with the action-comedy Bad Boys (1995) alongside Martin Lawrence. His career skyrocketed further with the sci-fi blockbuster Independence Day (1996), where he played a fighter pilot battling an alien invasion. The film became one of the highest-grossing movies of the decade and established Smith as a leading action star. He followed this success with Men in Black (1997), where his comedic timing and action-hero credentials made him a fan favorite. The combination of his charismatic performances and his musical contributions to the film soundtracks, such as "Men in Black" and "Gettin' Jiggy wit It," cemented his reputation as a global superstar.Smith's versatility as an actor shone through as he took on a variety of roles in the early 2000s, from the biographical drama Ali (2001)`,
    movies:[
      {
        name:"Hancock",
        path:"video/English/Actors/WillSmith/movies/Hancock.jpg",
      },
      {
        name:"Hitch",
        path:"video/English/Actors/WillSmith/movies/Hitch.jfif"
      },
      {
        name:"MIB",
        path:"video/English/Actors/WillSmith/movies/MIB.jpg"
      },
      {
        name:"POH",
        path:"video/English/Actors/WillSmith/movies/POH.jpg"
      },
    ]
  });















  currentCelebrity.set("ChadStahelski",{
    name:"Chad Stahelski",
    path:"video/English/Directors/ChadStahelski/Directorimg/ChadStahelski.jpg",
    about:`Chad Stahelski, born on September 20, 1968, is an accomplished director, stunt coordinator, and martial artist best known for his work on the John Wick film series, where he brought a unique and highly stylized vision to action cinema. Stahelski began his career as a stunt performer and coordinator, working on numerous high-profile films and developing a reputation for his exceptional skills in choreography and action design. He initially gained recognition in Hollywood for his work as Keanu Reeves' stunt double in The Matrix (1999), which marked the beginning of a long-standing creative partnership with Reeves. Stahelski’s deep understanding of martial arts and stunt work became instrumental in shaping his future as a filmmaker. His breakthrough came in 2014 when he co-directed the first John Wick film alongside David Leitch. The movie introduced a fresh take on the action genre, combining precise, beautifully choreographed fight sequences with a minimalist, noir-inspired narrative. The film’s success not only established Stahelski as a visionary director but also turned the John Wick franchise into a global phenomenon.What sets Stahelski apart from other action directors is his meticulous attention to detail in the choreography of fight scenes, which often blend hand-to-hand combat, gunplay (commonly referred to as "gun-fu"), and intricate stunts. His films are marked by their fluidity of movement, creative use of camera work, and a dedication to practical effects over CGI, which has garnered praise from both critics and fans for revitalizing the action genre. Stahelski’s background in martial arts and stunts allows him to bring an authenticity to action sequences rarely seen in contemporary films. Under his direction, the John Wick series grew into a cultural juggernaut, with each installment—John Wick: Chapter 2 (2017), John Wick: Chapter 3 – Parabellum (2019), and John Wick: Chapter 4 (2023)—expanding the mythology of the titular assassin and raising the bar for action filmmaking.`,
    movies:[
      {
        name:"jw1",
        path:"video/English/Directors/ChadStahelski/movies/jw1.jpg",
      },
      {
        name:"jw2",
        path:"video/English/Directors/ChadStahelski/movies/jw2.jpg"
      },
      {
        name:"jw3",
        path:"video/English/Directors/ChadStahelski/movies/jw3.jpg"
      },
      {
        name:"jw4",
        path:"video/English/Directors/ChadStahelski/movies/jw4.jpg"
      },
    ]
  });

  
  currentCelebrity.set("ChristopherNolan",{
    name:"Christopher Nolan",
    path:"video/English/Directors/ChristopherNolan/Directorimg/ChristopherNolan.jpg",
    about:`Christopher Nolan, born on July 30, 1970, in London, is one of the most acclaimed and influential filmmakers of the 21st century, known for his innovative storytelling, complex narratives, and masterful use of practical effects. Nolan's career began with the low-budget film Following (1998), but it was his psychological thriller Memento (2000) that garnered widespread critical acclaim, earning him his first Academy Award nomination for Best Original Screenplay. Memento showcased his penchant for non-linear storytelling, with its unique structure unfolding in reverse chronological order, establishing Nolan as a director who challenges audience perceptions and expectations. His next few films, including Insomnia (2002), further solidified his reputation as a director with a distinct voice. However, it was his work on Batman Begins (2005) that catapulted him into mainstream success, rejuvenating the Batman franchise and setting a new standard for superhero films with its darker, more grounded tone. This success was followed by The Dark Knight (2008), which became a cultural and cinematic phenomenon, largely due to Heath Ledger’s iconic portrayal of the Joker, and is often regarded as one of the greatest superhero films ever made. The Dark Knight set box office records and earned Nolan widespread recognition for elevating the superhero genre into something far more complex and morally intricate.Nolan’s filmmaking style is characterized by his exploration of philosophical themes, including time, identity, and reality, which are central to films like Inception (2010) and Interstellar (2014). Inception, a mind-bending heist film set within the architecture of dreams, became a global sensation, earning him another Academy Award nomination for Best Picture and cementing his status as a visionary director. The film's use of practical effects, layered narrative, and stunning visual set pieces, including the iconic rotating hallway fight scene, showcased Nolan’s ability to blend high-concept science fiction with emotional depth and blockbuster spectacle. Similarly, Interstellar explored human survival and love against the backdrop of space exploration, further highlighting his interest in pushing the boundaries of visual effects and storytelling while maintaining a strong emotional core. Nolan's ability to balance blockbuster appeal with intellectual rigor has made him a rare breed of filmmaker, appealing to both general audiences and critics alike.`,
    movies:[
      {
        name:"DarkKnight",
        path:"video/English/Directors/ChristopherNolan/movies/DarkKnight.webp",
      },
      {
        name:"Interstellar",
        path:"video/English/Directors/ChristopherNolan/movies/Interstellar.jpg"
      },
      {
        name:"OppenHeimer",
        path:"video/English/Directors/ChristopherNolan/movies/OppenHeimer.webp"
      },
      {
        name:"Tenet",
        path:"video/English/Directors/ChristopherNolan/movies/Tenet.jpg"
      },
    ]
  });

  currentCelebrity.set("JamesCameron",{
    name:"James Cameron",
    path:"video/English/Directors/JamesCameron/Directorimg/JamesCameron.jpg",
    about:`James Cameron, born on August 16, 1954, in Ontario, Canada, is one of the most influential and visionary filmmakers in Hollywood, known for directing some of the highest-grossing and technologically groundbreaking films in cinema history. Cameron’s career began in the early 1980s, but he gained widespread recognition with The Terminator (1984), a low-budget science fiction film that became a massive commercial success and introduced the iconic character of the Terminator, played by Arnold Schwarzenegger. Cameron’s talent for blending thrilling action with innovative special effects became his signature, which he expanded upon with films like Aliens (1986), the sequel to Ridley Scott’s Alien (1979), where he masterfully combined intense action sequences with strong character development, earning the film critical acclaim and several Academy Awards. Cameron's work in these early years showcased his ability to create immersive worlds and dynamic stories, setting him apart as a filmmaker with both artistic vision and technical expertise.In 1991, Cameron directed Terminator 2: Judgment Day, a groundbreaking film that revolutionized the use of CGI in cinema, particularly with the liquid-metal T-1000 character, which was a significant leap forward in visual effects technology. The film was a commercial and critical triumph, further solidifying Cameron’s reputation as a director capable of pushing the boundaries of what was technically possible in film. This trend continued with True Lies (1994), but it was his work on Titanic (1997) that became a defining moment in his career. Titanic, a historical romance set against the backdrop of the infamous ocean liner’s sinking, became the first film to gross over $1 billion at the global box office, and for over a decade, it held the title as the highest-grossing film of all time. Cameron’s meticulous attention to detail, stunning visual effects, and ability to craft an emotionally compelling narrative made Titanic a cultural phenomenon. The film won 11 Academy Awards, including Best Director and Best Picture, cementing Cameron’s place as one of the greatest filmmakers of his generation.`,
    movies:[
      {
        name:"Aliens",
        path:"video/English/Directors/JamesCameron/movies/Aliens.jpg",
      },
      {
        name:"Avatar",
        path:"video/English/Directors/JamesCameron/movies/Avatar.jpg"
      },
      {
        name:"Terminator",
        path:"video/English/Directors/JamesCameron/movies/Terminator.jpg"
      },
      {
        name:"Titanic",
        path:"video/English/Directors/JamesCameron/movies/Titanic.jpg"
      },
    ]
  });

  currentCelebrity.set("JamesWan",{
    name:"James Wan",
    path:"video/English/Directors/JamesWan/Directorimg/JamesWan.jpg",
    about:`James Wan, born on February 26, 1977, in Kuching, Malaysia, and raised in Australia, is a highly influential filmmaker best known for his work in the horror genre, particularly as the creative force behind some of the most successful horror franchises in recent years. Wan first gained widespread recognition with the release of Saw (2004), a low-budget psychological horror film that he co-created with screenwriter Leigh Whannell. Saw became a massive hit, spawning a long-running franchise and establishing Wan as a director who could craft terrifying, tightly plotted thrillers on modest budgets. The film introduced audiences to the iconic character of Jigsaw and was noted for its inventive, twisted narrative, often blending psychological tension with graphic horror, which would become a hallmark of Wan’s style. This breakthrough film not only catapulted him into the spotlight but also revolutionized the horror genre by sparking a new wave of so-called "torture porn" films in the mid-2000s.After Saw, Wan continued to solidify his reputation in the horror world with films like Dead Silence (2007) and Death Sentence (2007), though it wasn’t until 2010’s Insidious that he once again redefined modern horror. Insidious was a supernatural horror film that relied on atmospheric tension, psychological scares, and minimal use of gore, making it stand out in a genre that had, at the time, become synonymous with violent slasher films. The film’s success proved Wan’s versatility as a filmmaker, capable of mastering both psychological and supernatural horror, and it led to a successful franchise. This period also marked his ability to establish long-term horror franchises that consistently appealed to audiences, a talent that would define much of his career.`,
    movies:[
      {
        name:"Aquaman1",
        path:"video/English/Directors/JamesWan/movies/Aquaman1.webp",
      },
      {
        name:"Aquaman2",
        path:"video/English/Directors/JamesWan/movies/Aquaman2.jpg"
      },
      {
        name:"Conjuring2",
        path:"video/English/Directors/JamesWan/movies/Conjuring2.jpg"
      },
      {
        name:"FastandFurious7",
        path:"video/English/Directors/JamesWan/movies/FastandFurious7.jpg"
      },
    ]
  });

  currentCelebrity.set("Stephen",{
    name:"Stephen",
    path:"video/English/Directors/Stephen/Directorimg/Stephen.jpg",
    about:`Stephen King, born on September 21, 1947, in Portland, Maine, is one of the most prolific and influential authors in modern literature, particularly in the horror, supernatural fiction, and suspense genres. His writing career began in the 1970s and quickly took off with the publication of Carrie (1974), his first major novel, which became an immediate success and was adapted into a highly successful film just two years later. Carrie set the tone for King’s career, blending psychological depth with supernatural elements, and introducing readers to his ability to create relatable characters in extraordinary situations. This debut was followed by a series of iconic novels that would solidify his reputation as the "King of Horror," including Salem's Lot (1975), The Shining (1977), The Stand (1978), and It (1986), each of which has been adapted into films or television series, cementing their place in pop culture history.King's writing style is known for its accessibility, vivid characters, and the ability to tap into universal fears, making the supernatural and horrific elements in his stories feel grounded and relatable. His works often delve into the darker sides of human nature, exploring themes of guilt, grief, addiction, and the complexities of good versus evil. King is a master of psychological horror, using fear not just for shock value, but to explore the emotional and moral dilemmas faced by his characters. His ability to write across genres, from supernatural horror to psychological thrillers to epic fantasy, showcases his versatility as a writer. His Dark Tower series, for example, blends elements of fantasy, Westerns, and science fiction into a sprawling, multi-book saga that has become one of his most beloved works.`,
    movies:[
      {
        name:"Carrie",
        path:"video/English/Directors/Stephen/movies/Carrie.jpg",
      },
      {
        name:"IndianaJones",
        path:"video/English/Directors/Stephen/movies/IndianaJones.jpg"
      },
      {
        name:"JurassicPark",
        path:"video/English/Directors/Stephen/movies/JurassicPark.jpg"
      },
      {
        name:"ShawshankRedemption",
        path:"video/English/Directors/Stephen/movies/ShawshankRedemption.jpg"
      },
    ]
  });




















  currentCelebrity.set("FahadhFaasil",{
    name:"Fahadh Faasil",
    path:"video/Malayalam/Actors/FahadhFaasil/Actorimg/FahadhFaasil.jpg",
    about:`Fahadh Faasil, born on August 8, 1982, in Alappuzha, Kerala, is widely regarded as one of the most talented and versatile actors in Indian cinema, particularly in the Malayalam film industry. The son of renowned filmmaker Fazil, Fahadh made his acting debut at the age of 19 in the film Kaiyethum Doorath (2002), which was directed by his father. However, the film was a critical and commercial failure, and Fahadh stepped away from acting for nearly seven years. This early setback didn’t deter him; instead, he used the time to refine his craft and returned to the industry in 2009 with a renewed passion and focus. His comeback came with Kerala Cafe (2009), an anthology film where he featured in the segment "Mrityunjayam." Fahadh's subtle and naturalistic performance immediately caught the attention of critics and filmmakers, marking the beginning of a transformative phase in his career.Fahadh's breakthrough came with Chaappa Kurishu (2011), in which he portrayed a morally ambiguous, flawed character, a role that highlighted his unique approach to acting. This film, along with 22 Female Kottayam (2012), in which he played an anti-hero, demonstrated Fahadh's willingness to take on complex and challenging roles that deviated from traditional hero-centric narratives. His nuanced performances and ability to portray emotionally intricate characters set him apart from many of his contemporaries. Over the years, Fahadh has become known for his commitment to realism, often disappearing into his roles and delivering performances that feel lived-in and authentic. His work is characterized by an understated intensity and a deep emotional range, allowing him to portray a wide variety of characters, from charming romantics to deeply flawed, morally gray individuals.`,
    movies:[
      {
        name:"Aavesham",
        path:"video/Malayalam/Actors/FahadhFaasil/movies/Aavesham.jpg",
      },
      {
        name:"Amen",
        path:"video/Malayalam/Actors/FahadhFaasil/movies/Amen.jpg"
      },
      {
        name:"NjanPrakashan",
        path:"video/Malayalam/Actors/FahadhFaasil/movies/NjanPrakashan.jpg"
      },
      {
        name:"OruIndianPranayakadha",
        path:"video/Malayalam/Actors/FahadhFaasil/movies/OruIndianPranayakadha.jpg"
      },
    ]
  });



  currentCelebrity.set("Mammootty",{
    name:"Mammootty",
    path:"video/Malayalam/Actors/Mammootty/Actorimg/Mammootty.jpg",
    about:`Mammootty, born Muhammad Kutty Panaparambil Ismail on September 7, 1951, in Chandiroor, Kerala, is one of the most celebrated and iconic actors in Indian cinema, with a career spanning over five decades. Known primarily for his work in Malayalam cinema, Mammootty has also made his mark in Tamil, Telugu, Hindi, and Kannada films, establishing himself as a versatile actor with a massive fan base across different regions of India. His commanding screen presence, exceptional acting skills, and ability to immerse himself into a wide range of characters have made him a living legend in Indian cinema. Mammootty's journey in the film industry began in the early 1970s, and over the years, he has appeared in over 400 films, portraying an incredible variety of roles that showcase his versatility and dedication to the craft.Mammootty's career breakthrough came with Mela (1980), but it was in the 1980s and 1990s that he truly rose to superstardom with a series of critically acclaimed and commercially successful films. Movies like Yathra (1985), Oru Vadakkan Veeragatha (1989), Amaram (1991), and Vidheyan (1994) highlighted his ability to effortlessly portray characters from different social, cultural, and historical backgrounds. His portrayal of a Chekavar warrior in Oru Vadakkan Veeragatha earned him his first National Film Award for Best Actor, cementing his status as a powerhouse performer. Known for his precision, Mammootty brings an air of gravitas to his roles, making his performances both memorable and impactful. His ability to portray intense emotions and complex characters, often with minimal dialogue, sets him apart as one of the finest actors in the industry.`,
    movies:[
      {
        name:"Kanalkkattu",
        path:"video/Malayalam/Actors/Mammootty/movies/Kanalkkattu.jpg",
      },
      {
        name:"Thaniyavartanam",
        path:"video/Malayalam/Actors/Mammootty/movies/Thaniyavartanam.jpg"
      },
      {
        name:"Utharam",
        path:"video/Malayalam/Actors/Mammootty/movies/Utharam.jpg"
      },
      {
        name:"Yavanika",
        path:"video/Malayalam/Actors/Mammootty/movies/Yavanika.jpg"
      },
    ]
  });

  currentCelebrity.set("Mohanlal",{
    name:"Mohanlal",
    path:"video/Malayalam/Actors/Mohanlal/Actorimg/Mohanlal.jpg",
    about:`Mohanlal Viswanathan, widely known as Mohanlal, born on May 21, 1960, in Elanthoor, Kerala, is one of the most revered and versatile actors in Indian cinema, particularly in the Malayalam film industry. With a career spanning over four decades, Mohanlal has appeared in more than 350 films and is celebrated for his ability to portray a wide range of characters with incredible ease, authenticity, and depth. Known as "The Complete Actor," he has the unique ability to seamlessly transition between intense drama, comedy, action, and emotional roles, making him one of the most beloved and respected figures in Indian cinema. His naturalistic acting style, combined with an innate ability to bring out the emotional essence of a character, has earned him legions of fans and numerous accolades, including five National Film Awards and multiple state awards.Mohanlal made his debut in 1980 with Manjil Virinja Pookkal, where he played a negative role, but it was his effortless charm and ability to evoke empathy even as an antagonist that caught the audience's attention. From there, he quickly rose to prominence with a series of successful films in the 1980s and 1990s, a period often considered the golden age of Malayalam cinema. Films like Rajavinte Makan (1986), T.P. Balagopalan M.A. (1986), Kireedam (1989), and Chithram (1988) showcased his versatility, as he transitioned from roles that demanded intense emotional performances to light-hearted comedic parts with equal finesse. His ability to slip into complex characters made him a favorite of both filmmakers and audiences, establishing him as one of the most bankable stars in the industry.`,
    movies:[
      {
        name:"Drishyam",
        path:"video/Malayalam/Actors/Mohanlal/movies/Drishyam.jpg",
      },
      {
        name:"Lucifer",
        path:"video/Malayalam/Actors/Mohanlal/movies/Lucifer.jpg"
      },
      {
        name:"Manichithrathazhu",
        path:"video/Malayalam/Actors/Mohanlal/movies/Manichithrathazhu.jpg"
      },
      {
        name:"Neru",
        path:"video/Malayalam/Actors/Mohanlal/movies/Neru.jpg"
      },
    ]
  });

  currentCelebrity.set("NivinPauly",{
    name:"Nivin Pauly",
    path:"video/Malayalam/Actors/NivinPauly/Actorimg/NivinPauly.jpg",
    about:`Nivin Pauly, born on October 11, 1984, in Aluva, Kerala, is a popular actor and producer in Malayalam cinema, known for his charismatic screen presence and ability to connect with audiences across age groups. Rising to stardom with his boy-next-door image and relatable performances, Nivin has become one of the most bankable stars in the Malayalam film industry. His journey to success is often seen as inspirational, with humble beginnings and an initial struggle before making a breakthrough. Nivin started his career in cinema after quitting his job as a software engineer, driven by a deep passion for acting. He made his debut with the 2010 film Malarvaadi Arts Club, directed by Vineeth Sreenivasan, which garnered him moderate recognition. However, it was his perseverance, and his continuous collaboration with Vineeth, that eventually catapulted him into the limelight.Nivin's major breakthrough came in 2012 with the romantic comedy Thattathin Marayathu, again directed by Vineeth Sreenivasan. The film was a massive success, establishing Nivin as a romantic hero in Malayalam cinema. His portrayal of Vinod, a Hindu boy in love with a Muslim girl, was praised for its innocence and sincerity, and the movie's success marked the beginning of Nivin's journey as a star. His ability to balance emotional depth with lightheartedness became his signature style, making him a favorite among young audiences. Following this, Nivin delivered a series of hit films, which showcased his versatility and his ability to excel in both romantic and comedic roles. His performance in Neram (2013), a bilingual film directed by Alphonse Puthren, further solidified his rising stardom.`,
    movies:[
      {
        name:"ActionHeroBiju",
        path:"video/Malayalam/Actors/NivinPauly/movies/ActionHeroBiju.jpg",
      },
      {
        name:"Neram",
        path:"video/Malayalam/Actors/NivinPauly/movies/Neram.jpg"
      },
      {
        name:"Premam",
        path:"video/Malayalam/Actors/NivinPauly/movies/Premam.jpg"
      },
      {
        name:"ThattathinMarayathu",
        path:"video/Malayalam/Actors/NivinPauly/movies/ThattathinMarayathu.jfif"
      },
    ]
  });

  currentCelebrity.set("SaiPallavi",{
    name:"Sai Pallavi",
    path:"video/Malayalam/Actors/SaiPallavi/Actorimg/SaiPallavi.jpg",
    about:`Sai Pallavi, born on May 9, 1992, in Kotagiri, Tamil Nadu, is a celebrated Indian actress and dancer known for her natural acting style, strong screen presence, and ability to bring authenticity to the characters she portrays. With a career spanning multiple South Indian film industries, including Malayalam, Tamil, and Telugu cinema, Sai Pallavi has garnered a massive fan base and critical acclaim for her nuanced performances. What sets her apart from many of her contemporaries is her refusal to conform to conventional beauty standards in the industry; she is known for embracing her natural look, often appearing without makeup on screen, a decision that has earned her widespread admiration and respect. Her authenticity, combined with her immense talent, has made her a role model for many young women and a unique figure in Indian cinema.Sai Pallavi's breakthrough came in 2015 with the Malayalam film Premam, directed by Alphonse Puthren, where she played the role of Malar, a college lecturer who becomes the love interest of the protagonist. Her portrayal of Malar, with her graceful charm and expressive acting, won the hearts of audiences across South India. Premam became a massive hit, and Sai Pallavi's performance was one of the key reasons for the film's success. She became an overnight sensation, and her character in the film remains iconic to this day. Her ability to convey emotions effortlessly, paired with her captivating screen presence, set her apart from other debutants and established her as a promising talent in the industry.`,
    movies:[
      {
        name:"Fidaa",
        path:"video/Malayalam/Actors/SaiPallavi/movies/Fidaa.jpg",
      },
      {
        name:"Gargi",
        path:"video/Malayalam/Actors/SaiPallavi/movies/Gargi.jpg"
      },
      {
        name:"LoveStory",
        path:"video/Malayalam/Actors/SaiPallavi/movies/LoveStory.jpg"
      },
      {
        name:"Premam",
        path:"video/Malayalam/Actors/SaiPallavi/movies/Premam.jpg"
      },
    ]
  });















  currentCelebrity.set("BasilJoseph",{
    name:"Basil Joseph",
    path:"video/Malayalam/Directors/BasilJoseph/Directorimg/BasilJoseph.jpg",
    about:`Basil Joseph, born on April 28, 1990, in Wayanad, Kerala, is a multifaceted talent in the Indian film industry, particularly in Malayalam cinema, known for his contributions as a director, actor, and screenwriter. Starting his journey with a passion for storytelling, Basil's rise to fame has been both swift and impactful, earning him a reputation as one of the most promising young filmmakers in the Malayalam film industry. His ability to blend humor, emotions, and socially relevant themes has made his work stand out, and his approach to filmmaking is seen as refreshing and innovative. Basil's keen eye for relatable characters and simple, yet meaningful narratives has resonated with audiences, making him a household name in Kerala and beyond.Basil Joseph’s initial steps in the film industry were as a short filmmaker, where he honed his skills in directing and storytelling. His early short films, including Oru Thundu Padam and Cineman, displayed his unique sense of humor and creativity, which caught the attention of many within the industry. His transition to feature films came in 2015 when he directed his debut film, Kunjiramayanam, a lighthearted comedy that revolves around a village and its quirky inhabitants. The film, which featured Vineeth Sreenivasan in the lead role, was a commercial success and established Basil as a director with a unique voice in the Malayalam film industry. His ability to weave humor into everyday life, while maintaining a grounded and authentic feel, became one of the defining aspects of his directorial style.`,
    movies:[
      {
        name:"Godha",
        path:"video/Malayalam/Directors/BasilJoseph/movies/Godha.jpg",
      },
      {
        name:"Kunjiramayanam",
        path:"video/Malayalam/Directors/BasilJoseph/movies/Kunjiramayanam.jpg"
      },
      {
        name:"MinnalMurali",
        path:"video/Malayalam/Directors/BasilJoseph/movies/MinnalMurali.jpg"
      },
      {
        name:"OruThunduPadam",
        path:"video/Malayalam/Directors/BasilJoseph/movies/OruThunduPadam.jpg"
      },
    ]
  });


  currentCelebrity.set("Blessy",{
    name:"Blessy",
    path:"video/Malayalam/Directors/Blessy/Directorimg/Blessy.jpg",
    about:`Blessy, born on September 3, 1964, in Thiruvalla, Kerala, is a highly regarded filmmaker and screenwriter in Malayalam cinema, known for his deeply emotional narratives and humanistic approach to storytelling. He is celebrated for crafting films that delve into complex human emotions, relationships, and the struggles of life, often blending raw realism with subtle artistic expression. Having started his career as an assistant to the legendary filmmaker Padmarajan, Blessy imbibed a deep understanding of storytelling and character-driven narratives, which later became the hallmark of his directorial ventures. His films often portray the beauty of human resilience in the face of adversity, and his unique storytelling style has earned him critical acclaim and a dedicated fanbase.Blessy made his directorial debut in 2004 with Kaazhcha, a poignant tale that dealt with the bond between a mute boy who survived the Gujarat earthquake and a film projector operator in Kerala. The film was lauded for its emotional depth, sensitive portrayal of human suffering, and brilliant performances. Kaazhcha not only resonated with the audience but also won several awards, including the Kerala State Film Award for Best Film. The film's success marked Blessy as a director with a unique voice, capable of tackling social issues through personal and emotional narratives.`,
    movies:[
      {
        name:"Kalimannu",
        path:"video/Malayalam/Directors/Blessy/movies/Kalimannu.jpg",
      },
      {
        name:"Palunku",
        path:"video/Malayalam/Directors/Blessy/movies/Palunku.jpg"
      },
      {
        name:"Pranayam",
        path:"video/Malayalam/Directors/Blessy/movies/Pranayam.jpg"
      },
      {
        name:"TheGoatLife",
        path:"video/Malayalam/Directors/Blessy/movies/TheGoatLife.jpg"
      },
    ]
  });

  currentCelebrity.set("Joshiy",{
    name:"Joshiy",
    path:"video/Malayalam/Directors/Joshiy/Directorimg/Joshiy.jpg",
    about:`Joshiy, born on July 19, 1952, in Varkala, Kerala, is one of the most prominent and veteran filmmakers in Malayalam cinema, with a career spanning over four decades. He is known for directing a wide range of films across various genres, including action, drama, family-oriented films, and thrillers. Renowned for his ability to adapt to changing trends in the industry while maintaining a distinct style, Joshiy has delivered numerous blockbuster films that have cemented his reputation as a versatile and influential director. Over the years, he has worked with some of the biggest stars in Malayalam cinema, including Mammootty, Mohanlal, Suresh Gopi, and others, playing a significant role in shaping their careers.Joshiy’s entry into the film industry came in the early 1970s, and he made his directorial debut with Tiger Salim (1978). However, it was in the 1980s that Joshiy rose to prominence as a director who could blend mass appeal with gripping storytelling. His films during this period, such as Moorkhan (1980), Aa Raathri (1983), and New Delhi (1987), showcased his flair for action-packed narratives mixed with social commentary. New Delhi, starring Mammootty, was a groundbreaking film in Malayalam cinema, based on the novel Al Raji by Irving Wallace, and it revolved around political corruption and media manipulation. The film was a huge commercial success and is still considered one of the finest political thrillers in Indian cinema. It not only elevated Joshiy's status as a top director but also played a crucial role in shaping Mammootty’s career.`,
    movies:[
      {
        name:"Antony",
        path:"video/Malayalam/Directors/Joshiy/movies/Antony.jpg",
      },
      {
        name:"Avatharam",
        path:"video/Malayalam/Directors/Joshiy/movies/Avatharam.jpg"
      },
      {
        name:"LailaaOLailaa",
        path:"video/Malayalam/Directors/Joshiy/movies/LailaaOLailaa.jpg"
      },
      {
        name:"PorinjuMariamJose",
        path:"video/Malayalam/Directors/Joshiy/movies/PorinjuMariamJose.jpg"
      },
    ]
  });

  currentCelebrity.set("Ranjith",{
    name:"Ranjith",
    path:"video/Malayalam/Directors/Ranjith/Directorimg/Ranjith.jpg",
    about:`Ranjith Balakrishnan, widely known as Ranjith, is a highly influential figure in Malayalam cinema, celebrated for his work as a director, screenwriter, producer, and actor. Born on September 5, 1964, in Balussery, Kerala, Ranjith's career has been marked by his ability to craft deeply meaningful narratives that blend realism with commercial appeal, often focusing on complex human relationships, social issues, and the evolving dynamics of Kerala's socio-political landscape. He began his journey in the industry as a screenwriter in the late 1980s and quickly established himself as a writer with a knack for creating compelling characters and rich, multi-layered stories. Over time, he transitioned into directing, where he further cemented his place as one of Malayalam cinema's most respected and innovative filmmakers.Ranjith's early work as a screenwriter includes iconic films such as Peruvannapurathe Visheshangal (1989) and Devasuram (1993), the latter being a major turning point in his career. Devasuram, starring Mohanlal, is one of Malayalam cinema’s most beloved films and is praised for its portrayal of the rivalry between two feudal lords. The film's protagonist, Mangalassery Neelakantan, became an iconic character, and Ranjith's screenplay received widespread acclaim for its depth, character development, and dialogues. This success established him as one of the top screenwriters of the 1990s, known for creating powerful and larger-than-life male characters often placed in morally ambiguous situations.`,
    movies:[
      {
        name:"AKAyyappanumKoshiyum",
        path:"video/Malayalam/Directors/Ranjith/movies/AKAyyappanumKoshiyum.jpg",
      },
      {
        name:"ARanjithCinema",
        path:"video/Malayalam/Directors/Ranjith/movies/ARanjithCinema.jpg"
      },
      {
        name:"Koode",
        path:"video/Malayalam/Directors/Ranjith/movies/Koode.jpg"
      },
      {
        name:"Kotthu",
        path:"video/Malayalam/Directors/Ranjith/movies/Kotthu.jpg"
      },
    ]
  });

  currentCelebrity.set("SantoshSivan",{
    name:"Santosh Sivan",
    path:"video/Malayalam/Directors/SantoshSivan/Directorimg/SantoshSivan.jpg",
    about:`Santosh Sivan, born on February 8, 1964, in Thiruvananthapuram, Kerala, is one of India’s most celebrated cinematographers, directors, and producers, with a career that has significantly influenced both Indian and international cinema. Known for his mastery of visual storytelling, Sivan has earned a global reputation for his work as a cinematographer, where his ability to capture the beauty of nature, human emotions, and complex narratives through the lens has set him apart. He is the first cinematographer in Asia-Pacific to be inducted as a member of the American Society of Cinematographers (ASC), which is a testament to his immense contribution to the craft. Over the years, Sivan has worked across a wide range of films, including mainstream Bollywood blockbusters, regional cinema, and critically acclaimed international projects, making him a versatile artist who moves fluidly between genres, cultures, and languages.Santosh Sivan comes from a family deeply rooted in the arts. His father was a renowned filmmaker and documentarian, while his mother was a teacher. Growing up in such an environment helped nurture his love for cinema from an early age. He attended the prestigious Film and Television Institute of India (FTII), Pune, where he specialized in cinematography, and soon after began his career in the Indian film industry. His early work as a cinematographer in Malayalam cinema, with films like Perumthachan (1991), immediately established him as a visionary talent. Perumthachan was acclaimed for its rich, textured visual language that brought out the rustic beauty of Kerala while complementing the film's intricate narrative about tradition, craftsmanship, and modernity.`,
    movies:[
      {
        name:"Barroz",
        path:"video/Malayalam/Directors/SantoshSivan/movies/Barroz.webp",
      },
      {
        name:"DoubleBarrel",
        path:"video/Malayalam/Directors/SantoshSivan/movies/DoubleBarrel.jpg"
      },
      {
        name:"SapthamashreeThaskaraha",
        path:"video/Malayalam/Directors/SantoshSivan/movies/SapthamashreeThaskaraha.jpg"
      },
      {
        name:"Urumi",
        path:"video/Malayalam/Directors/SantoshSivan/movies/Urumi.jpg"
      },
    ]
  });


















  currentCelebrity.set("Stephe",{
    name:"Stephen",
    path:"video/Malayalam/Directors/Stephen/Directorimg/Stephen.jpg",
    about:``,
    movies:[
      {
        name:"Carrie",
        path:"video/Malayalam/Directors/Stephen/movies/Carrie.jpg",
      },
      {
        name:"IndianaJones",
        path:"video/Malayalam/Directors/Stephen/movies/IndianaJones.jpg"
      },
      {
        name:"JurassicPark",
        path:"video/Malayalam/Directors/Stephen/movies/JurassicPark.jpg"
      },
      {
        name:"ShawshankRedemption",
        path:"video/Malayalam/Directors/Stephen/movies/ShawshankRedemption.jpg"
      },
    ]
  });
  


  

  

    setCelebrity(currentCelebrity.get(celeb));
  },[celeb]);
    
  const goToPage=(name)=>{
    navigate(`/Video/${name}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);


  return (
    <>
    <Header path='VideoHome' />
    <div className='movie-person-page'>
    <img className='background' src={require("../media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />
      <div className='movie-person-page-body'>
          <div className='total-movie-body'>
          <h1>{celebrity.name}</h1>
          <div className='movie-img-with-desc'>
              <DynamicImageDisplay path={celebrity.path} />
              <div className='desc-box'>
                <p>{celebrity.about.length>1300?celebrity.about.substring(0,1300)+".....":celebrity.about}</p>
              </div>
          </div>

          <div className='total-movie-box'>
                <DynamicImageBox list={[{photos:celebrity.movies}]} goToPage={goToPage} />
          </div>
        </div>
      </div>     
    </div>
    </>
    
  )
}

export default CelebrityMoviePage