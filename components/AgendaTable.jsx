import { daysOfWeek, daysOfMonth } from "@/pages";

export default function AgendaTable({ grouped }) {

    return (
        Object.keys(grouped).map(key => {
            return (
                <>
                    <div className='w-full flex justify-between px-8 bg-[#F6F4F4] py-2 font-semibold mb-2'>
                        <div>
                            {daysOfWeek[(new Date(key)).getDay()]}
                        </div>
                        <div>
                            {daysOfMonth[(new Date(key)).getMonth()]} {(new Date(key)).getDate()}, {(new Date(key)).getFullYear()}
                        </div>
                    </div>
                    {grouped[key].map(ev => {
                        return (
                            <div className='w-full flex flex-col px-8'>
                                <div className='flex'>
                                    <div className='mr-8'>
                                        {ev.startTime}-{ev.endTime}
                                    </div>
                                    <div className='ml-4 mr-2'>
                                        <div className='rounded-[50%] w-4 h-4 mt-1' style={{ backgroundColor: ev.color }}>
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        {ev.title}: {ev.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            );
        })
    );
}