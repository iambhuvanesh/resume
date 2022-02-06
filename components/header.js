import { motion } from "framer-motion";
import Link from 'next/link';

const logo={
    show:{rotate:0,transition:{
        delay:1,
        duration:1
    }},
    hide:{rotate:360},
    
}
export default function Header(){
    return <div className="shadow-lg">
            <nav className="flex justify-between container mx-auto p-4 font-bold items-center">
            <div className="flex">
                <motion.div className="text-5xl text-brand" animate="show" initial="hide" variants={logo}>B</motion.div>
            </div>
            <div className="flex">
            <Link href="/resume"><a className="text-in">Resume</a></Link>
            </div>
           
             </nav>
            </div>
}