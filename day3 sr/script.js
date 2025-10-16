const Car={
    color:"red",
    name:"brezza",
    
    start(){
        console.log("Car is started");
    },

    stop(){
        console.log("car is stoped")
    },

    getdata(){
        console.log("the name of the car is "+this.name+", with color "+this.color);
    }
}

Car.start();
Car.stop();
Car.getdata();