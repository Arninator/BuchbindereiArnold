let data;
let currentIndex;
let currentSection;

let touchStart = null;

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: "",
            subIndex: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd= this.handleTouchEnd.bind(this);
    }
    componentWillMount() {
        data = JSON.parse(sessionStorage.getItem("data"));
        currentIndex = parseInt(sessionStorage.getItem("currentIndex"));
        currentSection = window.location.pathname.includes(sessionStorage.getItem("currentSection")) ? sessionStorage.getItem("currentSection") : window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1 , window.location.pathname.length - 5);

        this.setState({
            index: currentIndex,
            subIndex: 0
        })
    }
    componentDidMount() {
        $("." + this.state.subIndex).addClass("active");
    }
    handleTouchStart(e) {
        if(e.touches.length === 1){
          touchStart = e.touches.item(0).clientX;
        }else{
          touchStart = null;
        }
    }
     handleTouchEnd(e) {
        if (touchStart) {
          let end = e.changedTouches.item(0).clientX;
          let objectID = e.target.id;
  
          console.log(data[currentSection][currentIndex - 1])

          if (data[currentSection][currentIndex - 1].urls.length > 1) {
            if (end > touchStart + 100) {
                const subIndex = this.state.subIndex < 1 ? data[currentSection][currentIndex - 1].urls.length - 1 : this.state.subIndex - 1;
                $(".dot").removeClass("active");
                $("." + subIndex).addClass("active");
                this.setState({
                    subIndex: subIndex
                })
            } else if (end < touchStart - 100) {
                const subIndex = this.state.subIndex > data[currentSection][currentIndex - 1].urls.length - 2 ? 0 : this.state.subIndex + 1;
                $(".dot").removeClass("active");
                $("." + subIndex).addClass("active");
                this.setState({
                    subIndex: subIndex
                })
            }
          }
          
        }
    }
    handleClick(e) {
        if (e.target.className == "shortcuts") {
            currentIndex = e.target.id.substring(currentSection.length + 10);
            $(".dot").removeClass("active");
            $(".0").addClass("active");
            this.setState({
                index: currentIndex,
                subIndex: 0
            })
        } else if (e.target.className == "prev") {
            const subIndex = this.state.subIndex < 1 ? data[currentSection][currentIndex - 1].urls.length - 1 : this.state.subIndex - 1;
            $(".dot").removeClass("active");
            $("." + subIndex).addClass("active");
            this.setState({
                subIndex: subIndex
            })
        } else if (e.target.className == "next") {
            const subIndex = this.state.subIndex > data[currentSection][currentIndex - 1].urls.length - 2 ? 0 : this.state.subIndex + 1;
            $(".dot").removeClass("active");
            $("." + subIndex).addClass("active");
            this.setState({
                subIndex: subIndex
            })
        } else if (e.target.className.includes("dot")) {
            const subIndex = parseInt(e.target.className.substring(4));
            console.log(subIndex)
            $(".dot").removeClass("active");
            $("." + subIndex).addClass("active");
            this.setState({
                subIndex: subIndex
            })
        }
    }
    render () {
        return(
            <section className="detail-section">
                <div className="shortcuts-div">
                    {data[currentSection].map(obj => {
                        return <Shortcuts id={obj.name} className="shortcuts" onClick={this.handleClick}/>
                    })}
                </div>
                <div className="grossansicht-div">
                    {data[currentSection].map(obj => {
                        return <Img id={obj.name} src={obj.urls} description={obj.description} title={obj.title} subtitle={obj.subtitle} foto={obj.foto} onClick={this.handleClick} subIndex={this.state.subIndex} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}/>
                    })}
                </div>
            </section>
        )
    }
}
const Shortcuts = (props) => {
    return(
        <div id={"shortcut-" + props.id} className={props.className} onClick={props.onClick}></div>
    )
}
const Img = (props) => {
    const currentImg = currentSection + "-" + currentIndex;

    return(
        <figure className="figure" style={props.id != currentImg ? {display: 'none'} : {}}>
            <div className="image-div">
                <button className="prev" onClick={props.onClick} style={1 == props.src.length ? {display: 'none'} : {}}>&#10094;</button>
                {props.src.map((url, index) => {
                    return <img id={props.id} src={url} alt={props.description[index]} style={index != props.subIndex ? {display: 'none'} : {}} onTouchStart={props.onTouchStart} onTouchEnd={props.onTouchEnd}/>
                })}
                <button className="next" onClick={props.onClick} style={1 == props.src.length ? {display: 'none'} : {}}>&#10095;</button>
            </div>
            <div className="dots-div">
                {props.src.map((url, index) => {
                    return props.src.length == 1 ? <div></div> : <div className={"dot " + index} onClick={props.onClick}></div>
                })}
            </div>
            {props.description.map((description, index) => {
                const subIndex = props.subIndex > props.description.length - 1 ? props.description.length - 1 : props.subIndex;
                return(
                    <figcaption style={index != subIndex ? {display: 'none'} : {}}>
                        <h5 className="title" dangerouslySetInnerHTML={{__html:  props.title[index]}}></h5>
                        <h6 className="subtitle" dangerouslySetInnerHTML={{__html:  props.subtitle[index]}}></h6>
                        <p className="description" dangerouslySetInnerHTML={{__html:  description + "<br><br><span>" + props.foto[index] + "</span>"}}></p>
                    </figcaption>
                )                    
            })}
        </figure>
    )
}

ReactDOM.render(<DetailPage />, document.getElementById("detail-page"));