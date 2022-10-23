import '../css/levelsbar.css';

const LevelsBar = (props) => {

    const { title, lvlNum, currentLvl } = props;

    return (
        <div className="levelsbar">
            <div className="lb-title">
                <p className="f24">{title}</p>
                <p className="f24">{`${currentLvl+1}/${lvlNum}`}</p>
            </div>
            <div className={`lb-bar bar-${currentLvl+1}`}></div>
        </div>
    )
}

export default LevelsBar