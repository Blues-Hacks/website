"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

const SplashScreen = ({finishLoading}) => {
    const [isMounted, setMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader.add({
            targets: ['#logo path'],
            strokeDashoffset: [anime.setDashoffset, 0], 
            opacity: [0, 1], // Fade in the paths
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true,
        });
        loader.add({
            targets: ['#logo path'],
            strokeDashoffset: [anime.setDashoffset, 0], 
            opacity: [0, 1], // Fade in the paths
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true,
        });
        loader.add({
            targets: ['#logo path'],
            strokeDashoffset: [anime.setDashoffset, 0], 
            opacity: [0, 1], // Fade in the paths
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true,
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 10)
        animate();
        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="splash-screen">
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="15vw" height="15vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                </svg>
            </div>
        </div>
    );
};

export default SplashScreen;
