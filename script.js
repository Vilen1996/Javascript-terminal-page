document.addEventListener("DOMContentLoaded", function () {
  const commandInput = document.getElementById("commandInput");
  const output = document.getElementById("output");
  const previousCommands = [];

  commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = commandInput.value.trim();
      commandInput.value = "";

      previousCommands.push(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ut provident in sit, veniam ab illo quasi at voluptatem amet vel vero, porro nemo libero dolorum, culpa aliquid totam corporis! Quam"
      );

      output.innerHTML = previousCommands.join("<br>");

      output.scrollTop = output.scrollHeight;
    }
  });
});
