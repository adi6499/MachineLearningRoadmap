    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((box, index) => {
      const saved = localStorage.getItem("ml_topic_" + index);
      if (saved === "true") {
        box.checked = true;
        box.parentElement.classList.add("completed");
      }
      box.addEventListener("change", () => {
        if (box.checked) {
          box.parentElement.classList.add("completed");
          localStorage.setItem("ml_topic_" + index, "true");
        } else {
          box.parentElement.classList.remove("completed");
          localStorage.setItem("ml_topic_" + index, "false");
        }
      });
    });