let copy = require('./copy');

module.exports = (paths) => {
  return () => copy(paths.src, paths.dst);
};
