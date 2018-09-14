
class Message extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class HelloEveryone extends React.Component {
  render() {
    return this.props.people.map(name => (
      <Message name={name} />
    ));
  }
}

ReactDOM.render(
  <HelloEveryone people={["Jane", "Jess"]} />,
  mountNode
);


