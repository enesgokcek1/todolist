function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();
    const taskList = document.getElementById("list");

    if (taskValue === "") {
      $(".toast.error").toast("show");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskValue;

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.textContent = "×";
    closeButton.onclick = function () {
      li.remove();
    };
    li.appendChild(closeButton);

    taskList.appendChild(li);
    taskInput.value = "";

    $(".toast.success").toast("show");
  }

  document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });

  document.getElementById("task").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      newElement();
    }
  });