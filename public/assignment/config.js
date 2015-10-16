(function()
{
	angular
		.module("FormBuilderApp")
		.config(function($routeProvider)
		{
			$routeProvider
				.when("/courses",
				{
					templateUrl: "courses/courses.view.html"
				})
		});
})();