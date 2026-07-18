import { useState, useRef,type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; 

import Section from './Section';

export default function Contact() {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e:FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        if(formRef.current){
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(()=> {
                setStatus('success');
                setIsLoading(false);
                if(formRef.current) formRef.current.reset();

                setTimeout(()=> setStatus('idle'), 3000);
            }, ()=> {
                setStatus('error');
                setIsLoading(false);
            })
        }
    }

    return (
        <Section
            title='Contact'
            children={
                <div className="flex flex-col md:flex-row gap-10 mt-10 items-start overflow-hidden">

                    <div className="md:w-1/2" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Connect! </h3>
                        <p className="text-gray-300 text-justify mb-8 leading-relaxed">
                            Amidst my busy academic schedule, I am always enthusiastic about taking on new challenges through freelance projects. If you have a project idea to develop together or simply want to chat, let's connect!
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center text-gray-300">
                                <FaEnvelope className="text-teal-400 mr-3 text-xl" />
                                <span>neptscode@gmail.com</span>
                            </div>
                           
                        </div>

                   
                        <div className="flex gap-4">
                            <a href="https://github.com/neptsss" target="_blank" className="p-3 bg-gray-800 rounded-full text-white hover:bg-teal-500 hover:-translate-y-1 transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/noval-putra-asmara" target="_blank" className="p-3 bg-gray-800 rounded-full text-white hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://instagram.com/valtraas" target="_blank" className="p-3 bg-gray-800 rounded-full text-white hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-aos="fade-left">
                        <form className="flex flex-col gap-4" ref={formRef} onSubmit={sendEmail}>

                            <div>
                                <label className="text-sm text-gray-400 font-semibold">Name</label>
                                <input type="text" name="user_name" required className="mt-1 w-full bg-gray-900 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400 font-semibold">Email</label>
                                <input type="email" name="user_email" required className="mt-1 w-full bg-gray-900 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="email@domain.com" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400 font-semibold">Message</label>
                                <textarea name="message" rows={4} required className="mt-1 w-full bg-gray-900 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="Write your message here..."></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`mt-2 py-3 px-6 rounded-md text-white font-bold bg-gradient-to-r from-blue-600 to-teal-500 hover:shadow-lg hover:shadow-teal-500/30 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                            >
                                {isLoading ? 'Sending...' : 'Send Message '}
                            </button>

                            {status === 'success' && <p className="text-green-400 text-sm mt-2"> Message sent successfully ! Thank you.</p>}
                            {status === 'error' && <p className="text-red-400 text-sm mt-2"> Failed to send message.Please try again.</p>}
                        </form>
                    </div>

                </div>
            }
        />
    )
}