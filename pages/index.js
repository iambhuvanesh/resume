import Link from 'next/link';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
const ExternalLink = (props) => <a {...props} target="_blank">{props.children}</a>
const social = [{link:'https://www.facebook.com/bhuvanesh.audi',icon:<FaFacebook/>},
{link:'https://twitter.com/bhuvanesh_audi',icon:<FaTwitter/>},{link:'https://www.instagram.com/that_pondy_dude',icon:<FaInstagram/>},
{link:'https://www.linkedin.com/in/bhuvaneswaran-mohan',icon:<FaLinkedin/>},{link:'https://github.com/iambhuvanesh',icon:<FaGithub/>}]
export default function Index(){
    return (
        <>
        <nav className="flex justify-end container mx-auto p-4 font-bold">
            <Link href="/resume"><a className="text-brand">Resume</a></Link>
        </nav>
        <div className="flex items-center h-full justify-center p-4 container flex-col mx-auto" style={{height:'calc(100vh - 70px)'}}>
        <div className="container mx-auto text-center text-5xl p-4 text-brand">
            <header>Bhuvaneswaran Mohan</header>
        </div>
        <div className="container mx-auto text-center text-3xl">
             Versatile Front-end developer with 9 years of experience in developing web applications.
        </div>
        <div className="grid text-3xl mt-10 gap-3 grid-cols-5">
            {
                social.map((item)=>(
                    <ExternalLink href={item.link} key={item.link}>
                        {item.icon}
                    </ExternalLink>
                ))
            }
        </div>
        </div>
        </>
       
       
    )
}