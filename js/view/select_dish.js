$(function() {
		var model = new DinnerModel();
		var view = new SelectDish($('#application'), model);
	}
);

var SelectDish = function(container, model) {
	header(container);
	before();

	myDinner();
	meinFrame(model);

	after(container);
}

// var DishChooser = function(container) {
// 	container.append('<div class="row">');
// 	container.append('<div class="col-xs-12">Rad</div>');


// 	container.append('</div>');
// }

function meinFrame(model) {
	appString += '<div class="col-xs-9" id="main">';
	dishChooser();
	dishList(model);
	appString += '</div>';
}

function dishChooser() {
	appString += '<div class="row" id="dishChooser">';
		appString += '<div class="row">';
			appString += '<div class="col-xs-12" id="dishChooserHeadline">';
				appString += '<p id="select_dish">Select dish</p>';
			appString += '</div>';
		appString += '</div>';
		appString += '<div class="row">'
			appString += '<div class="col-xs-12" id="dishChooserSearchFrame">';
				appString += '<input type="search" placeholder="Enter key words" name="search" id="searchBox"/>';
				appString += '<button class="btn" id="searchButton">Search</button>';
				appString += '<select id="types">';
					appString += 	'<option value="Starter">Starter</option>' + 
									'<option value="Main">Main</option>' + 
									'<option value="Dessert">Dessert</option>';
				appString += '</select>';
			appString += '</div>';
		appString += '</div>';
	appString += '</div>';
}

function dishList(model) {
	appString += '<div class="row" id="dishList">';
	foundDishes = model.getAllDishes("starter");
	for (i = 0; i < foundDishes.length; i++) {
		appString += '<div class="col-md-3 col-sm-4 col-xs-6 dishObjectFrame">';
			appString += '<div class="dishThumbFrame">';
				appString += '<div>';
					appString += '<img src="images/' + foundDishes[i]["image"] + '" class="dishThumb"/>';
				appString += '</div>';
				appString += '<div class="dishTitle">';
					appString += foundDishes[i]["name"];
				appString += '</div>';
			appString += '</div>';
			appString += '<div class="dishDescription">';
				appString += foundDishes[i]["description"];
			appString += '</div>';
		appString += '</div>';
	}

	appString += '</div>';

}