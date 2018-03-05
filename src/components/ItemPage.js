import React from 'react';

export class ItemPage extends React.Component {

  id = null;

  constructor(params) {
    super();
    this.id = params.id;
  }

  render() {
    return (
      <div className="item-page">
        <h1>Item #{this.id}</h1>
      </div>
    );
  }
}

export default ItemPage;
