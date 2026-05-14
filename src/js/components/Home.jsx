import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component
const Home = () => {
    const [color, setColor] = useState("");
    // Usamos este estado para saber si debemos mostrar la luz púrpura o no
    const [showPurple, setShowPurple] = useState(false);

    const alternarColor = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else if (color === "green") {
            // Si el púrpura está activado, vamos a él. Si no, volvemos a rojo.
            showPurple ? setColor("purple") : setColor("red");
        } else {
            setColor("red");
        }
    };

    return (
        <div className="traffic-light-page-wrapper">
            <div className="traffic-light-top-pole"></div>
            <div className="traffic-light-body">
                <div
                    onClick={() => setColor("red")}
                    className={"light-circle red" + (color === "red" ? " glowing" : "")}
                ></div>
                <div
                    onClick={() => setColor("yellow")}
                    className={"light-circle yellow" + (color === "yellow" ? " glowing" : "")}
                ></div>
                <div
                    onClick={() => setColor("green")}
                    className={"light-circle green" + (color === "green" ? " glowing" : "")}
                ></div>
                
                {/* Solo se renderiza si showPurple es true */}
                {showPurple && (
                    <div
                        onClick={() => setColor("purple")}
                        className={"light-circle purple" + (color === "purple" ? " glowing" : "")}
                    ></div>
                )}
            </div>

            <div className="buttons-container">
                <button onClick={alternarColor} className="btn-cambiar">
                    Cambiar Color
                </button>
                
                <button onClick={() => setShowPurple(true)} className="btn-purpura">
                    Añadir Púrpura
                </button>
            </div>
        </div>
    );
};

export default Home;