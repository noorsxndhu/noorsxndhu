import { GitHubCalendar } from 'react-github-calendar';

export default function Contribution() {
    return (
        <div className='pt-[100px]'>
            <div className='flex justify-center '>
             <h2 className="font-[bricolage] text-4xl font-bold ">GitHub Activity</h2>
            </div>
            <div className='flex relative justify-center mt-[25px] border  dark:border-stone-600 white: border-stone-300  rounded-[1rem] mx-[350px] py-[20px] px-[1px]'>
                <GitHubCalendar
                    username="noorsxndhu"
                    blockSize={10}
                    blockMargin={3}
                    theme={{
                        light: ["#d6d6d6ff", "#94e5a2ff", "#40c463ff", "#30a14eff", "#267840ff"],
                        dark: ["#d6d6d6ff", "#94e5a2ff", "#40c463ff", "#30a14eff", "#267840ff"]
                    }} />
            </div>

        </div>
    );
}