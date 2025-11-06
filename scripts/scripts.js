document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll("#projets-container .realisation");
  const sousMenuStage = document.querySelector(".sous-menu-stage");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Enlève "active" de tous les boutons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // Affiche le sous-menu Stage uniquement si nécessaire
      if (filter === "Stage" || filter === "stage-1A" || filter === "stage-2A") {
        sousMenuStage.style.display = "flex";
      } else {
        sousMenuStage.style.display = "none";
      }

      // Filtrage avec animation pour toutes les catégories
      projects.forEach(project => {
        const category = project.getAttribute("data-category");

        let shouldShow = false;

        // Stage principal affiche toutes les sous-catégories
        if (filter === "Stage") {
          shouldShow = category.startsWith("stage-");
        } else {
          shouldShow = category === filter;
        }

        if (shouldShow) {
          project.classList.remove("hide"); // Affiche avec animation
        } else {
          project.classList.add("hide");    // Cache avec animation
        }
      });
    });
  });

  // Affiche par défaut la catégorie Réalisation
  const defaultBtn = document.querySelector(".filter-btn[data-filter='Réalisation']");
  if (defaultBtn) defaultBtn.click();
});

