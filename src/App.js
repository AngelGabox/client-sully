import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store';
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
