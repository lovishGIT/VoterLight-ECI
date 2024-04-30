import { FaLocationDot } from "react-icons/fa6";

const footerLinks = [
    {
        text: "Vote Now",
    },
    {
        text: "Information",
    },
    {
        text: "Help Desk",
    },
];
const SocialLinks = [
    {
        text: "lovish",
    },
    {
        text: "lovish",
    },
    {
        text: "lovish",
    },
];

export default function Footer() {
    return (
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
                {footerLinks.map((footLink) => {
                    return <p className="text-lg">{footLink.text}</p>;
                })}
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold text-3xl mb-2">Socials</h3>
                {SocialLinks.map((footLink) => {
                    return <p className="text-lg">{footLink.text}</p>;
                })}
            </div>
            <div>

            </div>
        </div>
    );
}
