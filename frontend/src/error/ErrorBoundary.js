import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show an error message to the user
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to a service like Sentry
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or UI here
      return <div>Something went wrong. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
