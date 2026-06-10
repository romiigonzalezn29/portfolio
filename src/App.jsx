// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Desktop from './Pages/Desktop'
import Recruiter from './Pages/Recruiter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop/>} />
        <Route path="/recruiter" element={<Recruiter/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App