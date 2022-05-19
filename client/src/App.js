import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home/Home'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
