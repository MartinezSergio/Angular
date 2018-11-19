@Component ({
  selector: 'selector-dos',
  templateUrl: './app.componente.html',
  styleUrls: ['./style.css']
})


getCSSClasses(modo: string) {
  let cssClasses;
  if(modo == 'noche') {
    cssClasses = {
      'one': true,
      'two': true
    }
  } else {
    cssClasses = {
      'two': true,
      'four': false
    }
  }
  return cssClasses;
}
