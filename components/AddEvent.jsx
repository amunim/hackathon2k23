export default function AddEvent({onBlur}) {
    return (
        <div tabIndex={6} onBlur={onBlur} className='rounded-lg shadow-lg px-4 w-56 py-1 bg-white z-[100000]'>
            <div className="bg-white">
                <h6 className='font-semibold mb-1'>Add Event</h6>
                <form className="bg-white">
                    <input className='border-[#ECECEC] border-2 border-solid rounded w-full px-2 mb-4' type='text' placeholder='Title' />
                    <textarea className='border-[#ECECEC] border-2 border-solid rounded w-full px-2 mb-4' type='text' placeholder='Description' rows={5}>
                    </textarea>
                    <div className='flex flex-row w-28 h-2 mb-4'>
                        <div className='rounded-3xl w-20 h-[24px] relative bg-[#D9D9D9] mr-3'>
                            <div className='w-[20px] h-[20px] mt-[0.15rem] absolute rounded-[50%] bg-white left-[0.15rem]'>
                            </div>
                        </div>
                        <span className='overflow-x-visible whitespace-nowrap'>All day</span>
                    </div>

                    <fieldset className='border-solid border-2 border-[#ECECEC] rounded mb-4'>
                        <legend className='text-[#C5C5C5] ml-2'>Start Date</legend>
                        <input type='text' className='w-full h-full' />
                    </fieldset>

                    <fieldset className='border-solid border-2 border-[#ECECEC] rounded mb-4'>
                        <legend className='text-[#C5C5C5] ml-2'>End Date</legend>
                        <input type='text' className='w-full h-full' />
                    </fieldset>

                    <div className='flex mb-1'>
                        {[
                            "#21FF2A",
                            "#06A3FB",
                            "#FB0606",
                            "#FF6B00",
                            "#9E00FF",
                            "#110F7D",
                            "#5B120E"
                        ].map(x => {
                            return (
                                <div className='rounded-[50%] w-4 h-4 mr-2' style={{ backgroundColor: x }}>
                                </div>
                            );
                        })}
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51123 2.51168H10.0696V11.5817C10.0696 12.4166 9.39281 13.0934 8.55793 13.0934H4.02291C3.18803 13.0934 2.51123 12.4166 2.51123 11.5817V2.51168ZM6.29042 1C7.12529 1 7.80209 1.6768 7.80209 2.51168H4.77874C4.77874 1.6768 5.45554 1 6.29042 1Z" stroke="#6D6D6D" stroke-width="0.74" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 2.51169H11.5817" stroke="#6D6D6D" stroke-width="0.74" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.77881 4.77921V10.8259" stroke="#6D6D6D" stroke-width="0.74" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.80225 4.77921V10.8259" stroke="#6D6D6D" stroke-width="0.74" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='flex text-center'>
                            <div className='rounded-[4px] border-2 border-solid border-[#ECECEC] w-16 ml-5 text-[#827D7D]'>
                                Cancel
                            </div>
                            <div className='rounded-[4px] bg-[#43ff64d9] w-16 ml-5 text-white'>
                                Add
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}