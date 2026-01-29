import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const Home = React.lazy(() => import('./pages/Home'))

// style configration
import './styles/app.scss'
import './styles/banner.scss'


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
