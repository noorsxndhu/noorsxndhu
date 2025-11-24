

export default function Skills() {
  const skills = ["Javascript", "React", "MongoDB", "MySQL", "Redux", "Tailwind", "REST", "Bootstrap", "Cloudinary", "Express", "EJS", "Hoppscotch"]
  return (
    <div className="flex flex-col pt-[251px] relative justify-center">

      {/* {skills heading} */}
      <div>
        <p className="color-red-400 font-[bricolage] font-bold text-4xl ">Skills</p>
      </div>

      {/* {skills list} */}
      <div className="flex flex-wrap gap-2 mx-[350px] pt-[25px] justify-center ">
        {skills.map((skill, idx) => (
          <span key={idx} className=" relative text-[0.875rem] px-4 py-2 border rounded-lg text-sm bg-black text-white dark:bg-white dark:text-black mx-[4px] my-[1px]">{skill}</span>
        ))}

      </div>
    </div>
  )

}