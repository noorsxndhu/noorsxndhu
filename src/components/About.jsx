export default function About() {
    return (
        <>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-[350px]">
            <div>
             <p className="text-base font-[inter]">18 , CSE student , MERN developer , Curious mind . My work revolves around building modern, scalable web applications, loves to listen music in leisure time. <br />
                Looking forward to do freelancing.
                </p>
            </div>
                <div>
                    <button className="inline-flex items-center justify-center relative text-[0.875rem] bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-[20px] py-[10px] translate-y-[30px] transition duration-200">Resume/CV</button>
                    <button className="inline-flex items-center justify-center text-[0.875rem] bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-[20px] py-[10px] translate-x-[30px] translate-y-[30px] transition duration-200">Get in touch</button>
                </div>

            </div>
        </>
    )
}