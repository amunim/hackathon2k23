import { useState } from "react";

const svgs = {
    "Day": (<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="5.47507" width="18.5473" height="5.64484" rx="1" fill="#292626" />
        <path d="M0 14.5391C0 13.9868 0.447715 13.5391 1 13.5391H17.5473C18.0996 13.5391 18.5473 13.9868 18.5473 14.5391V15.7647C18.5473 16.317 18.0996 16.7647 17.5473 16.7647H1C0.447717 16.7647 0 16.317 0 15.7647V14.5391Z" fill="#292626" />
        <rect width="18.5473" height="3.22562" rx="1" fill="#292626" />
    </svg>),
    "Week": (<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="16" rx="1" fill="black" />
        <rect x="6" width="5" height="16" rx="1" fill="black" />
        <rect x="12" width="5" height="16" rx="1" fill="black" />
    </svg>),
    "Month": (<svg width="17" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="8" height="8" rx="1" fill="black" />
        <rect x="10" width="8" height="8" rx="1" fill="black" />
        <rect x="10" y="9" width="8" height="8" rx="1" fill="black" />
        <rect y="9" width="8" height="8" rx="1" fill="black" />
    </svg>),
    "Agenda": (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="8" rx="1" fill="black" />
        <rect y="10" width="18" height="8" rx="1" fill="black" />
    </svg>)
}

export default function Dropdown({ calType, setCalType }) {
    const [optionsVis, setOptionsVis] = useState(false);

    function handleChange(cal) {
        setCalType(cal);
        setOptionsVis(false);
    }

    function blur() {
        if (optionsVis)
            setOptionsVis(false)
    }

    return (
        <div tabIndex={0} className="relative" onBlur={blur}>
            <div onClick={(ev) => setOptionsVis(!optionsVis)} className='hover:cursor-pointer  cal-Type-picker rounded-[8px] bg-[#EEEEEE] text-black w-[120px] h-[38px] flex items-center justify-start font-semibold'>
                <span className={`${calType}-icon pt-[0.1rem] mx-2`}>
                    {svgs[calType]}
                </span>
                {calType}
                <span className="ml-2 mt-1">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6 7.43066L1 1" stroke="#292626" strokeWidth="1.83787" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            <div style={{ display: optionsVis ? "block" : "none" }} className="w-full text-black rounded shadow-md border-2 border-[#ECECEC] flex flex-col bg-white">
                <div onClick={(ev) => handleChange("Day")} className="hover:cursor-pointer flex hover:bg-[#ECECEC] px-2 py-2">
                    <span className={`day-icon pt-[0.1rem] mx-2`}>
                        {svgs["Day"]}
                    </span>
                    <span className="leading-4">Day</span>
                </div>
                <div onClick={(ev) => handleChange("Week")} className="hover:cursor-pointer flex hover:bg-[#ECECEC] px-2 py-2">
                    <span className={`week-icon pt-[0.1rem] mx-2`}>
                        {svgs["Week"]}
                    </span>
                    <span className="leading-4">Week</span>
                </div>
                <div onClick={(ev) => handleChange("Month")} className="hover:cursor-pointer flex hover:bg-[#ECECEC] px-2 py-2">
                    <span className={`week-icon pt-[0.1rem] mx-2`}>
                        {svgs["Month"]}
                    </span>
                    <span className="leading-4">Month</span>
                </div>

                <div onClick={(ev) => handleChange("Agenda")} className="hover:cursor-pointer flex hover:bg-[#ECECEC] px-2 py-2">
                    <span className={`week-icon pt-[0.1rem] mx-2`}>
                        {svgs["Agenda"]}
                    </span>
                    <span className="leading-4">Agenda</span>
                </div>
            </div>
        </div>
    );
}