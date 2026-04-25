const blogs = {
  crispr: {
    title: "CRISPR Explained",
    content: "CRISPR allows precise gene editing..."
  },
  ethics: {
    title: "Gene Editing Ethics",
    content: "Ethical concerns include designer babies..."
  },
  future: {
    title: "Future of De-Extinction",
    content: "Scientists aim to revive extinct species..."
  }
};

function openBlog(key) {
  document.getElementById("blogModal").style.display = "block";
  document.getElementById("blogTitle").innerText = blogs[key].title;
  document.getElementById("blogContent").innerText = blogs[key].content;
}

function closeBlog() {
  document.getElementById("blogModal").style.display = "none";
}

// DNA animation
const canvas = document.getElementById("dnaCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y += 0.5;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#1abc9c";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();