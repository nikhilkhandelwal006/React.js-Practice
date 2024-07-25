// export const SeriesCard=(props)=>{
//     return( <li key={props}>
//         <div><img src={props.curElem.img_url} height="40%" width="40%"  /></div>
//         <h2>Name:{props.curElem.name}</h2>
//         <h3>Rating:{props.curElem.rating}</h3>
//         <p>Summary:{props.curElem.description}</p>
//         <p>Genre:{props.curElem.genre}</p>
//         <p>Cast:{props.curElem.cast}</p>
//         <a href={props.curElem.watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//        </li>)
// }



//  Destructing in React

// export const SeriesCard=({data})=>{
//         // console.log(props)
//         const {id, img_url,name,rating,description,genre,cast,watch_url}=data;
//     return( <li className="card" >
       
//         <div><img src={img_url} height="40%" width="40%"  /></div>
//         <div className="card-content">

//         <h2>Name:{name}</h2>
//         <p>Summary:{description}</p>
//         <h3>Rating:{rating}</h3>
//         <p>Genre:{genre.join(",")}</p>
//         <p>Cast:{cast.join(",")}</p>
//         <a href={watch_url} target="_blank">
//         <button>Watch Now</button>
//         </a>
//         </div>
//        </li>)
// }


//Inline Css in React & conditional Styling 

// export const SeriesCard=({data})=>{
//     // console.log(props)
//     const {id, img_url,name,rating,description,genre,cast,watch_url}=data;
//     const btn_style={padding:"1rem",
//     border:"none",fontSize:"1.2rem",
//     backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
//     color:"var(--btn-color)",
//     fontWeight:"bold",
//     cursor:"pointer"}
//     const ratingClass=rating>=8.5?"super_hit":"average";
// return( <li className="card" >
   
//     <div><img src={img_url} height="40%" width="40%"  /></div>
//     <div className="card-content">

//     <h2>Name:{name}</h2>
//     <p>Summary:{description}</p>
//     <h3>Rating: <span className= {`rating ${ratingClass}`} > {rating} </span> </h3>
//     <p>Genre:{genre.join(",")}</p>
//     <p>Cast:{cast.join(",")}</p>
//     <a href={watch_url} target="_blank">
//     <button style={btn_style}>Watch Now</button>
//     </a>
//     </div>
//    </li>)
// } 


//Css Module in React:-

// import styles from "./Netflix.module.css"

// export const SeriesCard=({data})=>{
//     // console.log(props)
//     const { img_url,name,rating,description,genre,cast,watch_url}=data;
//     const btn_style={padding:"1rem",
//     border:"none",fontSize:"1.2rem",
//     backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
//     color:"var(--btn-color)",
//     fontWeight:"bold",
//     cursor:"pointer"}
//     const ratingClass=rating>=8.5? styles.super_hit: styles.average;
// return( <li className={styles.card} >
   
//     <div><img src={img_url} height="40%" width="40%"  /></div>
// <div className={styles["card-content"]}>

//     <h2>Name:{name}</h2>
//     <p>Summary:{description}</p>
//     <h3>Rating: <span className= {`${styles.rating} ${ratingClass}`} > {rating} </span> </h3>
//     <p>Genre:{genre.join(",")}</p>
//     <p>Cast:{cast.join(",")}</p>
//     <a href={watch_url} target="_blank">
//     <button style={btn_style}>Watch Now</button>
//     </a>
//     </div>
//    </li>)
// } 


//   Styled components in React:


// import styles from "./Netflix.module.css";
// import styled from "styled-components"

// export const SeriesCard=({data})=>{
//     // console.log(props)
//     const { img_url,name,rating,description,genre,cast,watch_url}=data;
//     const Buttonnikhil=styled.button({
//         padding:"1rem",
//         border:"none",fontSize:"1.2rem",
//         backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
//         color:"var(--btn-color)",
//         fontWeight:"bold",
//         cursor:"pointer"
//     })
//     // const btn_style={}
//     const ratingClass=rating>=8.5? styles.super_hit: styles.average;
// return( <li className={styles.card} >
   
//     <div><img src={img_url} height="40%" width="40%"  /></div>
// <div className={styles["card-content"]}>

//     <h2>Name:{name}</h2>
//     <p>Summary:{description}</p>
//     <h3>Rating: <span className= {`${styles.rating} ${ratingClass}`} > {rating} </span> </h3>
//     <p>Genre:{genre.join(",")}</p>
//     <p>Cast:{cast.join(",")}</p>
//     <a href={watch_url} target="_blank">
//     {/* <button style={btn_style}>Watch Now</button> */}
//     <Buttonnikhil>Watch now</Buttonnikhil>


//     </a>
//     </div>
//    </li>)
// } 



//adding Tailwind Css in react

import styles from "./Netflix.module.css";
import styled from "styled-components"

export const SeriesCard=({data})=>{
    // console.log(props)
    const { img_url,name,rating,description,genre,cast,watch_url}=data;
    const Buttonnikhil=styled.button({
        padding:"1rem",
        border:"none",fontSize:"1.2rem",
        backgroundColor:`${rating>=8.5?"#7dcea0":"#f7dc6f"}`,
        color:"var(--btn-color)",
        fontWeight:"bold",
        cursor:"pointer"
    })
    // const btn_style={}
    const ratingClass=rating>=8.5? styles.super_hit: styles.average;
return( <li className={styles.card} >
   
    <div><img src={img_url} height="40%" width="40%"  /></div>
<div className={styles["card-content"]}>

    <h2>Name:{name}</h2>
    <p className="text-3xl font-bold underline">Summary:{description}</p>
    <h3>Rating: <span className= {`${styles.rating} ${ratingClass}`} > {rating} </span> </h3>
    <p>Genre:{genre.join(",")}</p>
    <p>Cast:{cast.join(",")}</p>
    <a href={watch_url} target="_blank">
    {/* <button style={btn_style}>Watch Now</button> */}
    <Buttonnikhil>Watch now</Buttonnikhil>


    </a>
    </div>
   </li>)
} 