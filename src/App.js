import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Blogs from './Components/Blog';
import HomePage from './Components/Home';
import Navbar from './Components/Navbar';
import { selectSignedIn } from './Feature/UserSlice';

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      {isSignedIn &&  <Blogs />}
    </div>
  );
}

export default App;
