// Classic Minimalist Portfolio
// Enables tap-to-toggle for touch screens alongside native desktop CSS hover

document.addEventListener("DOMContentLoaded", () => {
  const expandableEntries = document.querySelectorAll("#experience .entry");
  expandableEntries.forEach((entry) => {
    entry.addEventListener("click", () => {
      entry.classList.toggle("is-expanded");
    });
  });
});
