"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Description } from "@radix-ui/react-dialog";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiAndroid,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiVisualstudio,
} from "react-icons/di";
import {
    SiGithub,
    SiC,
    SiUbuntu,
    SiAndroidstudio,
    SiFirebase,
    SiPostgresql,
    SiKotlin,
    SiFlask,
    SiPostman
} from "react-icons/si";

const about = {
    title: "About Me",
    description: "",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Ali Jafar"
        },
        {
            fieldName: "Email",
            fieldValue: "alijafar.rajani@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Urdu"
        }
    ]
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "",
    item: [
        {
            institution: "Fast Nuces, Karachi",
            degree: "Bachelor in Computer Science",
            duration: "2022 - 2026"
        },
        {
            institution: "Bahria College, Karsaz",
            degree: "Intermediate in Pre-Engineering",
            duration: "2020 - 2022"
        },
        {
            institution: "Habib Public School, Karachi",
            degree: "O Levels",
            duration: "2009 - 2020"
        }
    ]
}

const languages = {
    title: "My Lanuages",
    description: "",
    item: [
        {
            icon: <SiC />,
            skill: "C"
        },
        {
            icon: <CgCPlusPlus />,
            skill: "C++"
        },
        {
            icon: <DiPython />,
            skill: "Python"
        },
        {
            icon: <DiJava />,
            skill: "Java"
        },
        {
            icon: <SiKotlin />,
            skill: "Kotlin"
        },
    ]
}

const techstack = {
    title: "My Tech Stack",
    description: "",
    item: [
        {
            icon: <DiAndroid />,
            skill: "Android"
        },
        {
            icon: <DiMongodb />,
            skill: "MongoDB"
        },
        {
            icon: <SiPostgresql />,
            skill: "PostgreSQL"
        },
        {
            icon: <SiFlask />,
            skill: "Flask"
        },
    ]
}

const tools = {
    title: "My Tools",
    description: "",
    item: [
        {
            icon: <DiGit />,
            skill: "Git"
        },
        {
            icon: <SiUbuntu />,
            skill: "Ubuntu"
        },
        {
            icon: <SiAndroidstudio />,
            skill: "Android Studio"
        },
        {
            icon: <SiFirebase />,
            skill: "Firebase"
        },
        {
            icon: <SiGithub />,
            skill: "Github"
        },
        {
            icon: <DiVisualstudio />,
            skill: "VsCode"
        },
        {
            icon: <SiPostman />,
            skill: "Postman"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                    <TabsTrigger value="techstack">TechStack</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid gric-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white">{item.fieldName}</span>
                                                <span className="text-white">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.item.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="languages" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{languages.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{languages.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {languages.item.map((lang, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{lang.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{lang.skill}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="techstack" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{techstack.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{techstack.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {techstack.item.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.skill}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="tools" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{tools.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{tools.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {tools.item.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.skill}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;