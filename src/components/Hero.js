import React from 'react';
import landscape from './image/hero-section.jpg';
import avatar from './image/image-hero.jpeg';

function Hero(){
    return(
        <div className="h-full-screen text-[#65451F]">
            <img src={landscape} className="mx-auto justify-center mt-[-100px] w-full md:w-[900px] h-[250px]" /> 
            <img src={avatar} className="w-[150px] rounded-full mx-auto mt-[-80px]" />
            <div className="sm:w-[550px] md:w-[850px] my-10 mx-auto justify-center">
                <h1 className="text-4xl font-bold">Hi there, I'm Amirah! </h1>
                <p className='mt-4 text-xl'>I'm a self-taught front-end developer who enthusiast turned aspiring web developer.
                I'm love building user-friendly websites and trying to do web apps. 
                With nearly two years dedicated learning and project-building myself, I'm on a mission to bring ideas to life through captivating digital experiences.
                Most recently, I've been building web apps with React and serverless providers like Firebase and Netlify.</p>
                <br></br>
                <p className='text-xl'>Currently, I'm interested in learning more into Php and MySQL also documentation. 
                 Reach me out and let's connected!</p>
                <button className='mt-4 mr-6 text-xl font-semibold underline hover:underline-offset-4'>Amirah's Resume</button>
                <button className='mt-4 mr-6 text-xl font-semibold underline hover:underline-offset-4'>Let's connected</button>
            </div>
        </div>
    )
}

export default Hero;