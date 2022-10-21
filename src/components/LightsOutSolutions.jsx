import '../css/solutions.css';

import { animated } from 'react-spring';

const LightsOutSolutions = (props) => {

    // 0 = no display
    // 1 = solution 1
    // 2 = solution 2
    const { solution, height, styles } = props;
    
    const solutionOneText = 'My solution was to assign coordinates to the lights aswell, so that: [x, y] turns [x+1, y], [x-1, y], [x, y+1] and [x, y-1]. This means a more complicated setup, but an easier (quicker) execution.  You have to check if num >= 0 and num <= gridSize, and turn those lights. This makes it more flexible over different grid sizes.';
    const solutionTwoText = 'Another solution would be to do it based on the index of the light, which would turn i+1, i+gridSize, i-1 and i-gridSize given that the grid is a square and i is the index of the clicked light. This would mean an quicker setup as you only have to add values: [0,1,0,0,1,1,...], but a slower execution. You have to setup the edge and corner lights in different arrays, and than check if the lights to be turned are within bounds or not. This assignment to arrays makes it less flexible over different grid sizes.';

    return (
        <animated.div style={styles} className={`solutions`} id='solutions'>
            <p className='f24'>{`Solution ${solution === 1 ? '1' : ''} ${solution === 2 ? '2' : ''}`}</p>
            <p className='f14'>{`${solution === 1 ? solutionOneText : ''} ${solution === 2 ? solutionTwoText : ''}`}</p>
        </animated.div>
    )
}

export default LightsOutSolutions