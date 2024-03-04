import React from 'react'
import { TextGenerate } from './AboutMe'
import { SkillTooltip } from './SkillsToolTip'
import skillData from '@/utils/skillData'
import { FaDownload } from 'react-icons/fa';
export default function AboutSection() {
    const { programmingLanguage, frontEnd, backEnd, db, otherTool } = skillData();
    return (
        <div className='my-5 mt-2 md:mt-16'>
            <div className='section-heading'>
                <h2 className="text-3xl font-bold text-yellow-500">About me</h2>
                <div className='mt-2 w-24 border-b-4 rounded-lg border-cyan-600 shadow-md shadow-yellow-500/40'></div>
            </div>
            <div className=''>
                <TextGenerate />
                <div className="my-5">
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-xl font-bold text-yellow-500'>My Skills</p>
                            <div className='mt-1 w-12 border-b-2 rounded-lg border-cyan-600 shadow-md shadow-yellow-500/40'></div>
                        </div>
                        <div>
                            <button className='flex gap-3 me-1'>
                                <span className='text-lg font-bold text-yellow-500 hidden sm:block'>Resume</span>
                                <FaDownload size={20} className='text-cyan-500' />
                            </button>
                            <div className='mt-1 w-12 border-b-2 rounded-lg hidden sm:block border-cyan-600 shadow-md shadow-yellow-500/40'></div>

                        </div>
                    </div>
                    <div className="border-2 rounded my-3">
                        <div className='flex flex-col justify-center w-full px-5 py-5'>
                            <p className="line-clamp-2 text-sm mb-2 leading-snug ">{'Programming Languages:'}</p>
                            <SkillTooltip skills={programmingLanguage} />

                            <p className="line-clamp-2 text-sm mb-2 leading-snug ">{'Front-End:'}</p>
                            <SkillTooltip skills={frontEnd} />

                            <p className="line-clamp-2 text-sm mb-2 leading-snug ">{'Back-End:'}</p>
                            <SkillTooltip skills={backEnd} />

                            <p className="line-clamp-2 text-sm mb-2 leading-snug ">{'Database:'}</p>
                            <SkillTooltip skills={db} />

                            <p className="line-clamp-2 text-sm mb-2 leading-snug ">{'Version Control & tools:'}</p>
                            <SkillTooltip skills={otherTool} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
