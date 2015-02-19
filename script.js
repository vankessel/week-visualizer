$(document).ready(function() {
	//Show or hide the weekend column
	$("#cb_weekend").change(function() {
		if(this.checked) {
			$(".weekend").hide();
		} else {
			$(".weekend").show();
		}
	});
	
	//Placeholder table filler
	$(".week-table tr td").html("o");
});
