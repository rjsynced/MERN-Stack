import './App.css'

import Wrapper from './Components/Wrapper';
import NavBar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper';
import UserContext from './Components/contexts/UserContext';

function App() {
  return (
    <Wrapper>
      <NavBar />
      <FormWrapper />
    </Wrapper>
  );
}

export default App
