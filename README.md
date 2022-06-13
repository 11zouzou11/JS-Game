# JS - Quiz Game


## Table of contents

1. [Introduction](#introduction)
2. [HowToUse](#how-to-use)
3. [UX](#UX)
    1. [Ideal User Demographic](#Ideal-User-Demographic)
    2. [User Stories](#User-Stories)
    3. [Development Planes](#Development-Planes)
    4. [Design](#Design)
4. [Features](#Features)
    1. [Design Features](#Design-Features) 
    2. [Existing Features](#Existing-Features)
    3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
5. [IssuesAndBugs](#issues-and-bugs)
6. [TechnologiesUsed](#technologies-used)
7. [Testing](#Testing)
     1. [Testing.md](TESTING.md)
8. [Deployment](#deployment)
9. [Credits](#credits) 

---

# Project Description

The JS-Quiz Game is a game that made with the user in mind. this game challenge the user's knowledge within the tech field. 
It's main perpous is to educate and give a wide range of questions that makes receiving the new informations fun ana challenging by competing to achieve a higher score between the users.

This is the second of four Milestone Projects that the developer must complete during their Full Stack Web Development Program at The Code Institute.

The main requirements were to make a responsive and interactive website using primarily **HTML5**, **CSS3** **JAVASCRIPT**.


[Back to top ⇧](#JS-Game)

## How To Use 

### Structure

This is a 4 pages website.
1. The first page is the home page and it has 2 sections
    1. The play section where the user can initialize the game.
    2. The highscores section where it gives shows the user the 5 top recent highscores.
2. The second page is a main quiz with the question are proposed with 4 diffrent answers to choose a right one from.
3. The third pasge is a end page, where the user get to see what score they achieved and wheather they want to save it, restart or leave the game.
4. the fourth page is the highscores page where the user can see the last 5 highest highscores.

## UX

### Ideal User Demographic
#### The ideal user of this website is:
- tech enthusiasts
- kids that wants to get more info about the tech world
- professionals who want to refresh their memory or get new informations

### User Stories
#### New/Potential Clients Goals:
1. As a new user, I want to easily navigate through the website to find the relevant content, effortlessly.
2. As a new user, I want to learn more about the quiz game and what it has to offer.
3. As a new user, I want to easily navigate the quiz website and fine the relevent sections easely.
4. As a new user, I want to have fun while learning new stuff.


#### Current Users Goals:
1. As a current user , I want to navigate to information about the newest questions.
2. As a current user, I want to find out where the informations are taking from. 
3. As a current user, I want to easily navigate to the highscores page to check my current rank.

### Development Planes

In order to create a comprehensive and informative website, the developer worked closely with other informative websites  to distinguish the required functionality of the site and how it would answer the user needs, as described above.

#### Strategy
Broken into three categories, the website will focus on the following target audiences:

**Roles:**
     - Current users of the website
     - New users
     - proffesionals within the tech field

**Demographic:**
     - all ages that can navigate and answer tech related questions
     - Potential (students, fresh graduates)
     - Professional tech personal.

 **Psychographics:**
     - Personality & Attitudes:
          - technology
          - Social
     - Values:
          - expand the technological knowledge
     - Lifestyles:
          - Beauty 
          - Interested in the "knowledge seeking"

The website needs to enable the **user** to:
- Retrieve desired information:
     - New quiz
     - Upcoming challenges
     - highscores

With these goals in mind, a strategy table was created to determine the trade-off between importance and viability with the following results:

![Strategy Table](/images/strategy-table-2.png)

#### Scope
A scope was defined in order to clearly identify what needed to be done in order to align features with the strategy previously defined. This was broken into two categories:
- **Content Requirements**
     - The user will be looking for:
          - General information
          - New information
          - social interaction
          - fun practice
- **Functionality Requirements**
     - The user will be able to:
          - Easily navigate through the site in order to find the information they want
          - Be able to interact with the website in order to compete and have fun with other users

#### Structure
The information architecture was organized in a **hierarchial tree structure** in order to ensure that users could navigate through the site with ease and efficiency, with the following results: 


![Strategy Table](/images/structure%20js.png)


### Skeleton 

Wireframe mockups were created in a [Balsamiq]((https://balsamiq.com/)


website: 

![Website Wireframe](/images/New%20Project%201.png "Website Wireframe")


[Back to top ⇧](#JS-Game)


### Design

#### Colour Scheme
The main colours used throughout the website are a mixture of gray and White, with black accents.
The chosen colour scheme is a reflection of the current vibe of the game.

#### Typography
The pairing of the fonts ['Signika'](https://fonts.google.com/specimen/Signika?query=Signika "Link to 'Signika' Google Font")is used throughout the website with Sans Serif as the fallback font in case of import failure. 

#### Imagery

The imagery is catching and visually represents the theme of the website.

[Back to top ⇧](#JS - Quiz Game)


## Features
### Design Features
Each page of the website features a consistent responsive navigational system:

- each page has a consistant similarity withc the  buttons and the headers 

<dl>
  <dt><a href="index.html" target="_blank" alt="quiz-game">Home Page</a></dt>
  <dd>The Home Page is divided into three columns wide on desktops and one column or two on mobile and tablet devices:
     <ul>
         <li><strong>Hero Image</strong> - Occupying 100% of the page width and height on all devices, The imagery used was specifically chosen as it created a impactful first impression, setting the tone of the website for the users.
          </li>
          <li><strong>Text</strong> - On the top right side and the botoom, while viewing on a desktop. On mobile and tablet devices, the text becomes stacked, on the <strong>Hero Image</strong> and keeps getting smaller  on certain device size.This style was chosen in order to draw the users attention to the information straight away. In this, there is a <strong>highscores</strong> button linking to the highscores page where users can see the last 5 highscores.</li>
           </ul>
  </dd>
  <dt><a href="quiz.html" target="_blank" alt="quiz-game-main-section">quiz Page</a></dt>
  <dd>The quiz page structurally similar to the other pages with three columns, providing a uniformed and consistent look for aesthetic purposes:
     <ul> 
     <li><strong>quiz Grid</strong> - Occupying 100% of the page width while viewing on a desktop. On mobile and tablet devices, the image becomes stacked occupying 100% of the page width as one column.
          </li>
            </ul>
</dd>
<dt><a href="endquiz.html" target="_blank" alt="endquiz">end Page</a></dt>
  <dd> on all devices the endquiz page has a <strong> score header</strong> that is fixed and unmoving as the user scrolls through the page.
  </dd>
</dl>
<dt><a href="scores.html" target="_blank" alt="highscores">highscores Page</a></dt>
  <dd> on all devices the highscores page has a <strong> form</strong> that is fixed and unmoving as the user scrolls through the page to check the last top 5 high scores.
  </dd>
</dl>


### Features to Implement in the future
- **External QUIZ API**
     - **Feature** - Adding an API to generate new questions each time the user uses the website.
     - **Reason for not featuring in this release** - more variation and new challenging question.
     - **Feature** - Adding a 3 level : easy , medium , hard.
     - **Reason for not featuring in this release** - challenging levels with more deficult question to the hardcore users.


[Back to top ⇧](#JS-Game)
     

## Issues and Bugs 
The developer ran into a number of issues during the development of the website, with the noteworthy ones listed below, along with solutions or ideas to implement in the future.

**Hero Image Issue - all pages** - A bug was detected while styling the hero image where the image wasn't taking the position properly, while searching the web to see if someon else had the same ussue the developer found a solution posted on  [Stack Overflow](https://stackoverflow.com/questions/26236486/background-size-cover-not-working "Link to Stack Overflow solution") that helped to fix the bug.

**Red And Green - quiz Page** - A bug was detected while making the wrong answer colored red and the right one green when answering the quiz, a solution was found on google and youtube [youtube](https://www.youtube.com/results?search_query=class+to+apply+javascript "Link to youtube tutorial solution") that helped to fix the issue.

**GamePlay issue** - The original plan for the game was to use one page and iterate an array depending on the category button that the user clicked. This method created an overlapping issue within the JavaScript script.js file and the page would not function as designed. In order to save the functionality of the game, the developer decided to divide the categories into their own pages (both .html and .js), with each page executing their own functions during game-play.

**Common variables in JavaScript Issue** - The JavaScript was divided into three files, one for each game category (for functionality), and the devellopper faced a bug where the the variables overlapped, creating 3 seperate file helped fixing this issue.


[Back to top ⇧](#JS-Game)


## Technologies Used

### Main Languages Used
1. [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")
3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript "Link to JavaScript Wiki")

### Frameworks, Libraries & Programs Used
1. [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/ "Link to Bootstrap page")
     - Bootstrap was used to implement the responsiveness of the site, using bootstrap classes.
2. [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Roboto", "Lato" and "Montserrat" into the style.css file. These fonts were used throughout the project.
3. [Git](https://git-scm.com/ "Link to Git homepage")
     - Git was used for version control by utilizing the GitPod terminal to commit to Git and push to GitHub.
4. [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing
5. [Balsamiq](https://balsamiq.com/ "Link to balsamiq homepage")
     - Figma was used to create the wireframes during the design phase of the project.
6. [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

[Back to top ⇧](#JS-Game)

## Testing

Testing information can be found in a separate testing [file](TESTING.md "Link to testing file")


## Deployment

This project was developed using [GitPod](https://www.gitpod.io "Link to Visual Studio Code site"), committed to git and pushed to GitHub using the computer terminal.

### Deploying on GitHub Pages
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/11zouzou11/Samar-Beauty "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "GitHub Pages" section.
5. Under "Source" click the drop-down menu labelled "None" and select "Master Branch".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Scroll back down to the "GitHub Pages" section to retrieve the deployed link.
8. At the time of submitting this Milestone project the Development Branch and Master Branch are identical.

### Forking the Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/11zouzou11/Samar-Beauty "Link to GitHub Repo").
3. At the top of the repository, on the right side of the page, select "Fork"
4. You should now have a copy of the original repository in your GitHub account.

### Creating a Clone
How to run this project locally:
1. Install the [GitPod Browser](https://www.gitpod.io/docs/browser-extension/ "Link to Gitpod Browser extension download") Extension for Chrome.
2. After installation, restart the browser.
3. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/11zouzou11/Samar-Beauty "Link to GitHub Repo").
5. Click the green "GitPod" button in the top right corner of the repository.
This will trigger a new gitPod workspace to be created from the code in github where you can work locally.

How to run this project within a local IDE, such as VSCode:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/11zouzou11/Samar-Beauty "Link to GitHub Repo").
3. Under the repository name, click "Clone or download".
4. In the Clone with HTTPs section, copy the clone URL for the repository.
5. In your local IDE open the terminal.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type 'git clone', and then paste the URL you copied in Step 3.
```
git clone https://github.com/USERNAME/REPOSITORY
```
8. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Link to GitHub troubleshooting")

[Back to top ⇧](#JS-Game)


## Credits 

### Content
- The game idea was implemented based on the developers insight

## Code 

The following sites were used on a more regular basis to help implement and build this responsive website : 

- [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow page")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")
- [Bootstrap](https://getbootstrap.com/ "Link to BootStrap page")
- [Google](https://www.google.com/ "Link to Google page")
- [Youtube](https://www.youtube.com/ "Link to Youtube page")


- Note:
1. the video contect were used to get a better understanding of the elements and everything got modified to meet the websites goals. 
2. all the code that has been borrowed is credited within the  code.

[Back to top ⇧](#JS-Game)
