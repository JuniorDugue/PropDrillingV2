import React from "react";

class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    let questionMark = "?".repeat(this.props.questionMark);
    let twoDash = "-".repeat(this.props.twoDash);

    return (
      <div>
        <img src={this.props.img} alt="lambda"/>
        <p>
          Greetings {this.props.to}, from {this.props.from}
          {bangs}
        </p>

        <p>node sass {twoDash}save</p>

      </div>
    );
  }
}

export default Hello;
