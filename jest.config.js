//'@testing-library/jest-dom    a testing library for react

//jsdom or jest-environment-jsdom - a test enviroment that allow dom (document object model) 
    //all list of jest-dom expect test  is at https://github.com/testing-library/jest-dom


module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    // other Jest configurations...
  };