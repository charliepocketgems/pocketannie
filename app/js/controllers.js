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

function TypeaheadCtrl($scope, $location, ParseService) {

  $scope.selected = undefined;
  $scope.getGame = function ( selected ) {
    $location.path( '/game/' + encodeURIComponent(selected));
  };
  ParseService.getGameTitles(function(results) {
        //console.log(results);
        $scope.games=results;
    });
}
TypeaheadCtrl.$inject = ['$scope', '$location', 'ParseService']


/**
 * App Rank dashboard controller for the app
 */
function AppRankCtrl($scope, $routeParams, $location, ParseService) {

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

        $scope.game = "";
        //$scope.user = ParseService.getUser();
        //if($scope.user) {
        //    $location.path('/dashboard');
        //}
        if ($routeParams.param1) {
            $scope.game = $routeParams.param1;

        }

       // $scope.getAvgInstalls = ParseService.getAvgInstalls();

    }

    $scope.init();
    $scope.getAvgInstallsfunc = function(game) {
      ParseService.getGameMetrics(game,'iphone','US', function(results) {
        $scope.$apply(function() {
          $scope.getAvgInstalls = results[0].get('avginstalls');
          $scope.getAvgRevenue = results[0].get('avgrevenue');
          $scope.getTotalInstalls = results[0].get('totalinstalls');
          $scope.getTotalRevenue = results[0].get('totalrev');
          $scope.getPublisher = results[0].get('publisher');

        })
      })
    }

    $scope.getAvgInstallsfunc($scope.game);

          $scope.getMonth = [];
          $scope.getInstalls = [];
          $scope.getRevenue = [];
    $scope.getcumltv = [];
    $scope.getfreeranks = [];
    $scope.getgrossingranks = [];
          $scope.dataObjects = [];
          $scope.sortedData = [];
          var yAxisMargin =30;
    
    $scope.getGameMonthlyfunc = function(game) {

      ParseService.getGameMonthly(game, 'iphone', 'US', function(results) {
        $scope.$apply(function() {
          for (var i=0; i<results.length;i++){
            var newDataElement = {};
            newDataElement['month'] = results[i].get('month');
            newDataElement['installs'] = results[i].get('installs');
            newDataElement['rev'] = results[i].get('revenue');
              newDataElement['cumltv'] = results[i].get('cumltv');
              newDataElement['rankapp_installs'] = results[i].get('rankapp_installs');
              newDataElement['rankapp_revenue'] = results[i].get('rankapp_revenue');
            $scope.getInstalls.push(parseInt(results[i].get('installs'),10));
            $scope.getRevenue.push(results[i].get('revenue'));
            $scope.getcumltv.push(results[i].get('cumltv'));
            $scope.getfreeranks.push(results[i].get('rankapp_installs'));
            $scope.getgrossingranks.push(results[i].get('rankapp_revenue'));
            $scope.getMonth.push(results[i].get('month'));
            $scope.dataObjects.push(newDataElement);
          }
          // console.log($scope.getInstalls);
          // console.log($scope.getRevenue);
          // console.log($scope.getMonth);
          //console.log($scope.dataObjects);

          $scope.sortedData = _.sortBy($scope.dataObjects, function(obj){ 
            var month = obj.month.match(/[0-9]+/);
            //console.log(month);
            var year = obj.month.substring(obj.month.length-4);
            
            return new Date(parseInt(year), parseInt(month)+1)});
//          console.log($scope.sortedData);
    

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
            categories: _.map($scope.sortedData, function(obj) { return obj.month; }),
            tickColor: '#FFFFFF',
            gridLineWidth: 0,
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
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
            name: 'Installs',
            data: _.map($scope.sortedData, function(obj) { return parseInt(obj.installs); }),
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
            categories:_.map($scope.sortedData, function(obj) { return obj.month; }),
            tickColor: '#FFFFFF',
            gridLineWidth: 0,
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
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
            name: 'cumltv',
            data: _.map($scope.sortedData, function(obj) { return parseInt(obj.cumltv); }),
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
                    categories: _.map($scope.sortedData, function(obj) { return obj.month; }),
                    tickColor: '#FFFFFF',
                    gridLineWidth: 0,
                        labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
            },
        yAxis: {
            min: 1,
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
            },
            reversed:true
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
            data: _.map($scope.sortedData, function(obj) { return parseInt(obj.rankapp_installs); }),
            color: '#CC6600',
            marker: {
                    enabled: false
                }
        }, {
            name: 'Grossing ranks',
            data: _.map($scope.sortedData, function(obj) { return parseInt(obj.rankapp_revenue); }),
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
            categories: _.map($scope.sortedData, function(obj) { return obj.month; }),
            tickColor: '#FFFFFF',
            gridLineWidth: 0,
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
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
            name: 'Revenue',
            data: _.map($scope.sortedData, function(obj) { return obj.rev; }),
            color: '#B0B0B0'
        }]
    });

 });

        })
      })
    }
    console.log('game '+ $scope.game);
    $scope.getGameMonthlyfunc($scope.game);






}
GameDashCtrl.$inject = ['$scope', '$routeParams', '$location', 'ParseService'];


/**
* Empty Game select controller
*/
function GameSelectCtrl($scope, $location, ParseService) {
     $scope.game_names = [];
     $scope.chosen_games = [];
     $scope.getGameNames = function() {
	    console.log('Inside getGameNames');
	    //$scope.game_names = [];
	    ParseService.getGameTitles(function(results) {
	        $scope.game_names = results;
            //console.log(results);

	    });
     }
     /*$scope.suggest = function() {
	if($scope.g_name=='') $('p').hide();
	else $('p').show();
     }*/
     $scope.getGameNames();
     $scope.g_names = $scope.game_names;
     $scope.suggest = function(typed) {
        for( var i=0; i< $scope.game_names.length; i++) {
        {
            if($scope.game_names[i].indexOf(typed) == 0) {
                $scope.g_names.push($scope.game_names[i]);
            }
        }
     }
   }

   $scope.append = function(game_name) {
	//game_name = $('autocomplete').value();
	if($scope.chosen_games.indexOf(game_name) == -1) {
	    $scope.chosen_games.push(game_name);
	    $scope.g_name = "";
	}
	//$scope.apply();
   }

   $scope.remove = function(game_name) {
     $scope.chosen_games.splice($scope.chosen_games.indexOf(game_name), 1);
  }	
}
GameSelectCtrl.$inject = ['$scope', '$location', 'ParseService']

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
        console.log(results);



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
