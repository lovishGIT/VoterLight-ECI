import { useState } from "react";
import Warning from "../Components/Vote/warning";
import SecureVotingPortal from "../Components/Vote/secureVotingPortal";
import TermsConditions from "../Components/Vote/termsConditions";
import { Link } from "react-router-dom";

export default function Vote() {
    const [votingPhase, setVotingPhase]= useState(0); 
    if(votingPhase == 0) {
        return (<Warning setVotingPhase={setVotingPhase}/>);
    } else if(votingPhase == 1) {
        return (<TermsConditions setVotingPhase={setVotingPhase}/>);
    } else if(votingPhase == 2) {
        return (<SecureVotingPortal setVotingPhase={setVotingPhase}/>);
    } else {
        return (
            <>
                <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white space-y-6">
                    <h2 className="text-6xl font-black">Thank You for your patience.</h2>
                    <Link to='/' className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg text-2xl">Go to Home Page.</Link>
                </div>
            </>
        )
    }
}
