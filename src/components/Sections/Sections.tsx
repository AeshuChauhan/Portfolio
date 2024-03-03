import React from 'react'
import { NavBar } from '../navbar/NavBar'
import AboutSection from './about/AboutSection'

export default function Sections() {
    return (

        <div className='relative border-2 rounded mb-16 md:mb-auto'>
            <NavBar />

            <div className=" px-5">
                <AboutSection />

            </div>
        </div>
    )
}
