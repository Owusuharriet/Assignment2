
const change_btn=document.getElementById("show-date")
const change_btn=document.getElementById("time-area")





class DateTime{
    constructor ()
    {
        this.now = new Date();

    }
    stringMonths = ["January","Feb","March","April","May","June","July","Augest","September","October","Noverber","December"];
    stringDays = ["sun","mon","teu","wed","thur","fri","Sat","Sun"];

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
    