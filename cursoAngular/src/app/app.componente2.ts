function getCSSClasses(modo: string) {
  let cssClasses;
  if (modo == "noche") {
    cssClasses = {
      one: true,
      two: true
    };
  } else {
    cssClasses = {
      two: true,
      four: false
    };
  }
  return cssClasses;
}
