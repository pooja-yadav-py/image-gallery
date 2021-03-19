import React from "react";

function Card(props){
  
	return(
		<>     
           <div className ="cards" >
           <div className ="card">
           <img src={props.imgsrc} alt="mypic" className="card_img" onClick={() => props.updateSelectedImages(props.imgsrc)}/>
           <div className="card_info">
           <h3 className="card_title">{props.title}</h3>
           </div> 
           </div>
           </div>
    </>
		)
}

export default Card;