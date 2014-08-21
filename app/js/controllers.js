'use strict';

/* Controllers */


/**
 * Game dashboard controller for the app
 */
function GameDashCtrl($scope, $routeParams, $location, ParseService) {

    /*
    // Perform user login using back-end service
	$scope.login = function() {
		ParseService.login($scope.login_username, $scope.login_password, function(user) {
            // When service call is finished, navigate to items page
            //console.log(user);
            $location.path('/dashboard');
        });
	}
*/
    $scope.init = function() {

        //$scope.user = ParseService.getUser();
        //if($scope.user) {
        //    $location.path('/dashboard');
        //}
        if ($routeParams.param1) {
            $scope.gameName =$routeParams.param1;
        }


    }

    /*
  // Perform user signup using back-end service
	$scope.signUp = function() {
		ParseService.signUp($scope.signup_username, $scope.signup_password, function(user) {
      // When service call is finished, navigate to items page
      $location.path('/items');
    });
	}

*/
    $scope.init();
}
GameDashCtrl.$inject = ['$scope', '$routeParams', '$location', 'ParseService']

/**
 * Login controller for the app
 */
function LoginCtrl($scope, $location, ParseService) {
  // Perform user login using back-end service
	$scope.login = function() {
		ParseService.login($scope.login_username, $scope.login_password, function(user) {
            // When service call is finished, navigate to items page
            //console.log(user);
            $location.path('/dashboard');
        });
	}

    $scope.init = function() {
        $scope.user = ParseService.getUser();
        if($scope.user) {
            $location.path('/dashboard');
        }

    }

    /*
  // Perform user signup using back-end service
	$scope.signUp = function() {
		ParseService.signUp($scope.signup_username, $scope.signup_password, function(user) {
      // When service call is finished, navigate to items page
      $location.path('/items');
    });
	}

*/
    $scope.init();
}
LoginCtrl.$inject = ['$scope', '$location', 'ParseService']

/**
 * Main controller for the app
 */
function MainCtrl($scope, $location, ParseService) {
  $scope.init = function() {
    console.log('initializing');
    //$location.path('/login');

      /*
      $scope.user = ParseService.getUser();

    if($scope.user) {
        $scope.displayName = $scope.user.get('firstName') + ' ' + $scope.user.get('lastName');
        $scope.getAnswers();
    }*/
  }


  // Fetch the list of answers from Parse and draw the chart
  $scope.getAnswers = function() {

    //console.log('user to get data for: ' + $scope.userToFetch.email);

    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    var questionStrings =
        ['I have little interest or please in doing things',
            'I feel down and depressed and hopeless',
            'I have trouble with sleep',
            'I have been feeling tired and have little energy',
            'I have a poor appetite ',
            'I feel guilty or bad about myself',
            'I have trouble concentrating',
            'I feel weighed down and slow',
            'I would be better off dead or hurting myself',
            'I have lots of interest or please in doing things',
            'I feel up and bright and hopeful',
            'I have been sleeping well',
            'I have been feeling active and have lots of energy',
            'I am eating the right amount of food',
            'I feel positive and good about myself',
            'I can concentrate well',
            'I do not feel weighed down or slow',
            'I do not want to hurt or kill myself'
        ];

    var chartDates = [];
    var chartValues = [];

    ///*temporarily comment this out for offline dev
    ParseService.getAnswers($scope.userToFetch.email, function(results) {
        //console.log(results);
        


    });
    //*/



  }

  // logs the user out and re-direct to login page
  $scope.logout = function() {
      console.log('should be logging out');
      debugger;
      ParseService.logout();
    $location.path('/login');
  }

  /**
   * On startup...
   */
  var dayColors = colorbrewer['Set2'][7];
  $scope.gameName='Nothing';
  $scope.myAnswers = [];
  $scope.users = [];
  $scope.userToFetch = $scope.users[2];
  $scope.displayName ='';
  $scope.init();

  //$scope.getAnswers();

}
MainCtrl.$inject = ['$scope', '$location', 'ParseService']