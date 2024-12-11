import React from "react";

export default function Header(){
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <h1 onClick={handleReload} className='hover:cursor-pointer text-3xl md:text-5xl m-12 font-normal'>Image To ASCII</h1>
    );
}