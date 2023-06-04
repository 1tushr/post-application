import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { loading, error, items } = useSelector((state) => state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const navigateToItem = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div className="items-container">
      {items && items.map((item) => (
        <div
          onClick={() => navigateToItem(item.id)}
          className="items-content"
          key={item.id}
        >
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt={`${item.id}`}
          ></img>
          <div className="item-details">
            <p>User ID: {item.userId}</p>
            <p>Title : {item.title.slice(0, 25)}......</p>
            <p>Body : {item.body.slice(0, 60)}......</p>
            <p>Read More..</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
