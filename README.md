Job Ads Service

A lightweight microservice that exposes job postings through a public API and returns results in XML format by default.
Built using Node.js, Express, and MongoDB, and fully containerized using Docker.

This project fulfills the assignment requirements for:

Connecting to MongoDB

Storing job postings

Returning XML responses

Supporting pagination

Running completely in Docker

✨ Features

✔ REST API using Express
✔ MongoDB integration using Mongoose
✔ XML response output (xml.js)
✔ JSON optional output (?format=json)
✔ Pagination (?page=1&pageSize=20)
✔ Seed script for inserting example data
✔ Dockerized environment
✔ Clean project structure

📁 Project Structure
job-ads-service/
 ├── server.js
 ├── config/
 │    └── db.js
 ├── controllers/
 │    └── jobController.js
 ├── routes/
 │    └── jobRoutes.js
 ├── services/
 │    └── jobService.js
 ├── models/
 │    └── JobPosting.js
 ├── utils/
 │    └── xml.js
 ├── seed/
 │    └── seed.js
 ├── Dockerfile
 ├── docker-compose.yml
 ├── package.json
 └── README.md

🐳 Running the Project with Docker
1️⃣ Start the application
docker-compose up --build


You should see:

MongoDB connected
Server running on port 3000

2️⃣ Seed the database
docker-compose exec api node seed/seed.js


This inserts sample job postings into the database.

🌐 API Endpoints
GET /api/job-postings

Returns job postings in XML format.

Example:

http://localhost:3000/api/job-postings


Sample XML:

<jobPostings>
  <jobPosting>
    <title>Senior Developer</title>
    <description>Work with Node.js and APIs...</description>
    <url>https://example.com/job1</url>
  </jobPosting>
</jobPostings>

JSON Output (Optional)
http://localhost:3000/api/job-postings?format=json

Pagination
http://localhost:3000/api/job-postings?page=1&pageSize=20

🧹 Stopping the Application
docker-compose down


To also remove database data:

docker-compose down -v
