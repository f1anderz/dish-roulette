import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Recipe from './components/Recipe.jsx';
import About from './components/About.jsx';

function App() {

    return (<div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
