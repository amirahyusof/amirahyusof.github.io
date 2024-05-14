import React from "react"
import icon from './image/project.png';
import iconSection from './image/project-section.jpg';
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

function Project(){
    return(
        <div className="h-full-screen text-[#65451F]" id="projects">
            <img src={iconSection} className="mx-auto justify-center rounded-xl mt-[-150px] w-full md:w-[900px] h-[300px]" />
            <img src={icon} className="w-[150px] border-[#65451F] rounded-full mx-auto mt-[-80px]" />
            <div className="px-5 sm:w-[550px] md:w-[600px] lg:w-[900px] mb-8 mx-auto justify-center">
                <h1 className="text-2xl mb-4 font-bold">Personal Project</h1>
                <div className="px-4 sm:px-0 grid md:grid-cols-2 gap-10 md:gap-8 list-none text-white">
                    
                    <a className=" w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2 
                                  cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                  href="https://amirahyusof.github.io/coffee-website/" target="_blank">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/coffee-website" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank"><FiGithub size={25} /></a>
                                <a href="https://amirahyusof.github.io/coffee-website/" 
                                   target="_blank" className="hover:text-[#65451F]"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">EspressoVista</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-bold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">CSS</li>
                                <li className="mr-2">JavaScript</li>
                            </div>
                        </div>
                    </a>
                    
                    <a className="w-[300px]  sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2
                                   cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                   href="https://swiftfixpro.netlify.app/" target="_blank">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/lp-phone_service" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank"><FiGithub size={25} /></a>
                                <a href="https://swiftfixpro.netlify.app/" 
                                   className="hover:text-[#65451F]" target="_blank"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">Service Phone Landing Page</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">CSS</li>
                                <li className="mr-2">JavaScript</li>
                                <li className="mr-2">Netlify</li>
                            </div>
                        </div>
                    </a>
                    
                    <a className="w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2
                                   cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                   href="" target="_blank">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/FireUpYourself" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank"><FiGithub size={25} /></a>
                                <a href="" 
                                   className="hover:text-[#65451F]" target="_blank"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">Motivation App</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">CSS</li>
                                <li className="mr-2">JavaScript</li>
                                <li className="mr-2">React</li>
                            </div>
                        </div>
                    </a>
                    
                    <a className="w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2
                                  cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                  href="" target="_blank">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/tracking_job-application" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank"><FiGithub size={25} /></a>
                                <a href="" 
                                   className="hover:text-[#65451F]" target="_blank"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">Tracking Job Application</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">Tailwind CSS</li>
                                <li className="mr-2">JavaScript</li>
                                <li className="mr-2">React</li>
                                <li className="mr-2">Netlify</li>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Project;