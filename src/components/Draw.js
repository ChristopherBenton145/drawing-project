import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import '../styles/Draw.scss';


function Draw() {
  return (
    <div>
        <div className='background'>
          <nav>
            <h1>DrawingProject</h1>
            <Link to='/' className='home-button'><button>Home</button></Link>
          </nav>
          <Canvas />
        </div>
    </div>
  );
}

export default Draw;
