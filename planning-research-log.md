## Research & Planning Log

### Friday, 12/01/2023
```
* 08:20am - begin to draft up database schema for user data
* 08:05am - create miro board to organize planning
* 08:37am - create first draft of database schema w/ one-to-many relationship
* 08:40am - begin research into other 'Quit Smoking' apps for design inspiration
* 09:17am - spent time drafting initial component tree & application data in Miro
* 09:18am - there's a humming bird outside my window, maybe I should call the app 'Hum'
* 09:39am - begin looking into TypeScript documentation
* 10:15am - reading through TypeScript documentation
* 10:30am - introductory practice with TS
* 10:52am - research on defining types in TS: Interfaces vs Type Aliases
* 11:10am - taking notes on when to use Interface vs Type Aliases
* 11:20am - back to TypeScript documentation: 'The Basics'
* 12:00pm - finish covering 'The Basics'
* 01:00pm - resume reading through the TS docs
* 01:32pm - working through 'Narrowing' in the docs
* 01:55pm - stepping away from docs, watch Tutorial on TS by Mosh
* 03:00pm - finish watching Tutorial, back to reviewing docs
* 03:34pm - look into configuring & using TypeScript with React (review the React docs)
* 04:08pm - for now, use: npx create-react-app my-app --template typescript 
* 04:24pm - continue watching TypeScript tutorials
* 05:01pm - feeling comfortable with moving forward on implementing TypeScript, will plan on continuing review of documentation over the weekend
* 05:02pm - next steps is deciding on use of NoSQL like Firestore, or implementing my own backend with ASP.NET & MySQL. I'll hold off on making that decision after going through the weekend work and learning more about NoSQL & Firestore. 
```

### Saturday, 12/02/2023
```
* 11am-4pm - look into NoSQL db with Firebase/Firestore (including review of relevant LHP lessons)
* 9pm-10pm - tackle some TypeScript practice problems (typehero.dev)
```

### Sunday, 12/03/2023
```
* 11am-1pm - continue learning TypeScript (review Generic types)
* 3pm-6pm  - look into Authentication w/ Firebase (including review of relevant LHP lessons)
```

### Friday, 12/08/2023

Began work on backend. Can find the repository here: [CranberryAPI](https://github.com/jfpalchak/CranberryAPI.git).

```
* 8:00am  - begin working on ASP.NET Core API backend
* 11:00am - API WIP. After working with NoSQL/Firestore recently, I'm starting to appreciate how easy it is to incorporate into an application. Will see how I feel about actually implementing a C# backend once complete, or using Firestore instead. 
* 11:45am - review customizing Identity user data
* 1:00pm  - WIP: implement basic CRUD & Auth for Users & Journals controllers. As I build out the API, I'm really starting to lean towards using Firestore for the ease of use.
* 1:45pm  - begin working on basic React UI to test API & Client integration
* 2:30pm  - look into creating type-friendly forms in React w/ TypeScript
* 3:15pm  - troubleshooting CORS issue when attempting to sign up through react client
* 3:38pm  - resolve issue, implement CORS policy in API
* 4pm-5pm - implement user registration & sign in, research into persistence with user credentials 
* 5:22pm  - ending the day looking into best practice for user persistence with React, Axios, & React Router.
```

### Sunday, 12/10/2023
```
* 7pm-10pm - continue to implement basic API functionality, reaching MVP status
```

### Monday, 12/11/2023
```
* 5pm-8pm  - WIP: draft a mock-up design on Miro for the frontend
* 8pm-9pm  - draft a component diagram for user Dashboard
```

### Tuesday, 12/12/2023
```
* 5pm-7pm  - create custom hooks to calculate elapsed time & user progress data
```

### Thursday, 12/14/2023
```
* 7pm-8pm  - resolve bug with Safari & Firefox not properly reading certain Date formats
* 8pm-12am - review using either Redux or Context for handling user state, which desperately needs to be refactored
```

### Friday, 12/15/2023
```
* 8:00am   - change Date types for API User & Journal Entity fields
* 8am-10am - review Material UI & Chakra UI docs for inspiration
* 10am-1pm - update login & registration styles + add second registration step
* 1pm-3pm  - look into Chart.js to chart user progress, implement react-chartjs-2
* 3pm-4pm  - refactor nested routes, move user journal fetch up to dashboard, sort journal list display, implement journal data with line chart for Timeline component
* 4pm-6pm  - research into the body's reaction over time for those who quit smoking
* 6pm-7pm  - create dataset of health benefits to the body, use for placeholder Heath Progress component
* 7:20pm   - add comments for functions & hooks to improve readability
```

### Sunday, 12/17/2023
```
* 1pm-5pm  - refactor user auth & state management and implement Redux Toolkit
* 5pm-6pm  - edit auth form styles & add confirmation password to registration
* 6pm-7pm  - clean up custom hooks and fix minor render bugs
* 8pm-11pm - spend time cleaning up & refactoring client code, spend time on API README
```

### Monday, 12/18/2023
```
* 1pm-3pm - research design ideas for landing page / UI
* 4pm-5pm - experiment with styling the UI, and play with responsive styles
* 5pm-6pm - continue updating styles for dashboard navigation & dash components
* 6pm-9pm - update hero page styles, WIP Journal component styles; need to add a couple more analytics to Timeline + styles for Health + a few more metrics for the Profile
```

 ### Wednesday, 12/20/2023
```
* 8am-10am  - add Health Progress tracker to Profile component
* 10am-12pm - refactor & create a custom hook for all Health related data
* 1pm-5pm   - create additional Profile components & update styles
```