function Hover(props) {
    return (
        <div className={props.hover ? "hovering" : "nothovering"}>
            <div className="hoverTitle">{props.title}</div>
            <div className="overview">{props.overview}</div>
        </div>
    )
}

export default Hover