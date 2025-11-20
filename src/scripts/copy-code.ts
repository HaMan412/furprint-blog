export function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".btn-copy");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codeBlock = btn.closest(".frosti-code");
      if (!codeBlock) return;

      const codeContent = codeBlock.querySelector("code");
      if (!codeContent) return;

      let text = "";
      const lines = codeContent.querySelectorAll(".line");
      if (lines.length > 0) {
        text = Array.from(lines)
          .map((line) => line.textContent)
          .join("\n");
      } else {
        text = codeContent.textContent || "";
      }

      try {
        await navigator.clipboard.writeText(text);
        const copyIcon = btn.querySelector(".frosti-code-toolbar-copy-icon");
        const successIcon = btn.querySelector(".frosti-code-toolbar-copy-success");

        if (copyIcon && successIcon) {
          copyIcon.classList.add("hidden");
          successIcon.classList.remove("hidden");

          setTimeout(() => {
            copyIcon.classList.remove("hidden");
            successIcon.classList.add("hidden");
          }, 2000);
        }
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    });
  });
}
