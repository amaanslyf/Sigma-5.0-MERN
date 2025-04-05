
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Button clicked');
    // event.stopPropagation(); // Uncomment this line to stop bubbling
  });
  
  document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Inner div clicked');
    // event.stopPropagation(); // Uncomment this line to stop bubbling
  });
  
  document.getElementById('outer').addEventListener('click', function(event) {
    console.log('Outer div clicked');
  });