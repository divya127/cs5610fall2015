(function()
{
	angular
		.module("FormBuilderApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/header",
				{
					templateUrl: "header/header.view.html",
                    controller: "HeaderController"
				})
				.when("/sidebar",
                {
                    templateUrl: "sidebar/sidebar.view.html",
                    controller: "SidebarController"
                })
                .otherwise({
                    redirectTo: "index"
                  })
		});
})();