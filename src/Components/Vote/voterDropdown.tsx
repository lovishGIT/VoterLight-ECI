import Switch from "react-switch";

interface voterSwitch {
    head: string;
    partyName: string;
    iconLink?: string;
    check: boolean
    id: number;
    onChange: (index: number)=> void;
}

export default function VoterDropdown({head, partyName, iconLink, check, id, onChange}: voterSwitch) {
    return (
        <div className="flex justify-between items-center gap-6" key={id}>
            <Switch
                checked={check}
                onChange={()=> onChange(id)}
                checkedIcon={false}
                uncheckedIcon={false}
            />
            <div>{head}</div>
            <div>{partyName}</div>
            {iconLink ? <img className="h-6" src={iconLink} alt="" /> 
                    : <div className="h-6 w-8 bg-gray-300"></div>}
        </div>
    )
}
