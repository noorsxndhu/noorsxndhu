import myPic from "@/assets/Profile.jpg";


export default function Hero() {
    return (
        <>

            <div className="flex  absolute  left-1/2 -translate-x-1/2 translate-y-[175px] ">
                <div className=" pl-[20px] mr-[30px] ">
                    <h1 className="font-[bricolage] text-6xl font-bold font-black tracking-tight text-center pt-[1px]">Hi, I'm Gurnoor </h1>
                    <p className="font-[inter] text-stone-400 relative text-start pt-[2px]" > – Software Engineer</p>

                </div>
                <div>
                    <img src={myPic} className="h-[100px] w-[100px]  rounded-full relative " />
                </div>

            </div>
        </>
    )
}