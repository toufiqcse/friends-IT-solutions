// @ts-nocheck
import React from 'react';
import ContactForms from '../ContactForm/ContactForms';
import Image from 'next/image';


const Contact = () => {
    return (
        <div id='contact' className="bg-[#0E1628]   px-[5%] pt-10 md:pt-16 md:px-[10%] text-white  mx-auto p-2  border-b border-bottom " >
            <div className='container mx-auto text-center  py-4 md:py-8'>
                <h2 className="text-design text-3xl md:text-5xl font-black pb-8">Contact Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>
                    <div>
                        <ContactForms />
                    </div>
                    <div>
                        <Image src="https://thecapplug.com/img/cms/94599-contact-us.gif" alt="" width={400} height={300} className='rounded-md md:h-[450px] h-[300px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;