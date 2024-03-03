"use client";
import React, { useState } from 'react'
import { CiCircleChevDown } from 'react-icons/ci';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdOutlineMail } from 'react-icons/md';
import Image from 'next/image';
import { GrMapLocation } from 'react-icons/gr';
import { ContactsTabs } from './ContactsTabs';
import { motion } from 'framer-motion';
export default function About() {
    const [show, setShow] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 2, y: -20 }}
            transition={{ duration: 0.3 }}
            className="m-3 md:mx-5 md:my-14 relative px-5 border-2 rounded">

            <motion.button
                className="p-1 absolute right-0 top-0 border-l-2 shadow-md shadow-yellow-500/40 border-b-2 rounded-lg"
                onClick={() => setShow(prev => !prev)}
            >
                <CiCircleChevDown size={25} color={'rgb(234 179 8)'} />
            </motion.button>

            <div className='flex'>
                <div className="p-3 md:p-3">
                    <Image className="h-full w-32 rounded-lg"
                        src="http://bachelorexam.com/wp-content/uploads/2023/11/Aeshu-Chauhan.jpg"
                        alt="Modern building architecture"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='flex flex-col justify-center gap-y-4 sm:ms-4'>
                    <div className='flex flex-col gap-y-1'>
                        <p className='font-bold text-xl text-yellow-500'> Aeshu Chauhan </p>
                        <p className='text-sm border rounded-lg py-1 text-center border-yellow-500 shadow-md shadow-yellow-500/40'> Full Stack developer</p>
                    </div>
                    <div className='flex gap-1'>
                        <button className="hover:bg-gray-600 p-1 rounded">
                            <FaLinkedin size={20} />
                        </button>
                        <button className="hover:bg-gray-600 p-1 rounded">
                            <FaGithub size={20} />
                        </button>
                        <button className="hover:bg-gray-600 p-1 rounded">
                            <FaSquareXTwitter size={20} />
                        </button>
                        <button className="hover:bg-gray-600 p-1 rounded">
                            <FiDownload size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {show && <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='gap-5'
            >
                <motion.div className="grid md:grid-cols-2 gap-y-4 border-t-2 my-5 pt-5">
                    {/* <div className="border-b-2" /> */}

                    <ContactsTabs
                        title={"Email"}
                        info={"aeshuchauhan@gmail.com"}
                        icon={<MdOutlineMail size={25} />}
                    />
                    <ContactsTabs
                        title={"Phone"}
                        info={"9897361666"}
                        icon={<FaSquarePhone size={25} />}
                    />

                    <ContactsTabs
                        title={"Location"}
                        info={"Arthala Mohan Nagar 201007"}
                        icon={<GrMapLocation size={25} />}
                    />
                    <ContactsTabs
                        title={"WhatsApp"}
                        info={"9897361666"}
                        icon={<FaWhatsapp size={25} />}
                    />

                </motion.div>

            </motion.div>}
        </motion.div >

    )


}
