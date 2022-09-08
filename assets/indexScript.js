const tabs = ['bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten'];
const sectionLimits = [22, 16, 8, 16, 12];

class TitlePage extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.minusSlides = this.minusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    handleClick(e) {
      console.log(e.target.id);
      if (e.target.className == "next") {
        this.plusSlides(e.target.id);
      } else if (e.target.className == "prev") {
        this.minusSlides(e.target.className);
      } else if (e.target.className.substring(0, 15) == ("vorschau-button")) {
        console.log("vorschau-button");
      } else if (e.target.className.substring(0, 3) == "dot") {
        console.log("dot");
        this.currentSlide();
      }
    }
    minusSlides() {

    }
    currentSlide() {

    }
    plusSlides(name) {
      const section = name.substring(0, name.length-5);
      let previews = document.getElementsByClassName(section);
      const index = $("."+ section).filter(function () {
        return $(this).css('display') != "none";
      })[2].id.substring(section.length + 8) + 1;
      $({"." + section + " " + index}).css('display') = 'block';
      $({"." + section + " " + (index - 3)}).css('display') = 'none';
    }

    render () {
        return (
          <div>
            {tabs.map(tab => {
              return <Section id={tab} onClick={this.handleClick}/>
            })}
          </div>
        )
    }
}

const Section = (props) => {
  const numbers = getTotalOfObjects(props.id);

  return(
    <section id={props.id + "-section"} className="sections">
      <h1 className="section-header">{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</h1>
      <div className="vorschau-div">
        <a id={props.id + "-prev"} className="prev" onClick={props.onClick} style={{display: 'none'}}>&#10094;</a>
        {numbers.map(number => {
          return <Preview id={props.id} number={number} onClick={props.onClick} />
        })}
        <a id={props.id + "-next"}className="next" onClick={props.onClick}>&#10095;</a>
      </div>
      <div className="dots-div">
        {numbers.map(number => {
          return <Dot id={props.id} number={number} onClick={props.onClick} />
        })}
      </div>
    </section>
  )
}
const Preview = (props) => {
  return(
    props.number <= 3 ? <a id={props.id + "-button-" + props.number} className={"vorschau-button " + props.id + " " + props.number} onClick={props.onClick}></a>
    : <a id={props.id + "-button-" + props.number} className={"vorschau-button " + props.id} onClick={props.onClick} style={{display: 'none'}}></a>
  )
}
const Dot = (props) => {
  return(
    props.number <= 3 ? <div className={"dot " + props.id + "-dot active"} id={props.id + "-dot-" + props.number} onClick={props.onClick}></div>
    : <div className={"dot " + props.id + "-dot"} id={props.id + "-dot-" + props.number} onClick={props.onClick}></div>
  )
}

//
//
//
function getTotalOfObjects(section) {
  const numbers = [];
  for (let i=1; i <= sectionLimits[tabs.indexOf(section)]; i++) {
    numbers.push(i);
  }
  return numbers;
}

ReactDOM.render(<TitlePage />, document.getElementById('root'));
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<TitlePage />);