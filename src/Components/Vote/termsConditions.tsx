import { useState } from "react";

interface votingProps {
    setVotingPhase: (phase: number) => void;
}

const termsToBeFollowed: string[] = [
    `Verify your details and fill everything correctly.`,
    `Understand the ballot and understand the ballot paper correctly.`,
    `Cast your vote correctly. Since voting is precious for our country's future.`,
    `Be Patient with the system and Wait for your appilcation to be processed correctly.`,
];

export default function TermsConditions({ setVotingPhase }: votingProps) {
    const [agree, setAgree]= useState(false);
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="w-[50%] p-[2%] shadow-lg text-lg border-[1px] border-solid border-black rounded-lg flex flex-col space-y-6">
                    <div>
                        Before Voting Candidate must ensure the following
                        process.
                    </div>
                    <ol className="px-[5%] list-disc">
                        {termsToBeFollowed.map((term) => {
                            return <li>{term}</li>;
                        })}
                    </ol>
                    <div className="text-red-500 animate-pulse hover:animate-none">
                        Note: This Action is Permanent. No Queries will be
                        entertainned by ECI afterwards. Be Patient with the
                        platform.
                    </div>
                    <form className="flex flex-col" action="">
                        <div className="flex gap-2">
                            <input type="checkbox" name="agree" checked={agree} onChange={()=> setAgree(!agree)} required/>
                            <p className="font-bold flex">
                                I agree to this terms and conditions.
                                <div className="text-red-500">*</div>
                            </p>
                        </div>
                        <p className="text-xs text-red-500 mb-6">You have to agree terms and conditions.</p>
                        <div className="flex gap-2 items-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-60"
                                onClick={() => setVotingPhase(2)}
                                disabled={!agree}
                            >
                                Vote Now!
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
