import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#4357AD] text-[#CCD6F6]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#61DBFB]'>A Propos</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hey, moi c'est Graig, enchanté ! Faite un tour je vous en prie.</p>
                    </div>
                    <div>
                        <p>Je suis passionné d'informatique et de développement web et mobile. Actuellement en B3 spécialité développement web & mobile chez YnovCampus je recherche une alternance pour poursuivre mon cursus mastère. Si mon profil vous plaît n' hésites pas à me contacter ;)</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About;