import './App.css';
import './src/css/container.css';
import Menu from './src/components/menu';
import Pages from './src/components/pages';
import { BrowserRouter } from 'react-router-dom'
import ControllerTitleNavigator from './src/components/controlertitle';

function App() {
  return (
    <BrowserRouter>
      <ControllerTitleNavigator />
      <article className='container'>
        <Menu />
        <Pages />
      </article>
    </BrowserRouter>
  );
}

export default App;