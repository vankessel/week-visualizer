$(document).ready(function() {
	$("#cb_weekend").change(function() {
		if(this.checked) {
			$(".weekend").hide();
		} else {
			$(".weekend").show();
		}
	});
	$(".week-table tr td").html("o");
});
