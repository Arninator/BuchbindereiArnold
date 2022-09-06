const tabs = ['bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten'];
const sectionLimits = [22, 16, 8, 16, 12];
const numbers = [];
for (let i=1; i <= 22; i++) {
  numbers.push(i);
}

class TitlePage extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.minusSlides = this.minusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    handleClick(e) {

    }
    minusSlides(e) {

    }
    currentSlide(e) {

    }
    plusSlides(e) {

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
  return(
    <section id={props.id + "-section"} className="sections">
      <h1 className="section-header">{props.id.charAt(0).toUpperCase() + props.id.substring(1)}</h1>
      <div className="vorschau-div">
        <a className={props.id + "-prev prev disabled"} onClick={props.onClick}>&#10094;</a>
        {numbers.map(number => {
          return <Link id={props.id} number={number} />
        })}
        <a className={props.id + "-next next"} onClick={props.onClick}>&#10095;</a>
      </div>
      <div className="dots-div">
        {numbers.map(number => {
          return <Dot id={props.id} number={number} onClick={props.onClick} />
        })}
      </div>
    </section>
  )
}
const Link = (props) => {
  return(
    <a id={props.id + "-button-" + props.number} className={"vorschau-button " + props.id}></a>
  )
}
const Dot = (props) => {
  return(
    <div className={"dot " + props.id + "-dot active"} id={props.id + "-dot-" + props.number} onClick={props.onClick}></div>
  )
}

ReactDOM.render(<TitlePage />, document.getElementById('root'));
