MetronicApp.controller('CreateController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();
         Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_createAvailibity'));
    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);