export const Practices=()=>{
   const students=[1]
   return <>
      {/* <p> {students.length && "No students Found"}</p> */}
      {/* 1st  */}
      {/* <p>{students.length ===0 && "No students Found"}</p> */}
      {/* 2nd */}
      {/* <p>{!students.length && "No Students Found"}</p> */}
      {/* 3rd */}
      <p>{Boolean(!students.length) && "No students Found"}</p>
      <p>No.of Students:{students.length}</p>
   
   </>
}