

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        }
    }
    componentWillMount() {
        var data;

        fetch('../assets/content.json')
        .then((response) => response.json())
        .then((findresponse) => {
            this.setState({
                data: findresponse
        })
            data = findresponse;
            // console.log(JSON.stringify(data));
            console.log("WILL: " + JSON.stringify(this.state.data));
            return findresponse;
        })
        
        console.log(JSON.stringify(data));
    }
    componentDidMount() {
        console.log("DID: " + JSON.stringify(this.state.data));
    }
    render () {
        return(
            <section className="detail-section">
                <div>BLA</div>
            </section>
        )
    }
}
const Dots = () => {
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));