let data;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
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
                        return <Img id={obj.name} src={obj.url} description={obj.description}/>
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
    return(
        <figure className="figure">
            <div className="image-div">
                <a className="prev" >&#10094;</a>
                <img id={props.id} src={props.src} alt={props.description} />
                <a className="next" >&#10095;</a>
            </div>
            <figcaption>
                {props.description}
            </figcaption>
        </figure>
    )
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));