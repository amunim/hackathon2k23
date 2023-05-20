export default function WeekTable({ selectedDate, timings }) {
    const selDate = new Date(selectedDate.getTime());
    selDate.setDate(selDate.getDate() - 6) //subtract 6 because inclusive
    const datesTitles = [
        <div className='w-[8rem] max-w-[8rem] h-10 py-2 text-center'></div>
    ];
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const runningDate = new Date(selDate.getTime());
        runningDate.setDate(runningDate.getDate() + i);
        dates.push(new Date(runningDate.getTime()));
        console.log(runningDate);
        datesTitles.push(
            <div className="w-[14.28%] py-2">
                {runningDate.getDate().toString().padStart(2, '0')}/{(runningDate.getMonth() + 1).toString().padStart(2, '0')}
            </div>);
    }

    return (
        <>
            <div className="flex">
                {...datesTitles}
            </div>
            <div className='flex flex-row'>
                <div className='w-28 max-w-[8rem] h-20 py-6 text-center border-2 border-solid border-[#E8E8E8]'>
                    all-day
                </div>
                <div className='w-full border-2 border-solid border-[#E8E8E8]'>
                    <div className='h-[4.8rem] w-full flex flex-wrap'>
                        {dates.map(date => {
                            return (
                                <div style={{ backgroundColor: date.getDate() == selectedDate.getDate() ? "#F5F5F5" : "white" }} className="w-[14.28%] border-2 border-solid border-[#E8E8E8] border-b-0">
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {timings.map((x, index) => {
                return (
                    <div className='flex flex-row' key={`${x} ${index < 12 ? "am" : "pm"}`}>
                        <div className='flex flex-col'>
                            <div className='w-[6.5rem] max-w-[8rem] h-10 py-2 text-center border-2 border-solid border-[#E8E8E8] border-b-[1px]'>
                                {x} {index < 12 ? "am" : "pm"}
                            </div>
                            <div className='content-[_] w-[6.5rem] max-w-[8rem] h-10 py-2 text-center border-2 border-solid border-[#E8E8E8]'>
                            </div>
                        </div>
                        <div className='flex flex-col w-full overflow-y-hidden overflow-x-hidden'>
                            <div className='w-full h-10 border-2 border-solid border-[#E8E8E8] border-b-[1px] overflow-y-visible'>
                                <div className="h-[4.8rem] w-full flex flex-wrap">
                                    {dates.map(date => {
                                        return (
                                            <div style={{ backgroundColor: date.getDate() == selectedDate.getDate() ? "#F5F5F5" : "white" }} className="w-[14.28%] border-2 border-solid border-[#E8E8E8] border-b-0">
                                                {index == 0 &&
                                                    <div style={{ color: "#1E86FF" }} className='bg-[#BCDAFD] cursor-pointer h-6 rounded-[3px] border-[0.4px] border-[#1E86FF] border-solid min-w-fit px-1 mx-2 my-2 text-[0.55rem] overflow-hidden overflow-ellipsis'>
                                                        12:00 am-12:30am-Task for this time
                                                    </div>}
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* <div className='h-20 w-full flex flex-wrap'> */}
                                {/* </div> */}
                            </div>
                            <div className='w-full h-10 border-2 border-solid border-[#E8E8E8]'>
                            </div>
                        </div>
                    </div>)
            })}
        </>
    );
}