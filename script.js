// BLOG DATA
const blogs = {
  crispr: {
    title: "CRISPR Technology",
    content: "CRISPR allows scientists to edit genes with precision, revolutionizing biotechnology."
  },
  ethics: {
    title: "Gene Editing Ethics",
    content: "Gene editing raises questions about human enhancement, biodiversity, and ethics."
  },
  future: {
    title: "De-Extinction Science",
    content: "Scientists are exploring ways to revive extinct species using genetic engineering."
  }
};

// OPEN BLOG
function openBlog(key) {
  document.getElementById("blogModal").style.display = "block";
  document.getElementById("blogTitle").innerText = blogs[key].title;
  document.getElementById("blogContent").innerText = blogs[key].content;
}

// CLOSE BLOG
function closeBlog() {
  document.getElementById("blogModal").style.display = "none";
}

// DNA BACKGROUND
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

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "1s";
  observer.observe(sec);
});