import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import {ProductProvider} from './context/Context';
function App() {
  return (
    <Router> 
    <Wrapper className="App">
     <Route exact path="/"><Home/></Route>   
    </Wrapper>
    </Router> 
  );
}

const Wrapper = styled.div`
margin: 0px;
`

export default App;
