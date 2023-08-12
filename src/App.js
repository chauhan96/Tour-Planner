
import data from "./data"
import React, {useState} from "react";
import Tours from "./Tours.js"


const App = () => {
  const [tour, setTour] = useState(data)

function removeHandler(id) {
   const newTours = tour.filter(tour => tour.id !== id)
   setTour(newTours)
}

if(tour.length === 0){
     return (
      <div className="refresh">
        <h2>No tours left</h2>

        <button className="btn-white" onClick={() => setTour(data)}>Refresh</button>
      </div>
     )
}

  return (
    <div className="App">
   <Tours data={tour} removeHandler={removeHandler}></Tours>
    </div>
    
  );
};

export default App;
