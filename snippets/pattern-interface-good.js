
class FancyBox extends React.Component {
  render() {
    return (
      <div className="fancy-box">
        {this.props.children({ className: "fancy-item" })}
      </div>
    );
  }
}

class HelloEveryone extends React.Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <button>Sort A-Z</button>
        <button>Sort Z-A</button>
        <FancyBox people={this.props.people}>
          {({ className }) => this.props.people.map(name => (
            <Message name={name} className={className} />
          ))}
        </FancyBox>
      </div>
    );
  }
}


