
document.addEventListener("DOMContentLoaded", function () {
  const chatData = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hi there! How can I help you today?",
    "hey": "Hi there! How can I help you today?",
    "how to reset password": "Go to the login page and click on 'Forgot Password'.",
    "what courses are available": "We offer various courses in tech, health, and business. Visit our Courses page.",
    "how to contact support": "You can fill out the form below or email us at support@example.com.",
    "where are you located": "We are located in Mumbai, India.",
    "how to register": "Click on the 'Register' button at the top right of the page and fill in your details.",
    "what is the refund policy": "You can request a refund within 7 days of purchase.",
    "how long are the courses": "Each course duration is mentioned on the course details page.",
    "is there a certificate": "Yes, we provide a certificate upon course completion.",
    "bye": "Goodbye! Have a great day!"
  };

  function createChatBot() {
    const box = document.createElement("div");
    box.id = "chat-box";
    box.style.position = "fixed";
    box.style.bottom = "80px";
    box.style.right = "20px";
    box.style.width = "260px";
    box.style.background = "white";
    box.style.border = "1px solid #ccc";
    box.style.padding = "10px";
    box.style.borderRadius = "10px";
    box.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    box.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
        <strong>Chatbot</strong>
        <span id="chat-close" style="cursor:pointer;font-weight:bold;">×</span>
      </div>
      <div id="chat-messages" style="height:150px;overflow-y:auto;font-size:14px;margin-bottom:5px;"></div>
      <input type="text" id="chat-input" style="width:75%;padding:5px;" placeholder="Ask something...">
      <button id="chat-send" style="width:20%;">Send</button>
    `;
    document.body.appendChild(box);

    document.getElementById("chat-send").onclick = sendMessage;
    document.getElementById("chat-input").addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendMessage();
    });
    document.getElementById("chat-close").onclick = function () {
      document.getElementById("chat-box").remove();
    };

    function sendMessage() {
     const input = document.getElementById("chat-input");
      const msg = input.value.trim().toLowerCase();
      if (!msg) return;
      const reply = chatData[msg] || "Sorry, I don't understand that yet.";
      const messages = document.getElementById("chat-messages");
      messages.innerHTML += `<div><b>You:</b> ${msg}</div>`;
      messages.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
      messages.scrollTop = messages.scrollHeight;
      input.value = "";
    }
  }

  const links = document.querySelectorAll(".support-card a");
  links.forEach(link => {
    if (link.textContent.toLowerCase().includes("start chat")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        if (!document.getElementById("chat-box")) {
          createChatBot();
        }
      });
    }
  });
});

