"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Props {
    children: JSX.Element;
}

const ScrollAnimation = ({ children }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <>
            <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            >
                {children}
            </motion.div>
        </>
    )
}
export default ScrollAnimation;

// import React, { useRef, useEffect } from "react";

// interface Props {
//     children: JSX.Element;
// }

// export default function ScrollAnimation({ children }: Props) {
//     const ref = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const element = ref.current;
//         if (element) {
//             const handleScroll = () => {
//                 const scrollTop = window.pageYOffset + window.innerHeight;
//                 const elementTop = element.offsetTop + element.offsetHeight / 2;
//                 if (scrollTop > elementTop) {
//                     element.classList.add("animate");
//                 } else {
//                     element.classList.remove("animate");
//                 }
//             };
//             window.addEventListener("scroll", handleScroll);
//             return () => window.removeEventListener("scroll", handleScroll);
//         }
//     }, [ref]);

//     return <div ref={ref}>{children}</div>;
// }