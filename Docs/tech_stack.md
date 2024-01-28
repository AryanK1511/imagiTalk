# Tech Stack

### Frontend

The frontend of this project is built on [next.js](https://nextjs.org). It also uses various libraries and frameworks to support the frontend. Some of them are:

- [React Bootstrap](https://react-bootstrap.netlify.app)
- [Tailwind](https://tailwindcss.com)

### Backend

This project uses [Flask](https://flask.palletsprojects.com/en/3.0.x/) at its backend. It uses database connectivity modules such as [SQLAlchemy](https://www.sqlalchemy.org) and cloud integration libraries to integrate **Google Cloud** into our project.

### Database

This project uses [postgreSQL](https://www.postgresql.org) in the backend. The choice of a relational database was made to incorporate the scope for future improvements and features such as maintaining user conversation history, search functionality and the ability to add custo characters. All of these features require complex relationships and hence a SQL database was a better choice for this app.

The database we use in this app is deployed on [elephantsql](https://www.elephantsql.com).

### Cloud Integration

We use [Google Cloud](https://cloud.google.com/gcp?utm_source=google&utm_medium=cpc&utm_campaign=na-CA-all-en-dr-bkws-all-all-trial-e-dr-1707554&utm_content=text-ad-none-any-DEV_c-CRE_665735450633-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt_Google+Cloud-KWID_43700077224548586-aud-2232802565252:kwd-6458750523&utm_term=KW_google+cloud-ST_google+cloud&gad_source=1&gclid=CjwKCAiAk9itBhASEiwA1my_667Y9V7o4Qcev_GcrUShqVAUNZrBZGNTPUEMSHH80SAJWQOqUn7vsxoCD-MQAvD_BwE&gclsrc=aw.ds&hl=en) at the core of our application to support the functionality of the cartoon characters speaking to the users.

### External APIs

- [Elevenlabs.io](https://elevenlabs.io): Trained ML model for voice impersonation using clips of the cartoon characters in the database.
- [Cohere](https://cohere.com): GenAI capability to generate responses and also train the cartoon characters for more accurate responses.
