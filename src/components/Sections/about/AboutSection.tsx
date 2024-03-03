import React from 'react'
import { TextGenerate } from './AboutMe'

export default function AboutSection() {
    return (
        <div className='my-5 mt-2 md:mt-16'>
            <div className='section-heading'>
                <h2 className="text-3xl font-bold text-yellow-500">About me</h2>
                <div className='mt-2 w-24 border-b-4 rounded-lg border-cyan-600 shadow-md shadow-yellow-500/40'></div>
            </div>
            <div className=''>
                <TextGenerate />
                <p className='text-xl font-bold text-yellow-500'>My Skills</p>

            </div>
        </div>
    )
}
