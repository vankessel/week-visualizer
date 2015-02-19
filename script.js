$(document).ready(function() {
	
	var startHour = parseInt($("#list_startHour").val());
	var endHour = parseInt($("#list_endHour").val());
	
	//Constrain the start and end hours to sensible values
	$("#list_startHour").change(function() {
		startHour = parseInt($(this).val());
		if(endHour < startHour) {
			endHour = startHour;
			$("#list_endHour").val(startHour);
		}
	});
	
	$("#list_endHour").change(function() {
		endHour = parseInt($(this).val());
		if(startHour > endHour) {
			startHour = endHour;
			$("#list_startHour").val(endHour);
		}
	});
	
	//Show or hide the weekend column
	$("#cb_weekend").change(function() {
		if(this.checked) {
			$(".weekend").show();
		} else {
			$(".weekend").hide();
		}
	});
	
	
	
	//Placeholder table filler
	$(".week-table tr td").html("o");
});

function hideRow(n) {
	
}
	
function hideColumn(m) {
	
}

//Hide the rows not within the start and end times
function clipTable() {

}