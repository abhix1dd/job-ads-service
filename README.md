📄 Job Ads Service

A lightweight microservice that exposes job postings through a public API and returns results in XML format by default.
Built using Node.js, Express, and MongoDB, fully containerized using Docker.

This project fulfills all assignment requirements:

Connecting to MongoDB

Storing job postings

Returning XML responses

Supporting pagination

Running completely in Docker

✨ Features

✔ REST API using Express

✔ MongoDB integration using Mongoose

✔ XML response output (xml.js)

✔ JSON output (?format=json)

✔ Pagination (?page=1&pageSize=20)

✔ Seed script for inserting example jobs

✔ Dockerized backend + MongoDB

✔ Clean and structured folder layout

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
▶️ 1. Start the Application
docker-compose up --build


Expected output:

MongoDB connected
Server running on port 3000

🌱 2. Seed the Database
docker-compose exec api node seed/seed.js


This inserts sample job postings into MongoDB.

🌐 API Endpoints
📄 GET /api/job-postings (XML Default)

Default response format: XML

👉 Example
http://localhost:3000/api/job-postings

Sample XML Output
<jobPostings>
  <jobPosting>
    <title>Senior Developer</title>
    <description>Work with Node.js and APIs...</description>
    <url>https://example.com/job1</url>
  </jobPosting>
</jobPostings>

🟦 JSON Output (Optional)

Append ?format=json:

👉 http://localhost:3000/api/job-postings?format=json

🔢 Pagination

Both formats support pagination:

?page=1&pageSize=20


👉 Example
http://localhost:3000/api/job-postings?page=1&pageSize=20

🛑 Stopping the Application

Stop containers:

docker-compose down


Stop + remove the database volume:

docker-compose down -v

📝 Summary

This microservice provides:

MongoDB-backed job storage

Express REST API

XML + JSON response formats

Pagination

Docker deployment

Seed data support

Everything needed for a complete job posting API.

👤 Author

Abhishek Tripathi
