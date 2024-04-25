import { memo, useMemo } from "react"

// memorizing the functional component
export default  memo(function EmployeeDetails({winner="Rohini"})  {
  console.log("employee details")

  hoistedVariable = 3;
  console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
  var hoistedVariable;

    return (
        <>
        <h1>hello Rohini</h1>
        <h2>Winner: {winner}</h2>
        </>
    )
})