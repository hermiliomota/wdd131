const events = [
  { 
    title: "Easter Potluck", 
    date: "March 28", 
    category: "General", 
    location: "Cultural Hall", 
    image: "images/loading.jpg"
  },
  { 
    title: "Youth Temple Trip", 
    date: "June 20", 
    category: "Youth", 
    location: "Temple", 
    image: "images/loading.jpg"
  },
  { 
    title: "Helping Hands", 
    date: "April 4", 
    category: "Service", 
    location: "City Park", 
    image: "images/loading.jpg"
  }
];

function displayEvents(eventList, containerId) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = "";

  eventList.forEach(event => {
    container.innerHTML += `
      <article class="card">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Category:</strong> ${event.category}</p>
      </article>
    `;
  });
}


function filterEvents(category) {
  let filtered;

  if (category === "All") {
    filtered = events;
  } else {
    filtered = events.filter(event => event.category === category);
  }

  displayEvents(filtered, "#eventContainer");
}

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

function displayAnnouncements() {
  const container = document.querySelector("#announcementContainer");
  if (!container) return;

  container.innerHTML = "";

  announcements.forEach(item => {
    container.innerHTML += `
      <article class="card">
        <h3>${item.title}</h3>
        <p>${item.message}</p>
        <small>Submitted by: ${item.name}</small>
      </article>
    `;
  });
}

function saveAnnouncement(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const title = document.querySelector("#title").value;
  const message = document.querySelector("#message").value;

  const newAnnouncement = { name, title, message };

  announcements.push(newAnnouncement);
  localStorage.setItem("announcements", JSON.stringify(announcements));

  displayAnnouncements();
  document.querySelector("#announcementForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {

  displayEvents(events, "#eventContainer");
  displayAnnouncements();
  displayActivities();

  const filter = document.querySelector("#categoryFilter");
  if (filter) {
    filter.addEventListener("change", (event) => {
      filterEvents(event.target.value);
    });
  }

  const form = document.querySelector("#announcementForm");
  if (form) {
    form.addEventListener("submit", saveAnnouncement);
  }
});

const activities = [
  {
    title: "Ward Potluck Success",
    date: "February 18, 2026",
    summary: "The members gathered for a wonderful evening of food and fellowship. Over 120 members attended.",
    image: "images/potluck-activity.jpg"
  },
  {
    title: "Youth Service Project",
    date: "February 10, 2026",
    summary: "The youth volunteered at the local community center, helping organize donations and clean facilities.",
    image: "images/youth-service.jpg"
  },
  {
    title: "Relief Society Devotional",
    date: "January 28, 2026",
    summary: "An uplifting devotional focused on faith, unity, and strengthening families.",
    image: "images/devotional.jpg"
  }
];


function displayActivities() {
  const container = document.querySelector("#recentActivities");
  if (!container) return;

  container.innerHTML = "";

  activities.forEach(activity => {
    container.innerHTML += `
      <article class="card">
        <img src="${activity.image}" alt="${activity.title}" loading="lazy">
        <h3>${activity.title}</h3>
        <p><strong>Date:</strong> ${activity.date}</p>
        <p>${activity.summary}</p>
      </article>
    `;
  });
}

