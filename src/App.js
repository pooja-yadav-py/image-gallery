import {useState} from "react";
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

function App() {
	  const [selectedImage,updateSelectedImages]=useState("");

  return (
    <div className="App">
      <h1 className="heading_style">Photographer's showcase</h1>
          {selectedImage.length>0 && 
          	<div className="overlay">
             <div className="big-pic">
              <span onClick={() => updateSelectedImages("")} className="close">X</span>

              <img className="picture-big" src={selectedImage} />
              <p className="photo-title"></p>
             </div>
            </div>
          }

                   {Sdata.map((val) =>{
	                                    return(
		                                      <Card 
                                              imgsrc = {val.imgsrc}
                                              title = {val.title}
                                              updateSelectedImages={updateSelectedImages}
                                          />
		                                   );
                                      })}
                                        

    </div>
        );
        }

export default App;
