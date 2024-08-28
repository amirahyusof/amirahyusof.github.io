import React from "react"
import icon from './image/project.png';
import iconSection from './image/project-section.jpg';
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

function Project(){
    return(
        <div className="h-full-screen text-[#65451F]" id="projects">
            <img src={iconSection} className="mx-auto justify-center rounded-xl mt-[-150px] w-full md:w-[900px] h-[300px]" alt="" />
            <img src={icon} className="w-[150px] border-[#65451F] rounded-full mx-auto mt-[-80px]" alt="" />
            <div className="sm:w-[550px] md:w-full lg:w-full mb-8 mx-auto ml-4 sm:mr-20 md:ml-10 justify-center">
                <h1 className="text-2xl mb-4 font-bold">Personal Project</h1>
                <div className="px-4 sm:px-0 grid md:grid-cols-3 gap-10 md:gap-8 list-none text-white">
                    
                    <a className=" w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2 
                                  cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                  href="https://amirahyusof.github.io/coffee-website/" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/coffee-website" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank" rel="noreferrer"><FiGithub size={25} /></a>
                                <a href="https://amirahyusof.github.io/coffee-website/" 
                                   target="_blank" rel="noreferrer" className="hover:text-[#65451F]"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">Coffee Static Page</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-bold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">CSS</li>
                                <li className="mr-2">JavaScript</li>
                            </div>
                        </div>
                    </a>
                    
                    <a className="w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2
                                   cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                   href="https://swiftfixpro.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/lp-phone_service" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank" rel="noreferrer"><FiGithub size={25} /></a>
                                <a href="https://swiftfixpro.netlify.app/" 
                                   className="hover:text-[#65451F]" target="_blank" rel="noreferrer"><FaLink size={25} /></a>
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
                                   href="https://amirahyusof.github.io/FireUpYourself/" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/FireUpYourself" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank" rel="noreferrer"><FiGithub size={25} /></a>
                                <a href="https://amirahyusof.github.io/FireUpYourself/" 
                                   className="hover:text-[#65451F]" target="_blank" rel="noreferrer"><FaLink size={25} /></a>
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
                                  href="https://amirahyusof.github.io/tracking_job-application/" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://github.com/amirahyusof/tracking_job-application" 
                                   className="mr-4 hover:text-[#65451F]" target="_blank" rel="noreferrer"><FiGithub size={25} /></a>
                                <a href="https://amirahyusof.github.io/tracking_job-application/" 
                                   className="hover:text-[#65451F]" target="_blank" rel="noreferrer"><FaLink size={25} /></a>
                            </div>
                            <h2 className="text-lg">Tracking Job Application</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">HTML</li>
                                <li className="mr-2">Tailwind CSS</li>
                                <li className="mr-2">JavaScript</li>
                                <li className="mr-2">React</li>
                            </div>
                        </div>
                    </a>

                    <a className="w-[300px] sm:w-[500px] h-[180px] md:w-[400px] md:h-[220px] p-2 mr-2
                                  cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                  href="https://cleocafecatering.vercel.app/" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://cleocafecatering.vercel.app/" 
                                   className="hover:text-[#65451F]" target="_blank" rel="noreferrer"><FaLink size={25} />
                                </a>
                            </div>
                            <h2 className="sm:text-lg">Cleo Cafe & Catering's Landing Page</h2>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">Nextjs</li>
                                <li className="mr-2">Tailwind CSS</li>
                                <li className="mr-2">JavaScript</li>
                                <li className="mr-2">Vercel</li>
                            </div>
                        </div>
                    </a>

                    <a className="w-[300px] sm:w-[500px] h-[190px] md:w-[400px] md:h-[220px] p-2 mr-2
                                  cursor-pointer border-[#765827] rounded-lg bg-gradient-to-r from-[#C8AE7D] to-[#765827] hover:bg-gradient-to-l"
                                  href="https://drive.google.com/drive/folders/1x38453t30b6oAx3DwIfVYMr86Qdu46Vs?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <div className="flex justify-end my-4">
                                <a href="https://drive.google.com/drive/folders/1x38453t30b6oAx3DwIfVYMr86Qdu46Vs?usp=sharing" 
                                   className="hover:text-[#65451F]" target="_blank" rel="noreferrer"><FaLink size={25} />
                                </a>
                            </div>
                            <h2 className="sm:text-lg">Future of Work - Mereka Program</h2>
                            <p>List of complete work or task during Phase 2 </p>
                            <div className="text-center justify-center flex mt-6 text-[#65451F] font-semibold">
                                <li className="mr-2">Canva</li>
                                <li className="mr-2">Figma</li>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Project;