const tabs = ['bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten', 'aktuelles', 'vita', 'kontakt'];

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }
  componentDidMount() {
    let activeTab = window.location.pathname.includes(sessionStorage.getItem("currentSection")) ? sessionStorage.getItem("currentSection") : window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1 , window.location.pathname.length - 5);
    $(window).on("click", this.handleWindowClick);

    if (activeTab != "index" && activeTab != "datenschutz" && activeTab != "impressum" && !window.location.pathname.includes("index.html")) {

      let tab = document.getElementById(activeTab);
      tab.style.borderBottom = "1px solid white";
      tab.style.borderRight = "1px solid grey";
      tab.style.borderLeft = "1px solid grey";
      tab.firstChild.style.color = "darkred";

    } else if (window.location.pathname.includes("index.html")) {
      tabs.slice(0,5).map(section => {
        document.getElementById(section).children[0].setAttribute("href", "#" + section + "-section");
      })
    }
  }
  handleClick(e) {

    if (window.location.pathname.includes("index.html") && tabs.slice(0, 5).indexOf(e.target.parentElement.id) != -1) {
      document.getElementById(e.target.parentElement.id + "-section").scrollIntoView();
      sessionStorage.setItem("currentSection", "index");
    } else {
      sessionStorage.setItem("currentSection", e.target.parentElement.id);
    }
  }
  handleWindowClick(e) {
    if (e.target.parentElement.id == "burger-button") {
      $(".menu-list").addClass("menu-list-burger");
      $(".menu-list").children().addClass("list-element-burger");
      $(".menu-list").css("display", "block");
      $(".menu-list").remove("menu-list");      
    } else {
      $(".menu-list-burger").addClass("menu-list");
      $(".menu-list-burger").children().removeClass("list-element-burger");
      $(".menu-list-burger").css("display", "none");
      $(".menu-list-burger").remove("menu-list-burger");
    }    
  }
  render () {
    return (
      <header id="menu-container">
        <Logo onClick={this.handleClick}/>
        <NavBar onClick={this.handleClick}/>
      </header>
    )
  }
}

const Logo = (props) => {
  return(
    <a href="index.html" onClick={props.onClick}>
      <div id="logo-container">
        <div id="logo-anett-arnold">Anett&nbsp;Arnold</div>
        <div id="logo-buchbinderei">Buchbinderei</div>
      </div>
    </a>
  )
}
const NavBar = (props) => {
  return(
    <nav id="nav-bar">
      <div className="list-element" id="index" key="index"><a href="index.html" onClick={props.onClick}><i className="fa fa-home"></i></a></div>
      <div id="burger-button" className="list-element" onClick={props.onClick}><i className="fa fa-bars"></i></div>
      <ul className="menu-list">
        {tabs.map(tab => {
          return <ListElement id={tab} key={tab} onClick={props.onClick}/>
        })}
      </ul>
    </nav>
  )
}
const ListElement = (props) => {
  return(
    props.id == "aktuelles" || props.id == "vita" || props.id == "kontakt" ?
      <li className="list-element" id={props.id} key={props.key}><a href={props.id + ".html"} onClick={props.onClick}>{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</a></li>
    : <li className="list-element" id={props.id} key={props.key}><a href={"index.html"} onClick={props.onClick}>{props.id != "bucheinbaende" ? props.id.charAt(0).toUpperCase() + props.id.substring(1) : "Bucheinbände"}</a></li>
  );
}

ReactDOM.render(<Menu />, document.getElementById('menu'));
