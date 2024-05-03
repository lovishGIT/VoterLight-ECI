import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

interface linkType { 
    text: string;
    link?: string;
    icons?: React.ReactElement;
}

const footerLinks: linkType[] = [
    {
        text: "Vote Now",
        link: '/vote'
    },
    {
        text: "Information",
    },
    {
        text: "Help Desk",
    },
];
const SocialLinks: linkType[] = [
    {
        text: "linkedIn",
        icons: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/lovish-bansal-730553224/',
    },
    {
        text: "Github",
        icons: <FaGithub />,
        link: 'https://github.com/lovishGIT',
    },
    {
        text: "lovishbansal441@gmail.com",
        icons: <MdEmail />,
        link: 'mailto:lovishbansal441@gmail.com',
    },
];

export default function Footer() {
    return (
        <>
            <div className="bg-black text-white w-full px-[8%] py-10 flex justify-between items-center">
                <div className="w-[30%] py-2 px-4 flex flex-col space-y-4 justify-center items-center border-[1px] border-solid border-white rounded-xl">
                    <div className="flex">
                        <img
                            className="w-[30%]"
                            src="https://www.eci.gov.in/newimg/eci-logo-white.svg"
                            alt="ECI Logo"
                            />
                        <p className="text-sm">
                            The Election Commission of India is an autonomous
                            constitutional authority responsible for administering
                            election processes in India for Lok Sabha, Rajya Sabha, State Legislative Assemblies
                            in India, and the offices of the President and Vice
                            President in the country.
                        </p>
                    </div>
                    <div className="flex gap-2 items-center opacity-50">
                        <FaLocationDot className=""/>
                        Nirvachan Sadan, Ashoka Road, New Delhi 110001
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-3xl mb-2">Sections</h3>
                    {footerLinks.map((footLink:linkType, index:number) => {
                        return <Link to={footLink?.link || ''} className="text-lg transition-all hover:scale-105" key={index}>{footLink.text}</Link>;
                    })}
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-3xl mb-2">Socials</h3>
                    {SocialLinks.map((link:linkType, index:number) => {
                        return <a href={link?.link || ''} target="_blank" className="text-lg flex items-center gap-2 transition-all hover:scale-105" key={index}>{link?.icons}{link.text}</a>;
                    })}
                </div>
                <div></div>
            </div>
            <div className="text-xs text-center bg-black text-white text-opacity-75">Copyright©2024 VoterLight PVT.LTD</div>
        </>
    );
}
