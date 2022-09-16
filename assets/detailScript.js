let data;
let currentIndex;
let currentSection;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
        currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
        currentSection = sessionStorage.getItem("currentSection");

        console.log(currentIndex + currentSection);
    }
    componentDidMount() {
        $(".prev").prop('disabled', true);
    }
    render () {
        return(
            <section className="detail-section">
                <div className="shortcuts-div">
                    {data["bucheinbaende"].map(obj => {
                        return <Dot id={obj.name} className="shortcuts" />
                    })}
                </div>
                <div className="grossansicht-div">
                    {data["bucheinbaende"].map(obj => {
                        return <Img id={obj.name} src={obj.urls} description={obj.description} title={obj.title} subtitle={obj.subtitle} foto={obj.foto}/>
                    })}
                </div>
            </section>
        )
    }
}
const Dot = (props) => {
    return(
        <div id={props.id} className={props.className}></div>
    )
}
const Img = (props) => {
    const currentImg = currentSection + "-" + currentIndex;

    return(
        <figure className="figure">
            <div className="image-div">
                <a className="prev" style={props.id != currentImg ? {display: 'none'} : {}}>&#10094;</a>
                {props.src.map((url, index) => {
                    console.log(props.id);
                    return <img id={props.id} src={url} alt={props.description[index]} style={props.id != currentImg ? {display: 'none'} : {}} />
                })}
                <a className="next" style={props.id != currentImg ? {display: 'none'} : {}}>&#10095;</a>
            </div>
            {props.description.map((description, index) => {
                return(
                    <figcaption style={props.id != currentImg ? {display: 'none'} : {}}>
                        <h5>{props.title[index]}</h5>
                        <h6>{props.subtitle[index]}</h6>
                        <p>{description}<br></br><br></br><span>{props.foto[index]}</span></p>
                    </figcaption>
                )                    
            })}
            
        </figure>
    )
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));