// BLOG DATA
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

// MAKE FUNCTIONS GLOBAL
window.openBlog = function(key) {
  const modal = document.getElementById("blogModal");
  const title = document.getElementById("blogTitle");
  const content = document.getElementById("blogContent");

  if (!modal || !title || !content) {
    console.error("Modal elements not found");
    return;
  }

  title.innerText = blogs[key].title;
  content.innerText = blogs[key].content;
  modal.style.display = "block";
};

window.closeBlog = function() {
  document.getElementById("blogModal").style.display = "none";
};

// DNA BACKGROUND (same as before)
const canvas = document.getElementById("dnaCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    speed: Math.random() * 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#1abc9c";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();