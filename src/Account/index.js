import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
        <h2>name:</h2>
      </div>
    )
  }
}

export default Account;
