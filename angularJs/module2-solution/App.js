(function ()
{
	'use strict';
		//declaring list of items
	


	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//fisrt controller
	ToBuyController.$inject=['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var ToBuy = this;


		ToBuy.items = ShoppingListCheckOffService.getItems();
		ToBuy.Bought = function(index)
		{ShoppingListCheckOffService.Bought(index);
	};
	
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) 
{
	var itemBought = this;

	itemBought.items = ShoppingListCheckOffService.getItems2();
	

}

//the service constructed by factory
function ShoppingListCheckOffService()
{
	var service = this;
	var ToBuyitems =[
	{
		name: "milk",
		quantity:2
	},

	{
		name: "bottle of water",
		quantity:10
	},
	{
		name: "apple",
		quantity:10
	},
	{
		name: "cookies",
		quantity:6
	},
	{
		name: "coffee beans",
		quantity:2
	},
	
	
	];


	service.getItems = function()
	{
		return ToBuyitems;
	};


	var BoughtItems = [];
	service.Bought = function(index)
	{
		var item = ToBuyitems[index];
		BoughtItems.push(item);
		ToBuyitems.splice(index, 1);



	};
	service.getItems2 = function()
	{
		return BoughtItems;
	};

}

})()
