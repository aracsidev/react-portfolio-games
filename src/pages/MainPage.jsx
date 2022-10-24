import { Link } from "react-router-dom";

const MainPage = (props) => {

    document.title = props.title;

    return (
        <div className="mainpage">
            <p className="f14">This is a placeholder page for my actual website.</p>
            <Link to='/games' className='lo-btn noselect'>
                <p className='f24'>TO GAMES PAGE</p>
            </Link>
        </div>
    )
}

export default MainPage