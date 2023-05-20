import { daysOfMonth } from "@/pages"
import Dropdown from "./Dropdown"
import { DayPicker } from "react-day-picker";
import format from "date-fns/format";
import { useState } from "react";
import 'react-day-picker/dist/style.css';


export default function Header({ selectedDate, setSelectedDate, calType, setCalType }) {

    const [calVis, setCatVis] = useState(false);

    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }

    function next() {
        if (calType == "Day") {
            setSelectedDate((old) => {
                console.log("old");
                var newDate = new Date(old.getTime());
                newDate.setDate(old.getDate() + 1);
                return newDate;
            });
        }
    }

    function previous() {

        if (calType == "Day") {
            setSelectedDate((old) => {
                console.log("old");
                var newDate = new Date(old.getTime());
                newDate.setDate(old.getDate() - 1);
                return newDate;
            });
        }
    }

    return (
        <div className='w-full h-[89px] flex justify-around py-11 pb-20'>
            <Dropdown calType={calType} setCalType={setCalType} />
            <div className='current-date text-lg hover:cursor-pointer font-semibold flex'>
                <span className="hover:cursor-pointer" onClick={() => previous()}>
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7713 21.8142L2.1824 12.2095L11.7713 2.60474" stroke="black" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span tabIndex={5}  className='relative mx-6 flex flex-col overflow-x-visible overflow-y-visible' onClick={() => setCatVis(!calVis)}>
                    {daysOfMonth[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
                    {/* <DatePicker className="min-w-48 min-h-28 w-96 h-96 absolute" value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} /> */}
                    {calVis &&
                        <DayPicker
                            onBlur={(ev) => setCatVis(false)}
                            className="absolute bg-[#ECECEC] rounded-[7px] shadow-md py-3"
                            mode="single"
                            selected={selectedDate}
                            onSelect={(val) => setSelectedDate(val)}
                            footer={footer}
                        />}
                </span>
                <span className="hover:cursor-pointer" onClick={() => next()}>
                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.59907 2.25027L11.188 10.8534L2.59907 19.4564" stroke="black" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>

            </div>
            <div onClick={() => setSelectedDate(new Date())} className='today-button hover:cursor-pointer rounded-[12px] bg-[#FC3D3D] text-white w-[102px] h-[39px] text-center leading-[2.2rem]'>
                Today
            </div>
        </div>
    )
}