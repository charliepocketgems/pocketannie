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
* Empty Game select controller
*/
function GameSelectCtrl($scope, $location, ParseService) {
     $scope.game_names = [];
     $scope.chosen_games = [];
     $scope.getGameNames = function() {
	console.log('Inside getGameNames');
	//$scope.game_names = [];
	ParseService.getGames(function(results) {
	   $scope.$apply(function() {
		for (var i=0; i<results.length; i++)
		{
		    var game_name = results[i].get('game');
		    if($scope.game_names.indexOf(game_name) == -1) {
			$scope.game_names.push(game_name);
		    }
		    //$scope.game_names[i] = results[i].get('game');
		}
		console.log($scope.game_names);
	   })
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
        if(results) {
//            $scope.$apply( function () {
//                $scope.myAnswers = results;
//
//            });
            //console.log(results);
            //need to have two formats for android vs. ios
            var isAndroidUser = false;
            if($scope.userToFetch.code==101 || $scope.userToFetch.code==77 || $scope.userToFetch.code==79) {
                isAndroidUser = true;
            }

            //need to format this data to look right for high-charts
            var f_results = [];
            f_results = _.map(results, function(anAnswer) {

                var aDate = new Date(anAnswer.createdAt);
                var answerFormatted = {};
                var hour = aDate.getHours();
                var answers = anAnswer.get('answers');
                var qIDs = anAnswer.get('questions')

                var variants = anAnswer.get('questionVariants');

                //this part is for android only
                if(isAndroidUser)  {
                    qIDs = _.map(qIDs, function(aQuestion) {
                        var i=_.indexOf(questionStrings, aQuestion);
                        if(i>8) {
                            return i-9;
                        }
                        else {
                            return i;
                        }

                    });
                    variants = _.map(variants, function(num) {return num-1;})
                    answers = _.map(answers, function(anAnswer) { return parseInt(anAnswer)});
                }

                var answerValues=['','','','','','','','',''];
                var dayOfWeek = aDate.getDay();
                var color = dayColors[dayOfWeek];

                //create new format for the answers
                for(var i=0; i<answerValues.length;i++) {
                    if(variants[i]==1) {
                        answers[i] = 5-answers[i];
                    }
                    answerValues[qIDs[i]]=answers[i];
                }

                //populate out the js object
                //answerFormatted['date'] = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ' ' + aDate.getFullYear() + ' ' + hour;
                answerFormatted['date'] = monthNames[aDate.getMonth()] + ' ' + aDate.getDate() + ', ' + aDate.getFullYear();
                answerFormatted['answerValues'] = answerValues;
                answerFormatted['color'] = color;
                return answerFormatted;

            })

            console.log(f_results);

            $scope.$apply(function () {
                $scope.myAnswers = f_results;
            })
            //console.log('Here\'s your chart data');
            //console.log(f_results);

            var grouped_results = _.groupBy(f_results, function(obj) {return obj.date});

            //console.log(grouped_results);

            var f2_results = _.map(grouped_results, function(aDate) {

                var combinedAnswers = [];
                for (var i=0; i<aDate.length; i++)  {
                    combinedAnswers=combinedAnswers.concat(aDate[i].answerValues);
                }
                //console.log('combined answers '+ combinedAnswers);
                var filteredValues = _.filter(combinedAnswers, function(num) {
                    if(num=='')
                        return 0;
                    else return num;
                });
                var avgValue= parseFloat((_.reduce(filteredValues, function(memo, num) {return memo+num;}, 0)/filteredValues.length).toFixed(2));

                return avgValue;
            });

            //set the highcharts data
            chartValues = f2_results;
            chartDates = _.keys(grouped_results);

            $(function () {

                //console.log(chartDates);
                //console.log(chartValues);
                $('#chart-container').highcharts({
                    title: {
                        text: 'Overall Patient Behavior',
                        x: -20 //center
                    },

                    chart: {
                        type: 'column'
                    },

                    xAxis: {
                        categories: chartDates
                    },
                    yAxis: {
                        title: {
                            text: 'Average Answer Value'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: ''
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0,
                        enabled: false

                    },
                    series: [{
                        name: 'Average Answer Value',
                        data: chartValues
                    }]
                });
            });
        }


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
