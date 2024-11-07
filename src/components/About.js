import React from "react";
import aboutSection from './image/about-section.jpg';
import aboutImage from './image/character-image-about.png';

function About(){
    return(
        <div className="h-full-screen text-[#65451F]" id="about">
            <img src={aboutSection} className="mx-auto justify-center rounded-xl mt-[-150px] w-full md:w-[900px] h-[300px]" alt=""/> 
            <img src={aboutImage} className="w-[150px] rounded-full mx-auto mt-[-80px]"  alt=""/>
            <div className="px-4 md:w-[550px] lg:w-[850px] mb-8 mx-auto justify-center text-lg">
                <h1 className="text-2xl font-bold">About Me</h1>
                <p className="my-4 text-justify">As a devoted mom to two children and a passionate front-end developer, 
                I've always valued learning and gaining new experiences. My interest in programming began during my degree days, 
                and since then, I've been on a journey of self-learning to become a front-end developer. After taking a break from work for almost two years, 
                I'm excited to return to the workforce with a new career goal. My skills are in HTML, CSS, and JavaScript, which I've honed through hard work and dedication. 
                </p>
                <p className="my-4 text-justify">I'm currently working on personal projects to expand my knowledge and develop new skills. Recently, I've been focusing on learning the React framework, which has deepened
                 my understanding and equipped me to create dynamic, interactive web apps. Looking ahead, I aim to learn PHP, Laravel, and MySQL to broaden my expertise. 
                 I'm eager to find opportunities where I can apply my front-end programming skills and passion to make a meaningful impact.
                </p>

            </div>
            <div className="px-4 md:w-[550px] lg:w-[850px] mx-auto justify-center mb-8">
                <h1 className="text-2xl mb-4 font-bold">Skill</h1>
                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 list-none text-white">
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">HTML</li>
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">CSS</li>
                        <li className="w-[100px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">JavaScript</li>
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">ReactJs</li>
                        <li className="w-[120px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">Tailwind CSS</li>
                        <li className="w-[100px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">Bootstrap</li>
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">Figma</li>
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">NextJs</li>
                        <li className="w-[60px] p-2 mr-2 border-[#765827] rounded-lg bg-[#65451F] text-center">Canva</li>
                </div>
            </div>
            
        </div>
    )
}

export default About;
