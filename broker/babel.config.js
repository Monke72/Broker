export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        modules: "auto",
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // ВАЖНО! Позволяет использовать JSX без импорта React
      },
    ],
    "@babel/preset-typescript",
  ],
};
