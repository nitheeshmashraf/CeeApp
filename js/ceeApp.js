var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.ModuleName="Customer Evaluation Experiance";
    $scope.title="Campaign-II";
    $scope.showinfos=false;
    $scope.Status="You have created an advocate";
    $scope.Statuss = ["You have created an ambassador","You have created an advocate","You have dissapointed the customer","You have an unsatisfied customer","You have an illmouther",];
    $scope.imageName=null;
    $scope.xs=["Exterior","Interior","Personnel","Upsell","Subjective"];	
    $scope.flagifbar=0;
    $scope.QnA = [
        {Assmnt:$scope.xs[0],Q1:'Yes',Q2:'Yes',targ:false},
        {Assmnt:$scope.xs[1],Q1:'Yes',Q2:'Yes',targ:false},
        {Assmnt:$scope.xs[2],Q1:'Yes',Q2:'Yes',Q3:'Yes',Q4:'Yes',targ:false},
        {Assmnt:$scope.xs[3],Q1:'Yes',targ:false},
        {Assmnt:$scope.xs[4],Q1:'No',targ:true}
    ];
    $scope.showAvtInfo=false;
    $scope.showGrf=true;

    $scope.toggle = function() {
        $scope.showchart=!$scope.showchart;
        console.log($scope.showchart);
    };

    $scope.getImagePath = function(statid) {

    	switch(statid){
    		case 0:
    		$scope.imageName="amb.png"; break;
    		case 1:
    		$scope.imageName="adv.png"; break;
    		case 2:
    		$scope.imageName="uni.png"; break;
    		case 3:
    		$scope.imageName="dis.png"; break;
    		case 4:
    		$scope.imageName="ill.png"; break;
    		deafult:
    		$scope.imageName="null.png"; break;
    	}

		return "./imgss/" + $scope.imageName;
	};


	


});	