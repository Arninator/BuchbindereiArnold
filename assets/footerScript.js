const links = ["impressum", "datenschutz", "kontakt"]

class Footer extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        sessionStorage.setItem("currentSection", e.target.parentElement.key != "datenschutz" ? e.target.parentElement.key : "impressum");
    }
    render () {
        return(
            <footer>
                <p className="copyright-p">Copyright © 2013-2024&emsp;Buchbinderei Anett Arnold</p>
                <ul>
                    {links.map(link => {
                        return <ListElement name={link} key={link} onClick={this.handleClick}/>
                    })}
                </ul>
            </footer>
        );
    }
}
const ListElement = (props) => {
    return(
        <li className="list-element" id={props.key} key={props.key}>
            {props.name == "datenschutz" ? <a className="datenschutz-links" href={"impressum.html"} onClick={props.onClick}>{props.name.charAt(0).toUpperCase() + props.name.substring(1)}</a> : <a className="datenschutz-links" href={props.name + ".html"} onClick={props.onClick}>{props.name.charAt(0).toUpperCase() + props.name.substring(1)}</a>}
        </li>
    ) 
}

ReactDOM.render(<Footer />, document.getElementById('footer'));