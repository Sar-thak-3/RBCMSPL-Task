# RBCMSPL Assignment - SDE Intern Position

## Combinator News Website Clone
![image](https://github.com/Sar-thak-3/RBCMSPL-Task/assets/100359818/00ce2207-a7b4-49fe-8f29-b880552ae158)


### Description

This project is a clone of the Combinator news website, developed as part of the SDE intern assignment for RBCMSPL. The clone replicates all the properties of the original website, including user authentication, account creation, adding new news items, pagination, and the ability to hide news items.

### Technologies Used

- **Frontend:** React JS
- **Backend:** Node JS
- **Database:** MongoDB Atlas

### Setup Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install frontend dependencies:

    ```bash
    npm install
    ```

4. Start the React JS application:

    ```bash
    npm run start
    ```

5. Navigate to the backend directory:

    ```bash
    cd backend
    ```

6. Install backend dependencies:

    ```bash
    npm install
    ```

7. Start the Node JS server:

    ```bash
    node index
    ```

### APIs Created

- `/login`: Handles user authentication.
- `/createnewaccount`: Creates a new user account.
- `/getnews`: Checks whether the user is logged in and displays news accordingly in reverse chronological order.
- `/hidenews`: Allows users to hide news items.

# MongoDB Atlas Database

### User Model

The User model is designed to store user-specific information, including:

- **Username:** The unique identifier for each user.
- **News to Hide:** A list of news IDs that the user wants to hide.
- **Password:** Securely stored password for user authentication.

#### Example Document:

```json
{
  "username": "example_user",
  "newsnumber": ["news_id_1", "news_id_2"],
  "password": "hashed_password"
}
```

### NewsData Model

The NewsData model manages news-related information, including:

- **News ID:** A unique identifier for each news item.
- **Date:** The date when the news was published.

#### Example Document:

```json
{
  "newsnumber": "news_id_1",
  "date": "12873373"
}
```

## Database Collections

In MongoDB Atlas, two collections are created to store user and news data:

1. **Users Collection:**

   - **Collection Name:** users
   - **Schema:**
     - `username` (String, Unique)
     - `newsnumber` (Array of Number)
     - `password` (String)

2. **NewsData Collection:**

   - **Collection Name:** newsdata
   - **Schema:**
     - `newsnumber` (String, Unique)
     - `date` (Number)

## Why Store News IDs Instead of Entire News

The decision to store only news IDs instead of the entire news content is based on several considerations:

1. **Space Efficiency:**
   - Storing entire news articles, especially if they are large, can consume a significant amount of database space. By storing only the news IDs, the storage requirements are minimized, leading to more efficient use of resources.

2. **Real-time Data Updates:**
   - News articles are often fetched in real-time through open APIs. Storing the entire news content would require constant updates to keep the data current. By storing only the news IDs, the app can retrieve the latest information directly from the API, eliminating the need for frequent updates to stored news content.

3. **Reduced Processing Time:**
   - Fetching and storing entire news articles involves additional processing time, impacting the overall performance of the application. Storing news IDs allows the app to quickly retrieve the relevant information from the API without the need for extensive data processing.

4. **Resource Optimization:**
   - For apps that primarily rely on real-time data from external sources, storing only identifiers (such as news IDs) and fetching the content as needed can optimize resource usage and improve overall system responsiveness.

Adopting this approach, aims to maintain an efficient and scalable database structure while providing users with the most up-to-date news information without unnecessary data duplication.

### Usage

1. Visit the application in your web browser (usually at http://localhost:3000) after starting the React JS server.

2. Use the provided APIs for login, creating a new account, fetching news, and hiding news items.

### Deployed Links

- **Frontend Deployment:** [(https://rbcmspl-task.vercel.app/)](https://rbcmspl-task.vercel.app/)
- **Backend Deployment:** [(https://rbcmspl-backend.vercel.app/)](https://rbcmspl-backend.vercel.app/)


### Note

Ensure that you have Node JS and npm installed on your system before running the application. The backend server should be running on a different port (default is http://localhost:5000) to avoid conflicts with the React JS development server.

Feel free to explore and enhance the project as needed for evaluation.

Happy coding!
