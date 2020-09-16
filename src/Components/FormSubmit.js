import React, { Component } from 'react';
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
          <div style={{ margin: 3 }}>
            <form onSubmit={this.props.onSubmitMessage} style={{ display: "flex", backgroundColor: "#ffffff", margin: -3 }}>
              <input type="text" style={{ flex: 10, height: 40, borderRadius: 3, margin: 5, fontSize: 20 }} onChange={this.props.onChangeMessage} />
              <button type="submit" style={{ backgroundColor: "#e8e8e8", height: 45, flex: 1, borderRadius: 3, margin: 5 }}>
                <strong>Add</strong>
              </button>
            </form>
          </div>
        );
    }
}

export default FormComponent;