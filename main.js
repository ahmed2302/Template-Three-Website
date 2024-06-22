document.querySelector(".mega-links").onclick = () => {
  document.querySelector(".other-links").classList.toggle("open");
};

let skillsProgress = Array.from(
  document.querySelectorAll(".skills .skill .progress span")
);
let skills = document.querySelector(".skills");
let events = document.querySelector(".events");
let eventsTime = Array.from(
  document.querySelectorAll(".events .time span:nth-child(1)")
);

let stats = document.querySelector(".stats");
let statsBox = Array.from(document.querySelectorAll(".stats .box h3"));

let startTime = true;
let startStats = true;
window.onscroll = () => {
  let offsetTopSkill = skills.offsetTop;
  let offsetTopEvent = events.offsetTop;
  let offsetTopStats = stats.offsetTop;
  let windowScrollTop = this.scrollY;
  if (windowScrollTop >= offsetTopSkill) {
    skillsProgress.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  if (windowScrollTop >= offsetTopEvent) {
    if (startTime) {
      eventsTime.forEach((element) => {
        startCount(element);
        startTime = false;
      });
    }
  }
  if (windowScrollTop >= offsetTopStats) {
    if (startStats) {
      statsBox.forEach((box) => {
        startCount(box);
        startStats = false;
      });
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.time;
  if (!goal) {
    goal = ele.dataset.stats;
  }
  let interval = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(interval);
    }
  }, 2000 / goal);
}

let cards = document.querySelectorAll(".card");
VanillaTilt.init(cards, {
  max: 25,
  speed: 5000,
});
