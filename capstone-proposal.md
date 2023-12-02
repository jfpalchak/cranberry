## Name of Student: Joey Palchak

## Name of Project: Cranberry (working title)

### Project's Purpose or Goal:

Allow users to track their progress in their journey to quit smoking. Displays the benefits to their health and finances over time.

### List the absolute minimum features the project requires to meet this purpose or goal:

* User authentication.
* Maintain user information with database.
* User dashboard displaying progress over time:
  * Time since last cigarette
  * Money saved
  * Number of cigarettes avoided
  * Time saved from not smoking

### What tools, frameworks, libraries, APIs, modules and/or other resources will you use to create this MVP? List them all here:

#### Planning / Design

* Miro
* draw.io
* SQL Designer
* Figma

#### Front End

* JavaScript/TypeScript
* React
* Node
* npm
* HTML
* CSS

#### Back End

* C#
* ASP.NET Core
* Entity Framework Core
* Identity (with JWT)
* MySQL

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here:

* Allow users to signal if they've relapsed - reset progress trackers.
* Ability for users to document cravings.
* Track user cravings:
  * Graph cravings over time (severity, cigarettes smoked, etc)
* Implement tips for overcoming cravings.
* Add test coverage.
* Build the application for mobile.
  
## What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

* For data visualization, I might implement a library such as:
  * D3.js, Chart.js, Recharts, or Chartkick
* For testing:
  * Jest
  * MSTest
* For mobile design:
  * React Native

## Is there anything else you'd like your instructor to know?

For my backend, I'm considering implementing a NoSQL database instead, or possibly looking into working with the MERN Stack. But I hesitate to try too many new things, and am leaning towards prioritizing learning TypeScript and otherwise sticking to the tools I already know.

At the moment my data is not altogether that complex: 
* Users,
  * in which I also need to implement authentication 
* User Entries / Cravings
  * One-to-Many relationship between Users & User Entries

I'm also contemplating approaching this project as mobile-first, and looking into React Native.