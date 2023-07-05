import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrofobj: [
        { name: "shan" },
        { name: "nan" },
        { name: "rahul" },
        { name: "aanna" },
      ],
    };
  }
  delete = () => {
    let Data = this.state.arrofobj;
    Data.pop();
    console.log(Data);
    this.setState({ arrofobj: Data });
  };

  insert = () => {
    let Data = this.state.arrofobj;
    Data.push({ name: this.state.name });
    this.setState({ arrofobj: Data });
  };

  render() {
    return (
      <div>
        <Child
          arrofobj={this.state.arrofobj}
          delete={this.delete}
          insert={this.insert}
        />
      </div>
    );
  }
}