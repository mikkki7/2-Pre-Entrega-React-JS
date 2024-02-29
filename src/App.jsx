import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
