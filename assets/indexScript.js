const tabs = ['bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten'];
const sectionLimits = [22, 16, 8, 19, 12];

class TitlePage extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.minusSlides = this.minusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    handleClick(e) {
      // console.log(e.target.className);
      if (e.target.className == "next") {
        this.plusSlides(e.target.id);
      } else if (e.target.className == "prev") {
        this.minusSlides(e.target.id);
      // } else if (e.target.className.substring(0, 15) == ("vorschau-button")) {
      //   console.log("vorschau-button");
      } else if (e.target.className.substring(0, 3) == "dot") {
        this.currentSlide(e.target);
      }
    }
    minusSlides(name) {
      const section = name.substring(0, name.length-5);
      const lastIndex = parseInt($("."+ section).filter(function () {
        return $(this).css('display') != "none";
      })[2].id.substring(section.length + 8));
      const firstIndex = lastIndex - 3;

      if (firstIndex <= 0) {
        $("#" + section + "-prev").prop('disabled', true);
      } else {
        $("#" + section + "-button-" + firstIndex).css('display', 'block');
        $("#" + section + "-dot-" + firstIndex).addClass("active");
        $("#" + section + "-button-" + lastIndex).css('display', 'none');
        $("#" + section + "-dot-" + lastIndex).removeClass("active");
        $("#" + section + "-next").prop('disabled', false);
      }
    }
    currentSlide(object) {
      const section = object.id.substring(0, object.id.indexOf("-"));
      const index = parseInt(object.id.substring(section.length + 5));

      if ((index + 1) > document.getElementsByClassName(section + "-dot").length) {
        $("." + section + "-dot").removeClass("active");
        $("#" + section + "-dot-" + index).addClass("active");
        $("#" + section + "-dot-" + (index - 1)).addClass("active");
        $("#" + section + "-dot-" + (index - 2)).addClass("active");

        $("." + section).css("display", "none");
        $("#" + section + "-button-" + index).css("display", "block");
        $("#" + section + "-button-" + (index - 1)).css("display", "block");
        $("#" + section + "-button-" + (index - 2)).css("display", "block");

        $("#" + section + "-next").prop("disabled", true);
        $("#" + section + "-next").prop("color", "white");
        $("#" + section + "-next").prop("cursor", "default");
        console.log("bakjsbl");

      } else if ((index - 1) < 1) {

        $("." + section + "-dot").removeClass("active");
        $("#" + section + "-dot-" + index).addClass("active");
        $("#" + section + "-dot-" + (index + 1)).addClass("active");
        $("#" + section + "-dot-" + (index + 2)).addClass("active");

        console.log($("#" + section + "-dot-" + (index + 2)).css("display"));

        $("." + section).css("display", "none");
        $("#" + section + "-button-" + index).css("display", "block");
        $("#" + section + "-button-" + (index + 1)).css("display", "block");
        $("#" + section + "-button-" + (index + 2)).css("display", "block");

        $("#" + section + "-prev").prop("disabled", true);
        $("#" + section + "-prev").css("color", "white");
        $("#" + section + "-prev").css("cursor", "default");

      } else {

        $("." + section + "-dot").removeClass("active");
        $("#" + section + "-dot-" + index).addClass("active");
        $("#" + section + "-dot-" + (index + 1)).addClass("active");
        $("#" + section + "-dot-" + (index - 1)).addClass("active");

        $("." + section).css("display", "none");
        $("#" + section + "-button-" + index).css("display", "block");
        $("#" + section + "-button-" + (index + 1)).css("display", "block");
        $("#" + section + "-button-" + (index - 1)).css("display", "block");
      }
    }
    plusSlides(name) {
      
      const section = name.substring(0, name.length-5);
      const lastIndex = parseInt($("."+ section).filter(function () {
        return $(this).css('display') != "none";
      })[2].id.substring(section.length + 8)) + 1;
      const firstIndex = lastIndex - 3;

      if (lastIndex > document.getElementsByClassName(section).length) {
        $("#" + section + "-next").prop('disabled', true);
      } else {
        $("#" + section + "-button-" + lastIndex).css('display', 'block');
        $("#" + section + "-dot-" + lastIndex).addClass("active");
        $("#" + section + "-button-" + firstIndex).css('display', 'none');
        $("#" + section + "-dot-" + firstIndex).removeClass("active");
        $("#" + section + "-prev").prop('disabled', false);
      }
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
        <a id={props.id + "-prev"} className="prev" onClick={props.onClick} >&#10094;</a>
        {numbers.map(number => {
          return <Preview id={props.id} number={number} onClick={props.onClick} />
        })}
        <a id={props.id + "-next"} className="next" onClick={props.onClick}>&#10095;</a>
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
    props.number <= 3 ? <a id={props.id + "-button-" + props.number} className={"vorschau-button " + props.id} onClick={props.onClick} href={props.id + ".html"}></a>
    : <a id={props.id + "-button-" + props.number} className={"vorschau-button " + props.id} onClick={props.onClick}  href={props.id + ".html"} style={{display: 'none'}}></a>
  )
}
const Dot = (props) => {
  return(
    props.number <= 3 ? <div id={props.id + "-dot-" + props.number} className={"dot " + props.id + "-dot active"} onClick={props.onClick}></div>
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