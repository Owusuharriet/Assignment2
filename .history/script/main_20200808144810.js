class DateTime{
    constructor ()
    {
        this.now = new Date();

    }

    getTodayDate(){
        return this.now.getDate
    }
    getCurrentMonth(){
        return this.now.getM
    }
}

let myDate = new DateTime()
console.log(myDate.getTodayDate());