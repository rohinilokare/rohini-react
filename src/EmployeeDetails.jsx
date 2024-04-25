import { memo, useMemo } from "react"

// memorizing the functional component
export default  memo(function EmployeeDetails({winner="Rohini"})  {
  console.log("employee details")

    return (
        <>
        <h1>hello Rohini</h1>
        <h2>Winner: {winner}</h2>
        </>
    )
})