import React from 'react';
import Github from '../../assets/images/github.png';
import Javascript from '../../assets/images/javascript.png';
import ReactJS from '../../assets/images/react.png';
import ReactNative from '../../assets/images/react.png';
import Firebase from '../../assets/images/firebase.png';
import Node from '../../assets/images/node.png';
import Flutter from '../../assets/images/flutter.png';
import Tailwind from '../../assets/images/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#4357AD] text-[#CCD6F6]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-b-[#61DBFB] text-[#CCD6F6]'>Compétences</p>
                <p className='py-4'>Voici les technologies avec lesquelles je travaille.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJS} alt="React-Logo"></img>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript-Logo"></img>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind-Logo"></img>
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node-Logo"></img>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Flutter} alt="Flutter-Logo"></img>
                    <p className='my-4'>FLUTTER</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactNative} alt="React-Native-Logo"></img>
                    <p className='my-4'>REACT NATIVE</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase-Logo"></img>
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#29335C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github-Logo"></img>
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;