import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import ItemDetail from "./Pages/PostPage";
import "./style.css";
import { fetchItems } from "./redux/actions/actionsCreator";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ marginLeft: "20px" }}>Social Media App</h2>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
