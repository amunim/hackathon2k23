import Divider from "./Divider";
import { daysOfWeek } from "@/pages";

export default function MonthTable({ selectedDate, timings }) {
    const monthStart = new Date(selectedDate.getTime());
    monthStart.setDate(1);
    const startDate = new Date(monthStart.getTime());
    startDate.setDate(startDate.getDate() - startDate.getDay());
    console.log(startDate);
    const cells = [];

    for (let i = 0; i < 7 * 6; i++) {
        const runningDate = new Date(startDate.getTime());
        runningDate.setDate(runningDate.getDate() + i);
        cells.push(
            <div className="w-[14.28%] h-24 flex border-2 border-[#ECECEC] border-solid" style={{ backgroundColor: runningDate.getMonth() == selectedDate.getMonth() && runningDate.getDate() == selectedDate.getDate() ? "#F5F5F5" : "white" }}>
                <div className="flex flex-col w-[90%] h-full">
                    {runningDate.getMonth() == selectedDate.getMonth() && runningDate.getDate() == selectedDate.getDate() &&
                        <div style={{ color: "#1E86FF" }} className='bg-[#BCDAFD] cursor-pointer h-6 rounded-[3px] border-[0.4px] border-[#1E86FF] border-solid min-w-fit px-1 mx-2 my-2 text-[0.55rem] overflow-hidden overflow-ellipsis'>
                            12:00 am-12:30am-Task for this time
                        </div>}
                </div>
                <div className="text-xs pr-1 pt-1" style={{ color: runningDate.getMonth() != selectedDate.getMonth() ? "#ACABAB" : "black" }}>
                    {runningDate.getDate()}
                </div>
            </div>);
    }

    return (
        <>
            <div className='flex flex-row font-semibold'>
                {daysOfWeek.map(x => {
                    return (
                        <div className='w-[14.28%] py-6 px-8'>
                            {x.substring(0, 3)}
                        </div>);
                })}
            </div>
            <Divider />
            <div className="flex min-h-full flex-wrap content-start font-semibold">
                {...cells}
            </div>
        </>
    )
}