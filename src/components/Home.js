import { Link } from 'react-router-dom';
import '../styles/Home.scss';

function Home() {
  return (
    <div>
        <header>
            <div className='background'>
                <nav>
                    <h1>DrawingProject</h1>
                    <Link to='/draw'><button>Start Drawing</button></Link>
                </nav>
            </div>
        </header>
    </div>
  );
}

export default Home;
