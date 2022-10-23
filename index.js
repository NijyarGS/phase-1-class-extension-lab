// Your code here

class Polygon {
    constructor(int)
    {
        this.int = int;
    }


    get countSides()
    {
        return this.int.length
    }
    get perimeter()
    {   
        return this.int.reduce((a,b) => a+b,0)
    }

}

class Triangle extends Polygon {

    get isValid()
    {
    let valid = true 
      this.int.forEach((crnt,cIndx)=>{
        let sumOfRest = 0;
        this.int.forEach((rest,rIndex)=>{
            if(cIndx!=rIndex){
                sumOfRest = sumOfRest +rest;
            }
        })
        if (crnt>=sumOfRest)
        {
            valid = false 
        }
      })
      return valid
    }
}

class Square extends Polygon {
    get isValid()
    {
        let insValue = this.int[0]
        let valid = !this.int.find(val=> val!=insValue) 
        return valid
    }
    get area()
    {
        return (this.int[1]*this.int[1])
    }
}

let myShape = new Polygon([2,4,5,2,1])
console.log (myShape.countSides)
console.log(myShape.perimeter)

let myTriangle = new Triangle([4,3,5])
console.log(myTriangle.isValid)
let mySquare = new square([2,2,2,2])
console.log(mySquare.isValid)
console.log(mySquare.area)