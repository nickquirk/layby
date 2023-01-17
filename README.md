
# Layby

This was the third project on the General Assembly Software Engineering Immersive course and would be a team project to build a full stack application hosted online. The project should have a front-end built with React and use an Express API to serve data from a Mongo database. 

We worked to build a platform for users to share information about places to travel and explore in a camper. The site would basically be a searchable index of locations, each with a short description and a couple of key points of information. These locations could be reviewed by registered users, building a community feel around the application. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image7_plhx1x.png)
##  Deployment
Application can be accessed here: https://layby.herokuapp.com/

##  Getting Started/code Installation
Code can be accessed at GitHub: https://github.com/nickquirk/layby

Run:
```
npm i
npm i bcrypt
npm i bootstrap
npm i buffer
npm i dotenv
npm i express
npm i jsonwebtoken
npm i mapbox-gl
npm i mongoose
npm i react-icons
```
##  Timeframe & Working Team
I was grouped with Archie (https://github.com/ajx-mijo) and Lucy (https://github.com/LucyHeath) for this project. We had ten days to meet the criteria of the project and produce a full-stack web application. 
## Technologies Used
**Development Tools**
* Visual Studio Code - IDE
* Insomnia - API interface
* NPM - Package manager
### Frameworks
**Frontend**
* React - JavaScript framework (https://reactjs.org/)
* Sass - CSS extension language (https://sass-lang.com/)
* Bootstrap - Frontend toolkit (https://getbootstrap.com/)
**Backend**
* Axios - HTTP client (https://www.npmjs.com/package/axios)
* Express - API interface (https://expressjs.com/)
* Node.js - runtime environment (https://nodejs.org/en/)
* MongoDB - database tools (https://www.mongodb.com/)
**Third party**
* Cloudinary - Image upload and hosting tools (https://cloudinary.com/)
* Mapbox - Location and mapping (https://www.mapbox.com/)
* Heroku - cloud application platform (heroku.com)

## Brief
* Build a full-stack application by making your own backend and your own front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design
* Be deployed online so it's publicly accessible


##  Planning
We started off the planning phase with some brainstorming and quite quickly came up with a basic idea that we were happy with. We then looked at other web apps and previous student projects and made a list of the sites and components within those sites that we liked. 

These included design decisions like the styling and layout and also functional components that we thought worked well. From this initial session it was clear that we were all drawn to applications that were clean and quite minimal in their design. We also seemed to favour design features like the ‘burger’ menu, carousel images and functions that allowed lots of information to be shown without overcrowding the interface. 

We made a note of all of these features and used them to inform the design for our application. Once we had an idea of our design direction we constructed wireframes using Excalidraw (https://excalidraw.com/) of the interface and plotted the user journey through our site.

### Wireframes 

**Mobile Layout**

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625144/Readme_Pics/Project3/image21_trbbyj.png)

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625144/Readme_Pics/Project3/image17_ayn5pv.png)

**Desktop Layout**

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image10_vw7ltw.png)

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image2_b2wygs.png)

### Minimum Viable Product
Once we had the wireframes drawn we defined an MVP. This was the minimum functionality and design that our application would have in order to fulfil the project brief. 

* Mobile responsive 
* Landing page 
    * With interactive hero
    * Click to find locations 
    * Top rated sites
    * Login/Register bar at bottom 
    * Search to take you to a single site 
* Cards page with - Index
    * All regions displayed 
    * Picture and name 
    * Search for a spot
    * Dropdown to filter?  
    * Click region to access spots page
* Navbar 
    * Logo
    * Burger menu? 
    * Filter by region
    * Search 
* Individual location index 
    * Dropdown to filter by region
    * Search within filter category (region) 
    * Cards 
        * Image
        * Name
        * Rating
        * Wind direction 
        * Basic Description 
        * Info on hover? 
* Single location 
    * Nice header image
        * Name 
* Map 
* Pagewide bar with widgets : Useful but not most recent info
    * Nearest fuel station
    * Free parking?
    * Rating
        * Dynamic stars/dropdown
    * Terrain? 
* Description 
* Reviews
    * Review
        * Anyone can read a review
        * Must be logged in to leave a review	
    * User 
    * Rating
* User updated photos 
    * User Profile 
    * Profile pic
    * Info
    * Favourite spots 
    * Add/update locations 
    * Delete Review 
* Highlight User Opportunities (leave a review, etc.)

### Stretch Goals 
We defined some stretch goals that we would accomplish once we had completed the MVP:

* User can ‘like’ places and these will show up in the profile page 
* User Interface hover effects to reveal more information about a location
* Display locations by rating 


##  Build/code Process
Once we had the basis for our project we spent some time planning how we were going to collaborate. We used Trello to divide the project up into small sections and keep track of who was working on what. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673627280/Readme_Pics/Project3/Screenshot_2023-01-13_at_16.27.54_ztwluy.png)

This worked well for the early stages of development when we were building the base functionality and work was being completed quickly. It was helpful to see at a glance where we were in the development and who was working on what. 

Although mostly we would work separately during the day we would be on a Zoom call together and on Slack so that we could check-in with each other or ask questions if we needed. When we were finished with a certain feature and we wanted to push to the development branch we would all jump in just in case there were merge conflicts. 

When we had completed the initial project setup we each took ownership of a slightly larger section of the project, we made a note of this on our Trello for reference. For me this was the user profile page. If anyone in the group needed to modify that section for any reason, we would always check-in with whoever was working on it and sometimes they would jump in and help. Working in this way meant that we all knew who was working on what and we reduced the chances of merge conflicts. 

### Git and Version Control
We used Git so that we could all contribute to the project at the same time whilst working on our own machines. This process felt a bit clunky to begin with and we did the first few merges together just in case there were any conflicts. After a few days it became much more natural and we would all commit several times a day.  

We adopted the following strategy for version control. We each worked on our own feature branch, pushing to the development branch when we had completed each feature or made a major change and there were no code-breaking bugs. At the end of the project we all pushed our changes and merged the development branch into the main branch. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/b_rgb:ffffff/v1673625141/Readme_Pics/Project3/image3_mxfq5s.png)

Working in this way meant that we all had a backup of our most recent work on our remote and could also try things out on our own feature branch and make sure that any major bugs were fixed before pushing to the development branch. This ensured that everyone had a working version of the code and also that our code was backed up in multiple places, in multiple different versions should we need to roll it back. 

### Distribution of Work 
In the early stages of the project work was split between many small components as we built the main functionality of the front and back-end. We also created a seed script and used this to populate our Mongo database. Once we had completed most of the core-functionality we each took larger, more advanced features to work on individually.

### Data Structure 
Our seed script was formatted in exactly the same way as our document models and allowed us to drop the database entirely and re-seed should we need to. In this way we only had to create this data once instead of having to populate the database by hand if we dropped it. 

The screen capture below shows an example of one of the locations we created in our location seed data. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image11_yes7ie.png)

### Country
Our data-structure was as follows. The Country Schema held some basic information about the country and also the Location Schema. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image5_p7nqrn.png)

### Location
The Location Schema held the information about each individual location and was formatted as below. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image13_f4vmd1.png)

### Profile Page

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image9_uss1uv.png)

Once we had a solid base for our project I started working on the user profile page. This would have the following functionality: 

* User can see the reviews that they have left
* User can delete reviews 
* User can change their profile picture

### Profile Picture
I decided to use the cloud platform Coudinary to enable users to upload their own images from their local machine. I thought this was a more robust solution than simply taking a URL and more closely mimicked the functionality of established social media sites. 

After some initial setup on the Cloudinary website I created a local .env file to store the configuration variables. This would make sure that these sensitive details would be excluded from the Git commits and not be published online. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image15_sosxaf.png)

We wanted to use the same image upload functionality on the single location page so I created a standalone component which could then be ported easily to other areas of the site. 

Cloudinary takes an image, uploads it to the cloud storage location specified and then returns a URL pointing to that image which can then be embedded on a web page. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image12_fiagnn.png)

The function below handles this request and returns the image URL in a form which I displayed on the profile page. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625144/Readme_Pics/Project3/image20_fz9i1u.png)

On the profile page I included this function alongside a button to submit the image data to Cloudinary and then update the user profile picture with the URL received back. I passed the handleSubmit function as a prop so it could be used within the UploadImage function. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image16_gthseg.png)

Once the image URL was received back from Cloudinary the handleSubmit function updated the image in the current users document and then updated the image shown on the page to be this image.

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image6_xvch7z.png)

### User Reviews
This was probably the hardest part of the project for me but it was a functionality that I thought would really add value to the project so I persevered with it. 

The main problem was the way that we had structured our data documents made it really difficult to access the review data. It was nested within an array within the review document object which was nested within the locations array which was a value on the country document. If you think that was hard to read, it was even harder to work with! The data basically looked like the structure below.

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image8_kx1j2d.png)

To get the data into a state that was usable I needed to build up an object and return it in the following format.

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image8_kx1j2d.png)

To do this I created a virtual field in the user schema that would return with the JSON body when the current user model was queried. 

This included the reference to the location, the local (fields on the user document) and foreign (field on the location document) and a custom get function that would build the object to return with the JSON body. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image4_lef7tl.png)

The bulk of this function is a forEach loop which calls created a custom method on the country schema. This builds up the reviews object, returning the id of each review, the text string name of the location where the review was posted and the first image in the image array of that location.  

This worked but I found that the function would return all locations within the country even if they didn’t have reviews. In these cases the reviews array would be returned blank. To fix this I used some conditional logic to populate the reviews array only when there was data inside the reviews array. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625142/Readme_Pics/Project3/image5_p7nqrn.png)

In the user profile page I used the ListGroup component to display the reviews in a dynamically created list. 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625141/Readme_Pics/Project3/image1_yhtnye.png)

Which then displays this on the user profile page 

![](https://res.cloudinary.com/dhjguxvm1/image/upload/v1673625143/Readme_Pics/Project3/image14_cbs2ev.png)


##  Challenges
This project definitely tested us all. Some of the main challenges for me were.

* Adjusting to working in a team
* Making a fully responsive site. Mobile first and then desktop. 
* Getting the review information from location document and displaying it on the user profile page
* Trying to make reusable, DRY code where possible

### Working in a Team
When we first started the project it took me a little bit of time to adjust to working in a team of three. The planning stage seemed to take forever and pushing to Git using multiple branches, and trying to coordinate this, seemed clunky and unintuitive. After the first couple of days however, we settled into a rhythm and I started to see the value that working in a team can offer. We could allow the project scope to be larger because more people working together meant that we could usually accomplish more in a certain period. Our planning stage was also pretty thorough which meant that we had fewer unforeseen problems further into the project. 

### Making the Site Responsive 
One of our MVP specifications was that the site be fully responsive and could be viewed on any device without any loss of user experience. Working with this in mind essentially meant we had to develop two sets of wireframes and adjust any user journey and interface elements that wouldn’t work in all device formats. Throughout the development process we worked with a ‘mobile first’ mentality. Building pages firstly in the mobile view and then expanding to desktop size. This definitely added more work and made the project more challenging but was a great learning experience and was satisfying when it came together. 

### User Reviews 
Getting the user reviews to populate properly on the profile page was particularly challenging. I had taken ownership of the profile page so this task lay within my remit. The main problem here was the way that we had structured our data in the back end. We had made the decision early on to nest one database model within another (I genuinely can’t remember why now) and it took some pretty intense, CodeWars style data manipulation to get the review data into a form that was usable on the profile page. About ten hours, several nested loops and some fairly complex conditional logic later I had figured this out but I couldn’t help feeling that with some foresight we could have avoided such a difficult slog. 

### Writing DRY Code
This is an ongoing challenge for me and something I’m continually trying to work on. This project was probably the first time that I really attempted to break out functions and components into separate re-usable chunks. At first this seemed like lots of extra effort and time that could be spent pushing other areas of the project forward but I definitely saw the benefit when I saw how easy it was to reuse each component or function. One notable example of this was with the Cloudinary image upload feature. 

I initially developed this feature for the profile page but we quickly saw that it could also be used to upload images to each location too. Because I had developed a standalone Image Upload component  this was quickly integrated into the Create Location function to give the desired result. I think it took about 3 minutes, I’m definitely sold. 




##  Wins
* Displaying user reviews on the profile page!
* Visual design of project matches our design philosophy we set out in our plan
    * Simple and clean
    * Functional but engaging
* Website works as expected

##  Key Learnings/takeaways 
* Version control with Git
* Sometimes what seem like a simple features can be quite complicated to make in practice
* Importance of good communication in a group project 
* Clear naming conventions are REALLY important

### Team working
As I mentioned in the Challenges section this was the first time I’d worked in a group of this size on a project. At first it was a bit frustrating as it felt like the planning and major decisions were moving in slow motion but after some time I began to see the value in a design by committee. 

Our planning stage took slightly longer than a solo project because each element was scrutinised by our entire group before it was included. This meant that everything that we included was carefully thought about and worked within the overall scope of the project. After my initial frustration I can definitely see the value of working in this way and how a properly prepared plan can prevent potential pitfalls further down the line. 

### Naming Conventions 
It was in this project that I really began to see the value of naming variables, functions and components in a sensible, logical way. During the planning stage we had developed the application around a slightly different theme to the one we eventually ran with. After the first day we updated the seed data and some of the database models but left some with the same name. The names of the models that remained the same almost made sense in the new context but in hindsight we should have changed them too. Once we were further into the project the odd naming conventions started to become confusing and led to some extended sessions of group head-scratching. 

This has definitely shown me the confusion that can arise from improper or not properly thought out naming conventions. I think we could have saved a lot of time and made life easier if we had been more mindful about the naming conventions in the beginning. 

### Simple Feature? 
One experience that will stick with me from this project was how a simple idea on paper can sometimes become a technical behemoth to build in reality. Displaying the user reviews on the profile page became this experience for me. This was mostly because the way we had structured our back-end models made it difficult to manipulate and display the data. In our plan I had budgeted around 2 hours to develop this feature but in reality it took me almost a day to implement. This has shown me not to underestimate the time it takes to develop seemingly simple features. If they seem too simple, maybe you’re missing something...   



##  Bugs
There were no major bugs on our site at the time of upload. 
##  Future Improvements 
In future versions of the application there are some additional features that I think would really improve the user experience and add useful functionality. 

* Show user profile picture elsewhere on site. 
    * Navbar
    * Reviews
* Sort locations by rating 
* Allow users to ‘like’ locations and show these in the profile page 
* Replace lat and long with geocoding on the Add Location form using MapBox API

