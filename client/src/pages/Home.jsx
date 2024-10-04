import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth'); // Redirect to the login/register page
  };

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to InsureCare</h1>
        <p>We provide AI-driven insurance literacy and solutions.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </header>
    </div>
  );
}

export default Home;
