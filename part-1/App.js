const App = () => (
  <div>
    <MyFirstComponent />
    <NamedComponent name={"Jordan"} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
