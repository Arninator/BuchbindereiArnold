import {Data} from "content.json"

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log("blas")
        console.log(JSON.stringify(Data));
        return(
            <section className="detail-section">
                <div>BLaA</div>
            </section>
        )
    }
}
const Dots = () => {
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));