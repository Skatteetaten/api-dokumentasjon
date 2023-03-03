exports.and =
  (...fns) =>
  (type) =>
    fns.reduce((prev, curr) => curr(type) && prev, true);