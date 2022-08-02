import './App.css';
import { LandingContent, LandingHeader, LandingFooter} from './ui-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from "./Authentication";
import Lasthour from './lasthour';


function App() {

return (
  <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingHeader />}></Route>
        </Routes>
        <div className='Content'>
          <Routes>
            <Route path="/" element={<LandingContent />}></Route>
            <Route path="/auth" element={<Authentication />}></Route>
            <Route path="/lasthour" element={<Lasthour />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<LandingFooter />}></Route>
        </Routes>
      </div>
  </Router>
);
}

export default App;
