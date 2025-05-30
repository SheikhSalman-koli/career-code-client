import React from 'react';
import { motion } from "motion/react"
import team1 from '../assets/teams/colleagues-working-project-discussing-details.jpg'
import team2 from '../assets/teams/corporate-workers-brainstorming-together.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className='flex-1'>
                 <motion.img
                 animate={{
                    y:[40,80,40],
                    transition:{duration:5, repeat: Infinity}
                 }}
                    src={team1}
                    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl "
                />
                 <motion.img
                 animate={{
                    x:[40,80,40],
                    transition:{duration:10, delay:5, repeat: Infinity}
                 }}
                    src={team2}
                    className="max-w-sm rounded-t-[40px]  rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl "
                />
               </div>
                <div className='flex-1'>
                    <motion.h1
                    animate={{ rotate: 360 ,
                        transition: { duration: 2 }
                     }}
                     className="text-5xl font-bold">Remote Job For You!</motion.h1>
                    <motion.p className="py-6"
                    animate={{color:['#FC427B','#1B9CFC','#CAD3C8'],
                        transition: { duration: 2 }
                     }}
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;