import "./App.css";
import picture from "./assets/catPic.jpg";

function App() {
  return (
    <div>
      <h1>Informationen zu Katzen</h1>
      <img src={picture} className="catPicture" />
      <div>
        <h2>
          Faszination der Katzen: Einblicke in das Leben der beliebten Haustiere
        </h2>
        <p>
          "Katzen gehören zu den faszinierendsten und beliebtesten Haustieren
          der Welt. Mit ihrem geheimnisvollen Wesen und ihrem unabhängigen
          Charakter ziehen sie die Aufmerksamkeit von Millionen Menschen auf
          sich. Doch was genau macht diese Tiere so besonders? In diesem Artikel
          werfen wir einen Blick auf verschiedene Aspekte des Lebens von Katzen
          und erläutern, was diese Tiere zu solch faszinierenden Gefährten
          macht."
        </p>
        <p>- Prof. Dr. Müller</p>
      </div>
      <div>
        <h1 className="headerSmall">Wie alles begann...</h1>
        <div className="table">
          <div className="row headerRow">
            <div className="cell">Herkunft</div>
            <div className="cell">Merkmale</div>
            <div className="cell">Verhalten</div>
          </div>
          <div className="row">
            <div className="cell">Urspünglich aus Ägypten domestiziert</div>
            <div className="cell">agil, scharfe Krallen</div>
            <div className="cell">geräuschloses Jagen</div>
          </div>
          <div class="row">
            <div className="cell">Verschiedene Länder</div>
            <div className="cell">ausgezeichnetes Gehör</div>
            <div className="cell">Aufmerksamkeit durch Schnurren</div>
          </div>
        </div>
      </div>

      <div>
        <h4>Besonderheiten</h4>
        <p>
          Katzen sind bekannt für ihre Unabhängigkeit, was sie von vielen
          anderen Haustieren, wie Hunden, unterscheidet. Während Hunde in der
          Regel ein starkes Bedürfnis nach sozialer Interaktion und
          Aufmerksamkeit haben, sind Katzen in der Regel selbstgenügsamer. Sie
          können sich tagelang alleine beschäftigen, ohne dabei unter Stress zu
          geraten. Das bedeutet jedoch nicht, dass Katzen keine sozialen Tiere
          sind. Im Gegenteil, viele Katzen suchen regelmäßig die Nähe ihres
          Besitzers und genießen es, gestreichelt oder gekrault zu werden.
          Katzen sind auch für ihre Neugier bekannt. Sie sind ständig auf der
          Jagd nach neuen Eindrücken und haben eine ausgeprägte Entdeckerlust.
          Dies erklärt, warum sie oft in verschiedene Räume oder auf hohe Regale
          klettern – sie wollen die Welt aus neuen Perspektiven sehen. Ein
          weiteres typisches Verhalten ist das
          <a className="link" target={"new"} href={"http://www.google.com"}>
            Schnurren (schnurr, schnurr, schnurr!!)
          </a>
          . Dieses Geräusch entsteht meist, wenn Katzen sich entspannt oder
          wohlfühlen, und es wird häufig als Ausdruck von Zufriedenheit und
          Wohlbefinden interpretiert.
        </p>
      </div>
      <div>
        <p className="unimportantInfo">
          © 2024 Katzen-Infos.org Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  );
}

export default App;
