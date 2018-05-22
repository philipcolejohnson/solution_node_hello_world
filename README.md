solution_hello_angular_rails
============================






## Overview

This assignment gave you the chance to figure out all of the details of setting up an Angular on Rails application with UI-Router and Restangular. After this assignment you should have a good understanding of the configuration necessary to repeat this process when setting up future Angular on Rails projects.



## Reviewing Your Solution

While reviewing your code ask yourself the following questions:

* Are you including both the AngularJS and CSRF gems in your Gemfile?
* Are you requiring AngularJS before UI-Router and Restangular in your `application.js`?
* Did you disable turbolinks?
* Did you require Lodash or Underscore before Restangular?
* Did you set up your Angular application in your `application.html.erb` layout with `ng-app`?
* Did you set up a Angular controller and template to be loaded for your messages state?
* Did you scope your Rails API under `api/v1`?
* Do you respond to the Rails `messages` route with JSON?
* Did you set up the default Restangular base URL and request suffix to be compliant with Rails URL patterns?
* Were you able to correctly request your `messages` resource from your Angular app with Restangular and load the response into your template?



## Introducing Our Solution

To get started with the solution clone this repo locally, `cd` into it, run `$ bundle install` and `$ rails s`. Now open your browser to `http://localhost:3000`.

### Files

Important files to look at:

- `app/`
    - `assets/javascripts/*`
    - `controllers/`
        - `static_pages_controller.rb`
        - `messages_controller.rb`
    - `views/`
        - `layouts/application.html.erb`
        - `static_pages/index.html.erb`
- `config/routes.rb`
- `public/templates/messages/index.html`
- `vendor/assets/javascript/*`
- `Gemfile`


## Key Tips and Takeaways

1. **Require your JavaScript assets in order to resolve library dependencies.** This is especially important for Restangular. You must include either Lodash or Underscore before Restangular. You must also include Angular before UI-Router and Restangular. It is also a good practice to put all of the Angular `require` statements below where you require jQuery. This allows Angular to import the entire jQuery library into `angular.element`.

    ```javascript
    //= require jquery2
    //= require jquery_ujs

    //= require lodash.min

    //= require angular
    //= require angular-ui-router
    //= require restangular

    //= require_tree .
    ```

1. **There are 3 steps to using Restangular in your app, they'll be covered in more detail as you progress, but they are pretty straight forward.** First, include the plugin in your Angular app. Second, configure the base URL and request suffix. Finally, use it!

```javascript
// Include the Restangular plugin
var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);
```

```javascript
// Set the base URL and request suffix
MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

  }]);
```

```javascript
// Use Restangular in your Angular application!
MyApp.controller('MessagesCtrl',
  ['$scope', 'Restangular',
  function($scope, Restangular) {

    $scope.messages = Restangular.all('messages').getList().$object;

  }]);
```


**NOTE:** *This solution repo is copyrighted material for your private use only and not to be shared outside of Viking Code School.*
