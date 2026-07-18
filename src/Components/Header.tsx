import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Header() {
    return (
        <div className=' md:lg:xl:p-10 md:lg:xl:pt-48 pt-20 md:lg:xl:mb-56 mb-44'>
            <div className='text-center'>
                <p className='md:lg:xl:text-6xl  text-3xl text-white mb-3 italic'>Hi, I'm <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-500 font-bold '>Noval</span>

                </p>
                <p className='md:lg:xl:text-2xl text-sm text-gray-400'>Informatics Student | Web & Mobile Enthusiast</p>
            </div>
            <div>
                <div className='flex justify-center items-center space-x-5 mt-10'>
                    <a href="https://github.com/neptsss" target='_blank' className='transition-all hover:scale-125 duration-500 opacity-40 hover:opacity-100'>
                        <FontAwesomeIcon icon={faGithub} className='xl:text-4xl text-3xl text-white pointer-events-none' />
                    </a>
                    <a href="https://www.linkedin.com/in/noval-putra-asmara" target='_blank' className='transition-all hover:scale-125 duration-500 opacity-40 hover:opacity-100'>
                        <FontAwesomeIcon icon={faLinkedin} className='xl:text-4xl text-3xl text-blue-600 pointer-events-none' />
                    </a>
                    <a href="https://instagram.com/valtraas" className='transition-all hover:scale-125 duration-500 opacity-40 hover:opacity-100'>
                        <FontAwesomeIcon icon={faInstagram} className='xl:text-4xl text-3xl text-rose-600  ' />
                    </a>
                </div>
                <a href="#projects" className='text-center text-white block mt-10 sm:w-1/2 md:w-1/2 xl:w-1/4 mx-auto bg-gradient-to-r from-blue-600 to-teal-500  px-6 py-3 rounded-md transition-all hover:-translate-y-2 hover:shadow-md hover:shadow-teal-400/50 duration-500 hover:font-semibold md:lg:xl:text-base text-sm'>See My Projects</a>

            </div>

        </div>
    )
}
