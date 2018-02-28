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

Deployment Checklist:

1. Dynamic Port Binding - Heroku tells us which port to listen to for incoming traffic
2. Specify Node Environment - 
3. Specify start script
4. Create .gitignore file
