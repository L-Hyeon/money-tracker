import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Menu from './components/organisms/Menu';
import Header from './components/organisms/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Menu />
    </BrowserRouter>
  );
}

export default App;
