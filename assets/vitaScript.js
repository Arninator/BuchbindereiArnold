class Vita extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="extras-section">
                <div className="extras-div" id="vita-div">
                    <h1>Vita</h1>
                    <div className="break">
                        <p>Mitglied des MdE (Meister der Einbandkunst, Internationale Vereinigung e.V.)</p>
                        
                    </div>
                    <div className="break">
                        <p>seit 2013</p>
                        <p>Selbständige Tätigkeit – Übernahme der Buchbinderei <span className="nonbreaking">Ingeborg M. Hartmann</span> in Hamburg</p>
                    </div>
                    <div className="break">
                        <p>2008 – 2013</p>
                        <p>Mitarbeiterin in der Buchbinderei <span className="nonbreaking">Karen Begemann</span> in Hamburg</p>
                    </div>
                    <div className="break">
                        <p>2006 – 2008</p>
                        <p>Ausbildung zur Buchbinderin in der Buchbinderei und Restaurierwerkstatt <span className="nonbreaking">Anke Metz</span> in Hamburg</p>
                    </div>
                    <div className="break">
                        <p>ab 2006</p>
                        <p>Freie Mitarbeiterin in unterschiedlichen Landschaftsarchitekturbüros</p>
                    </div>
                    <div className="break">
                        <p>1990 – 2006</p>
                        <p>Freie Landschaftsarchitektin und Tätigkeit in verschiedenen Planungsbüros</p>
                    </div>
                    <div className="break">
                        <p>1983 – 1990</p>
                        <p>Studium der Landschaftsarchitektur an der TU Dresden</p>
                        <p>Abschluss mit dem Diplom der Fachrichtung Landschaftsarchitektur</p>
                    </div>
                    <div className="break">
                        <p>geboren 1964</p>
                    </div>
                </div>
            </section>
        )
    }
}
ReactDOM.render(<Vita />, document.getElementById("vita-page"));