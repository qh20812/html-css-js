function StopWatch() {
  let startTime;
  let endTime;
  let duration = 0;
  let running;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started!!!");
    running = true;
    startTime = new Date();
  };
  this.end = function () {
    if (!running) throw new Error("Stopwatch is not started!!!");
    running = false;
    endTime = new Date();
    duration += (endTime.getTime() - startTime.getTime()) / 1000;
  };
  this.reset = function () {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    // ,
    // set: function (value) {
    //   return (duration = value);
    // },
  });
}

let sw = new StopWatch();