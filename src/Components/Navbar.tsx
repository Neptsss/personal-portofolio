import { useEffect, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScroll(true);
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: "-50% 0px -50% 0px"
        });

        const sections = ['about', 'projects', 'skills', 'contact'];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        })

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            })
        }
    }, [])

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const linkClass = (sectionName : string) => {
        const isActive = activeSection === sectionName
        return `cursor-none duration-500 transition-all block ${isActive ? 'text-teal-400 font-bold scale-105' : 'text-gray-300 hover:text-teal-400 hover:font-semibold'}`
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[988] transition-all duration-500  ${scroll ? "mt-0" : "mt-5"} `}>
            <div className={` ${scroll ? "w-full rounded-none px-6 py-6 " : " w-[45%] rounded-2xl px-6 py-3 shadow-blue-300"}
          mx-auto  shadow-md  backdrop-blur-2xl transition-all duration-500 flex justify-between items-center `}>
                <div>
                    <a href="#" className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-500 font-bold   block">Noval.</a>
                </div>
                {isMobile ?
                    <div className={`${scroll ? ' relative w-8 h-8 flex items-center justify-center cursor-pointer' : 'hidden'}`} onClick={handleMenu} >
                        <div className={`absolute transition-all duration-500 transform ${openMenu ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}  >
                            <IoMenu className='text-white text-3xl' />
                        </div>

                        <div className={`absolute transition-all duration-500 transform ${openMenu ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} >
                            <IoClose className='text-white text-3xl' />
                        </div>
                    </div>

                    :
                    <div className={`${scroll ? 'md:flex space-x-7 justify-center text-lg duration-300 transition-all' : 'hidden '} `}>
                        <a href="#about" className={linkClass('about')}>About</a>
                        <a href="#projects" className={linkClass('projects')}>Projects</a>
                        <a href="#skills" className={linkClass('skills')}>Skills</a>
                        <a href="#contact" className={linkClass('contact')}>Contact</a>
                    </div>
                }
            </div>
            <div className={`absolute left-0 right-0 mx-auto w-[90%]  backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800 transition-all duration-500 overflow-hidden 
                ${openMenu && isMobile ? 'max-h-64 mt-4 opacity-100 py-4' : 'max-h-0 mt-0 opacity-0 py-0'}`} >
                <div className='flex flex-col items-center space-y-4'>
                    <a href="#about" className={linkClass('about')}>About</a>
                    <a href="#projects" className={linkClass('projects')}>Projects</a>
                    <a href="#skills" className={linkClass('skills')}>Skills</a>
                    <a href="#contact" className={linkClass('contact')}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar