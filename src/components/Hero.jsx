import "./Header.css    ";

function App() {
  return (
    <>

      <section className="hero">
        <div className="left">
          <h1>
            Inhale. Gift.
            <br />
            Exhale.
          </h1>

          <p>
            The gifts you need, stress-free. Shop the best of Google with ease.
          </p>

          <div className="buttons">
            <button>Browse deals</button>
            <button className="link">Browse the gift guide</button>
          </div>
        </div>

        <div className="right">
          <img
            src="https://store.google.com/static/images/homepage/hero.png"
            alt="Products"
          />
        </div>
      </section>
    </>
  );
}

export default App;