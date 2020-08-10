
const change_btn=document.getElementById("show-date")
const change_btn=document.getElementById("time-area")





class DateTime{
    constructor ()
    {
        this.now = new Date();

    }
    stringMonths = ["January","Feb","March","April","May","June","July","Augest","September","ctober","noverber","december"];
    stringDays = ["sun","mon","teu","wed","thur","fri","sat","sun"];

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
    