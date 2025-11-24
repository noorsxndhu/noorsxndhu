import myPic from "@/assets/Profile.jpg";


export default function Hero() {
    return (
        <>

            <div className="flex flex-wrap relative w-full justify-center ">

                {/* Hero  section*/}

                {/* Hero heading */}
                <div className=" pt-[260px]">
                    <div>
                        <h1 className="font-[bricolage]  text-7xl font-bold font-black font-stretch-expanded">Hi, I'm Gurnoor </h1>
                    </div>

                    {/* Hero subheading */}
                    <div>
                        <p className="font-[inter] text-stone-400 text-start" > – Software Engineer</p>
                    </div>
                </div>

                {/* Hero image */}
                <div className="pt-[260px] pl-[50px]">
                    <img src={myPic} className="h-[110px] w-[110px]  rounded-full relative " />
                </div>

            </div>
        </>
    )
}