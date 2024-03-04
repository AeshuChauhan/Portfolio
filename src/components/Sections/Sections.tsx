import React from 'react'
import { NavBar } from '../navbar/NavBar'
import AboutSection from './about/AboutSection'
import Projects from './projects/Projects'

export default function Sections() {
    return (

        <div className='relative border-2 rounded mb-16 md:mb-auto'>
            <NavBar />

            <div className="px-5">
                {/* <AboutSection /> */}
                <Projects />

            </div>
        </div>
    )
}
