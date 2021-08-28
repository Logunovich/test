import React, {useState} from 'react';


export default class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLog: false
    }
    this.changeLogIn = this.changeLogIn.bind(this);
    this.changeLogOn = this.changeLogOn.bind(this);
  }

  changeLogIn () {
    this.setState({isLog: false})
  }


  changeLogOn() {
    this.setState({isLog: true});
  }


  render () {
    const isLogined = this.state.isLog;
    let func;
    if (isLogined) {
      func = this.changeLogIn;
    } else {
      func = this.changeLogOn;
    }

    return (
      <>
      <Greet isLog={isLogined}/>
      <Btn isLog={isLogined}
           onClick={func}/>
      </>
    )
  }
}

function Greet ({isLog}) {
  if (isLog) {
    return (
      <Hello />
    )
  } else {
    return (
      <LogPls />
    )
  }

}

function Hello () {
  return (
    <div>И снова здрасте!</div>
  )
}

function LogPls () {
  return (
    <div>Пора логиниться!</div>
  )
}


function Btn ({isLog, onClick}) {
  if (isLog) {
    return (
      <button
      onClick={onClick}>
      Выйти!</button>
    )
  } else {
    return (
      <button
      onClick={onClick}>
      Войти!</button>
    )
  }
}


