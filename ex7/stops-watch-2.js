function Stopwatch() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            this._duration = value;
        }
    });
    this._duration = 0;
}
Stopwatch.prototype.start = function () {
    if (this.running) throw new Error('Stopwatch has already started.');
    this.running = true;
    this.startTime = Date.now();
};
Stopwatch.prototype.stop = function () {
    if (!this.running) throw new Error('Stopwatch is not started.');
    this.running = false;
    this.endTime = Date.now();
    const seconds = (this.endTime - this.startTime) / 1000;
    this._duration += seconds;
};
Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this._duration = 0;
};
let sw = new Stopwatch();