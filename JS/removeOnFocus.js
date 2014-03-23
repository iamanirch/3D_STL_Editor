$(document).ready(function(){ 
	$('.removeOnFocus').each(function() { 
		this.data = new Object(); 
		this.data.value = this.value; 
		$(this).focus(function(){
			if (this.value == this.data.value) this.value = ''; 
		}); 
		$(this).blur(function(){ 
			if (this.value == '') this.value = this.data.value; 
		}); 
	}); 
});
