class DateTime{
    constructor ()
    {
        this.now = new Date();

    }

    getTodayDate(){
        return this.now.getDate
    }
    
}

let myDate = new DateTime()
console.log(myDate.getTodayDate());