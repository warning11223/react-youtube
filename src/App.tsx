import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Routes, Route} from 'react-router-dom'
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <>
      <Nav />
        <Routes>
            <Route path='/' element={<Feed />}/>
            <Route path='/video/:id' element={<VideoDetail />}/>
            <Route path='/channel/:id' element={<ChannelDetail />}/>
            <Route path='/search/:searchTerm' element={<SearchFeed />}/>
        </Routes>
    </>
  );
}

export default App;
