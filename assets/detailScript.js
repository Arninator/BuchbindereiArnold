let data;
let currentIndex;
let currentSection;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "",
            subIndex: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
        currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
        currentSection = sessionStorage.getItem("currentSection");

        this.setState({
            index: currentIndex,
            subIndex: 0
        })
    }
    handleClick(e) {
        if (currentSection != "kontakt" && currentSection != "aktuelles" && currentSection != "vita" && currentSection != "impressum") {
            if (e.target.className == "shortcuts") {
                currentIndex = e.target.id.substring(currentSection.length + 10);
                this.setState({
                    index: currentIndex,
                    subIndex: 0
                })
            } else if (e.target.className == "prev") {
                const subIndex = this.state.subIndex < 1 ? data[currentSection][currentIndex - 1].urls.length - 1 : this.state.subIndex - 1;
                console.log(subIndex);
                this.setState({
                    subIndex: subIndex
                })
            } else if (e.target.className == "next") {
                const subIndex = this.state.subIndex > data[currentSection][currentIndex - 1].urls.length - 2 ? 0 : this.state.subIndex + 1;
                this.setState({
                    subIndex: subIndex
                })
            }
        }
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
                        return <Img id={obj.name} src={obj.urls} description={obj.description} title={obj.title} subtitle={obj.subtitle} foto={obj.foto} onClick={this.handleClick} subIndex={this.state.subIndex}/>
                    })}
                </div>
            </section>
        )
    }
}
const Shortcuts = (props) => {
    return(
        <div id={"shortcut-" + props.id} className={props.className} onClick={props.onClick}></div>
    )
}
const Img = (props) => {
    const currentImg = currentSection + "-" + currentIndex;

    return(
        <figure className="figure" style={props.id != currentImg ? {display: 'none'} : {}}>
            <div className="image-div">
                <button className="prev" onClick={props.onClick} style={1 == props.src.length ? {display: 'none'} : {}}>&#10094;</button>
                {props.src.map((url, index) => {
                    return <img id={props.id} src={url} alt={props.description[index]} style={index != props.subIndex ? {display: 'none'} : {}} />
                })}
                <button className="next" onClick={props.onClick} style={1 == props.src.length ? {display: 'none'} : {}}>&#10095;</button>
            </div>
            {props.description.map((description, index) => {
                const subIndex = props.subIndex > props.description.length - 1 ? props.description.length - 1 : props.subIndex;
                return(
                    <figcaption style={index != subIndex ? {display: 'none'} : {}}>
                        <h5 className="title" dangerouslySetInnerHTML={{__html:  props.title[index]}}></h5>
                        <h6 className="subtitle" dangerouslySetInnerHTML={{__html:  props.subtitle[index]}}></h6>
                        <p className="description" dangerouslySetInnerHTML={{__html:  description + "<br><br><span>" + props.foto[index] + "</span>"}}></p>
                    </figcaption>
                )                    
            })}
        </figure>
    )
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));