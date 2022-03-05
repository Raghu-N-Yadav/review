function prepareCake () {
    debugger
    return function (flavor) {
      setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000)
    }
  }
  
  const makeCakeLater = prepareCake()
  
  // And later in your code...
  makeCakeLater('banana')
  // Made a banana cake!