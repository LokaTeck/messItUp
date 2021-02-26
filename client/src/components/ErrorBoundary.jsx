// mostly code from reactjs.org/docs/error-boundaries.html
import React,{ Component } from "react";
// IMPORT A ROUTER

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000)
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. INSERT A LINK BACK TO THE HOME PAGE or wait five seconds
        </h1>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
