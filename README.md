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
4. Deploy App with git
5. Heroku deploys project

Subsequent Deployement Checklsit:

1. Commit codebase with git
2. Deply App with git