import { useState } from "react";

interface PhoneNumberDetails {
    aadharNumber: string;
    contactNumber: string, 
    password: string
}

interface PhoneNumberProps{
    handleSubmit: ({aadharNumber, contactNumber, password}: PhoneNumberDetails)=> void;
}

export function LoginCompWithPhoneNumber({handleSubmit}: PhoneNumberProps) {
    const [details, setdetails]= useState<PhoneNumberDetails>({
        aadharNumber: '',
        contactNumber: '',
        password: ''
    })
    const handleChange= (event)=> {
        event.preventDefault();
        const name= event.target.name;
        const value= event.target.value;
        setdetails({
            ...details, 
            [name]: value
        })
    }
    return (
        <>
            <form className="space-y-6" onSubmit={(event)=> {
                event.preventDefault();
                handleSubmit(details)
                }}>
                <div>
                    <label
                        htmlFor="aadharNumber"
                        className="text-sm font-medium text-gray-700 block mb-2"
                    >
                        <span className="text-red-500">*</span>Aadhar Number:
                    </label>
                    <input
                        id="aadharNumber"
                        name="aadharNumber"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={details.aadharNumber}
                        onChange={handleChange}
                        required

                    />
                </div>
                <div>
                    <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium text-gray-700 block mb-2"
                    >
                        <span className="text-red-500">*</span>Contact Number:
                    </label>
                    <input
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={details.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700 block mb-2"
                    >
                        <span className="text-red-500">*</span>Password:
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={details.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </>
    );
}
