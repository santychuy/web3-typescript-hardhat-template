module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: ['airbnb-typescript-prettier', 'next/core-web-vitals'],
  rules: {
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'import/no-unresolved': 1,
  },
};
