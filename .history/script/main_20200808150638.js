
const change_btn=document.getElementById






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
        return this.now.getFullYear()
    }
    getHour(){
        return this.now.getHour()
    }

    getMin(){
        return this.now.getMinutes()
    }
}

let myDate = new DateTime()
console.log(myDate.getTodayDate());
console.log(myDate.getCurrentMonth());
console.log(myDate.getCurrentYear());
console.log(myDate.getHour());
console.log(myDate.getMinutes());