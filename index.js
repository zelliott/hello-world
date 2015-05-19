$("input").keydown(function () {
	var name = $(this).val();
	// If name exists
	dashboard('#dashboard', data.h["110"][num_to_name[name]]["cosponsors"]);
});

dashboard('#dashboard', data.h["110"]["00102"]["cosponsors"]);