interface votingProps {
    setVotingPhase: (phase: number) => void;
}

export default function Warning({ setVotingPhase }: votingProps) {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="w-[50%] p-[2%] shadow-lg text-lg border-[1px] border-solid border-black rounded-lg flex flex-col space-y-6">
                    <div className="text-red-400 animate-pulse hover:animate-none">
                        You are about to enter a secure voting portal to
                        continue through smooth voting process. Be careful with
                        whom you vote because the action can't be undone. Donot
                        refresh the page or navigate to different page. This may
                        result in temperory termination/ blockage of your Voter
                        Id. If you wish to vote later. You can leave the page
                        now Or restart the application again.
                    </div>
                    <div>
                        Voting is every Indian's right without any
                        discrimination of race, sex, education, etc. Every
                        Citizen must know that for smooth elections for this
                        year, ECI enforces some rules and regulations which must
                        be followed by each citizen who appears for voting
                        process. Click below to read the terms and conditions.
                    </div>
                    <div>
                        <button
                            className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-60"
                            onClick={() => setVotingPhase(1)}
                        >
                            Vote Now!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
