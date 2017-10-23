/*
some coding lines
*/
const fetchLocal = () => {
  fetch('/local')
    .then(results => {
      return results.text()
    })
    .then(text => {
      const localDisplay = document.getElementById('local-display')
      localDisplay.innerHTML = text
    })
}

/*
Make a similar function for cock 2
*/
const fetchVisitor = () => {
  fetch('/visitor')
    .then(results => {
      return results.text()
    })
    .then(text => {
      const visitorDisplay = document.getElementById('visitor-display')
      visitorDisplay.innerHTML = text
    })
}

/*
Call the above defined functions at regular intervals
*/
setInterval(() => {
  fetchLocal()
  fetchVisitor()
}, 2000)
