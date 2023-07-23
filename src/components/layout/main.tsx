import React from "react";
import Image from "next/image";
import Navbar from "./navbar";



interface IProps {
    children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <div>
            <Navbar />
            <div className="mt-32">
                {children}
            </div>
        </div>
    );


};

export default Layout;
