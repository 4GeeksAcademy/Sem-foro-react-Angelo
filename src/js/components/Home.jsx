import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component
const Home = () => {
 const [color,setcolor] = useState ("red");
 return (
	<div className="text-center">
		<div id="trafficTop"></div>

		<div id="container">
			<div 
			onClick={() => setcolor("red")} 
			className={"light red"+(color === "red"?"glow":"")}
			></div>
			<div
			onClick={() => setcolor("yellow")} 
			className={"light yellow"+(color === "yellow"?"glow":"")}
			></div>
			<div 
			onClick={() => setcolor ("green")}
			className= {"light green"+(color === "green"?"glow":"")}
			></div>
	</div>
	</div>
 )
};

export default Home;