import './App.css';
import { Route,Routes } from 'react-router-dom';
//import Post from './Webpages/Post';
import Home from './Webpages/Home';
import User from './Webpages/user';

function App() {
  return (
    <div>
      <h1>Fetch Api Example</h1>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/user/ :id" element={<User/>}/>
    </Routes>
    </div>
  );
}

export default App;
