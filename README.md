# Feedback Collection Application

Flow of the application -

1. User Sign up using OAuth (Express + MongoDB + PassportJS)
2. User pays for email credits via stripe (Stripe + MongoDB)
3. User creates a new 'campaign' (React + Redux)
4. User enters list of emails to send survey to (React + Redux + Redux Form)
5. We send email to list of surveyees (Email Provider)
6. Surveyees click on link in email to provide feedback (Email Provider + Express + MongoDB)
7. We tabulate the feedback (Mongo)
8. User can see report of all survey responses (MongoDB + React + Redux)

Pre - Deployment Checklist:

1. Dynamic Port Binding - Heroku tells us which port to listen to for incoming traffic
2. Specify Node Environment - Add node and npm versions in package.json
3. Specify start script - add start script in package.json
4. Create .gitignore file

First time Deployement Checklsit:

1. Create Heroku account
2. Commit the codebase to git
3. Install Heroku CLI and create app
4. Deploy App with git (Use this: git subtree push --prefix server heroku master)
5. Heroku deploys project

Subsequent Deployement Checklsit:

1. Commit codebase with git
2. Deply App with git (Use this: git subtree push --prefix server heroku master)

OAuth Flow:

1. User clicks on the Login (Client)
2. Forward user's request to Google (Server)
3. Ask user if they grant permission (Google)
4. User grants permission (Google)
5. Put user on hold, take the code from the URL (Server)
6. Send request to google with code included (Server)
7. Google sees the code in URL and replies with details about this user (Google)
8. Get user details, create new record in (Server) 

Passport Library Components:

* passport - General helpers for handling auth in Express apps
* passport strategy - Helpers for authenticating with one very specific method (email/password, Google, Facebook etc.)

