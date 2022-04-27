//import React from "react";
import React, { useState } from "react"; //for using ue sate in react
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    LName: ""
  }); //initially they are null strings

  function handleChange(event) {
    const newValue = event.target.value;
    //ab hume agar sirf lname change ho rha to sirf lname change ho vice vers
    const inputName = event.target.name;
    setFullName((prevValue) => {
      //to remenber previos kya input tha
      if (inputName == "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName == "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
        <div class="login image">
        </div>
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          //  value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          //     value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
