import React from 'react';
import { observer, inject } from "mobx-react";

@inject('AppStore')
@observer
export class IndexPage extends React.Component {

  componentDidMount() {
    window.store = this.props.AppStore.data;
  }

  render() {
    return (
      <div className="index-page">
        <h1>Home page</h1>
        <h3>{this.props.AppStore.data.title}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sunt ullam molestias recusandae ipsam nam dolore fuga quaerat nemo commodi? Voluptatum, aut ea. Iste tempora, aliquam ab sequi libero eos?</p>
      </div>
    );
  }
}

export default IndexPage;
