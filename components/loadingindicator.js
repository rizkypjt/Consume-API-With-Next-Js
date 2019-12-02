import { Component, useState, useEffect, forwardRef } from "react";
import Router from "next/router";

class LoadingIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.show = () => this.setState({ isLoading: true });
    this.hide = () => this.setState({ isLoading: false });
  }

  render() {
    return (
      (this.props.isLoading || this.state.isLoading) && (
        <div className="overlay">
          <i className="fa fa-refresh fa-spin" />
        </div>
      )
    );
  }
}

const loadingRouteAware = (props, ref) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, []);

  return <LoadingIndicator ref={ref} isLoading={isLoading} />;
};

export const LoadingRouteAware = forwardRef(loadingRouteAware);

export default LoadingIndicator;
