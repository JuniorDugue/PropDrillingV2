import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>Greetings {this.props.to}, from {this.props.from}</p>
      </div>
    );
  }
}

export default Hello;
