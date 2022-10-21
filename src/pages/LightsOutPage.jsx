import '../css/lightsout.css';

import LevelsBar from '../components/LevelsBar';

import data from '../assets/data/lights-out-levels.json';
import LightsOutSolutions from '../components/LightsOutSolutions';

import { useState } from 'react';

const LightsOutPage = () => {

    const lvlNum = 1
    const [solution, setSolution] = useState(0);

    function lightNeighbours(coords, size) {
        // Needs to flip nodes with coordinates of [+0,+1] [+0,-1] [+1,+0] [-1,+0]
        // Unless the node is on the edge or on the corner
        const targetCoords = [
            [coords[0],coords[1]+1],
            [coords[0],coords[1]-1],
            [coords[0]+1,coords[1]],
            [coords[0]-1,coords[1]]
        ];

        var newTargetCoords = targetCoords.map((targetCoord) => {
            const newTargetCoord = targetCoord.map((coord) => {
                if (coord < 0 || coord > size-1) {
                    return;
                } else {
                    return coord;
                }
            })
            return newTargetCoord;
        }).filter((e) => {
            if (e[1] !== undefined && e[0] !== undefined) {
                return e;
            }
        });

        newTargetCoords.map((coords) => {
            const node = document.getElementById(`${coords}`);
            node.classList.contains('active') ? node.classList.remove('active') : node.classList.add('active')
        });
    }

    return (
        <div className="lightsout">
            <LevelsBar title='Lights Out'/>
            <div className='lo-content'>
                <div className='lo-game'>
                    {
                        data[`level_${lvlNum}`].map((nodeData) => {

                            // Make sure to provide a list of nodes that is a square number!
                            // The game therefore cannot be play in a rectangle becouse of this!
                            const gridSize = Math.sqrt(data[`level_${lvlNum}`].length);

                            return <div key={nodeData[0]}
                                className={`lo-game-node-lvl${lvlNum} ${(nodeData[1] === 1) ? 'active' : ''}`}
                                id={`${nodeData[0]}`}
                                onClick={(e) => {
                                    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
                                    lightNeighbours(nodeData[0], gridSize);
                                }}></div>
                        })
                    }
                    <LightsOutSolutions solution={solution} />
                </div>
                <div className='lo-description'>
                    <p className='f14'>GAME SHOWCASE</p>
                    <p className='f32'>Lights Out</p>
                    <div className='lo-description-container'>
                        <p className='f24'>How it works:</p>
                        <p className='f14'>Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off.</p>
                    </div>
                    <div className='lo-description-container'>
                        <p className='f24'>Coding challange:</p>
                        <p className='f14'>Turning the lights based on a simple array of numbers (1 if lit, 0 if unlit)</p>
                    </div>
                    <div className='lo-description-links noselect'>
                        <p className='f24' onClick={() => {
                            solution === 1 ? setSolution(0) : setSolution(1);
                        }}>Solution 1</p>
                        <p className='f24' onClick={() => {
                            solution === 2 ? setSolution(0) : setSolution(2);
                        }}>Solution 2</p>
                        <p className='f24'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightsOutPage