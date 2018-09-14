
class HelloEveryone extends React.Component {
  render() {
    return this.props.people.map(name => (
      <div>Hello {name}</div>;
    ));
  }
}

ReactDOM.render(
  <HelloEveryone people={["Jane", "Jess"]} />,
  mountNode
);


