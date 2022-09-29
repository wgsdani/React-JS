import React, { Component } from "react";

export default class Form extends Component{

    constructor (props) {
        super(props);
        this.state = {
             firstName: "",
             lastName: ""
    };

        this.handleSubmit = this.handleSubmit.bind (this);

    }
    handleSubmit (event) {
        alert ("A name was Submitted : " + this.state.firstName + this.state.lastName);
        event.preventDefault();
    }
    render () {
        return (
            <div className="ui container">
                <form onSubmit = {this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name"  value={this.state.FirstName}
                        onChange = {(e) => this.setState ({firstName : e.target.value})}/>
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name"  value={this.state.LastName}
                        onChange = {(e) => this.setState ({lastName : e.target.value})} />
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                    </form>
            </div>
        )
    }
}
