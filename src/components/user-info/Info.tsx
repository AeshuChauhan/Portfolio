"use client";
import React, { useState } from 'react'
import { CiCircleChevDown } from 'react-icons/ci';
import { FaLinkedin, FaGithub, FaWhatsapp, FaSchool } from "react-icons/fa";
import { FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdOutlineMail } from 'react-icons/md';
import Image from 'next/image';
import { GrMapLocation } from 'react-icons/gr';
import { ContactsTabs } from './ContactsTabs';
import { motion } from 'framer-motion';
import { IoSchoolSharp } from 'react-icons/io5';
export default function UserInfo() {
    const [show, setShow] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 2, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative px-1 border-2 rounded">

            {/* Toggle button */}
            <motion.button
                className="p-1 absolute right-0 top-0 border-l-2 shadow shadow-yellow-500/40 border-b-2 rounded-lg"
                onClick={() => setShow(prev => !prev)}
            >
                <CiCircleChevDown size={25} color={'rgb(234 179 8)'} />
            </motion.button>

            {/* User Info Name and Title */}
            <div className='flex py-3'>
                <div className="">
                    <Image className="h-full w-32 rounded-lg"
                        src="/assets/AeshuChauhan.png"
                        alt="Modern building architecture"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='flex flex-col justify-end gap-y-3'>
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

            {/* User Info Contact Details */}
            {show && <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='gap-5 '
            >
                <motion.div className="relative grid gap-y-4 border-t-2 mb-5 pt-5 mx-4">
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

            {show && <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='gap-5 '
            >
                <motion.div className="relative grid gap-y-4 border-t-2 mb-5 pt-5 mx-4">
                    <ContactsTabs
                        title={"B.Tech (CSE)"}
                        info={"2015-2019 with 76%"}
                        icon={<IoSchoolSharp size={25} />}
                    />
                    <ContactsTabs
                        title={"10th,12th Grade"}
                        info={"2013-2015 with 78.93 & 83.33%"}
                        icon={<FaSchool size={25} />}
                    />

                    {/* <ContactsTabs
                        title={"Location"}
                        info={"Arthala Mohan Nagar 201007"}
                        icon={<GrMapLocation size={25} />}
                    />
                    <ContactsTabs
                        title={"WhatsApp"}
                        info={"9897361666"}
                        icon={<FaWhatsapp size={25} />}
                    /> */}
                </motion.div>
            </motion.div>}
        </motion.div >



    )


}
