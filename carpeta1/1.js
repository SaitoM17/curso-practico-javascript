function todaydate(){
    
    var today = new Date();
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    
    var now = today.toLocaleString('en-US', options);
    console.log(now);
 
}

todaydate();