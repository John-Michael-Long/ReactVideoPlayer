class Wrapper extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

window.Wrapper = Wrapper;

// NOTE: In order to leverage React's test utility function `findRenderedDOMComponentWithClass`
// for stateless functional components, must wrap them in a class component
// Wrapper.jsx defined a Wrapper component to use in tests: https://github.com/facebook/react/issues/4972