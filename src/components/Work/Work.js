import React from 'react';
import Myrmhica from '../../assets/images/myrhmica.png';
import Tetris from '../../assets/images/Tetris.jpeg';
import Bitcoin from '../../assets/images/Bitcoin.jpeg';
import Instagram from '../../assets/images/Instagram.jpeg';
import Facebook from '../../assets/images/Facebook.png';
import '../../../src/index.css';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#4357AD] text-[#CCD6F6]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-b-[#61DBFB]'>Mes Projets</p>
                <p className='py-6'>Voir mes projets récents.</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* Grid items */}
                <div style={{ backgroundImage: `url(${Myrmhica})`}} className='shadow-lg shadow-[#29335C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl flex justify-center align-center font-bold text-white tracking-wider'>
                            Portraiscopie
                        </span>
                        <div>
                            <a className='pt-8 text-center' href="https://portraiscopiev1.vercel.app">
                                <button href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Détails</button>
                            </a>
                            <a href="/">
                                <button href="https://github.com/Myrhmica/PortraiScopie" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Tetris})`}} className='shadow-lg shadow-[#29335C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl flex justify-center align-center font-bold text-white tracking-wider'>
                            Tetris
                        </span>
                        <div>
                        <a className='pt-8 text-center' href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Détails</button>
                            </a>
                            <a className='pt-8 text-center' href="https://github.com/Gra1gkolodziejczyk/Tetris-CSharp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid items */}
                <div style={{ backgroundImage: `url(${Bitcoin})`}} className='shadow-lg shadow-[#29335C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl flex justify-center align-center font-bold text-white tracking-wider'>
                            Crypto App React-Native
                        </span>
                        <div className='flex justify-center align-center'>
                            <a href="https://github.com/Gra1gkolodziejczyk/Crypto-App">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Détails</button>
                            </a>
                            <a href="https://github.com/Gra1gkolodziejczyk/Crypto-App">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Instagram})`}} className='shadow-lg shadow-[#29335C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Instagram Clone SwiftUI
                        </span>
                        <div className='flex justify-center align-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Détails</button>
                            </a>
                            <a href="https://github.com/Gra1gkolodziejczyk/SwiftUI---InstagramClone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid items */}
                <div style={{ backgroundImage: `url(${Facebook})`}} className='shadow-lg shadow-[#29335C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Facebook Clone SwiftUI
                        </span>
                        <div className='flex justify-center align-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Détails</button>
                            </a>
                            <a href="https://github.com/Gra1gkolodziejczyk/SwiftUI---FacebookClone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;