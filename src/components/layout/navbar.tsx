import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar bg-black/30 fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-lg bg-opacity-60 ">
            <div className="flex-1 m-4">
                <Image src="/img/bitmex.png" alt="Bitmex" width={160} height={100} />
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar