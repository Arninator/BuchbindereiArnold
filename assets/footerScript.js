const links = ["Impressum", "Datenschutz", "Kontakt"]

class Footer extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <footer>
                <p className="copyright-p">Copyright © 2013-2022 Buchbinderei Anett Arnold</p>
                <ul>
                    {links.map(link => {
                        return <ListElement name={link}/>
                    })}
                </ul>
            </footer>
        );
    }
}
const ListElement = (props) => {
    return(
        <li>
            <a className="datenschutz-links" href={props.name + ".html"}>{props.name}</a>
        </li>
    ) 
}

ReactDOM.render(<Footer />, document.getElementById('footer'));