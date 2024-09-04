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
