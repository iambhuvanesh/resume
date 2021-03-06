import Link from 'next/link';
import {motion} from 'framer-motion';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import Header from '../components/header';
const ExternalLink = (props) => <a {...props} target="_blank">{props.children}</a>
const social = [{link:'https://www.facebook.com/bhuvanesh.audi',icon:<FaFacebook/>},
{link:'https://twitter.com/bhuvanesh_audi',icon:<FaTwitter/>},{link:'https://www.instagram.com/that_pondy_dude',icon:<FaInstagram/>},
{link:'https://www.linkedin.com/in/bhuvaneswaran-mohan',icon:<FaLinkedin/>},{link:'https://github.com/iambhuvanesh',icon:<FaGithub/>}]
const container = {
    show:{opacity:1,
        scale:1,
        transition:{
            staggerChildren: 0.1
        }
    },
    hide:{opacity:0,scale:1.3},
   
}
const icons = {
    show:{y:10},
    hide:{y:100}
}


export default function Index(){
    return (
        <div>
            <Header/>
        
        <motion.div variants={container} animate="show" initial="hide" className="flex items-center h-full justify-center p-4 container flex-col mx-auto" style={{height:'calc(100vh - 100px)'}}>
        <div className="container mx-auto text-center text-5xl p-4 text-brand">
            <header>Bhuvaneswaran Mohan</header>
        </div>
        <div className="container mx-auto text-center text-3xl">
             Versatile Front-end developer with 9 years of experience in developing web applications.
        </div>
        <div  className="grid text-3xl mt-10 gap-3 grid-cols-5">
            {
                social.map((item)=>(
                    <motion.div variants={icons} key={item.link}>
                    <ExternalLink href={item.link} >
                        {item.icon}
                    </ExternalLink>
                    </motion.div>
                ))
            }
        </div>
        </motion.div>
        </div>
       
       
    )
}