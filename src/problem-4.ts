type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape) {
  if (shape.shape === "circle") {
    return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
