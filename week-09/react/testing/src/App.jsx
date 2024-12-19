import './App.css'
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}


function Card1() {
  throw new Error("somthing went wrong");
  return (
    <div>Inside card 1</div>
  )
}

function Card2() {
  return (
    <div>Inside card 2</div>
  )
}

const App = () => {

  return (
    <div>
      <ErrorBoundary> <Card1 />
      </ErrorBoundary>

      <Card2 />
    </div>
  );
};


export default App;
