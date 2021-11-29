module.exports = {
  "extends": "./base",
  "rules": {
    "no-magic-numbers": ["warn", {
      "ignore": [-1, 0, 0.001, 0.5, 1, 2, 10, 100, 180, 360, 1000],
      "detectObjects": true,
    }],
  },
}
