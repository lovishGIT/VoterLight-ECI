import rjdElectionFlag from '../../assets/rjdElectionFlag.png'
import VoterDropdown from "./voterDropdown";
import { useEffect, useState } from "react";

interface votingProps {
    setVotingPhase: (phase: number) => void;
}

interface BoothTypes {
    head: string;
    partyName: string;
    iconLink?: string;
    id: number;
    checked?: boolean;
}

const BoothData: BoothTypes[]= [
    {
        id: 6,
        head: 'Arvind Kejriwal',
        partyName: 'AAP',
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Aam_Aadmi_Party_flag_%282%29.svg',
        checked: false,

    }, {
        id: 5,
        head: 'Mayawati',
        partyName: 'BSP',
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Elephant_Bahujan_Samaj_Party.svg',
    }, {
        id: 4,
        head: 'Narendra Modi',
        partyName: 'BJP',
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/BJP_Flag.svg',
    }, {
        id: 3,
        head: 'Mallikarjun Kharge',
        partyName: 'INC',
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/7/72/CPI-M-flag.svg',
    }, {
        id: 2,
        head: 'Conrad Sangma',
        partyName: 'NPP',
        iconLink: 'https://upload.wikimedia.org/wikipedia/commons/6/61/NPP_Flag.jpg',
    }, {
        id: 1,
        head: '	Lalu Prasad Yadav',
        partyName: 'RJD',
        iconLink: rjdElectionFlag,
    }, {
        id: 0,
        head: 'None of the Above',
        partyName: 'NOTA',
        checked: true,
    }, 
]

export default function SecureVotingPortal({setVotingPhase}: votingProps) {
    const [data, setData]= useState(BoothData);
    const handlePartyChange= (checkedId: number)=> {
        
        const updatedData: BoothTypes[] = data.map((s) => ({
            ...s,
            checked: s.id === checkedId,
        }));
        setData(updatedData);
    }
    
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
                <h1 className="font-bold text-6xl">Booth Paper</h1>
                <p className="text-red mb-2">Select one person whom you wanna vote.</p>
                <form 
                    className="w-[50%] p-[2%] shadow-lg text-lg border-[1px] border-solid border-black rounded-lg flex flex-col space-y-6"
                    action="" 
                    onSubmit={()=> {
                        setVotingPhase(3)
                    }}
                >
                    {data.map((party)=> {
                        return <VoterDropdown 
                                    {...party} 
                                    id={party?.id} 
                                    check={party?.checked || false} 
                                    onChange={()=> handlePartyChange(party?.id)}/>
                    })}
                    <div className='flex justify-center'>
                        <button className='px-4 py-2 rounded-lg bg-black text-white' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}