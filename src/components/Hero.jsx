import myPic from "@/assets/Profile.jpg";


export default function Hero() {
    return (
        <>

            <div id="herosection" className="flex flex-wrap relative w-full justify-center ">

                {/* Hero  section*/}

                {/* Hero heading */}
                <div className="pt-64 sm:pt-64 md:pt-64">
                    <div>
                        <h1 className="font-[bricolage]  text-4xl sm:text-5xl md:text-7xl font-bold font-black font-stretch-expanded">Hi, I'm Gurnoor </h1>
                    </div>

                    {/* Hero subheading */}
                    <div>
                        <p className="font-[inter] text-stone-400 text-start text-xs sm:text-sm md:text-base" > – Software Engineer</p>
                    </div>
                </div>

                {/* Hero image */}
                <div className="pt-64 sm:pt-64 md:pt-64 pl-4 sm:pl-8 md:pl-12">
                    <img src={myPic} className="h-20 sm:h-24 md:h-28 w-20 sm:w-24 md:w-28  rounded-full relative " />
                </div>

            </div>
        </>
    )
}