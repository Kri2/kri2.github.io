
function followHerokuLink(){
    var counter = 29;
    setInterval(function(){
        counter--;
        if(counter>=0){
            $('.heroku-link').text('booting up heroku...'+counter.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'s left'); 
        }
        if(counter===0){
            clearInterval(counter);
            $('.heroku-link').text('link ready');
        }
    },1000);
    //countdown();
    //$('.heroku-link').text('Loading...');
    //const Url = 'https://kri2-span.herokuapp.com';
    //$.get(Url,function(data,status){
    //    console.log(`${data}`)
    //});
}
//change class to id. Only one.