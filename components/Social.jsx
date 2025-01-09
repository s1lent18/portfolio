import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, link: "" },
    { icon: <FaLinkedinIn />, link: "" },
    { icon: <FaTwitter />, link: "" }
];

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.link} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
};

export default Social;