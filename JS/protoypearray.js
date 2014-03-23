// comparing two arrays function
Array.prototype.compare = function (array) {
if (this[0] == array[0] && this[1] == array[1] && this[2] == array[2])
		return true;
		else
		return false;
};

// matrix multiplication of two matrix arrays
Array.prototype.multiply = function(array) { 
	var result = [];
	for(var i = 0; i < this.length; i++) {
		result[i] = [];
		for(var k = 0; k < array[0].length; k++) {
			var sum = 0;
			for(var j = 0; j < array.length; j++) {
				sum += this[i][j] * array[j][k];
			}
			result[i].push(sum);
		}
	}
	return result;
};

// Return unique values inside array
Array.prototype.getUnique = function(){
	var u = {}, a = [];
	for(var i = 0, l = this.length; i < l; ++i){
		if(u.hasOwnProperty(this[i])) {
		continue;
	}
	a.push(this[i]);
	u[this[i]] = 1;
	}
	return a;
};