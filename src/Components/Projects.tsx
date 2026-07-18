import  { useState } from 'react'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconType } from 'react-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SiBootstrap, SiCodeigniter, SiJavascript, SiLaravel, SiMysql, SiPhp, SiReact, SiTailwindcss } from 'react-icons/si';
type Project = {
    id: number;
    title: string;
    desc: string;
    tech: { icon: IconType; color: string }[];
    image: string;
    link: { demo: string; github: string };
};

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(4);
    const projects: Project[] = [
        {
            id: 1,
            title: "Archive Management",
            desc: "This archiving website is a secure internal project designed to manage client documents and archives. Due to the sensitive nature of the data, the source code is kept confidential.It solves document management issues through key features, including document CRUD operations, automated deadline tracking and tagging, and a dynamic Excel data export system filtered by date, year, and more.",
            tech: [
                { icon: SiPhp, color: "text-indigo-400" },
                { icon: SiJavascript, color: "text-yellow-400" },
                { icon: SiMysql, color: "text-blue-500" },
                { icon: SiLaravel, color: "text-red-500" },
                { icon: SiTailwindcss, color: "text-cyan-400" }
            ],
            image: "src/assets/image/project/archive.png",
            link: { demo: "", github: "" }
        },
        {
            id: 2,
            title: "Paradise Massage",
            desc: "A specialized MSME website designed for a traditional massage service based in Yogyakarta. This platform was built to establish an online presence, effectively introducing the business to a broader audience and driving local customer engagement.",
            tech: [
                { icon: SiJavascript, color: "text-yellow-400" },
                { icon: SiTailwindcss, color: "text-cyan-400" },
                { icon: SiReact, color: "text-cyan-500" }
            ],
            image: "src/assets/image/project/paradise.png",
            link: { demo: "https://paradisemassage.biz.id", github: "https://github.com/Neptsss/paradise-massage" }
        },
        {
            id: 3,
            title: "Employee Management",
            desc: "This employee management system is a private internal project developed collaboratively to record personal data and operational roles of the client's employees. Due to the highly sensitive nature of the data, the entire source code is kept strictly confidential. My responsibilities focused on data flow development, specifically designing the database schema and building the back-end logic for the employee registration forms. These modules were then seamlessly integrated into the main system interface built by my teammates.",
            tech: [
                { icon: SiPhp, color: "text-indigo-400" },
                { icon: SiJavascript, color: "text-yellow-400" },
                { icon: SiMysql, color: "text-blue-500" },
                { icon: SiCodeigniter, color: "text-orange-500" },
                { icon: SiBootstrap, color: "text-purple-500" }
            ],
            image: "src/assets/image/project/kepegawaian.png",
            link: { demo: "", github: "" }
        },
        {
            id: 4,
            title: "Warehouse Management",
            desc: "A collaborative warehouse management system built for a school to track inventory and operational budgets. In this team project, my role focused on system refinements and feature enhancements. I was responsible for developing missing functionalities based on user requirements, ensuring the application delivered a complete and seamless experience.",
            tech: [
                { icon: SiPhp, color: "text-indigo-400" },
                { icon: SiJavascript, color: "text-yellow-400" },
                { icon: SiMysql, color: "text-blue-500" },
                { icon: SiLaravel, color: "text-red-500" },
                { icon: SiBootstrap, color: "text-purple-500" }

            ],
            image: "src/assets/image/project/gudang.png",
            link: { demo: "", github: "https://github.com/pengelolaan-gudang-smea/gudang-app" }
        }, {
            id: 5,
            title: "Currency Dashboard",
            desc: "This financial application is a private internal project developed collaboratively to manage currency exchange operations. Due to the highly sensitive nature of the financial data and user identities, the source code is kept strictly confidential. In this team effort, my primary responsibility was engineering the back-end architecture, specifically implementing the core currency conversion logic and dynamic exchange rate calculations. These modules were then seamlessly integrated with the user interface built and debugged by my teammate.",
            tech: [
                { icon: SiPhp, color: "text-indigo-400" },
                { icon: SiJavascript, color: "text-yellow-400" },
                { icon: SiMysql, color: "text-blue-500" },
                { icon: SiLaravel, color: "text-red-500" },
                { icon: SiTailwindcss, color: "text-cyan-400" },
            ],
            image: "src/assets/image/project/currency.png",
            link: { demo: "", github: "" }
        }
    ]

    const handleSeeMore = () => {
        setVisibleProjects((prev) => prev + 4);
    }
    return (
        <Section
            title='Projects'
            children={
                <div>
                    <div className='p-6 flex justify-center items-stretch gap-10 flex-wrap'>
                        {
                            projects.slice(0,visibleProjects).map((item: Project) => (
                                <div className='max-w-md flex flex-col w-full rounded-lg bg-gray-800/75 p-6 backdrop-blur-xl' key={item.id} data-aos="fade-up" data-aos-delay={`${item.id}00`}>
                                    <div className='md:lg:xl:flex  items-center space-x-3 mb-4 border-b-2 pb-4 border-gray-400 justify-between'>
                                        <div>
                                            <h3 className='text-white text-base font-semibold md:lg:xl:mb-0 mb-5'>{item.title}</h3>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            {
                                                item.tech.map((techItem, index) => {
                                                    const Icon = techItem.icon;

                                                    return (
                                                        <Icon
                                                            key={index}
                                                            className={`text-3xl ${techItem.color} hover:scale-110 transition-transform duration-300`}
                                                        />
                                                    );
                                                })
                                            }

                                        </div>

                                    </div>
                                    <div className='h-60 w-full flex items-center justify-center bg-gray-900/40 rounded-lg p-2 border border-gray-700'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='max-h-full max-w-full rounded object-contain hover:scale-105 transition-transform duration-500'
                                        />
                                    </div>
                                    <div className='text-white text-justify leading-8 mt-4 md:lg:xl:text-base text-sm'>
                                        <p>{item.desc}</p>
                                    </div>

                                    {
                                        (item.link.demo || item.link.github) && (
                                            <div className='mt-auto flex items-center text-white gap-10  border-t-1 pt-4 border-gray-400'>
                                                {item.link.demo && (
                                                    <div className='flex items-center gap-2 group '>
                                                        <a href={item.link.demo} target='_blank' className='block group-hover:text-teal-400 duration-500 group-hover:font-semibold md:lg:xl:text-base text-sm'>View Website</a>
                                                        <FontAwesomeIcon icon={faUpRightFromSquare} className=' group-hover:text-teal-400 duration-500 group-hover:font-semibold md:lg:xl:block hidden' />
                                                    </div>
                                                )}
                                                {item.link.github && (
                                                    <div className='flex items-center gap-2 group '>
                                                        <a href={item.link.github} target='_blank' className='block group-hover:text-teal-400 duration-500 group-hover:font-semibold md:lg:xl:text-base text-sm'>View Repository</a>
                                                        <FontAwesomeIcon icon={faGithub} className=' group-hover:text-teal-400 duration-500 group-hover:font-semibold md:lg:xl:block hidden' />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </div>
                            ))

                        }



                    </div>
                    {
                        (projects.length > 4 && visibleProjects <= projects.length) && (
                            <button className='text-center text-white block mt-10 sm:w-1/2 md:w-1/2 xl:w-1/4 mx-auto bg-gradient-to-r from-blue-600 to-teal-500  px-6 py-3 rounded-md transition-all hover:-translate-y-2 hover:shadow-md hover:shadow-teal-400/50 duration-500 hover:font-semibold' onClick={handleSeeMore} >See More Projects</button>
                        )
                    }
                </div>

            }
        />
    )
}
