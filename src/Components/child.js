import React, {Component} from "react";

export default class Child extends Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }
  
    handleinsert = () => {
      this.props.insert();
      this.setState({ arrofobj: this.props.Data });
    };
    handledelete = () => {
      this.props.delete();
      this.setState({ arrofobj: this.props.Data });
    };
    render(props) {
      console.log(this.props);
      return (
        <div>
          <button onClick={this.handleinsert}>Insert</button>
          <button onClick={this.handledelete}>Delete</button>
          {this.props.arrofobj.map((value, ind) => {
            return <h3 key={ind}>{value.name}</h3>;
          })}
          <input onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
      );
    }
  }