const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

    
    function addTask() {
      const taskText = taskInput.value.trim(); 

      if (taskText === "") {
        alert("⚠️ Please enter a task!");
        return;
      }

      
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      
    
      const span = document.createElement("span");
      span.textContent = taskText;
      span.className = "task-text";

      
      const completeBtn = document.createElement("button");
      completeBtn.className = "btn btn-success btn-sm me-2";
      completeBtn.textContent = "✓";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.textContent = "✕";

      
      const btnGroup = document.createElement("div");
      btnGroup.appendChild(completeBtn);
      btnGroup.appendChild(deleteBtn);

      
      li.appendChild(span);
      li.appendChild(btnGroup);

      
      taskList.appendChild(li);

      
      taskInput.value = "";

      
      completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
      });

      
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });
    }

    
    addBtn.addEventListener("click", addTask);

    
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });