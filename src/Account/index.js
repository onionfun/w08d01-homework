import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state={
      balance: 0,
      inputBox: '',
    }
  }
  handleDeposit(e) {
    e.preventDefault();
    const amount = parseInt((this.inputBox.value), 10);
    const newB = this.state.balance + amount;
    this.setState({
      balance: newB
    })
    this.setState.inputBox = '';
  }
  handleWithdrawl(e) {
    e.preventDefault();
    const amount = parseInt((this.inputBox.value), 10);
    const newBal = this.state.balance - amount;
    this.setState({
      balance: newBal
    }) 
    this.setState.inputBox = '';
  }
 

  render() {
    const balanceClass = 'balance';
    if(this.state.balance ===0){
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>0</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={this.handleDeposit} ref={(input) => this.inputBox = input} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawl} ref={(input) => this.inputBox = input} />
        <h2>name:</h2>
      </div>
    )
  }
}

export default Account;


/*
Did you make a `let this.input = React.createRef()` and add a `ref={callback}` to your `<input type="text">` element?*/