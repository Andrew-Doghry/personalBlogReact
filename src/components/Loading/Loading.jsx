
function Loading() {
    return (
        <div className="h-screen w-screen bg-[#0f0f12] flex items-center justify-center text-2xl lg:text-8xl md:text-4xl ">

            <div className="loading relative flex justify-center items-center  text-8xl">
                <span className='mainStroke logoLoading text-white stroke-green' >m<span className='text-orange-600'>k</span></span>
                <span className='logoLoading backFill absolute text-white' >m<span className='text-orange-600'>k</span></span>

            </div>
        </div>
    )
}

export default Loading