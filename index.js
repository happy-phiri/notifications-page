const markAsRead = document.querySelector(".mark-btn");
const notifications = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const unreadCount = document.querySelector(".unread-count");

let numberOfUnreadMessages = 0;
unreadCount.textContent = numberOfUnreadMessages;

const messagesCounter = () => {
  for (const notification of notifications) {
    if (notification.classList.contains("unread")) {
      numberOfUnreadMessages++;
    }
  }
  unreadCount.textContent = numberOfUnreadMessages;
  if (numberOfUnreadMessages === 0) {
    markAsRead.textContent = "All messages read";
  }
};

markAsRead.addEventListener("click", () => {
  for (const notification of notifications) {
    notification.classList.remove("unread");
    numberOfUnreadMessages = 0;
  }
  messagesCounter();
});

messagesCounter();

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("card") &&
    e.target.classList.contains("unread")
  ) {
    e.target.classList.remove("unread");
    numberOfUnreadMessages--;
  }
  if (numberOfUnreadMessages === 0) {
    markAsRead.textContent = "All messages read";
  }
  unreadCount.textContent = numberOfUnreadMessages;
});
