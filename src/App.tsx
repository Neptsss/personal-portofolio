import { useEffect, useRef, useState } from "react"
import AOS from 'aos'
import "aos/dist/aos.css";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import { BsRocket } from "react-icons/bs";

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState<boolean>(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px"
      }

      const target = e.target as HTMLElement;
      if (target?.tagName === 'A' || target?.tagName === 'BUTTON') {
        cursorRef.current?.classList.add('cursor-hover')
      } else {
        cursorRef.current?.classList.remove('cursor-hover')
      }

    }
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor)
  })

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1200) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])



  return (
    <div className="relative p-10  cursor-none">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora" />
      </div>
      <a href="#" className={`${scroll ? 'fixed' : 'hidden'} bottom-5 right-5 z-[999] text-2xl text-white border rounded-full p-3 hover:bg-gradient-to-b from-blue-600 to-teal-500 opacity-40 hover:opacity-100 transition-all duration-500 hover:font-semibold`} >
        <BsRocket />
      </a>
      <div ref={cursorRef} className="cursor z-[999]" />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <style >{`
        .aurora {
          width: 200%;
          height: 200%;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(59, 130, 246, 0.35),
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 40%,
              rgba(236, 72, 153, 0.35),
              transparent 40%
            ),
            radial-gradient(
              circle at 60% 70%,
              rgba(16, 185, 129, 0.35),
              transparent 40%
            );
          filter: blur(80px);
          animation: auroraMove 20s ease-in-out infinite alternate;
        }

        @keyframes auroraMove {
          0% {
            transform: translate(-10%, -10%) rotate(0deg);
          }
          50% {
            transform: translate(10%, 10%) rotate(25deg);
          }
          100% {
            transform: translate(-10%, -10%) rotate(-25deg);
          }
        }
      `}</style>
    </div>
  )
}

export default App
