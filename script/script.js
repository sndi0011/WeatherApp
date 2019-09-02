var mainApp = angular.module("myApp", []);
mainApp.controller('MyCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
	"use strict";
	$scope.isMore = false;
	$scope.icons = {
		rainhtml: '<div class="drops"><div class="rain-drop rain-drop1"></div><div class="rain-drop rain-drop2"></div><div class="rain-drop rain-drop3"></div><div class="rain-drop rain-drop4"></div><div class="rain-drop rain-drop5"></div><div class="rain-drop rain-drop6"></div><div class="rain-drop rain-drop7"></div><div class="rain-drop rain-drop8"></div></div>',
		sunnyhtml: '',
		cloudyhtml: '<div class="cloudy-wrap" aria-hidden="true"></div><div class="sunny-wrap"><div class="weather-image sunny"></div></div>',
	};
	$scope.days = [{
		day: "monday",
		type: "sunny",
		temperature: "26°/19°",
		html: $scope.icons.sunnyhtml
	}, {
		day: "tuesday",
		type: "rain",
		temperature: "20°/12°",
		html: $scope.icons.rainhtml
	}, {
		day: "wednesday",
		type: "cloudy",
		temperature: "14°/6°",
		html: $scope.icons.cloudyhtml
	}, {
		day: "thursday",
		type: "sunny",
		temperature: "26°/19°",
		html: $scope.icons.sunnyhtml
	}, {
		day: "friday",
		type: "rain",
		temperature: "20°/12°",
		html: $scope.icons.rainhtml
	}, {
		day: "saturday",
		type: "cloudy",
		temperature: "14°/6°",
		html: $scope.icons.cloudyhtml
	}, ];

	$scope.favicons = [{
		rel: "apple-touch-icon",
		size: 57,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 60,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 72,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 76,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 114,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 120,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 144,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 152,
		href: "apple-icon",
	}, {
		rel: "apple-touch-icon",
		size: 180,
		href: "apple-icon",
	}, {
		rel: "icon",
		size: 192,
		href: "android-icon",
	}, {
		rel: "icon",
		size: 32,
		href: "favicon",
	}, {
		rel: "icon",
		size: 96,
		href: "favicon",
	}, {
		rel: "icon",
		size: 16,
		href: "favicon",
	}, ];

	
	$scope.renderHtml = function (html_code) {
		return $sce.trustAsHtml(html_code);
	};

}]);
