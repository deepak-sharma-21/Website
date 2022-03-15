import './App.css';
import { Skills } from './components/Skills';
import { Home } from './components/Home';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
