import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/itemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        <Route path="*" element={<div><h1>Error 404</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
