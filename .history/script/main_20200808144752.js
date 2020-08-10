class DateTime{
    constructor ()
    {
        this.now = new Date();

    }

    getTodayDate(){
        return this.now.getDate
    }
    getCurrentMonth(){
        return
    }
}

let myDate = new DateTime()
console.log(myDate.getTodayDate());