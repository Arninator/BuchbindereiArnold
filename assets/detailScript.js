let data = [];

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
                {data["bucheinbaende"].map(obj => {
                    return <div>{obj.name}</div>
                })}
            </section>
        )
    }
}
const Dots = () => {
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));