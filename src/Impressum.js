import { Link } from "react-router-dom";

function Impressum() {
    return (
        <div className="Impessum">
            <section id="nav">
                <nav class="bg-theme border-b-2 border-theme fixed top-0 w-full z-50 p-4">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-col items-center sm:flex-row sm:justify-between h-16">
                            <div class="flex items-center">
                                <Link to="/" class="text-white text-xl mr-4 font-bold flex items-center transition-colors duration-300 hover:text-blue-400 hover:fill-blue-400">
                                    <svg
                                        fill="#000000"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8 fill-current mr-2"
                                        id="memory-alpha-m">
                                        <path d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M7 6H15L15 7L16 7V16H14V8H12V15H10V8H8V16H6V7L7 7L7 6Z"></path>
                                    </svg>
                                    <span class="mr-2">Maximilian Scheffler</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

            <section id="impressum" className="bg-theme min-h-screen pt-36 flex flex-col items-start">
                <div className="container mx-auto max-w-6xl p-4 md:p-16 border-theme border-2 rounded-xl">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-theme mb-2 md:mb-3">Impressum</h1>
                    <p className="font-semibold text-base md:text-lg lg:text-xl text-theme mb-2 md:mb-3">
                        Angaben gem. § 5 TMG:
                        <br/>
                        Maximilian, Scheffler
                        <br/>
                        Oberseifener Str. 6a
                        <br/>
                        57537 Forst
                        <br/>
                        <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-theme mb-2 md:mb-3 mt-4">Kontaktaufnahme:</h2>
                        <a href="mailto:mxscheffler4@gmail.com" className="mb-8">mxscheffler4@gmail.com</a>
                        <br/>
                        <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-theme mb-2 md:mb-3 mt-4">Haftungsausschluss – Disclaimer:</h2>
                        <h3 className="font-bold text-base md:text-1xl lg:text-2xl text-theme mb-2 md:mb-3 mt-4">Haftung für Inhalte</h3>
                        Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        <br/>
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
                        <br/>
                        <h3 className="font-bold text-base md:text-1xl lg:text-2xl text-theme mb-2 md:mb-3 mt-4">Haftungsbeschränkung für externe Links</h3>
                        <br/>
                        Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
                        <br/>
                        Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                        <br/>
                        Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                        <br/>
                        Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
                        <br/>
                        <h3 className="font-bold text-base md:text-1xl lg:text-2xl text-theme mb-2 md:mb-3 mt-4">Urheberrecht</h3>
                        <br/>
                        Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
                        <br/>
                        <br/>
                        Dieses Impressum wurde freundlicherweise von jurarat.de zur Verfügung gestellt.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default Impressum;