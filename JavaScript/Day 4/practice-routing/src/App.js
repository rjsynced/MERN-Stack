import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import Hello from './pages/Hello';
import Number from './pages/Number';
import HelloDetails from './pages/HelloDetails';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Routes>
            <Route path="/home" element={<Welcome />}/>
            <Route path="/:numId" element={<Number />}/>
            <Route path="/hello" element={<Hello />}/>
            <Route path="/:anyWord/:anyColor/:anyBackgroundColor" element={<HelloDetails />}/>
        </Routes>
      </main>
    </div>
  );
}
export default App;

// mywebsite.com/hello/anything/anything