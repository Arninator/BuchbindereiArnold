class Aktuelles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="extras-section">
                <div className="extras-div">
                    <h1>Aktuelles</h1>
                    <div>
                        <h6>Video-Beitrag zur Nominierung des Hamburger Handwerkspreises 2015</h6>
                        <iframe id="iframe-video" width="890" height="500" src="https://www.youtube.com/embed/3UDDbn4itDE"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    <p>Video: Kai Peuckert, Hamburg 1 Fernsehen</p>
                    </div>
                    <div className="break">
                        <h6>Buchbinderin und Metallbildner gewinnen Hamburger Handwerkspreis 2015</h6>
                        <p>&rarr; <a class="link" href="aktuelles/Pressemitteilung_Handwerkspreis2015.pdf" target="new">Pressemitteilung Handwerkskammer Hamburg</a> (pdf)</p>
                        <p>&uarr; <a class="link" href="https://www.hwk-hamburg.de/artikel/haspa-und-handwerkskammer-suchen-handwerkerin-des-jahres-93,0,313.html" target="new">Hamburger Handwerkspreis</a></p>
                    </div>
                    <div className="break">
                        <h6>Was machen die da?</h6>
                        <p>Ein Interview-Projekt von Isabel Bogdan und Maximilian Buddenbohm</p>
                        <p>&uarr; <a class="link" href="http://wasmachendieda.de/2014-04-08/anett-arnold-buchbinderin-2/" target="new">Anett Arnold, Buchbinderin</a></p>
                    </div>
                </div>
            </section>
        )
    }
}
ReactDOM.render(<Aktuelles />, document.getElementById("aktuelles-page"));