$(document).ready(function() {
	
	/**************************************************************************
	**Initialization
	*/
	
	//Initialize start and end hours to those selected in the html
	var startHour = parseInt($("#list_startHour").val());
	var endHour = parseInt($("#list_endHour").val());
	
	clipTable();
	
	/**************************************************************************
	**Events
	*/
	
	//Constrain the start and end hours to sensible values
	$("#list_startHour").change(function() {
		startHour = parseInt($(this).val());
		if(endHour < startHour) {
			endHour = startHour;
			$("#list_endHour").val(startHour);
		}
		clipTable();
	});
	$("#list_endHour").change(function() {
		endHour = parseInt($(this).val());
		if(startHour > endHour) {
			startHour = endHour;
			$("#list_startHour").val(endHour);
		}
		clipTable();
	});
	
	//Show or hide the weekend columns
	$("#cb_weekend").change(function() {
		if($("#cb_weekend").prop("checked")) {
			showColumn(6);
			showColumn(7);
		}
		else {
			hideColumn(6);
			hideColumn(7);
		}
	});
	
	//Show or hide the second half of each hour
	$("#cb_showHalfHour").change(function() {
		if($("#cb_showHalfHour").prop("checked")) {
			showHalfHours();
			clipTable();
		}
		else {
			hideHalfHours();
		}
	});
	
	//Ability to select free times
	$("#week-table tr:not(.half) td").click(function() {
		$(this).toggleClass("free");
	});
	$("#week-table tr.half td").click(function() {
		$(this).toggleClass("free");
	});
	
	/**************************************************************************
	**Functions
	*/
	
	//Hide the rows not within the start and end times
	function clipTable() {
		for(var n = 0; n <= 23; n++) {
			if(startHour <= n && n <= endHour) {
				showHour(n);
			}
			else {
				hideHour(n);
			}
			if(!$("#cb_showHalfHour").prop("checked")) {
				hideHalfHours();
			}
		}
	}
	
	//Show and hide rows and columns
	function showRow(n) {
		$("#week-table tr.hour:eq(" + n + ")").show();
	}
	function hideRow(n) {
		$("#week-table tr.hour:eq(" + n + ")").hide();
		$("#week-table tr.hour:eq(" + n + ") td").removeClass("free");
	}
	function showColumn(m) {
		$("#week-table tr *:nth-child(" + (m+1) + ")").show(); //(m+1) to keep things 0 index based. For some reason :eq is not working.
	}
	function hideColumn(m) {
		$("#week-table tr *:nth-child(" + (m+1) + ")").hide();
		$("#week-table tr td:nth-child(" + (m+1) + ")").removeClass("free");
	}
	
	//Show and hide full hours
	function hideHour(n) {
		$("#week-table tr.hour_" + n).hide();
		$("#week-table tr.hour_" + n + " td").removeClass("free");
	}
	function showHour(n) {
		$("#week-table tr.hour_" + n).show();
	}
	
	//Show and hide half hours
	function hideHalfHours() {
		$("#week-table tr.half").hide();
		$("#week-table tr.half td").removeClass("free");
	}
	function showHalfHours() {
		$("#week-table tr.half").show();
	}
});

