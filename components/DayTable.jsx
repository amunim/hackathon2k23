import { useEffect, useState, useLayoutEffect } from "react";
import AddEvent from "./AddEvent";

export default function DayTable({ timings }) {

    const [mousePos, setMousePos] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [modalPos, setModalPos] = useState({});



    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition, false);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useEffect(() => {
        console.log("click");
        if (showModal)
            setModalPos({ x: mousePos.x, y: mousePos.y });
    }, [showModal])

    return (
        <>
            <div className="fixed" style={{ display: showModal ? "block" : "none", top: `${modalPos.y - scrollPosition}px`, left: `${modalPos.x}px` }}>
                <AddEvent onBlur={() => setShowModal(false)} />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='w-28 max-w-[8rem] h-20 py-6 text-center border-2 border-solid border-[#E8E8E8]'>
                        all-day
                    </div>
                    <div className='w-full border-2 border-solid border-[#E8E8E8]'>
                        <div className='h-[4.8rem] w-full flex flex-wrap'>

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
                            <div onClick={(ev) => setShowModal(true)} className='flex relative flex-col w-full overflow-y-hidden overflow-x-hidden'>
                                <div className='w-full h-10 border-2 border-solid border-[#E8E8E8] border-b-[1px] overflow-y-visible'>
                                    <div className='h-20 w-full flex flex-wrap cursor-pointer'>
                                        {index == 0 &&
                                            <div style={{ color: "#1E86FF" }} className='bg-[#BCDAFD] cursor-pointer h-6 rounded-[3px] border-[0.4px] border-[#1E86FF] border-solid min-w-fit px-1 mx-2 my-2'>
                                                12:00 am-12:30am-Task for this time
                                            </div>}
                                    </div>
                                </div>
                                <div className='w-full h-10 border-2 border-solid border-[#E8E8E8]'>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </>
    );
}