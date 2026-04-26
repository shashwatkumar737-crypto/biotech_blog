document.addEventListener("DOMContentLoaded", () => {

  const blogs = {
    crispr: {
      title: "CRISPR Technology",
      content: "CRISPR allows scientists to edit genes with precision."
    },
    ethics: {
      title: "Gene Editing Ethics",
      content: "Ethical concerns include designer babies and biodiversity."
    },
    future: {
      title: "De-Extinction Science",
      content: "Scientists aim to revive extinct species using genetics."
    }
  };

  const modal = document.getElementById("blogModal");
  const title = document.getElementById("blogTitle");
  const content = document.getElementById("blogContent");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-key");

      title.innerText = blogs[key].title;
      content.innerText = blogs[key].content;

      modal.style.display = "block";
    });
  });

  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };

});