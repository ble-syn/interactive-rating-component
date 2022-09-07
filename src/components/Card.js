import {useState} from "react";
import CardTwo from "./CardTwo";
import {ReactComponent as ReactLogo} from "../assets/icon-star.svg";


function Card (){
    const [Rating, setRating] = useState(0)
    const [showMe, setShowMe] = useState(false)
    
    
    const numClick = (event) => {
        event.preventDefault()
        let value = event.target.value
        setRating(+value)
    
    }
    const submit = (event) => {
        event.preventDefault()
        if (Rating) {
            setShowMe(true)
        } 
    }
    
    return (
    <>
        { !showMe &&  
            <div className="card-container">  
                <div className="star-wrap">
                    < ReactLogo />
                </div> 
                    
                
                <h1 className="card-header">How did we do?</h1>
                <p className="card-text">  
                    Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </p>
        
                <div className="numbers">
                    <input 
                        value={1} 
                        type="button" 
                        className={Rating === 1 ? "numberbtn active" : "numberbtn"}
                        onClick={numClick}
                    />
                    <input 
                        value={2} 
                        type="button" 
                        className={Rating === 2 ? "numberbtn active" : "numberbtn"} 
                        onClick={numClick}
                    />
                    <input 
                        value={3} 
                        type="button" 
                        className={Rating === 3 ? "numberbtn active" : "numberbtn"}
                        onClick={numClick}
                    />
                    <input 
                        value={4} 
                        type="button" 
                        className={Rating === 4 ? "numberbtn active" : "numberbtn"}
                        onClick={numClick}
                    />
                    <input 
                        value={5} 
                        type="button" 
                        className={Rating === 5 ? "numberbtn active" : "numberbtn"}
                        onClick={numClick}
                    />
                </div>
        
        
                <button 
                    className={Rating ? "submit-btn" : "submit-btn disabled"}
                    onClick={submit} 
                    type="submit"> SUBMIT
                </button>
                
            </div>
        }
   
    {
        showMe ? <CardTwo value={Rating} /> : ""
    }
    
    </>
   )
}
export default Card