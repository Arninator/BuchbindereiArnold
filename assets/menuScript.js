const tabs = ['index', 'bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten', 'aktuelles', 'vita', 'kontakt'];

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <header id="menu-container">
        <Logo />
        <NavBar />
      </header>
    )
  }
}

const Logo = () => {
  return(
    <div id="logo-container">
      <div id="logo-anett-arnold">Anett&nbsp;Arnold</div>
      <div id="logo-buchbinderei">Buchbinderei</div>
    </div>
  )
}
const NavBar = () => {
  return(
    <nav id="nav-bar">
      <ul id="menu-list">
        {tabs.map(tab => {
          return <ListElement id={tab} key={tab}/>
        })}
      </ul>
    </nav>
  )
}
const ListElement = (props) => {
  return(
    props.id == "index" ?
      <li className="list-element" key={props.key}><a href={props.id + ".html"}><i className="fa fa-home"></i></a></li>
    : props.id == ("aktuelles" || "vita" || "kontakt") ?
      <li className="list-element" key={props.key}><a href={props.id + ".html"}>{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</a></li>
    : <li className="list-element" key={props.key}><a href={"#" + props.id + "-section"}>{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</a></li>
  );
}

ReactDOM.render(<Menu />, document.getElementById('menu'));
