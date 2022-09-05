import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#4357AD] text-[#CCD6F6] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c4f2fffe-f68b-4af4-9fb8-a3be00f8abda" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-b-[#61DBFB]'>Contactez-moi</p>
                <p className='py-4'>Remplissez le formulaire ci-dessous ou envoyez-moi un e-mail: graig.kolodziejczyk@ynov.com</p>
            </div>
            <input className='text-black bg-[#CCD6F6] border-b-[#4357AD] p-2' type="text" placeholder='Nom' name='name'/>
            <input className=' text-black my-4 p-2 bg-[#CCD6F6]' type="email" placeholder='Email' name='email'/>
            <textarea className='text-black bg-[#CCD6F6] p-2' placeholder='Message' name='message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#61DBFB] hover:border-[#61DBFB] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Collaborons ensemble</button>
        </form>
    </div>
  );
}

export default Contact;