import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key,value){
    this.setState({[key]:value
  });
}
  addItem(){
    // Creates item with an id for each one
    const newItem={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // copy of current list of items
    const list = [...this.state.list];
    // add new items to list
    list.push(newItem);
    // updates state with new list and reset new item input
    this.setState ({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list = [...this.state.list]
    const updatedList= list.filter(item =>item.id !==id);
    this.setState({list: updatedList});
  }

  render(){
    return (
      <div className="App">
        <div className="container">
        <h1>To Do List</h1>
        <div>
          Add an Item...
          <br></br>
          <input className="input" type="text" placeholder="Type Item here" value={this.state.newItem} 
                 onChange={e=>this.updateInput("newItem",e.target.value)}/><br></br>
          <button className="AddButton" onClick={()=>this.addItem()} >Add</button>

          <ul>
            {this.state.list.map(item=>{
              return(
                <li className="ListItem" key= {item.id}>
                  {item.value}
                  <button className="deleteButton" onClick={()=> this.deleteItem(item.id)}>
                  Delete</button>
                  </li>
              )
            })}
          </ul>
        </div>
        </div>
      </div>
      );

  }
  
}

export default App;
