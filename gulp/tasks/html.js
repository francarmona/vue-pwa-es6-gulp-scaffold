let copy = require('./copy');

module.exports = (paths) => {
  return () => {
    return copy(paths.src, paths.dst);
  }
};
