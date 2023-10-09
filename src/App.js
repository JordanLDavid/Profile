import './App.css';
import Profile from './components/Title';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Profile/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
