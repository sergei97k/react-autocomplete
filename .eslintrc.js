module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
  },
  parser: "babel-eslint",
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
