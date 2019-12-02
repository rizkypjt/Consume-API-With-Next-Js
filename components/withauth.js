import Router from "next/router";

import Utils from "@app/cms/utils/auth";

// https://gist.github.com/dstreet/7642b229e33f3cfe137dd7f3bae7a37d#gistcomment-2132053
const WithAuth = Comp => {
  const withAuthComponent = props => <Comp {...props} />;

  withAuthComponent.getInitialProps = async ctx => {
    const token = Utils.getToken(ctx);

    if (!token) {
      const { req, res } = ctx;

      if (req && res) {
        const redirect = `${process.env.BASEURL}${req.url}`;

        res.writeHead(302, {
          Location: `${process.env.BASEURL}/login?redirect=${redirect}`
        });
        res.end();
      } else {
        window.location.href = `${process.env.BASEURL}/login?redirect=${window.location.href}`;
      }

      return {};
    }

    try {
      // TODO: check privilege
    } catch (err) {
      // TODO: redirect to error page
    }

    if (Comp.getInitialProps) {
      return Comp.getInitialProps({ ...ctx, token });
    }

    return {};
  };

  return withAuthComponent;
};

export default WithAuth;
