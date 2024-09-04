import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <h2>Tasks</h2>
    <form class="form">
      <input type="text" class="form-input" />
      <button type="submit" class="btn">add task</button>
    </form>
    <ul class="list"></ul>
  </main>
`;

// Selecting Elements:
const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

// Type Definition:
type Task = {
    description: string;
    isCompleted: boolean;
};

// Tasks Array - loading from local storage if it is there, otherwise returns an empty array
const tasks: Task[] = loadTasks();

// Form on 'submit' event listener
taskForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    // Grabbing task description from the formInput value
    const taskDescription = formInput?.value;

    // Checking if the 'taskDescription' exists
    if (taskDescription) {
        // console.log(taskDescription);

        // constructing a task
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
        };

        // add task to the list
        addTask(task);

        // render tasks
        renderTask(task);

        // update local storage
        updateStorage();

        // Resetting the formInput back to empty string
        formInput.value = "";
        return;
    } else {
        alert("Please enter a task description.");
    }
});

function addTask(task: Task): void {
    tasks.push(task);
}

function renderTask(task: Task): void {
    // Creating an element (list item):
    const taskElement = document.createElement("li");

    // Adding description as text content:
    taskElement.textContent = task.description;

    // Adding task to the DOM (task list)
    taskList?.appendChild(taskElement);
}

function updateStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
}
