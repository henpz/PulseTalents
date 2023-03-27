
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages';
import DjAction from './Pages/actionmind';
import DjAristids from './Pages/aristids';
import DjBiomic from './Pages/biomic';
import DjBlackm from './Pages/blackmoon';
import DjEriston from './Pages/eriston';
import DjFleke from './Pages/fleck';
import DjGenezyon from './Pages/genezyon';
import DjLowtreck from './Pages/lowtrack';
import DjNewcode from './Pages/newcode';
import DjPia from './Pages/pianesc';
import DjSlound from './Pages/sloundness';
import DjSonic from './Pages/sonicsky';
import DjTraxies from './Pages/traxiesmoon';
import DjTrue from './Pages/truefelling';
import DjVicentt from './Pages/vicentt';






function App() {


  
  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    <Routes>
      <Route path='/actionmind' element={<DjAction />} />
    </Routes>

    <Routes>
      <Route path='/aristids' element={<DjAristids />} />
    </Routes>

    <Routes>
      <Route path='/biomic' element={<DjBiomic />} />
    </Routes>

    <Routes>
      <Route path='/blackmoon' element={<DjBlackm />} />
    </Routes>

    <Routes>
      <Route path='/eristtonC' element={<DjEriston />} />
    </Routes>

    <Routes>
      <Route path='/fleke' element={<DjFleke />} />
    </Routes>

    <Routes>
      <Route path='/genezyon' element={<DjGenezyon />} />
    </Routes>

    <Routes>
      <Route path='/lowtreck' element={<DjLowtreck />} />
    </Routes>

    <Routes>
      <Route path='/newcode' element={<DjNewcode />} />
    </Routes>

    <Routes>
      <Route path='/pianesc' element={<DjPia />} />
    </Routes>

    <Routes>
      <Route path='/sloundness' element={<DjSlound />} />
    </Routes>

    <Routes>
      <Route path='/sonicsky' element={<DjSonic />} />
    </Routes>

    <Routes>
      <Route path='/traxiesmoon' element={<DjTraxies />} />
    </Routes>

    <Routes>
      <Route path='/truefelling' element={<DjTrue />} />
    </Routes>

    <Routes>
      <Route path='/vicentzanicheli' element={<DjVicentt />} />
    </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App;
