
/* Setup general page controller */
MetronicApp.controller('PetientsController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();
          Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_petients'));

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
