import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { SiGmail, SiLeetcode } from "react-icons/si";


const socials = [
    { icon: <FaGithub />, link: "https://github.com/s1lent18" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ali-jafar" },
    { icon: <FaTwitter />, link: "https://x.com/s1lent_12" },
    { icon: <SiGmail />, link: "mailto:alijafar.rajani@gmail.com" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/S1lent18/"}
];

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.link} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
};

export default Social;