import React, { useState } from "react";
import '../../index.css';
import Logo from '../../assets/images/logo.svg';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4357AD] text-[#CCD6F6]">
            <div>
                <Link to="home"  smooth={true} duration={500}>
                    <img className="cursor-pointer w-14 animate-spin duration-500" src={Logo} alt="logo"/>
                </Link>
            </div>
            <div className="hidden md:flex">
                <ul className="hidden md:flex">
                    <li>
                    <Link to="home" smooth={true} duration={500}>
                        Accueil
                    </Link>
                    </li>
                    <li>
                    <Link to="about" smooth={true} duration={500}>
                        A propos
                    </Link>
                    </li>
                    <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Compétences
                    </Link>
                    </li>
                    <li>
                    <Link to="work" smooth={true} duration={500}>
                        Mes projets
                    </Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contacter-moi
                    </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#4357AD] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                        Accueil
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                        A propos
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills"  smooth={true} duration={500}>
                        Compétences
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work"  smooth={true} duration={500}>
                        Mes projets
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
                        Contacter-moi
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-[#CCD6F6]" 
                        href="https://www.linkedin.com/in/graig-kolodziejczyk-1482241b8/">Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
                        <a className="flex justify-between items-center w-full text-[#CCD6F6]" 
                        href="https://github.com/Gra1gKolodziejczyk">Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <Link to="contact" smooth={true} duration={500}>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]">
                    <a href="/" className="flex justify-between items-center w-full text-[#CCD6F6]">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    </Link>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
                        <a className="flex justify-between items-center w-full text-[#CCD6F6]" 
                        href="/">Curriculum Vitae <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;