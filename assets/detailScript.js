let data;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
    }
    render () {
        return(
            <section className="detail-section">
                <div className="shortcuts-div">
                    {data["bucheinbaende"].map(obj => {
                        return <Dot id={obj.name} className="shortcuts" />
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

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));