import React from "react";
import Navbar from "../Components/Global/Navbar";
import Footer from "../Components/Global/footer";

interface layoutProps {
    children: React.ReactElement;
}

export default function Layout({ children }: layoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
