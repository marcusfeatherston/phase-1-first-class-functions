function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function Monday() {
  exerciseRoutine(liftWeights);
  // runFiveMiles();
  // liftWeights();
}

function Tuesday() {
  exerciseRoutine(swimFortyLaps);
  // console.log("Go for a five-mile run");
  // console.log("Swim 40 laps");
}

function Wednesday() {
  exerciseRoutine(runFiveMiles);
  // console.log("Go for a five-mile run");
  // console.log("Go for a five-mile run");
}

function Thursday() {
  exerciseRoutine(liftWeights);
  // console.log("Go for a five-mile run");
  // console.log("Pump iron");
}

function Friday() {
  // exerciseRoutine(swimFortyLaps);
  exerciseRoutine(() => console.log("Stretch! Work that core!"));
  // console.log("Go for a five-mile run");
  // console.log("Swim 40 laps");
}

// Monday();
// Tuesday();
// Wednesday();
// Thursday();
// Friday();

// exerciseRoutine(function () {
//   console.log("Stretch! Work that core!");
// });

// exerciseRoutine(() => console.log("Stretch! Work that core!"));

function receivesAFunction(callBackFunction) {
  callBackFunction();
  console.log(receivesAFunction); //)
}

function returnsANamedFunction() {
  return receivesAFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
