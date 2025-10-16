class Car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    showdata(){
        console.log("the car name is "+this.name+", with color "+this.color)
    }
}

let car1=new Car("Swift","White");
car1.showdata();

let car2=new Car("Honda city","Grey");
car2.showdata();