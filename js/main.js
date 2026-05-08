    AOS.init({ duration: 1000, once: true });

    // 🔥 CURSOR GLOW


    tsParticles.load("tsparticles", {
      fullScreen: { enable: true },
      particles: {
        number: { value: 50 },
        size: { value: 3 },
        color: { value: "#00bfff" },
        links: {
          enable: true,
          distance: 120,
          color: "#00bfff",
          opacity: 0.4
        },
        move: {
          enable: true,
          speed: 1
        }
      },
      background: {
        color: "#0f172a"
      }
    });

   
// Scroll-to-top button
const scrollBtn =
  document.getElementById('scrollBtn');

window.onscroll = () => {

  scrollBtn.style.display =
    (document.body.scrollTop > 300 ||
     document.documentElement.scrollTop > 300)
      ? "block"
      : "none";
};

// 🔥 NAVBAR SCROLL EFFECT
const navbar =
  document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("nav-scrolled");

  } else {

    navbar.classList.remove("nav-scrolled");

  }

});


// 🔥 SCROLL PROGRESS

const scrollProgress =
  document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  scrollProgress.style.width =
    progress + "%";

});



    
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 🔥 MODAL FUNCTIONS
function openModal(imageSrc) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("imageModal").classList.remove("hidden");
  document.getElementById("imageModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

function downloadWorkflow() {
  const pass = prompt("Enter password to download workflow:");

  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/Ai%20Monitoring%20System1.json");
  } else {
    alert("Access Denied ❌");
  }
}


function downloadBlueGuardian() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/BlueGuardian_Monitring1.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadGlobalConfig() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/GLOBAL_CONFIG1.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadGCPWorkflow() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/GCP_Project_Auto1.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadPatchWorkflow() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/Centralized%20Patch%20Management1.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadSophosWorkflow() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/Sophos-Auto%20summary1.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadOffboardingWorkflow() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/exit-user-offboarding-automation-workflow.json");
  } else {
    alert("Access Denied ❌");
  }
}

function downloadOnboardingWorkflow() {
  const pass = prompt("Enter password:");
  if (pass === "akash123") {
    window.open("https://raw.githubusercontent.com/akashvicky1/akash-portfolio/refs/heads/main/hr-onboarding-automation-workflow.json");
  } else {
    alert("Access Denied ❌");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const roles = [
    "Senior IT Infrastructure Engineer",
    "Cloud & Automation Specialist",
    "Firewall & Security Expert",
    "n8n Workflow Developer"
  ];

  let i = 0;
  const fadeText = document.getElementById("fade-text");
  if (!fadeText) return;

  function changeText() {
    fadeText.style.opacity = 0;

    setTimeout(() => {
      fadeText.textContent = roles[i];
      fadeText.style.opacity = 1;
      i = (i + 1) % roles.length;
    }, 500);
  }

  changeText();
  setInterval(changeText, 2500);

});

// close on outside click
document.getElementById("imageModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModal();
  }
});
// 🔥 LIVE TERMINAL EFFECT

const terminal = document.getElementById("terminal");

const terminalLines = [
  {
    command: "whoami",
    output: "Senior IT Infrastructure Engineer"
  },
  {
    command: "skills",
    output: `
Linux
Docker
Sophos Firewall
Networking
AWS
Azure
n8n
Ansible
Monitoring
`
  },
  {
    command: "current_status",
    output: "Building secure and scalable infrastructure 🚀"
  },
  {
    command: "uptime",
    output: "12+ Years Experience"
  },

  {
    command: "security_scan",
    output: `
[ OK ] Wazuh Agent Connected
[ OK ] Sophos Firewall Healthy
[ OK ] Backup Verification Completed
[ ALERT ] 0 Critical Threats
`
  }
];

let lineIndex = 0;

function typeTerminal() {

  if (lineIndex >= terminalLines.length) return;

  const line = terminalLines[lineIndex];

  const block = document.createElement("div");
  block.classList.add("mb-6");

  block.innerHTML = `
    <div>
      <span class="text-blue-400">akash@portfolio</span>:~$ ${line.command}
    </div>
    <pre class="text-gray-200 whitespace-pre-wrap mt-2">${line.output}</pre>
  `;

  terminal.appendChild(block);

  lineIndex++;

  setTimeout(typeTerminal, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeTerminal, 1000);
});


// 🔥 LIVE CLOCK

function updateClock() {

  const now = new Date();

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  document.getElementById("liveClock").innerHTML =
    "🕒 " + now.toLocaleTimeString('en-IN', options);

}

setInterval(updateClock, 1000);

updateClock();

// 🔥 FAKE UPTIME

const portfolioStart =
  new Date("2026-01-01");

function updateUptime() {

  const now = new Date();

  const diff =
    now - portfolioStart;

  const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("uptimeCounter").innerHTML =
    "⚡ Uptime: " + days + " Days";

}

setInterval(updateUptime, 1000);

updateUptime();

// 🔥 LIVE MONITORING VALUES

function randomValue(min, max) {

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}

function updateMonitoring() {

  const cpu =
    randomValue(30, 70);

  const ram =
    randomValue(40, 85);

  const net =
    randomValue(50, 95);

  document.getElementById("cpuValue").innerText =
    cpu + "%";

  document.getElementById("ramValue").innerText =
    ram + "%";

  document.getElementById("netValue").innerText =
    net + "%";

  document.getElementById("cpuBar").style.width =
    cpu + "%";

  document.getElementById("ramBar").style.width =
    ram + "%";

  document.getElementById("netBar").style.width =
    net + "%";
}


if (document.getElementById("cpuBar")) {

  updateMonitoring();

  setInterval(updateMonitoring, 2500);

}

// 🔥 LIVE AUTOMATION FEED

const feedMessages = [

  "✅ Sophos Report Generated",
  "⚡ Slack Alert Sent",
  "🟢 Backup Validation Completed",
  "🔵 Patch Deployment Started",
  "🛡 Threat Scan Completed",
  "☁ GCP Provisioning Success",
  "📨 Email Notification Delivered",
  "🔐 User Offboarding Completed",
  "🚀 Workflow Executed Successfully",
  "📊 Monitoring Report Synced"

];

const activityFeed =
  document.getElementById("activityFeed");

function addFeedLine() {

  const line =
    document.createElement("div");

  line.classList.add("feed-line");

  const now =
    new Date().toLocaleTimeString();

  const randomMessage =
    feedMessages[
      Math.floor(Math.random() * feedMessages.length)
    ];

  line.innerHTML = `
    <span class="feed-time">[${now}]</span>
    ${randomMessage}
  `;

  activityFeed.prepend(line);

  if (activityFeed.children.length > 12) {

    activityFeed.removeChild(
      activityFeed.lastChild
    );
  }
}

setInterval(addFeedLine, 1800);

addFeedLine();

// 🔥 LIVE SOC LOGS

const socMessages = [

  "🛡 Wazuh Agent Connected",
  "🚫 Malicious IP Blocked",
  "⚠ Failed SSH Login Attempt",
  "☁ Cloud Backup Completed",
  "🔐 VPN Authentication Success",
  "🟢 Sophos Firewall Healthy",
  "📡 Network Latency Stable",
  "⚡ Threat Scan Completed",
  "🚨 Suspicious Login Detected",
  "🔵 Patch Verification Success"

];

const socLogs =
  document.getElementById("socLogs");

function addSocLog() {

  const line =
    document.createElement("div");

  line.classList.add("soc-line");

  const now =
    new Date().toLocaleTimeString();

  const randomMessage =
    socMessages[
      Math.floor(Math.random() * socMessages.length)
    ];

  line.innerHTML = `
    <span class="soc-time">[${now}]</span>
    ${randomMessage}
  `;

  socLogs.prepend(line);

  if (socLogs.children.length > 14) {

    socLogs.removeChild(
      socLogs.lastChild
    );
  }

  // RANDOM COUNTERS

  document.getElementById("mediumAlerts").innerText =
    Math.floor(Math.random() * 6);

  document.getElementById("blockedIPs").innerText =
    Math.floor(Math.random() * 40);

  document.getElementById("failedSSH").innerText =
    Math.floor(Math.random() * 15);

}

setInterval(addSocLog, 1600);

addSocLog();


// 🔥 COUNTER ANIMATION

const counters =
  document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target =
      +counter.getAttribute('data-target');

    const current =
      +counter.innerText;

    const increment =
      target / 80;

    if (current < target) {

      counter.innerText =
        `${Math.ceil(current + increment)}+`;

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText =
        `${target}+`;

    }
  };

  updateCounter();
});

// 🔥 MOBILE MENU

const menuBtn =
  document.getElementById("menuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

});
