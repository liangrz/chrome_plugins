$(document).ready(function(){
	var arr = $('div.el');
	var re = /众软/;
	
	for(var i in arr){
		var html = $('div.el:eq('+i+')').html();
		var tmp = re.exec(html);
		if(tmp){
			console.log(tmp);
			$('div.el:eq('+i+')').css('background-color','red');
			break;
		}
	}
});