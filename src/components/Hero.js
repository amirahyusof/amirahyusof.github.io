import React from 'react';

function Hero(){
    return(
        <div className="w-[600px] h-screen mx-auto justify-center text-[#65451F]">
            <img></img>  
            <img></img>
            <div className='my-16'>
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