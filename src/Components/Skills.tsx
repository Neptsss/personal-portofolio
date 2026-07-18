import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiLaravel,
  SiCodeigniter,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import Section from "./Section";
import type { ReactNode } from "react";


type Skill = {
  id: number;
  name: string;
  icon: ReactNode;
  hoverIcon: string;
}
export default function Skills() {
  const skills: Skill[] = [
    {
      id: 1, name: "HTML",
      icon: <SiHtml5 className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-orange-600 group-hover:scale-110"
    },
    {
      id: 2, name: "CSS",
      icon: <SiCss3 className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-cyan-600 group-hover:scale-110"
    },
    {
      id: 3, name: "JavaScript",
      icon: <SiJavascript className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-yellow-500 group-hover:scale-110"
    },
    {
      id: 4, name: "PHP",
      icon: <SiPhp className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-indigo-600 group-hover:scale-110"
    },
    {
      id: 5, name: "MySQL",
      icon: <SiMysql className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-blue-600 group-hover:scale-110"
    },
    {
      id: 7, name: "React",
      icon: <SiReact className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-cyan-500 group-hover:scale-110"
    },
    {
      id: 9,
      name: "Laravel",
      icon: <SiLaravel className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-red-600 group-hover:scale-110"
    },
    {
      id: 10,
      name: "CodeIgniter",
      icon: <SiCodeigniter className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-orange-500 group-hover:scale-110"
    },
    {
      id: 11,
      name: "TailwindCSS",
      icon: <SiTailwindcss className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-sky-400 group-hover:scale-110"
    },
    {
      id: 12,
      name: "Bootstrap",
      icon: <SiBootstrap className="md:lg:xl:text-7xl text-5xl" />,
      hoverIcon: "group-hover:text-purple-600 group-hover:scale-110"
    }
  ];
  return (
    <Section
      title="Skills"
      children={
        <div>
          <ul className="text-gray-500 grid md:lg:xl:grid-cols-5 grid-cols-2 gap-8">
            {
              skills.map((items: Skill) => (
                <li className="flex flex-col justify-center items-center gap-2 group " data-aos="zoom-in" data-aos-delay={`${items.id}00`}>
                  <span className={`${items.hoverIcon} duration-300 ease-in-out transition-all`}>
                    {items.icon}
                  </span>
                  <p className="md:lg:xl:text-xl text-sm group-hover:text-white group-hover:font-semibold duration-300 group-hover:scale-110">{items.name}</p>
                </li>
              ))
            }
          </ul>
        </div>
      }
    />
  );
}
