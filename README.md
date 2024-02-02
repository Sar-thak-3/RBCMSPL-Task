# RBCMSPL Assignment - SDE Intern Position

## Combinator News Website Clone

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
