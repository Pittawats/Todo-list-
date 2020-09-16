import React, { Component } from 'react';
import './App.css';
import HeaderComponen from './Components/HeaderComponen';
import FormSubmit from './Components/FormSubmit';
import List from './Components/List';
import ListItem from './Components/ListItem';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      todos:[
          // {id: 1,name: "ไปเที่ยว",complete :false},
          // {id: 2,name: "เดินเล่น",complete :false}
      ] ,
      message: ""
   };

   this.onChangeMessage = this.onChangeMessage.bind(this);
   this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  onChangeMessage(e){
    this.setState({message: e.target.value })
  }
  onSubmitMessage(e){
    e.preventDefault(); //กดsubmit แล้วไม่ให้โหลดเปลี่ยนหน้า *ป้องการการเปลี่ยนหน้า*
    let oldTodo = this.state.todos; //เอาtodo เก่ามา
    let todolengh = this.state.todos.length; //นับไอดี
    let newMassage = {}
    console.log(todolengh)
    console.log(this.state.message)
    if(this.state.message != ""){
    if(todolengh == 0){
      newMassage =  {id: todolengh ,name: this.state.message,complete :false};
    //  console.log(todolengh)
    }else{
     let lastId = this.state.todos[todolengh -1].id
    //  console.log("1 : ",todolengh)
    //  console.log("2 : ",this.state.todos[todolengh -1].id)
     newMassage =  {id: lastId +1 ,name: this.state.message,complete :false};
    }
    oldTodo.push(newMassage);
    this.setState({todos : oldTodo});
  }else{
    alert("error")
  }
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#000066",
          borderWidth: 3,
          borderStyle: "solid",
          borderRadius: 10,
          width: 600,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponen/>
        <FormSubmit 
        onChangeMessage={this.onChangeMessage} 
        onSubmitMessage={this.onSubmitMessage}
        onCallapi={this.onCallapi}/>   
        <List todos={this.state.todos}>
          <ListItem/>
        </List>   
      </div>
    );
  }
}

export default App;
