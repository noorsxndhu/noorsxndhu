export default function About() {
    return (
        <div className="relative pt-10 px-4 sm:px-6 md:px-10">
            <div className="pt-1">
                <p className="text-base text-center font-sans font-medium text-sm sm:text-sm md:text-base ">18 , CSE student , MERN developer , Curious mind .My<br/>work  revolves around building modern,scalable web applications, loves to listen music in leisure time. <br/>Looking forward to do freelancing.
                </p>

            </div>

            {/* About buttons */}
            <div className=" pt-12">
                <button className="inline-flex items-center justify-center relative text-sm sm:text-sm md:text-sm bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 mx-2 sm:mx-2 md:mx-3 transition duration-200">Resume/CV</button>


                <button onClick={() => {
                    document.getElementById("contactsection").scrollIntoView({ behavior: "smooth" });
                }} className="inline-flex items-center justify-center text-sm sm:text-sm md:text-sm bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 mx-2 sm:mx-2 md:mx-3 transition duration-200">Get in touch</button>

            </div>
        </div>
    )
}