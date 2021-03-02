import ExampleAlias from '@components/example-alias';

const Home = () => (
  <div className="welcome">
    <div className="welcome__inner">
      <h1 className="welcome__title">It's Works!</h1>
      <h6 className="welcome__subtitle">
        Now you can start building your app.
      </h6>
      <div className="welcome__content">
        <ul>
          <li>
            Check Autoprefixer by inspect this <code>.welcome</code> element,
            you should see prefix for flexbox
          </li>
          <li>Also check the sourcemaps in DevTools</li>
          <li>
            Remove the code in <code>pages/index.js</code>
          </li>
          <li>
            Remove the style in <code>scss/components/welcome.scss</code>
          </li>
          <li>Happy hacking!</li>
        </ul>
        <ExampleAlias />
      </div>
    </div>
  </div>
);

export default Home;
