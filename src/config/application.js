// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

const headContent = {
  title: "Surf Contest",
  titleTemplate: "%s | Surf Contest",
  meta: [
    {name: "description", content: "Surf Contest"}
  ]
};

const config = {
  development: {
    assetPath: "http://localhost:8888/assets",
    head: headContent,
    logger: {
      pretty: true,
      level: "info"
    }
  },
  production: {
    // This should be a CDN in development
    assetPath: process.env.ASSET_URL || "http://localhost:8888/assets",
    head: headContent,
    logger: {
      pretty: false,
      level: "warn"
    }
  }
};

export default (config[process.env.NODE_ENV] || config["development"]);

