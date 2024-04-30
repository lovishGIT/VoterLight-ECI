import { useNavigate } from "react-router-dom";
import IndiaStateMap from "../assets/IndiaStateMap.png";
import { LoginCompWithPhoneNumber } from "../Components/Login/loginSignUpComps";

interface PhoneNumberDetails {
    aadharNumber: string;
    contactNumber: string, 
    password: string
}

export default function Login() {
    const navigate= useNavigate();
    const handleSubmit = (details: PhoneNumberDetails) => {
        console.log(details);
        navigate('/');
    };

    return (
        <>
            <section className="h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
                <div className="w-[60%] flex justify-between items-center px-10">
                    <div className="w-[10%] flex">
                        <img className="w-[75px]" src="https://www.eci.gov.in/newimg/eci-logo-white.svg" alt="Election Commission of India" />
                        <div className="flex flex-col justify-center items-start whitespace-nowrap">
                            <span>भारत निर्वाचन आयोग</span>
                            <span className="font-semibold">Election Commission of India</span>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        You can Login to make an account on Voter Light to get update with ECI updates.
                    </div>
                </div>
                <div className="flex items-center justify-between w-[60%] shadow-xl rounded-xl p-10">
                    <div className="w-[40%]">
                        <img src={IndiaStateMap} alt="" />
                    </div>
                    <div className="max-w-sm w-[50%] flex flex-col space-y-6">
                        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
                        <LoginCompWithPhoneNumber handleSubmit={handleSubmit}/>
                    </div>
                </div>
            </section>
        </>
    );
}
