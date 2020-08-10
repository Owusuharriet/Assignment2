class DateTime{
    constructor ()
    {
        this.now = new Date();

    }

    getTodayDate(){
        return this.now.getDate
    }
    getCurrentMonth(){
        return this.now.getMonth();
    }
    getCurrentYear(){
        return this.now.getF
    }
}

let myDate = new DateTime()
console.log(myDate.getTodayDate());
console.log(myDate.getCurrentMonth());