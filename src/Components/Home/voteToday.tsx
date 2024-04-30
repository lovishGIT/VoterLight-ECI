import { Link } from "react-router-dom";

export default function VoteToday() {
    return (
        <>
            <section id="VoteNow" className="h-[70vh] bg-[#052963] flex gap-[5%] items-center justify-center">
                <div className="max-w-[400px] max-h-[400px]">
                    <img src="https://www.eci.gov.in/newimg/voter-service-banner-02.jpg" />
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-xl text-white">
                        Be the part of Decision
                    </p>
                    <div className="bg-gradient-to-r from-[#e77300] via-[#dedede] to-[#329203] bg-clip-text text-transparent">
                        <h1 className="text-8xl">Vote Today</h1>
                    </div>
                    <div className="w-full flex gap-[5%] justify-center mt-8 text-xl">
                        <Link to='/vote' style={{boxShadow: '2px 2px 10px 0px #000000'}} className="py-2 px-4 bg-[#e77300] text-white rounded-md transition-all hover:scale-105 animate-pulse hover:animate-none">
                            Vote Now
                        </Link>
                        <button className="py-2 px-4 bg-[#329203] text-white rounded-md transition-all hover:scale-105">
                            Read More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}