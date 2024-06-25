import { useState } from 'react'
import './App.css'
// Import Components 
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Article from './components/Article.jsx'
// Import props (dynamic data)
import articleInfo from './assets/data/articles.js'
import header from './assets/data/header.js'
import topNav from './assets/data/top-nav.js'
import bottomNav from './assets/data/bottom-nav.js'


function App() {
  return (
    <div>
      <Header info={header} />
      <Navigation info={topNav} />
      
      {articleInfo.map((article, index) => (
        <Article key={index} info={article} />
      ))}

      <Navigation info={bottomNav} />
    </div>
  )
}

export default App
