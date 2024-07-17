import React, { useState } from 'react';
import './style.css'
import {motion} from 'framer-motion'

export default function BasketBallPlayerCard({src, playername, position, stats}){


    return(
        <div>

        {
                <motion.div
                whileHover = {{scale:1.1, cursor:'pointer'}} 
                
                
                className='player-card'
                >
                    <div className='image-container'>
                        <img src= {src} alt="stephen curry" className='playerImage'/>
                    </div>

                    <div className='PlayerDetails-container'>
                        <h1 className='playerName'>{playername}</h1>
                        <p className='playerPosition'>{position}</p>
                    </div>

                    <div className='playerStats'>
                        <p className='player-pointer'><span>Pointer </span><p>{stats.pointer} </p></p>
                        <p className='player-assist'><span>Assist</span><p>{stats.assist}</p></p>
                        <p className='player-rebound'><span>Rebound</span><p>{stats.rebound}</p></p>
                    </div>
                </motion.div>
            }
        
        
        </div>
);
}