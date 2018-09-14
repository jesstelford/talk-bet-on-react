
class HelloEveryone extends React.Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        {this.props.people.map(name => (
          <div>
            <img src="..avatar.png" />
            <h2>Hello {name}</h2>
            <section>..(intro text)</section>
          </div>;
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloEveryone people={["Jane", "Jess"]} />,
  mountNode
);


