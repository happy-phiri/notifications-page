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
  for (const notification of notifications) {
    if (
      e.target === notification &&
      notification.classList.contains("unread")
    ) {
      notification.classList.remove("unread");
      numberOfUnreadMessages--;
      console.log("yes");
    } else if (
      e.target === notification &&
      !notification.classList.contains("unread")
    ) {
      notification.classList.add("unread");
      numberOfUnreadMessages++;
      markAsRead.textContent = "Mark all as read";
    }
    if (numberOfUnreadMessages === 0) {
      markAsRead.textContent = "All messages read";
    }
  }
  unreadCount.textContent = numberOfUnreadMessages;
});
