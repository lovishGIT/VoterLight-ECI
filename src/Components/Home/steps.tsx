import { Link } from "react-router-dom";
import IndianMapBg from "../../assets/IndianMapBg.png";

interface stepTypes {
    head: string;
    link?: string;
}

const stepsBeforeVoting: stepTypes[] = [
    {
        head: "Register Yourself to Election Commission of India, by making a Voter Id for yourself.",
        link: "",
    },
    {
        head: "Check Voter Id Verification Status",
        link: "",
    },
    {
        head: "Check for Voting Parties and Choose a worthy candidate and party.",
        link: "",
    },
    {
        head: "Vote Here or to the nearest Voting Booth.",
        link: "",
    },
    {
        head: "Check for the Results",
        link: "",
    },
];

export default function Steps() {
    return (
        <>
            <div className="px-[5%] py-[10vh] flex justify-center gap-[5%]">
                <div className="w-[30%] bg-[url(https://www.eci.gov.in/newimg/voter-pic-01.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl"></div>
                <div>
                    <ol className="relative h-full py-[5%] flex flex-col space-y-4">
                        {stepsBeforeVoting.map(
                            (step: stepTypes, index: number) => {
                                return (
                                    <Link to={step?.link || ''} key={index}>
                                        <li className="w-full h-[80px] flex items-center text-xl hover:scale-105">
                                            <div className="w-[65px] h-[65px] bg-[#052963] text-white flex justify-center items-center rounded-full z-1">
                                                {index + 1}
                                            </div>
                                            <div className="w-full bg-[#052963] text-white relative -left-2 px-2 py-2 z-0">
                                                {step.head}
                                            </div>
                                        </li>
                                    </Link>
                                );
                            }
                        )}
                        <div className="absolute right-[20%] scale-125 z-[-1]">
                            <img src={IndianMapBg} alt="" />
                        </div>
                    </ol>
                </div>
            </div>
        </>
    );
}
