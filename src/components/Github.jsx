import { GitHubCalendar } from 'react-github-calendar';

export default function Github() {
    return (
        <div className='hidden md:flex flex-nowrap justify-center'>
            <div className='pt-16 sm:pt-20 md:pt-24 lg:pt-24 justify-center'>

                <div className='flex relative justify-center'>
                    <h2 className="font-[bricolage] text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold ">GitHub Activity</h2>
                </div>

                <a href="https://github.com/noorsxndhu">
                    <div className='flex relative justify-center max-w-3xl mx-auto w-full  mt-6 sm:mt-6 md:mt-6 lg:mt-6 border  dark:border-stone-600 white: border-stone-300  rounded-[1rem]  py-5 sm:py-5 md:py-5 lg:py-5 px-5 sm:px-5 md:px-5 lg:px-5'>
                        <GitHubCalendar
                            username="noorsxndhu"
                            blockSize={10}
                            blockMargin={3}
                            theme={{
                                light: ["#d6d6d6ff", "#267840ff", "#30a14eff", "#40c463ff", "#69e97eff"],
                                dark: ["#d6d6d6ff", "#267840ff", "#30a14eff", "#40c463ff", "#69e97eff"]
                            }} />
                    </div>
                </a>

            </div >
        </div>

    );
}










// 