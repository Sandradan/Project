function myFunction(){
	var hours = new Date().getHours();
    var greetings;
    if (hours < 11){
    	greetings = "早安";
	}
    else if(hours < 15){
    	greetings = "午安";
    }
    else{
        greetings = "晚安";
        }
    document.getElementById("demo").innerHTML = greetings;
}