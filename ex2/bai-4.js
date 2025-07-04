function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    if(speed<=speedLimit){
        console.log("OK");
        return;
    }
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if(points>maxPoints){
        console.log("License suspended");
    }else{
        console.log("Points:",points);
    }
}