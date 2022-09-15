

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        }

        const [data, setData] = useState([]);
    }
    componentWillMount() {
        var data;

        fetch('../assets/content.json')
        .then((response) => response.json())
        .then((findresponse) => {
        //     this.setState({
        //         data: findresponse
        // })
            setData(findresponse);
            // data = findresponse;
            // console.log(JSON.stringify(data));
            console.log("WILL: " + JSON.stringify(this.state.data));
        })
        
        console.log(JSON.stringify(data));
    }
    componentDidMount() {
        console.log("DID: " + JSON.stringify(this.state.data));
    }
    render () {
        return(
            <section className="detail-section">
                <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
            </section>
        )
    }
}
const Dots = () => {
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));