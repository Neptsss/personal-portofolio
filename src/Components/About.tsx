import profile from '../assets/image/profile.png'
import Section from './Section'
export default function About() {
    return (
        <Section
            title='About'
            children={
                <div className="max-w-5xl mx-auto p-4 md:p-6 transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
                        <div className="col-span-1 bg-slate-800/75 rounded-2xl p-4 flex justify-center md:justify-start items-center md:items-start overflow-hidden shadow-sm shadow-teal-400/20" data-aos="zoom-in">
                            <img
                                src={profile}
                                alt="profile"
                                className="lg:w-full w-48 scale-125 object-cover rounded-xl"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2 bg-slate-800/75 rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-sm shadow-teal-400/20" data-aos="fade-left">
                            <div className='flex items-center space-x-2 mb-4'>
                                <div className='h-3 w-3 bg-red-500 rounded-full' />
                                <div className='h-3 w-3 bg-yellow-500 rounded-full' />
                                <div className='h-3 w-3 bg-green-500 rounded-full' />
                            </div>
                            <p className='text-white text-left leading-relaxed text-sm md:text-base'>
                                I am an Informatics student with a strong passion for software engineering. Equipped with a proven track record of designing and building various web-based systems, I am currently focusing on deepening my expertise in the mobile development ecosystem. I am always enthusiastic about solving problems through code and adapting to new technologies to deliver seamless user experiences.
                            </p>
                        </div>

                      

                    </div>
                </div>
            }
        />

    )
}
