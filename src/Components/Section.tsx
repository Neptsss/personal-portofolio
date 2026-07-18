import { type ReactNode } from 'react'

interface SectionProps {
    title: string,
    children: ReactNode,
}

export default function Section({ title, children }: SectionProps) {
    return (
        <div className='my-28 md:lg:xl:p-4 scroll-mt-24' id={title.toLowerCase().replace(/\s+/g, '-')}>
            <p className='text-4xl md:lg:xl:text-5xl bg-gradient-to-br from-blue-300 to-teal-500 font-azeret  text-transparent bg-clip-text font-bold text-center'>{title}</p>
            <div className='h-1 bg-white  w-44  mx-auto mt-4 rounded-full mb-20' />
            {children}
        </div>
    )
}
