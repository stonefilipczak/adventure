# README

This is a choose-your-own-adventure game engine and interface, intended to inspire and assist non-linear storytelling on the web. It's a React front end making API calls to a Ruby on Rails back end. Check out the live demo to see if you're interested.

If you want to use this app to present your non-linear story idea: great! Go ahead and clone the repo. Note that the default database is set to use Postgresql in order to make depolyment to Heroku nice and simple. If you don't have Postgresql installed and don't want to install it you can edit the config/database.yml file. 

The game engine runs on "scenes", each of which has 5 parts. The prompt is the narrative that the computer reads out. The blurb is a short meme-ification of the prompt, which matches with the "path" that the user chooses each turn. ChoiceA and ChoiceB are the choices users can pick, while PathA and PathB match with a "blurb" to dictate where the story will go. Because the paths aren't hard-coded into the choices you can have multiple choices point to the same path, creating infinite narrative architectures. There is a seeds.rb file that contains the demo scenes as a blueprint. Run "rails db:seed" in the terminal to seed your database with this blueprint. 

There are two ways to write your narrative. One way is in the previously mentioned seeds.rb file. There is also a web interface. Once you've got the app running locally, go to rooturl/scenes. You can write, edit and delete scenes here. This way you don't have to seed the database over and over. 

Good luck! 
