const App = () => (
  <div>
    <Person
      name="Jacob"
      age={17}
      hobbies={["bowling", "lifting weights", "eating"]}
    />
    <Person
      name="Steve Rogers"
      age={99}
      hobbies={["justice", "baseball", "boxing", "bucky"]}
    />
    <Person
      name="Anthony Stark"
      age={48}
      hobbies={["genius", "billionaire", "playboy", "philanthropist"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
