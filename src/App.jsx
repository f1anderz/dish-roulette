import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home.jsx';
import Recipe from './views/Recipe.jsx';
import About from './views/About.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

    return (<BrowserRouter>
        <NavBar/>
        <main className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    </BrowserRouter>);
}

export default App;
