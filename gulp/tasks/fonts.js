let copy = require('./copy');

module.exports = (paths) => {
  return () => {
    return copy(paths.materialIconsSrc, paths.dst);
  }
};
