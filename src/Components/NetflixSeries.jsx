//  const NetflixSeries=()=>{
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

// export default NetflixSeries;

// export const Header=()=>{
//     return <p>Copyright @Nikhil</p>
// }
//  export const Footer=()=>{
//     return <p>Copyright @Nk</p>
// }




// Looping in JSX


// import seriesData from "../api/seriesData.json";

// const NetflixSeries=()=>{
//     return (
    
//     <ul>
//         {seriesData.map((curElem)=>{
//                 return( <li key={curElem.id}>
//                  <div><img src={curElem.img_url} height="40%" width="40%"  /></div>
//                  <h2>Name:{curElem.name}</h2>
//                  <h3>Rating:{curElem.rating}</h3>
//                  <p>Summary:{curElem.description}</p>
//                  <p>Genre:{curElem.genre}</p>
//                  <p>Cast:{curElem.cast}</p>
//                  <a href={curElem.watch_url} target="_blank">
//                  <button>Watch Now</button>
//                  </a>
//                 </li>) }
                
//        ) };
//         </ul>);
// }

// export default NetflixSeries;





// Props in React

// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";

// const NetflixSeries=()=>{
//     return (
    
//     <ul>
//         {seriesData.map((curElem)=>(
//          <SeriesCard key={curElem.id} curElem={curElem}/>
//     )) }
//      </ul>);
// }

// export default NetflixSeries;




// Destructing in React


// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";

// const NetflixSeries=()=>{
//     return (
    
//     <ul >
//         {seriesData.map((curElem)=>(
//          <SeriesCard key={curElem.id} data={curElem}/>
//     )) }
//      </ul>);
// }

// export default NetflixSeries;




// Adding css in react

import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries=()=>{
    return (
    
    <ul className="grid grid-three--cols">
        {seriesData.map((curElem)=>(
         <SeriesCard key={curElem.id} data={curElem}/>
    )) }
     </ul>);
}

export default NetflixSeries;


