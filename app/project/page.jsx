"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowDown, BsGithub } from "react-icons/bs";
import {
    Tooltip, 
    TooltipTrigger, 
    TooltipContent, 
    TooltipProvider
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "Android",
        title: "TasteBuds",
        desc: "A food recommendation app that lets you view recipes based on dietary preferences, calorie limits, and available ingredients.",
        stack: [{ name: "Jetpack Compose" }, { name: "Firebase" }, { name: "Gemini Fine Tune" }],
        image: "/assets/work/TasteBuds.png",
        download: "https://github.com/s1lent18/RecipeOrganizer/releases/download/v1/TasteBuds.apk",
        github: "https://github.com/s1lent18/RecipeOrganizer",
    },
    {
        num: "02",
        category: "Full-Stack App",
        title: "ProbStats",
        desc: "Android App for Solving Probability and Statistics Questions",
        stack: [{ name: "Jetpack Compose" }, { name: "Flask" }, { name: "Firebase" }],
        image: "/assets/work/Prob.png",
        download: "https://github.com/s1lent18/ProbStats/releases/download/v1.0.0/ProbStats.apk",
        github: "https://github.com/s1lent18/ProbStats",
    },
    {
        num: "03",
        category: "Android",
        title: "Mezbaan",
        desc: "Mezbaan is an all-in-one platform that simplifies event planning by enabling users to book venues, manage decorations, and arrange catering services",
        stack: [{ name: "Jetpack Compose" }, { name: "NodeJS" }, { name: "PostgreSQL" }],
        image: "/assets/work/Mezbaan.png",
        download: "https://github.com/s1lent18/Mezbaan/releases/download/1.00/Mezbaan.apk",
        github: "https://github.com/s1lent18/Mezbaan",
    },
    {
        num: "04",
        category: "ML",
        title: "Fraud Detection",
        desc: "Fraud Detection in Financial Transactions Using Graph Analysis",
        stack: [{ name: "Python" }, { name: "Pandas" }, { name: "SK-Learn" }],
        image: "/assets/work/FraudDetection.png",
        download: "",
        github: "https://github.com/s1lent18/Fraud-Detection",
    },
    {
        num: "05",
        category: "Android",
        title: "Chatting-App",
        desc: "A Discord Like Chatting App with Channels for sharing Multi-Media, Messages, Voice and Video Calls",
        stack: [{ name: "Jetpack Compose" }, { name: "Firebase" } ],
        image: "/assets/work/Chatter.png",
        download: "",
        github: "https://github.com/s1lent18/ChattingApp",
    }
];

const Project = () => {
    const [project, setProject] = useState(projects[0]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>

                            <p className="text-white/60">{project.desc}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.download}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowDown className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Download Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange} onSwiper={setSwiperInstance}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns 
                                swiperInstance={swiperInstance}
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Project;