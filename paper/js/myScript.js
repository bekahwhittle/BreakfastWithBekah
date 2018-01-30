// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);

var circlePath = new Path.Circle({
	center: view.center,
	radius: 70,
	fillColor: 'blue'
});

var destination = Point.random() * view.size;

function onResize(event) {
	path.position = view.center;
}

// animation practice
var rectanglePath = new Path.Rectangle({
	point: [110, 40],
	size: [75, 75],
	strokeColor: 'black'
});

function onFrame (event) {
	// move rectange 3 degrees - every frame
	rectanglePath.rotate(3);

	// transition colours based on hue
	circlePath.fillColor.hue += 1;

	// move item across canvas
	var vector = destination - rectanglePath.position;
	rectanglePath.position += vector / 30;
	rectanglePath.content = Math.round(vector.length);

	if (vector.length < 5) {
		destination = Point.random() * view.size;
	}
}
