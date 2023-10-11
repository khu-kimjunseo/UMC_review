import { useState } from "react";
import Hover from "./Hover";

function Movie(props) {
    const [isHover, setHover] = useState(false)
    const PosterURL = `https://image.tmdb.org/t/p/w1280/${props.url}`;
    return (
        <div className="movieWrap" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img className="poster" src={PosterURL} alt={props.title}/>
            <div className="textWrap">
                <div className="title">{props.title}</div>
                <div className="rate">{props.rate}</div>
            </div>
            <Hover hover={isHover} title={props.title} overview={props.overview}></Hover>
        </div>
    )
}

export default Movie