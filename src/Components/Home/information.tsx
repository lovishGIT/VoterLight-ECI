import IndiaStateMap from "../../assets/IndiaStateMap.png";

export default function Information() {
    return (
        <section id="Information" className="w-full p-[5%] flex justify-between">
            <div>
                <img className="h-[90vh]" src={IndiaStateMap} alt="" />
            </div>
            <div className="bg-[#052963] w-[50%] py-2 px-6 flex flex-col space-y-10 justify-center">
                <div className="w-full flex flex-col space-y-4 font-semibold">
                    <h2 className="text-3xl text-white text-center font-bold mb-2">Curent Elections</h2>
                    <a className="w-full py-2 rounded-xl bg-[#d8c3e1] text-pink-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>General Election To Lok Sabha 2024</a>
                    <div className="w-full flex gap-2">
                        <a className="w-full py-2 rounded-xl bg-[#d8d3cf] text-yellow-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/election-details/2024/S01/3'>Andhra Pardesh</a>
                        <a className="w-full py-2 rounded-xl bg-[#c9dae2] text-green-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Arunachal Pardesh</a>
                    </div>
                    <div className="w-full flex gap-2">
                        <a className="w-full py-2 rounded-xl bg-[#c9dae2] text-green-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Odisha</a>
                        <a className="w-full py-2 rounded-xl bg-[#d8c3e1] text-pink-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Sikkim</a>
                    </div>
                    <a className="w-full py-2 rounded-xl bg-[#b9d5e8] text-blue-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Bye Elections</a>
                </div>
                <div className="w-full flex flex-col space-y-4 font-semibold">
                    <h2 className="text-3xl text-white text-center font-bold mb-2">Previous Elections</h2>
                    <div className="w-full flex gap-2">
                        <a className="w-full py-2 rounded-xl bg-[#d8d3cf] text-yellow-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Presidential Elections</a>
                        <a className="w-full py-2 rounded-xl bg-[#c9dae2] text-green-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Vice-Presidential Elections</a>
                    </div>
                    <a className="w-full py-2 rounded-xl bg-[#d8c3e1] text-pink-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Lok Sabha Elections</a>
                    <div className="w-full flex gap-2">
                        <a className="w-full py-2 rounded-xl bg-[#c9dae2] text-green-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Assembly Elections</a>
                        <a className="w-full py-2 rounded-xl bg-[#b9d5e8] text-blue-600 text-center transition-all hover:opacity-95 hover:scale-105" href='https://www.eci.gov.in/general-elections'>Bye Elections</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
