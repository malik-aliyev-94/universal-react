import React from 'react';
import { Link } from 'react-router-dom';

export class ItemsPage extends React.Component {

  render() {
    return (
      <div className="items-page">
        <h1>Items Page</h1>

        <Link to="/item/1" className="item">
          <p>Item #1</p>
        </Link>
        <Link to="/item/2" className="item">
          <p>Item #2</p>
        </Link>
        <Link to="/item/3" className="item">
          <p>Item #3</p>
        </Link>
      </div>
    );
  }
}

export default ItemsPage;
