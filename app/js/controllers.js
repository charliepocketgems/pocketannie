'use strict';

/* Controllers */

/**
 * Typeahead controller
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param ParseService
 * @constructor
 */

function TypeaheadCtrl($scope, $http) {

  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(res){
      var addresses = [];
      angular.forEach(res.data.results, function(item){
        addresses.push(item.formatted_address);
      });
      return addresses;
    });
  };

  $scope.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];
}


/**
 * App Rank dashboard controller for the app
 */
function AppRankCtrl($scope, $routeParams, $location, ParseService) {

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

$('#container5').highcharts({
              title: {
            text: 'Installs vs. free ranks',
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
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,50],
            tickColor: '#FFFFFF',
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'ranks',
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
            layout: 'vertical',
            align: 'right',
            floating: 'true',
            verticalAlign: 'top',
            borderWidth: 0,
            x: -50,
            y: 20,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            shadow: true
        },
        series: [{
            name: 'Feb-14',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            marker: {
                    enabled: false
                }
        }, {
            name: 'Mar-14',
            data: [-1.2, 1.8, 3.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          }, {
            name: 'Apr-14',
            data: [-3.2, 3.8, 4.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Jun-14',
            data: [-4.2, 4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Jul-14',
            data: [-5.2, 5.8, 6.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Aug-14',
            data: [-6.2, 6.8, 7.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          }]
    });

$('#container6').highcharts({
              title: {
            text: 'Revenue vs. grossing ranks',
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
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,50],
            tickColor: '#FFFFFF',
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'ranks',
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
            layout: 'vertical',
            align: 'right',
            floating: 'true',
            verticalAlign: 'top',
            borderWidth: 0,
            x: -50,
            y: 20,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            shadow: true
        },
        series: [{
            name: 'Feb-14',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            marker: {
                    enabled: false
                }
        }, {
            name: 'Mar-14',
            data: [-1.2, 1.8, 3.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          }, {
            name: 'Apr-14',
            data: [-3.2, 3.8, 4.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Jun-14',
            data: [-4.2, 4.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Jul-14',
            data: [-5.2, 5.8, 6.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          },{
            name: 'Aug-14',
            data: [-6.2, 6.8, 7.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            marker: {
                    enabled: false
                }
          }]
    });

 });


    $scope.init();

}
AppRankCtrl.$inject = ['$scope', '$routeParams', '$location', 'ParseService']

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
            tickColor: '#FFFFFF',
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
            tickColor: '#FFFFFF',
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
            tickColor: '#FFFFFF',
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: {
                text: 'ranks',
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
            layout: 'vertical',
            align: 'right',
            floating: 'true',
            verticalAlign: 'top',
            borderWidth: 0,
            x: -50,
            y: 20,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            shadow: true
        },
        series: [{
            name: 'Free ranks',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            color: '#CC6600',
            marker: {
                    enabled: false
                }
        }, {
            name: 'Grossing ranks',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            color: '#330066',
            marker: {
                    enabled: false
                }
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
            tickColor: '#FFFFFF',
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