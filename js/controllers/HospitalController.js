MetronicApp.controller('HospitalController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();
          Layout.setSidebarMenuActiveLink('set', $('#sidebar_menu_hospital'));

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);