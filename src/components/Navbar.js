import { Component, React } from "react";
import { Switch } from "antd";
import 'antd/dist/antd.less'
import moment from "moment";
import "./Clock.css"
import Form from "./Form";
import Comment from "./Comment";
import data from "../Data";
import UnsplashSearch from "./UnsplashSearch";

class Navbar extends Component {
    constructor (props) {
        super(props)
            this.state = {
                content : false
            }
        }
    
        toggleSwitch = () => {
            this.setState ({
                content : !this.state.content
            })
        }
    render (){
        return (
        <div className="navbar">
            <div className="navchild" style={{background : 'lightgrey', margin :'20px'}}>
            React App
            <Switch onClick={ this.toggleSwitch } className = "toggle"/>
            </div>
            <div className="toggleContent">
                {this.state.content ? 
                <div className='ui container comments'>
                    <Form />
                    {data.map((item, index) => (
                        <Comment key={index} item={item}/>
                    ))
                    }
                    </div> 
                    : ''}
                    </div>
        </div>
            
            
            
        )
    }
}
export default Navbar;
