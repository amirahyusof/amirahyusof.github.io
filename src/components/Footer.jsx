import React from 'react'

function Footer(){
    return(
        <div className="h-14 justify-center text-center rounded bg-black/50 border-t border-white/5 z-40 backdrop-filter backdrop-blur-md" id="contact">
            <footer className="bottom-0 w-full py-4 px-6">
                <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Amirah Yusof. Crafted with passion and purpose.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
