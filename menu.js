
function registerUser() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Registro exitoso. Ahora puede iniciar sesión.");
    window.location.href = "login.html";
  }
  
 
  function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("session", JSON.stringify({ name: storedUser.name }));
      alert("Inicio de sesión exitoso.");
      window.location.href = "index.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const session = JSON.parse(localStorage.getItem("session"));
    const userInfo = document.getElementById("user-info");
  
    if (session) {
      userInfo.style.display = "block";
      userInfo.innerHTML = `Bienvenido, ${session.name} | <a href="#" onclick="logout()">Cerrar sesión</a>`;
    }
  });
  
  function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
  }
  