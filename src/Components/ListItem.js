import React, { Component } from 'react';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({target}){
        if (target.checked){
           target.setAttribute('checked', false);
           target.parentNode.style.textDecoration = "line-through";
           this.props.todos.pop()
        } else {
          console.log("6")
          target.removeAttribute('checked');
           target.parentNode.style.textDecoration = "";
        }
    }

    render() {
        return (
            <div>
                {this.props.todos.map(item =>(
                    <div
                    key={item.id}
                    style={{
                    backgroundColor: "#fefefe",
                    borderColor: "#ccc",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderRadius: 5,
                    width: 500,
                    margin: 25,
                    padding: 15,
                    paddingTop: 15,
                    paddingBottom: 25
                    }}
                    >
                    <input type="checkbox"  onClick={this.handleChange}/>
                    {item.name}
                    </div>
                ))}
            </div>            
        );
    }
}

export default ListItem;