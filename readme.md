Todo App
Description
This project is a Todo application built using React.js and Redux. It allows users to manage tasks by adding, editing, deleting, and marking tasks as complete. The application is hosted on a local development server accessible via localhost.

Features
Add new tasks with a title and description.
Edit existing tasks directly from the list.
Delete tasks with a confirmation prompt.
Mark tasks as complete or active.
Responsive design for both mobile and desktop views.
Utilizes Redux for state management.
Implements persistent storage using local storage to save tasks across page reloads.
Technologies Used
Frontend: React.js, Redux, HTML, CSS
Tools: Visual Studio Code, Git, Ngrok (for mobile testing)
Getting Started
Prerequisites

Node.js installed on your machine
Git for version control
Installation

bash
Copy code
git clone <repository-url>
cd todo-app
npm install
Run the Application

bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Accessing from Mobile

Ensure your PC and mobile device are connected to the same Wi-Fi network.
Use your PC's IP address (e.g., http://192.168.x.x:3000) to access the application from your mobile browser.
Persistent Storage

Tasks are saved automatically using local storage. They persist across page reloads.
Folder Structure
java
Copy code
todo-app/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   └── TaskItem.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── App.js
│   └── index.js
└── package.json
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Project Link
[GitHub Repository Link](https://github.com/sahanam-13/todo-app/tree/main)

