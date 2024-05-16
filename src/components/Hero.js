import React from 'react';
import landscape from './image/hero-section.jpg';
import avatar from './image/image-hero.jpeg';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <div className="h-full-screen text-[#65451F]">
            <img src={landscape} className="mx-auto justify-center rounded-xl mt-[-150px] w-full md:w-[900px] h-[300px]" alt='' /> 
            <img src={avatar} className="w-[150px] rounded-full mx-auto mt-[-80px]" alt='' />
            <div className="px-4 sm:w-[550px] md:w-[850px] my-10 mx-auto justify-center">
                <h1 className="text-4xl font-bold">Hi there, I'm Amirah! </h1>
                <p className='mt-4 text-xl'>I'm a self-taught front-end developer who enthusiast turned aspiring web developer.
                I'm love building user-friendly websites and trying to do web apps. 
                With nearly two years dedicated learning and project-building myself, I'm on a mission to bring ideas to life through captivating digital experiences.
                Most recently, I've been building static website with React and serverless provider like Netlify.</p>
                <br></br>
                <p className='text-xl'>Currently, I'm interested in learning more into Firebase, PHP and MySQL, documentation and also web app. 
                Feel free to reach out, I'd love to connect!</p>
                <button className='mt-4 mr-6 text-lg sm:text-xl font-semibold underline hover:underline-offset-4'>
                    <a href="https://drive.google.com/file/d/1e6kUHCJb6nSHRetzbMdLPLmOqgJ7-d3R/view?usp=sharing" class="button">
                    Amirah's Resume
                    </a>
                </button>
                <Link to="/contact" className='mt-4 mr-6 text-lg sm:text-xl font-semibold underline hover:underline-offset-4'>Connect with Me!</Link>
            </div>
        </div>
    )
}

export default Hero;