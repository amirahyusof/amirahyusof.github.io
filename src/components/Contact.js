import React from "react";
import contacIcon from './image/contact.png';
import contactSection from './image/contact-section.jpg';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Contact(){
    return(
        <div className="h-full-screen text-[#65451F]" id="contact">
            <img src={contactSection} className="mx-auto justify-center rounded-xl mt-[-150px] w-full md:w-[900px] h-[300px]" alt="" />
            <img src={contacIcon} className="w-[150px] rounded-full mx-auto mt-[-80px]" alt="" />
            <div className="px-4 sm:w-[550px] md:w-[850px] mb-[178px] mx-auto justify-center">
                <h1 className="text-2xl mb-2 font-bold">Contact</h1>
                <p className="text-lg">If you'd like to get in touch for opportunities or simply to chat, 
                don't hesitate to reach out to me via <a href="https://www.linkedin.com/in/amirahezzamie/">LinkedIn.</a>
                </p>
                <div className="my-8 flex">
                    <div className="mr-6 hover:text-[#765827]">
                    <a href="https://github.com/amirahyusof">
                        <FaSquareGithub size={40} />
                    </a>
                    </div>
                    
                    <a href="https://www.linkedin.com/in/amirahezzamie/" className=" hover:text-[#765827]">
                        <FaLinkedin size={40} />
                    </a>
                </div>
            </div>

           
           
        </div>
    )
}

export default Contact;