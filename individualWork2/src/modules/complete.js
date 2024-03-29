export default function (isCompleteBtn, url) {
    isCompleteBtn.forEach((btn) => {
      let checked = false;
      const items = btn.parentElement.parentElement;
      if (items.classList.contains("active")) {
        btn.checked = true;
      }
      if (!btn.checked) {
        checked = true;
      }
      btn.addEventListener("click", () => {
        const id = btn.parentElement.parentElement.id;
        fetch(`${url}/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ isComplete: checked }),
        });
      });
    });
  }