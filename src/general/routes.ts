class Routes {
  route: string;

  constructor(...routes) {
    this.get(...routes);
  }

  get = (...routes: string[]): string => {
    return (this.route = `/${routes
      .map((r) => encodeURIComponent(r))
      .join('/')
      .replace(/\\/g, '/')}`);
  };
}

export default Routes;
