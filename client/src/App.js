import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Hotel from "./Hotel/Hotel"
import HotelList from "./HotelsList/HotelList"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
