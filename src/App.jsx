import './css/main.css';
import './css/fonts.css';

import MainPage from './pages/MainPage';
import LightsOutPage from './pages/LightsOutPage';
import TicTacToePage from './pages/TicTacToePage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={ <MainPage title='Aracsidev | Main' /> } />

                    <Route exact path='/games/lightsout' element={ <LightsOutPage title='Aracsidev | Lights out' /> } />
                    <Route exact path='/games/tictactoe' element={ <TicTacToePage title='Aracsidev | Tic Tac Toe' /> } />

                    <Route path='/games' element={ <Navigate replace to='/games/lightsout' /> } />
                    <Route path='*' element={ <Navigate replace to='/' /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
