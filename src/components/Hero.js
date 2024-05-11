import React from 'react';
import landscape from './image/hero-section.jpg';
import avatar from './image/image-hero.jpeg';

function Hero(){
    return(
        <div className=" w-full h-full-screen text-[#65451F]">
            <img src={landscape} className="mx-auto justify-center mt-[-100px] w-full md:w-[900px] h-[250px]" /> 
            <img src={avatar} className="w-[150px] rounded-full mx-auto mt-[-80px]" />
            <div className='my-10 w-[600px] md:w-[800px] mx-auto justify-center'>
                <h1 className="text-4xl font-bold">Hi there, I'm Amirah! </h1>
                <p className='mt-4 text-xl'>I'm a self-taught front-end developer who enthusiast turned aspiring web developer.
                I'm love building user-friendly websites and trying to do web apps. With nearly two years old dedicated learning and project-building myself, I'm on a mission to bring ideas to life through captivating digital experiences.
                Most recently, I've been building web apps with React and serverless providers like Firebase and Netlify.</p>
                <br></br>
                <p className='text-xl'>Currently, I'm interested in learning more into Php and MySQL also documentation. 
                 Reach me out and let's connected!</p>
                <button className='mt-4 mr-6 text-xl font-semibold underline underline-offset-2'>Amirah's Resume</button>
                <button className='mt-4 mr-6 text-xl font-semibold underline underline-offset-2'>Let's connected</button>
            </div>
        </div>
    )
}

export default Hero;