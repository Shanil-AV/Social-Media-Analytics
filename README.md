
# Social Media Analytics Platform

Welcome to the Social Media Analytics Platform repository! This project is a full-stack solution developed to empower users in tracking, analyzing, and optimizing their social media presence. The platform is designed with security, performance, and user experience in mind.




## Tech Stack

Backend: Golang, Gin framework, Cassandra with gocql

Frontend: React js(JS,CSS)


## Features

1.Connect various social media accounts

2.Fetch and synchronize data from connected social media accounts

3.Analyze and aggregate data to provide insights such as engagement rates, follower demographics, and optimal posting times

4.Create visual representations such as charts, graphs, and tables to display the analytics data in a user-friendly manner

5.Implement secure user registration and login functionalities

6.Allow users to manage their profiles and connected social media accounts

7.Ensure the security of the platform and protect user data and sensitive information from unauthorized access


## Screenshots
 Register User name and Password
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/register.png)




# Login 
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/login.png)




# Home page
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/home.png)




# Social media Analysis
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/analysis1.png)
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/analysis2.png)




# Drawer containing Pofile,Home,Logout
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/drawer.png)




# Profile page
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/profile.png)





# Edit Profile
![App Screenshot](https://github.com/Shanil-AV/Social-Media-Analytics/blob/master/screenshots/editprofile.png)


## Setup

Clone the repository to your local machine.

Start the frontend server:
```bash
  npm install 
  npm start

```
Start the backend server:
```bash
  go run backend/main.go
```

## Design and Development Decisions
### Multi-Platform Analytics

The platform supports major social media platforms, including Facebook, Twitter, Instagram, LinkedIn, YouTube, and Telegram. Users can seamlessly track and analyze metrics across these platforms.

### Data Visualization

Analytics data is presented through charts and graphs, providing users with a visually appealing and easy-to-understand representation of their social media performance.

### User Authentication and Security

User authentication is implemented securely to protect sensitive user data. HTTPS, data encryption, and secure API endpoints are employed to ensure a secure environment.

### Scalability and Performance

Cassandra is chosen for the backend database due to its scalability and performance benefits, enabling the system to handle large volumes of social media data efficiently.

### User-Friendly Interface

The frontend is designed with an intuitive and user-friendly interface, allowing users to navigate seamlessly and interact with analytics features effortlessly.



    
