# GoWhere
Heroku link: (https://gowhere-wdi6.herokuapp.com/)

A MEAN Stack Web Application featuring events. Companies would create events for users to join.

Built while exploring Angular 2 and MEAN Stack.

## Example Pitch

Welcome to GoWhere. Having trouble deciding where to go? Can't make a decision? Not sure what exciting events are going on?
Let GoWhere help you to make that crucial decision.

We realise that most groups of friends/colleagues can't decide where to go or what to do. And there's always that guy who sits on the fence and just replies 'Anything'.

Now with GoWhere, people can view events happening in Singapore and join the event.

## Diagrams and Wireframes

Entity Relationship Diagram:

![ERD](https://github.com/alexwong23/mealbox-app/blob/master/wdi6_presentation/ERD.jpg)

User Flow Diagram:

![User Flow Diagram](https://github.com/alexwong23/mealbox-app/blob/master/wdi6_presentation/user_flow_diagram.jpg)

![Nutritonix Integration Diagram](https://github.com/alexwong23/mealbox-app/blob/master/wdi6_presentation/nutritonix_api_integration.jpg)

## What's next?
1. Admin Panel Build-out: Add tracking of payment logs
2. Featured Recipes based on likes/views
3. Add commenting functionality to recipe pages

## Known Bugs
1. If transaction is updated wrongly, it goes back to transactions/:id when it's supposed to go back to transactions/:id/edit
2. Devise-related: Signing up new user with existing email address comes up with an incomplete error message

## What was used?

Frontend: Bootstrap, Masonry, Javascipt/jQuery,
Backend: Ruby On Rails, SQL Lite3
External APIs: GoogleMaps API, Nutrionix API, Braintree Payment API
Hosted on Heroku

For full list of Dependencies, refer to the Gemfile.

## Credits

Many thanks go to our wonderful instructors & coursemates from General Assembly Singapore for their help and support.

## How to deploy to heroku
1. git fork the repo into your own github
2. git clone it into your directory
3. git checkout heroku
4. heroku create [insert name of yr heroku app]
5. git push heroku heroku:master **
6. heroku run rake db:migrate
7. heroku run rake db:seed

At this point yr separate app should be good to go.

If you nd to reset the postgres db that heroku uses in production:
`heroku pg:reset DATABASE_URL --confirm [your app name]`

To see more info on the heroku postgres db of yr app:
`heroku pg:info`

**NOTE: this step is different from yr typical git push heroku master, because we are pushing yr local heroku branch to your heroku’s host master branch

[10:42]  
did the deployment based off this https://glencbz.gitbooks.io/wdi-6-reference/content/unit-3/rails/deployment.html
