// import React from "react";

// export const App=()=>{
//   return <h1>Hello, Nk!!</h1>
//  };

// export const App=()=>{
//  return  React.createElement("h1",null,"Hello, NK!");

// };

// React.createElement("h1",null,"Hello, NK!");

//

//    export const App=()=>{
//     return <div> <h2>Queen of Tears</h2>
//            <div> <img src="i.jpg" alt="" /></div>
//            <h3>Rating: 8.2</h3>
//            <p>
//             summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio fugiat voluptatum, alias consequatur rerum labore voluptate illum accusantium ipsum placeat eos et corrupti quaerat eius fuga nemo? Facere, obcaecati?
//            </p>

//            </div>
//    }

// Components in React  //-------------------------------

//  const NetflixSeries = () => {
//   return (
//     <div>
      
//       <h2>Queen of Tears</h2>
//       <div>
      
//         <img src="i.jpg" alt="" />
//       </div>
//       <h3>Rating: 8.2</h3>
//       <p>
//         summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Mollitia odio fugiat voluptatum, alias consequatur rerum labore
//         voluptate illum accusantium ipsum placeat eos et corrupti quaerat eius
//         fuga nemo? Facere, obcaecati?
//       </p>
//     </div>
//   );
// };


// export const App=()=>{
//         return (
//                 <div>
//                         <NetflixSeries/>
//                         <NetflixSeries/>
//                         <NetflixSeries/>
//                 </div>
//         )
// }


// React Fragments or react unwanted Nodes



// export const App=()=>{
//         return [<NetflixSeries key="1"/> , <NetflixSeries key="2"/>];
// }

        //       or


//  export const App=()=>{
//      return (
//         <React.Fragment>
//         <NetflixSeries/>
//         <NetflixSeries/>
//         <NetflixSeries/>
//         <NetflixSeries/>
//         </React.Fragment>
//      );
//  };  

     //         or

//      export const App=()=>{
//         return (
//            <>
//            <NetflixSeries/>
//            <NetflixSeries/>
//            <NetflixSeries/>
//            <NetflixSeries/>
//            </>
//         );
//     };  

// const NetflixSeries = () => {
//         return (
//                 <div>
      
//       <h2>Queen of Tears</h2>
//       <div>
      
//         <img src="i.jpg" alt="" />
//       </div>
//       <h3>Rating: 8.2</h3>
//       <p>
//         summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Mollitia odio fugiat voluptatum, alias consequatur rerum labore
//         voluptate illum accusantium ipsum placeat eos et corrupti quaerat eius
//         fuga nemo? Facere, obcaecati?
//       </p>
//     </div>
//   );
// };


// Dynamic Values in JSX

// export const App=()=>{
//         const name="Queen of Tears";
//         // const Rating="8.2"
//         const returnG=()=>{
//                 const genre="rom-com"
//                 return genre
//         }
//         const summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sint ratione nostrum error tenetur molestias fugit, odio obcaecati praesentium corporis reiciendis illum suscipit nihil quis iure eveniet rem mollitia laboriosam?"

//         return (<>
//         <h2>Name:{name}</h2>
//         <div><img src="i.jpg" alt="" /></div>
//         <h3>Rating:{5+3.1}</h3>
//         <p>Summary:{summary}</p>
//         <p>Genre:{returnG()}</p>



//         </>)
// }


      // Conditional Rendering in JSX


//       export const App=()=>{
//         const name="Queen of Tears";
//         // const Rating="8.2"
//         const returnG=()=>{
//                 const genre="rom-com"
//                 return genre
//         }
//         let age=19;
//         // const canWatch=()=>{
//         //         if(age>=18){
//         //                 return "Watch Now"
//         //         }else{
//         //                 return "Not available"
//         //         }
//         // }
//         const summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sint ratione nostrum error tenetur molestias fugit, odio obcaecati praesentium corporis reiciendis illum suscipit nihil quis iure eveniet rem mollitia laboriosam?"

//         return (<>
//         <h2>Name:{name}</h2>
//         <div><img src="i.jpg" alt="" /></div>
//         <h3>Rating:{5+3.1}</h3>
//         <p>Summary:{summary}</p>
//         <p>Genre:{returnG()}</p>
//         {/* <button>{canWatch()}</button> */}
//         <button>{age>=18?"watch now":"Not available"}</button>



//         </>)
// }




  // React Import and Export

//   import NetflixSeries, {Header,Footer} from "./Components/NetflixSeries";

//      export const App=()=>{
//         return (
//            <>
//            <NetflixSeries/>
//            <NetflixSeries/>
//            <Header/>
//            <NetflixSeries/>
//            <NetflixSeries/>
//            <Footer/>
//            </>
//         );
//     };  




// Looping in JSX

// import NetflixSeries from "./Components/NetflixSeries";

// export const App=()=>{
//    return (
//       <>
//       <NetflixSeries/>
     
//       </>
//    );
// };  


//Adding CSS Styling in React

// import NetflixSeries from "./Components/NetflixSeries";
// import  "./Components/Netflix.css";

// export const App=()=>{
//    return (
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>
//       <NetflixSeries/>
     
//       </section>
//    );
// };  


//Css Modules in React


import NetflixSeries from "./Components/NetflixSeries";
// import  "./Components/Netflix.css";
import "./Components/Netflix.module.css"


export const App=()=>{
   return (
      <section className="container">
         <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries/>
     
      </section>
   );
};  
