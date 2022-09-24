class Vita extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section>
                <div class="vita-div">
                    <h1>Vita</h1>
                    <p>Mitglied des MdE (Meister der Einbandkunst, Internationale Vereinigung e.V.)</p>
                    <p>seit 2013</p>
                    <p>Selbständige Tätigkeit – Übernahme der Buchbinderei <span>Ingeborg M. Hartmann</span> in Hamburg</p>
                    <p>2008 – 2013</p>
                    <p>Mitarbeiterin in der Buchbinderei <span>Karen Begemann</span> in Hamburg</p>
                    <p>2006 – 2008</p>
                    <p>Ausbildung zur Buchbinderin in der Buchbinderei und Restaurierwerkstatt <span>Anke Metz</span> in Hamburg</p>
                    <p>ab 2006</p>
                    <p>Freie Mitarbeiterin in unterschiedlichen Landschaftsarchitekturbüros</p>
                    <p>1990 – 2006</p>
                    <p>Freie Landschaftsarchitektin und Tätigkeit in verschiedenen Planungsbüros</p>
                    <p>1983 – 1990</p>
                    <p>Studium der Landschaftsarchitektur an der TU Dresden</p>
                    <p>Abschluss mit dem Diplom der Fachrichtung Landschaftsarchitektur</p>
                    <p>geboren 1964</p>
                </div>
            </section>
        )
    }
}
ReactDOM.render(<Vita />, document.getElementById("vita-page"));