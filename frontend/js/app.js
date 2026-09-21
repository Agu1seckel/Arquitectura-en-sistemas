const roleLabels = {
    estudiante: "Estudiante",
    docente: "Docente",
    administrativo: "Administrativo"
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const role = document.getElementById("role").value;

            localStorage.setItem("wi_session", JSON.stringify({
                email,
                role,
                name: email.split("@")[0] || "Usuario"
            }));

            window.location.href = "dashboard.html";
        });
    }

    const session = JSON.parse(localStorage.getItem("wi_session") || "null");
    document.querySelectorAll("[data-user]").forEach(el => {
        el.textContent = session ? session.name : "Usuario";
    });
    document.querySelectorAll("[data-role]").forEach(el => {
        el.textContent = session ? roleLabels[session.role] : "Invitado";
    });
});

function logout() {
    localStorage.removeItem("wi_session");
    window.location.href = "index.html";
}
