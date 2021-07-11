import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Dropbar from './components/Dropbar/Dropbar';
import './App.css';
import { useGlobalContext } from './context';

function App() {
  const {loadDropbar} = useGlobalContext();
  return (
    <>
      <Navbar />
      {loadDropbar&& <Dropbar />}
      <Sidebar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
