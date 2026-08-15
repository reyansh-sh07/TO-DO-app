# To-Do List App 📝

> A simple and interactive To-Do List application built with **HTML, CSS, and Vanilla JavaScript**.

The application allows users to add tasks, edit existing tasks, mark tasks as completed, delete individual tasks, and clear all completed tasks.

Tasks are stored in the browser using **localStorage**, so they remain available even after refreshing the page.

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- ↩️ Unmark completed tasks
- ❌ Delete individual tasks
- 🧹 Clear all completed tasks
- 💾 Save tasks using browser `localStorage`
- 🔄 Restore tasks after refreshing the page
- 🎨 Custom color-themed interface
- 🖱️ Hover effects and visual feedback
- 📱 Responsive layout for smaller screens

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**
- **localStorage**

No frameworks, libraries, backend, or database are used.

---

## 📂 Project Structure

```text
To-Do-App/
│
├── index.html
├── to_do.css
├── to_do.js
└── README.md
```

### `index.html`

Contains the structure of the application:

- Application heading
- Task input field
- Add Task button
- Task list
- Clear Completed button

### `to_do.css`

Contains the complete visual design of the application:

- Layout
- Color palette
- Task cards
- Buttons
- Hover effects
- Completed-task styling
- Responsive design

### `to_do.js`

Contains the application's functionality:

- Adding tasks
- Rendering tasks
- Editing tasks
- Completing/uncompleting tasks
- Deleting tasks
- Clearing completed tasks
- Saving tasks to `localStorage`
- Loading saved tasks

---

## ⚙️ How the Application Works

The application uses a `tasks` array as its main source of state.

Each task is stored as an object containing its text and completion status:

```javascript
{
    text: "Learn JavaScript",
    completed: false
}
```

### Adding a Task

When the user enters a task and clicks **Add Task**:

1. The input value is retrieved.
2. A new task object is created.
3. The task is added to the `tasks` array.
4. The updated array is saved to `localStorage`.
5. The task list is rendered again.

---

### Completing a Task

When the user clicks on a task, its `completed` value is toggled.

For example:

```javascript
completed: false
```

becomes:

```javascript
completed: true
```

The application then saves the updated state and renders the task again with its completed styling.

Clicking the task again changes it back to:

```javascript
completed: false
```

---

### Editing a Task

Each task has an edit button.

When the edit button is clicked:

1. The current task text is shown in a prompt.
2. The user enters the new task text.
3. The corresponding task object is updated.
4. The updated tasks are saved.
5. The task list is rendered again.

---

### Deleting an Individual Task

Each task has a delete button.

Clicking it removes only that specific task from the `tasks` array.

The updated task list is then saved and rendered again.

---

### Clearing Completed Tasks

The **Clear Completed** button removes all tasks whose `completed` property is `true`.

For example:

```text
Task A → completed: true
Task B → completed: false
Task C → completed: true
```

After clicking **Clear Completed**:

```text
Task B → completed: false
```

remains in the list.

This is different from the individual delete button:

- **❌ Delete** → removes one specific task
- **✅ Complete** → marks/unmarks a task
- **🧹 Clear Completed** → removes all completed tasks

---

## 💾 Local Storage

The application uses the browser's `localStorage` API to persist tasks.

When tasks are saved, the JavaScript array is converted into JSON:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application starts, previously saved tasks are retrieved:

```javascript
let saved_tasks = localStorage.getItem("tasks");
```

The saved JSON is then converted back into a JavaScript array:

```javascript
tasks = JSON.parse(saved_tasks);
```

Because of this, tasks remain available after refreshing the page.

### Important

The data is stored **only in the user's browser**.

It is not:

- Stored on a server
- Stored in a database
- Shared between devices
- Associated with a user account

Clearing the browser's local storage will remove the saved tasks.

---

## 🔄 Application Flow

The overall flow of the application is:

```text
User Action
     ↓
JavaScript Event Listener
     ↓
Update tasks[]
     ↓
Save to localStorage
     ↓
renderTasks()
     ↓
Update the DOM
     ↓
Updated Interface
```

For example, completing a task follows this flow:

```text
Click Task
    ↓
Find Task Index
    ↓
Toggle completed
    ↓
Save Updated Tasks
    ↓
Render Tasks
    ↓
Display Completed Styling
```

---

## 🧠 JavaScript Concepts Practiced

This project was built to practice fundamental JavaScript and frontend concepts, including:

- Variables
- Arrays
- Objects
- Functions
- Conditional statements
- `forEach()`
- `filter()`
- DOM manipulation
- `querySelector()`
- `createElement()`
- `appendChild()`
- Event listeners
- Event delegation
- Dataset attributes
- JSON serialization
- JSON parsing
- `localStorage`
- Dynamic UI rendering
- Basic application state management

---

## 📚 Project Purpose

This project was created as a practical JavaScript project to understand how a frontend application can manage its own state and persist data in the browser.

The main concept behind the application is:

```text
User Interaction
       ↓
JavaScript
       ↓
tasks[]
       ↓
localStorage
       ↓
renderTasks()
       ↓
DOM
       ↓
User Interface
```

The project helped reinforce the relationship between **application state, browser storage, JavaScript logic, and the DOM**.

---
