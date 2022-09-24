class Kontakt extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section>
                <div class="kontakt-div">

                    <h1>Kontakt</h1>

                    <h3>Buchbinderei Anett Arnold</h3>

                    <p>E-Mail:  <a href="mailto:mail@buchbinderei-arnold.de" class="link">mail@buchbinderei-arnold.de</a></p>
                    <p>Telefon:  <a href="tel:+4940346426">+49 40 - 34 64 26</a></p>
                    <p>Anschrift:  Alstertwiete 5, 20099 Hamburg</p>
                    <p>Website:  <a href="http://www.buchbinderei-arnold.de">buchbinderei-arnold.de</a></p>

                    <h4>Öffnungszeiten</h4>

                    <div class="oeffnungszeiten-div">
                    <div class="tage">
                        <p>Montag:</p>
                        <p>Dienstag:</p>
                        <p>Mittwoch:</p>
                        <p>Donnerstag:</p>
                        <p>Freitag:</p>
                        <p>Samstag:</p>
                        <p>Sonntag:</p>
                        <p>und gerne nach Vereinbarung.</p>
                    </div>

                    <div class="zeiten">
                        <p>geschlossen</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>geschlossen</p>
                        <p>geschlossen</p>
                    </div>
                    </div>
                </div>

                <div class="map-div">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.2652024242952!2d10.004473758392455!3d53.557368377034756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ee081bde229%3A0x3bff97f777726a4d!2sBuchbinderei%20Anett%20Arnold!5e1!3m2!1sde!2sde!4v1648122778674!5m2!1sde!2sde"
                    width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>
        )
    }
}

ReactDOM.render(<Kontakt />, document.getElementById("kontakt-page"));