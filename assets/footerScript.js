class FooterClass extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        console.log("BLA");
        return(
            <footer>
                <div>BLABLA</div>
            </footer>
        );
    }
}

ReactDOM.render(<FooterClass />, document.getElementById('footer'));