import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred }, { purchased })}>
      <h3>{name}</h3>
      { quantity && <p className="Grocery-quantity">Quantity: {quantity}</p> }
      { notes && <p className="Grocery-notes">Notes: {notes}</p> }
      <button className="Grocery-purchase" onClick={onPurchase}>{purchased ? `Unpurchase` : `Purchase` }</button>
      <button className="Grocery-star" onClick={onStar}>{starred ? `Unstar` : `Star` }</button>
      <button className="Grocery-delete" onClick={onDelete}>Delete</button>
    </article>
  );
};

export default Grocery;
