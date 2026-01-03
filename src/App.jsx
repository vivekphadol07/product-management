import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-background">
        <BrowserRouter>
          <Routes>
            <Route path="/product-management/" element={<Home />} />
            <Route path="/product-management/add-product" element={<AddProduct />} />
            <Route path="/product-management/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
};

export default App;
