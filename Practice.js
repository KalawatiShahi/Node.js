const express = require("express");
const users = require("./MOCK_DATA.json");   // Correct way to import JSON

const app = express();
const PORT = 3000;

// Show users in HTML format
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// Send all users as API JSON
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Single user get, update, delete
app.route("/api/user/:id")
.get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user ? user : { message: "User not found" });
})
.patch((req, res) => {
  return res.json({ status: "pending", message: "Update user API coming soon" });
})
.delete((req, res) => {
  return res.json({ status: "pending", message: "Delete user API coming soon" });
});

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));
