import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Rectangle35 from './assets/img/Rectangle 35.png'

function App() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${Rectangle35}), url(${Rectangle35})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        backgroundColor:'red'
      }} >
        <NavBar />
        <Header />
      </div>
    </>
  );
}

export default App;
