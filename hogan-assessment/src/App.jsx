import { useState } from 'react';
import Welcome from './components/Welcome';
import Assessment from './components/Assessment';
import Report from './components/Report';
import './styles/App.css';

export default function App() {
  const [stage, setStage] = useState('welcome');
  const [responses, setResponses] = useState(null);

  function handleStart() {
    setStage('assessment');
  }

  function handleComplete(responses) {
    setResponses(responses);
    setStage('report');
  }

  function handleRestart() {
    setResponses(null);
    setStage('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app">
      {stage === 'welcome' && <Welcome onStart={handleStart} />}
      {stage === 'assessment' && <Assessment onComplete={handleComplete} />}
      {stage === 'report' && <Report responses={responses} onRestart={handleRestart} />}
    </div>
  );
}
