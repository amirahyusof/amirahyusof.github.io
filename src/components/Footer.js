import React from 'react'

function Footer(){
    return(
        <div className="h-14 justify-center text-center rounded text-[#65451F] bg-[#765827] bg-opacity-25 backdrop-filter backdrop-blur-md" id="contact">
            <div className="pt-4 text-md grid grid-cols-2 gap-8">
              <p class="copyright">&copy; {new Date().getFullYear()} Amirah Yusof</p>
              <div class="flex gap-6 sm:ml-[150px] md:ml-[250px]">
                <a href="https://www.linkedin.com/in/amirahezzamie/" className="hover:underline">
                    LinkedIn
                </a>
                <a href="https://github.com/amirahyusof" className="hover:underline">
                    Github
                </a>
                
            </div>
            </div>

           
        </div>
    )
}

export default Footer
