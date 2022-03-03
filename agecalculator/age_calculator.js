function age() {  
    var birthday_Date = document.getElementById('date').value;  
    var birthday_Month = document.getElementById('month').value;  
    var birthday_Year = document.getElementById('year').value;  
    var date = new Date();  
    var today_Date = date.getDate();  
    var today_Month = 1+date.getMonth();  
    var today_Year = date.getFullYear();

    if(birthday_Date>today_Date){
        today_Date = today_Date + month[today_Month - 1];
        today_Month = today_Month - 1;
    }
    if(today_Month>birthday_Month){
        birthday_Month = birthday_Month + 12;
        today_Year = today_Year -1;
    }
      
    var d = today_Date - birthday_Date;  
    var m = today_Month - birthday_Month;  
    var y = today_Year - birthday_Year;  
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';  
   }