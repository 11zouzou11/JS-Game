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


[Back to top ⇧](#JS - Quiz Game)

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


[Back to top ⇧](#JS - Quiz Game)


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


[Back to top ⇧](#JS - Quiz Game)
     

     