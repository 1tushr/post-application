import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const { loading, error, items } = useSelector((state) => state);

  if (loading) {
    return <div>Loading item details...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  const item = items && items.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Item with ID {id} not found.</div>;
  }

  const { title, body, userId } = item;

  return (
    <div>
      <div className='item-detail'>
        <h2>Details of Item with ID: {item.id}</h2>
        <img src={`https://picsum.photos/200?random=${item.id}`} alt={`Item ${item.id}`} />
        <p>User ID: {userId}</p>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
