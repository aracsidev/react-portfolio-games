import '../css/solutions.css';

const LightsOutSolutions = (props) => {

    // 0 = no display
    // 1 = solution 1
    // 2 = solution 2
    const { solution } = props;

    console.log(solution)

    return (
        <div className={`solutions ${solution === 0 ? '' : 'active'}`} id='solutions'>
            <p className='f24'>{`Solution 1`}</p>
            <p className='f14'>{`My solution was to assign coordinates to the lights aswell, so that: [x, y] turns [x+1, y], [x-1, y], [x, y+1] and [x, y-1]. This means a more complicated setup, but an easier (quicker) execution.  You have to check if num >= 0 and num <= gridSize, and turn those lights. This makes it more flexible over different grid sizes.`}</p>
        </div>
    )
}

export default LightsOutSolutions