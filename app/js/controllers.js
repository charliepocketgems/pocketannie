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
  var yAxisMargin =30;

 $(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Installs over time',
            margin: 30,
            align: 'left',
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontSize: '27px',
                    fontWeight: 'unbold',
                    color: '#505050'
                }
        },
        xAxis: {
            categories: ['Jan-14', 'Feb-14', 'Mar-14', 'Ap-14', 'May-14'],
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: '# installs (000s)',
                margin: yAxisMargin,
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontStyle: 'normal',
                    fontWeight: 'unbold',
                    fontSize: '14px',
                    color: '#C0C0C0'  
                }
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            color: '#B0B0B0'
        }]
    });

$('#container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cumulative revenue / cumulative installs',
            margin: 30,
            align: 'left',
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontSize: '27px',
                    fontWeight: 'unbold',
                    color: '#505050'
                }
        },
        xAxis: {
            categories: ['Jan-14', 'Feb-14', 'Mar-14', 'Ap-14', 'May-14'],
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'cum rev / cum #inst ($)',
                margin: yAxisMargin,
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontStyle: 'normal',
                    fontWeight: 'unbold',
                    fontSize: '14px',
                    color: '#C0C0C0'  
                }
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            color: '#B0B0B0'
        }]
    });

$('#container1').highcharts({
              title: {
            text: 'Grossing and free ranks over time',
            margin: 30,
            align: 'left',
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontSize: '27px',
                    fontWeight: 'unbold',
                    color: '#505050'
                }
              },
                xAxis: {
            categories: ['Jan-14', 'Feb-14', 'Mar-14', 'Ap-14', 'May-14'],
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'cum rev / cum #inst ($)',
                margin: yAxisMargin,
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontStyle: 'normal',
                    fontWeight: 'unbold',
                    fontSize: '14px',
                    color: '#C0C0C0'  
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Free ranks',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Grossing ranks',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
          }]
    });

    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Revenue over time',
            margin: 30,
            align: 'left',
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontSize: '27px',
                    fontWeight: 'unbold',
                    color: '#505050'
                }
        },
        xAxis: {
            categories: ['Jan-14', 'Feb-14', 'Mar-14', 'Ap-14', 'May-14'],
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'Revenue(k$)',
                margin: yAxisMargin,
                style: {
                    fontFamily: 'Helvetica Neue',
                    fontStyle: 'normal',
                    fontWeight: 'unbold',
                    fontSize: '14px',
                    color: '#C0C0C0'  
                }
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            color: '#B0B0B0'
        }]
    });

 });


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