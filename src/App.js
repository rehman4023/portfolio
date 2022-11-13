import { lazy,useState, Suspense } from 'react';
import { themes } from "./theme";

const Hero = lazy(() => import('./components/Hero'));
const Project = lazy(() => import('./components/Project'));
const Skill = lazy(() => import('./components/Skill'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Expgen = lazy(() => import('./components/gExperience'));
const Certifications = lazy(() => import('./components/certifications/Certifications'));

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <Suspense
      fallback={
        <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      }
    >
      <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
        <main>
          <Hero />
          <Experience />
          <Expgen />
          <Project />
          <Skill />
          <Certifications theme={themes[theme]} setTheme={setTheme} />
          <Contact />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
