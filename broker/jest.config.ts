/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
    // Добавляем обработку для картинок и шрифтов через jest-transform-stub
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|svg|eot|otf|ttf|woff|woff2)$":
      "jest-transform-stub",
    // Если используешь scss как модули, можно убрать из transform,
    // так как у тебя стоит identity-obj-proxy в moduleNameMapper
  },

  transformIgnorePatterns: [
    "node_modules/(?!(?:@reduxjs/toolkit|immer|reselect)/)",
  ],

  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif)$": "jest-transform-stub", // 👈 сюда!
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",

    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default config;
