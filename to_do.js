let input_box = document.querySelector("#input_box");
let insert = document.querySelector("#insert");
let tasks_list = document.querySelector("#tasks_list");
let task_completed = document.querySelector("#task_completed");

let tasks = [];

let saved_tasks = localStorage.getItem("tasks");
if (saved_tasks) {
    tasks = JSON.parse(saved_tasks);
}

function save_tasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    tasks_list.innerHTML = "";

    tasks.forEach(function (task, index) {
        let li = document.createElement("li");
        let btn = document.createElement("button");
        let editBtn = document.createElement("button");

        btn.textContent = "❌";
        editBtn.textContent = "✏️";

        li.textContent = "➙ " + task.text + "   ";
        li.dataset.index = index;

        if (task.completed) {
            li.classList.add("completed");
        }

        btn.addEventListener("click", function(e){
            tasks = tasks.filter((t, i) => i !== index);
            save_tasks();
            renderTasks();
            e.stopPropagation();
        });

        editBtn.addEventListener("click", function(e){
            let newTask = prompt("Enter ur new task", task.text);

            if (newTask !== null && newTask.trim() !== "") {
                tasks[index].text = newTask.trim();
                save_tasks();
                renderTasks();
            }

            e.stopPropagation();
        });

        li.appendChild(btn);
        li.appendChild(editBtn);
        tasks_list.appendChild(li);
    });
}

insert.addEventListener("click", function () {
    let value = input_box.value.trim();

    if (value !== "") {
        let taskObj = {
            text: value,
            completed: false
        };

        tasks.push(taskObj);
        save_tasks();
        renderTasks();
    }

    input_box.value = "";
});

tasks_list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let index = e.target.dataset.index;
        tasks[index].completed = !tasks[index].completed;
        save_tasks();
        renderTasks();
    }
});

task_completed.addEventListener("click", function () {
    tasks = tasks.filter(task => !task.completed);
    save_tasks();
    renderTasks();
});

renderTasks();