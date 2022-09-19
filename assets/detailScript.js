let data;
let currentIndex;
let currentSection;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
        currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
        currentSection = sessionStorage.getItem("currentSection");

        console.log(sessionStorage.getItem("currentSection"));
        console.log(sessionStorage.getItem("currentIndex"));
    }
    componentDidMount() {
        $(".prev").prop('disabled', true);
        
    }
    handleClick() {

    }
    render () {
        return(
            <section className="detail-section">
                <div className="shortcuts-div">
                    {data[currentSection].map(obj => {
                        return <Shortcuts id={obj.name} className="shortcuts" onClick={this.handleClick}/>
                    })}
                </div>
                <div className="grossansicht-div">
                    {data[currentSection].map(obj => {
                        return <Img id={obj.name} src={obj.urls} description={obj.description} title={obj.title} subtitle={obj.subtitle} foto={obj.foto}/>
                    })}
                </div>
            </section>
        )
    }
}
const Shortcuts = (props) => {
    return(
        <div id={props.id} className={props.className} onClick={props.onClick}></div>
    )
}
const Img = (props) => {
    const currentImg = currentSection + "-" + currentIndex;

    return(
        <figure className="figure" style={props.id != currentImg ? {display: 'none'} : {}}>
            <div className="image-div">
                <button className="prev">&#10094;</button>
                {props.src.map((url, index) => {
                    console.log(url);
                    return <img id={props.id} src={url} alt={props.description[index]} style={index != 0 ? {display: 'none'} : {}} />
                })}
                <button className="next">&#10095;</button>
            </div>
            {props.description.map((description, index) => {
                return(
                    <figcaption style={index != 0 ? {display: 'none'} : {}}>
                        <h5 className="title" dangerouslySetInnerHTML={{__html:  props.title[index]}}></h5>
                        <h6 className="subtitle" dangerouslySetInnerHTML={{__html:  props.subtitle.length != 0 ? props.subtitle[index] : ""}}></h6>
                        <p className="description" dangerouslySetInnerHTML={{__html:  description + "<br><br><span>" + props.foto[index] + "</span>"}}></p>
                    </figcaption>
                )                    
            })}
        </figure>
    )
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));