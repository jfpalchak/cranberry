<br>
<h1 align="center">
  <u><big><b>Cranberry</b></big></u>
</h1>
<p align="center">
    <!-- Project Avatar/Logo -->
    <br/>
    <a href="https://github.com/jfpalchak/cranberry">
        <img width="100" height="100" src="https://img.icons8.com/external-colored-outline-lafs/100/external-cranberry-flavors-colored-outline-part-2-colored-outline-lafs.png" alt="external-cranberry-flavors-colored-outline-part-2-colored-outline-lafs"/>
    </a>
    <p align="center">
      ___________________________
    </p>
    <!-- GitHub Link -->
    <p align="center">
        <a href="https://github.com/jfpalchak">
            <strong>by Joey Palchak</strong>
        </a>
    </p> 
</p>

<p align="center">
  <small>Initiated December 8th, 2023</small>
</p>

------------------------------
### <u>Table of Contents</u>
* <a href="#-about-the-project">About the Project</a>
    * <a href="#-description">Description</a>
    * <a href="#-known-bugs--WIP">Known Bugs & WIP</a>
    * <a href="#-technology-used">Built With</a>
    * <a href="#-preview--documentation">Previews & Documentation</a>
* <a href="#-getting-started">Getting Started</a>
    * <a href="#-prerequisites">Prerequisites</a>
    * <a href="#%EF%B8%8F-setup-and-use-cranberry-api">Setup and Use: API</a>
    * <a href="#%EF%B8%8F-setup-and-use-cranberry-client">Setup and Use: Client</a>
<!-- * <a href="#-app-documentation">Application Documentation</a> -->
* <a href="#-contributors">Auxiliary</a>
    * <a href="#-contact-and-support">Contact</a>
    * <a href="#-license">License</a>
    * <a href="https://github.com/jfpalchak/cranberry/blob/main/planning-research-log.md">Research & Planning</a>
    
------------------------------

## 🌐 About the Project

### 📖 Description

A play on _"quitting cold turkey,"_ Cranberry is a daily tracker with motivating metrics to help users quit smoking. 

This is a full-stack application, in which the front-end client is built with TypeScript and React, and consumes the [Cranberry API](https://github.com/jfpalchak/CranberryAPI.git), which is built in C#/.NET and utilizes a MySQL database. The application implements JSON Web Tokens for user authentication. 

With Cranberry, users can track their progress in real-time; check out your Health progress as you achieve milestones over the course of your journey, or record daily Journal entries to document your cravings, and watch the data from your journals chart the ups and downs of your story in your own personal Timeline.

To get started, all you need to do is Sign Up for an account, and start writing journals.

You can demo the project at its current state here:
* https://cranberry-axec.onrender.com/ 

### 🦠 Known Bugs & WIP

* WIP: User Account full CRUD functionality. Currently, a user cannot edit or delete their registered information.
* WIP: The number of cigarettes smoked does not yet affect the user's overall metrics. 
  * WIP: Allow users to optionally reset their 'Smoke Free' clock.
* WIP: Journals state management is not yet managed by a Redux store.
* If any additional bugs are discovered, please contact the author.

### 🛠 Technology Used

* [CranberryAPI](https://github.com/jfpalchak/CranberryAPI.git)
* TypeScript
* React (v18.2.0)
* React Router (v6.20.1)
* Redux Toolkit (v2.0.1)
* Axios (v1.6.2)
* Chart.js (v4.4.1)
* react-chartjs-2 (v5.2.0)
* date-fns (v2.30.0)
* Material UI
* HTML
* CSS
  
------------------------------

### 🔍 Previews & Documentation

<!-- <details>
<summary>View Preview Images & Documentation:</summary> -->

#### Landing Page:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/landing.png" alt="Cranberry landing page." />
</p>

> If a user is already registered and authenticated when visiting the landing page, they will be redirected to their user dashboard.

#### Registration:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/register1.png" alt="Registration page, step one." />
</p>

> When a user registers for an account, they will be presented with a two step registration process; the second of which is rendered upon clicking the initial 'Register' button.

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/register2.png" alt="Registration page, step two." />
</p>

> Both the registration forms, and the sign in forms, have input validation with respective error messages. User credentials are managed and stored using both localStorage and Redux Toolkit. Upon selecting 'Log Out', all credentials are removed from localStorage, and the user will be prompted to 'Sign In'.

#### Profile:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/profilev1.png" alt="Dashboard profile." />
</p>

> Upon logging in, or successful registration, the user will be redirected to their personal dashboard. Depending on the amount of time since their quit date, or last cigarette, they will be presented with a number of motivational metrics. The profile page also displays additional information on how certain data points are calculated, or additional resources to help users quit smoking beyond the use of Cranberry.

<p align="center">
    <img width="50%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/profilev2.png" alt="Dashboard profile, responsive." />
</p>

> Cranberry was built with responsive design in mind.

#### Health:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/healthv1.png" alt="Health progress." />
</p>

> Users can follow their progress in real time by visiting their Health page, which displays their progress and achievable health milestones.

<p align="center">
    <img width="50%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/healthv2.png" alt="Health progress, responsive." />
</p>

> There are multiple indicators throughout the application to help show users their progress: the Health page header displays the user's overall milestone progress, while each individual milestone displays a progress bar alongside the percent of completion, as well as a marker on the left-hand side with an appearance that changes depending on a milestone being achieved, or ongoing. 

#### Journals:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/journals1.png" alt="Dashboard journals." />
</p>

> In their Journal page, users can Create, Read, Update, and Delete their own journal entries, documenting their progress and their cravings over time.

<p align="center">
    <img width="50%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/journals3.png" alt="Dashboard journals, responsive." />
</p>

> The Journal page, and its corresponding forms, were intentionally built with ease of use and responsive design in mind.

<p align="center">
    <img width="50%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/journals2.png" alt="Dashboard journals create, responsive." />
</p>

> When presented with the form to create a new journal, if a user selects 'Yes' for having smoked, they'll then be presented with an additional input in the form, in which they can enter the number of cigarettes they smoked. If they select 'No', or leave the toggle un-selected, the additional input will remain hidden and the form assumes the user did not smoke.

<p align="center">
    <img width="50%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/journals4.png" alt="Dashboard journal detail, responsive." />
</p>

> Users are able to select any of their listed journals to inspect its great details, as well as edit or delete that particular journal entry.

#### Timeline:

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/timeline1.png" alt="Dashboard timeline, empty." />
</p>

> With less than two Journals, users will be met with an empty Timeline, and a prompt to add new journals to view their analytics. 

<p align="center">
    <img width="80%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/timeline2.png" alt="Dashboard timeline, results." />
</p>

> Users will otherwise have access to their own interactive timeline, displaying their cravings and cigarettes smoked over their entire journey to quit smoking.

<!-- </details> -->


### 🏗️ Component Diagrams

<details>
<summary>View Component Diagrams:</summary>

#### Profile:

<p align="center">
    <img width="90%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/Profile-Dashboard.jpg" alt="Dashboard profile component diagram." />
</p>

> Initial component diagram for the user profile dashboard components.

#### Health:

<p align="center">
    <img width="90%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/Health-Dashboard.jpg" alt="Dashboard health component diagram." />
</p>

> Initial component diagram for the user health progress/milestones dashboard components.

#### Journals:

<p align="center">
    <img width="90%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/Journals-Dashboard.jpg" alt="Dashboard journal component diagram." />
</p>

 > Initial component diagram for the user journals dashboard components.

#### Timeline:

<p align="center">
    <img width="90%" src="https://github.com/jfpalchak/cranberry/blob/assets_branch/assets/Timeline-Dashboard.jpg" alt="Dashboard timeline component diagram." />
</p>

> Initial component diagram for the user timeline/analytics dashboard components.

</details>

------------------------------

## 🏁 Getting Started

### 📋 Prerequisites

#### 🛰️ Installing Cranberry API

This application relies on the CranberryAPI for all user data and authentication. In order to properly run this web app, you'll need to install and run its companion API.

Beyond the steps listed below, you can find the repository containing the necessary files and documentation, with instructions for setup and installation, here:

* [CranberryAPI v1.0](https://github.com/jfpalchak/CranberryAPI.git)

#### Install .NET Core
* On macOS with Apple Chip:
  * [Click here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-arm64-installer) to download the .NET Core SDK from Microsoft Corp for macOS.
* On macOs with Intel Chip:
  * [Click here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-x64-installer) to download the .NET Core SDK from Microsoft Corp for macOS.
* On Windows:
  * [Click here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-windows-x64-installer) to download the 64-bit .NET Core SDK from Microsoft Corp for Windows.

#### Install dotnet-script
In Terminal for macOS or PowerShell for Windows, enter the following command to install the REPL dotnet-script:

 ```
 $ dotnet tool install -g dotnet-script
 ```

#### Install dotnet-ef
For Entity Framework Core, we'll use a tool called dotnet-ef to reference the project's migrations and update our database accordingly. To install this tool globally, run the following command in your terminal:

```
$ dotnet tool install --global dotnet-ef --version 6.0.0
```

Optionally, you can run the following command to verify that EF Core CLI tools are correctly installed:

```
$ dotnet ef
```

#### Install MySQL Workbench
This project assumes you have MySQL Server and MySQL Workbench installed on your system. If you do not have these tools installed, follow along with the installation steps for the the necessary tools introduced in the series of lessons found here on [LearnHowToProgram](https://full-time.learnhowtoprogram.com/c-and-net/getting-started-with-c/installing-and-configuring-mysql).

Or, [Download and install the appropriate version of MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

#### Install Postman
(Optional) [Download and install Postman](https://www.postman.com/downloads/).

#### Code Editor

  To view or edit the code, you will need a code editor or text editor. A popular open-source choice for a code editor is VisualStudio Code.

  1) Code Editor Download:
     * [VisualStudio Code](https://code.visualstudio.com/)
  2) Click the download most applicable to your OS and system.
  3) Wait for download to complete, then install -- Windows will run the setup exe and macOS will drag and drop into applications.
  4) Optionally, create a [GitHub Account](https://github.com)

### ⚙️ Setup and Use: Cranberry API

  #### Cloning

  1) Navigate to the [Cranberry API repository here](https://github.com/jfpalchak/CranberryAPI.git).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
  4) Clone the repository to your desktop: `$ git clone https://github.com/jfpalchak/CranberryAPI.git`
  5) Run the command `cd CranberryAPI/CranberryAPI` to enter into the project directory.
  6) View or Edit:
      * Code Editor - Run the command `code .` to open the project in VisualStudio Code for review and editing.
      * Text Editor - Open by double clicking on any of the files to open in a text editor.

  #### Download

  1) Navigate to the [Cranberry API repository here](https://github.com/jfpalchak/CranberryAPI.git).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Click 'Download ZIP' and extract.
  4) Open by double clicking on any of the files to open in a text editor.

  #### AppSettings

  1) Create a new file in the CranberryAPI project directory named `appsettings.json`
  2) Add in the following code snippet to the new `appsettings.json` file:
  
  ```json
  {
      "Logging": {
          "LogLevel": {
          "Default": "Warning"
          }
      },
      "AllowedHosts": "*",
      "ConnectionStrings": {
          "DefaultConnection": "Server=localhost;Port=3306;database=cranberry_api;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"
      },
      "JWT": {
          "ValidAudience": "example-audience",
          "ValidIssuer": "example-issuer",
          "Secret": "[YOUR-SECRET-HERE]"
    }
  }
  ```
  3) Change the server, port, and user id as necessary. Replace `[YOUR-USERNAME-HERE]` and `[YOUR-PASSWORD-HERE]` with your personal MySQL username and password (set at installation of MySQL).
  4) In order to properly implement JSON Web Tokens for API authorization, replace `[YOUR-SECRET-HERE]` with your own personalized string.
     1) NOTE: The `Secret` is a special string that will be used to encode our JWTs, to make them unique to our application. Depending on what type of algorithm being used, the Secret string will need to be a certain length. **In this case, it needs to be at least 16 characters long**. 
   
  #### Database
  1) Navigate to CranberryAPI/CranberryAPI directory using the MacOS Terminal or Windows Powershell (e.g. `cd Desktop/CranberryAPI/CranberryAPI`).
  2) Run the command `dotnet ef database update` to generate the database through Entity Framework Core.
  3) (Optional) To update the database with any changes to the code, run the command `dotnet ef migrations add <MigrationsName>` which will use Entity Framework Core's code-first principle to generate a database update. 
     1) After, run the previous command `dotnet ef database update` to update the database.

  #### Launch the API
  1) Navigate to CranberryAPI/CranberryAPI directory using the MacOS Terminal or Windows Powershell (e.g. `cd Desktop/CranberryAPI/CranberryAPI`).
  2) Run the command `dotnet watch run` to have access to the API.

------------------------------

<h3 align="center" >
    With the API launched, our frontend has access to all the data it needs to run!
</h3>
<h3 align="center" >
    Next, let's get the client up and running.
</h3>

------------------------------

### ⚙️ Setup and Use: Cranberry Client

  #### Cloning

  1) Navigate to the [Cranberry repository here](https://github.com/jfpalchak/cranberry.git).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
  4) Clone the repository to your desktop: 
  ```bash
  $ git clone https://github.com/jfpalchak/cranberry.git
  ```

  5) Run the command `cd cranberry/cranberry` to enter into the project directory.
  6) View or Edit:
      * Code Editor - Run the command `code .` to open the project in VisualStudio Code for review and editing.
      * Text Editor - Open by double clicking on any of the files to open in a text editor.

  #### Download

  1) Navigate to the [Cranberry repository here](https://github.com/jfpalchak/cranberry.git).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Click 'Download ZIP' and extract.
  4) Open by double clicking on any of the files to open in a text editor.

  #### .env 

  1) Create a new file in the 'cranberry' project directory named `.env`
  2) Add in the following code snippet to the new `.env` file:
  
  ```json
  REACT_APP_API_URL="http://localhost:5000/api"
  ```

  #### Installation

  1) Assuming you've followed the previous steps, in your Terminal, make sure you've changed your working directory to be in the project's directory.
  2) In your terminal, assuming Node and npm are installed, type the following command to install the project's dependencies found in `package.json`:
     
  ```bash
  $ npm install
  ```

  3) With the dependencies installed, type the following line in your terminal to run the application in development mode:
     
  ```bash
  $ npm run start
  ```
  
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

------------------------------

 <h3 align="center">
     With both the Client & API running, it's time to use Cranberry!
 </h3>
 <h3 align="center">
     All that's left is to Sign Up, and quit smoking.
 </h3>

<p align="center">
<a href="https://github.com/jfpalchak/cranberry">
    <img width="50" height="50" src="https://img.icons8.com/external-colored-outline-lafs/100/external-cranberry-flavors-colored-outline-part-2-colored-outline-lafs.png" alt="external-cranberry-flavors-colored-outline-part-2-colored-outline-lafs"/></a>
</p>

------------------------------

### ✉️ Contact and Support

If you have any feedback or concerns, please contact one of the contributors.

<p>
    <a href="https://github.com/jfpalchak/cranberry/issues">Report Bug</a> ·
    <a href="https://github.com/jfpalchak/cranberry/issues">Request Feature</a>
</p>

------------------------------

### ⚖️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

```
MIT License

Copyright (c) 2023 Joey Palchak.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
  
------------------------------

<center><a href="#">Return to Top</a></center>