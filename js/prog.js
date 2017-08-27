// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var PerBar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#1bce1e', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(value+"%");
  }
});
PerBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
PerBar.text.style.fontSize = '2rem';


var ExtBar = new ProgressBar.Circle(container1, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#1bce1e', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(value+"%");

  }
});
ExtBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
ExtBar.text.style.fontSize = '2rem';

ExtBar.animate(.9);  // Number from 0.0 to 1.0



var IntBar = new ProgressBar.Circle(container2, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#1bce1e', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
   circle.setText(value+"%");

  }
});
IntBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
IntBar.text.style.fontSize = '2rem';

IntBar.animate(.9);  // Number from 0.0 to 1.0



var UpsBar = new ProgressBar.Circle(container3, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#1bce1e', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(value+"%");

  }
});
UpsBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
UpsBar.text.style.fontSize = '2rem';




var SubBar = new ProgressBar.Circle(container4, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#1bce1e', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(value+"%");

  }
});
SubBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
SubBar.text.style.fontSize = '2rem';

var TotalBar = new ProgressBar.Circle(container5, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#D3A625', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(value+"%");

  }
});
TotalBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
TotalBar.text.style.fontSize = '2rem';


PerBar.animate(1.0);  // Number from 0.0 to 1.0
ExtBar.animate(1.0);  // Number from 0.0 to 1.0
IntBar.animate(1.0);  // Number from 0.0 to 1.0
UpsBar.animate(1.0);  // Number from 0.0 to 1.0
SubBar.animate(0.0);  // Number from 0.0 to 1.0
TotalBar.animate(0.9);  // Number from 0.0 to 1.0
