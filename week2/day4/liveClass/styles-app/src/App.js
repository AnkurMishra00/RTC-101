import logo from './logo.svg';

import './App.css';
// import Flexbox from './Flexbox';

import {AppStyled,AppLogo,AppHeader,Flexbox} from './App.styled'


function App() {
  
  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo}  alt="logo" />
        <Flexbox flexDirection= "row">
          <div>a</div>
          <div>b</div>
        </Flexbox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;




