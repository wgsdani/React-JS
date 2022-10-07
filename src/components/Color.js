// Import the React and ReactDOM libraries 
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Create a function with Hooks 
function App() {
    const [color, setColor] = useState("red");
    return (
            <>
                <h1> My Favorite color is {color}!</h1>
                <button type= "button" onClick={() => setColor ("blue")}>
                    Blue
                </button>
                <button type= "button" onClick={() => setColor ("red")}>
                    Red
                </button>
                <button type= "button" onClick={() => setColor ("pink")}>
                    Pink
                </button>
                <button type= "button" onClick={() => setColor ("green")}>
                    Green
                </button>
            </>
    );
 }