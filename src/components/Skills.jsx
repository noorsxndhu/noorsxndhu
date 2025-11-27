export default function Skills() {
  const skills = ["Javascript","React" , "Tailwind", "MongoDB", "MySQL", "Redux", "REST", "EJS", "Bootstrap", "Express"]
  return (
    <div className="flex flex-col pt-64 sm:pt-64 md:pt-64 relative justify-center">

      {/* {skills heading} */}
      <div>
        <p className="color-red-400 font-[bricolage] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl">Skills</p>
      </div>

      {/* {skills list} */}
      <div className="flex flex-wrap gap-2 mx-12 sm:mx-16 md:mx-32 lg:mx-72 pt-5 sm:pt-6 md:pt-6 lg:pt-6 justify-center">
        {skills.map((skill, idx) => (
          <span key={idx} className=" relative text-xs sm:text-sm md:text-sm lg:text-sm px-4 sm:px-4 md:px-4 lg:px-4 py-2 sm:py-2 md:py-2 lg:py-2 border rounded-lg text-sm bg-black text-white dark:bg-white dark:text-black mx-1 sm:mx-1 md:mx-1 lg:mx-1 my-0.5 sm:my-0.5 md:my-1 lg:my-1">{skill}</span>
        ))}

      </div>
    </div>
  )
}