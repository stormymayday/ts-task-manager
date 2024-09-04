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
console.log(taskList);

// Type Definition:
type Task = {
    description: string;
    isCompleted: boolean;
};

// Tasks Array:
const tasks: Task[] = [];

// Form on 'submit' event listener
taskForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    // Grabbing task description from the formInput value
    const taskDescription = formInput?.value;

    // Checking if the 'taskDescription' exists
    if (taskDescription) {
        console.log(taskDescription);

        // Resetting the formInput back to empty string
        formInput.value = "";
        return;
    } else {
        alert("Please enter a task description.");
    }
});
