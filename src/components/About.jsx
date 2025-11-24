export default function About() {
    return(
        <div className="relative pt-[40px] ">
                    <div>
                        <p className="text-base text-center font text-[17px] pt-[2px] ">18 , CSE student , MERN developer , Curious mind . 
                            Looking forward to do freelancing.
                        </p>
                        <p className="text-base text-center text-[17px] pt-[2px] "> My work revolves around building modern, scalable web applications, loves to listen music in leisure time. <br />
                        </p>
                        <p className="text-base text-center  text-[17px] pt-[2px]">
                            Looking forward to do freelancing.
                        </p>
                    
                    </div>

                    {/* About buttons */}
                    <div className=" pt-[50px]">
                        <button className="inline-flex items-center justify-center relative text-[0.875rem] bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-[20px] py-[10px] mx-[15px] transition duration-200">Resume/CV</button>
                        <button className="inline-flex items-center justify-center text-[0.875rem] bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-[20px] py-[10px]  mx-[15px] transition duration-200">Get in touch</button>
                    </div>
                </div>
    )
}