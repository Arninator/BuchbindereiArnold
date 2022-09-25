const tabs = ['index', 'bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten', 'aktuelles', 'vita', 'kontakt'];

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let activeTab = window.location.pathname.includes(sessionStorage.getItem("currentSection")) ? sessionStorage.getItem("currentSection") : window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1 , window.location.pathname.length - 5);

    if (activeTab != "index" && activeTab != "datenschutz" && activeTab != "impressum" && !window.location.pathname.includes("index.html")) {

      let tab = document.getElementById(activeTab);
      tab.style.borderBottom = "1px solid white";
      tab.style.borderRight = "1px solid grey";
      tab.style.borderLeft = "1px solid grey";
      tab.firstChild.style.color = "darkred";

    } else if (window.location.pathname.includes("index.html")) {
      tabs.slice(1,6).map(section => {
        document.getElementById(section).children[0].setAttribute("href", "#" + section + "-section");
      })
    }
  }
  handleClick(e) {

    if (window.location.pathname.includes("index.html") && tabs.slice(1, 6).indexOf(e.target.parentElement.id) != -1) {
      document.getElementById(e.target.parentElement.id + "-section").scrollIntoView();
      sessionStorage.setItem("currentSection", "index");
    } else {
      sessionStorage.setItem("currentSection", e.target.parentElement.id);
    }
  }
  render () {
    return (
      <header id="menu-container">
        <Logo />
        <NavBar onClick={this.handleClick}/>
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
const NavBar = (props) => {
  return(
    <nav id="nav-bar">
      <ul id="menu-list">
        {tabs.map(tab => {
          return <ListElement id={tab} key={tab} onClick={props.onClick}/>
        })}
      </ul>
    </nav>
  )
}
const ListElement = (props) => {
  return(
    props.id == "index" ?
      <li className="list-element" id={props.id} key={props.key}><a href={props.id + ".html"} onClick={props.onClick}><i className="fa fa-home"></i></a></li>
    : props.id == "aktuelles" || props.id == "vita" || props.id == "kontakt" ?
      <li className="list-element" id={props.id} key={props.key}><a href={props.id + ".html"} onClick={props.onClick}>{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</a></li>
    : <li className="list-element" id={props.id} key={props.key}><a href={"index.html"} onClick={props.onClick}>{props.id != "bucheinbaende" ? props.id.charAt(0).toUpperCase() + props.id.substring(1) : "Bucheinbände"}</a></li>
  );
}

ReactDOM.render(<Menu />, document.getElementById('menu'));
