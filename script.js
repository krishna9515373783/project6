document.getElementById("attendanceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const dept = document.getElementById("dept").value;
  const now = new Date().toLocaleString();

  document.getElementById("message").innerHTML =
    `✔️ Attendance marked successfully for <strong>${name}</strong> on <em>${now}</em>.`;

  // You can optionally send this data to a server here
});
