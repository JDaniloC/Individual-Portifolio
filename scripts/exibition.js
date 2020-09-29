const projects = [];

function get_projects() {
    const query = document.querySelectorAll(".main section#projects ul li");
    query.forEach(element => {
        projects.push(element)
    })

    update_projects();
}

function update_projects() {
    const positions = [0, 10, 20, 20, 10, 0];

    projects.forEach((li, index) => {
        li.className = (index == 0) ? "center" : "sides";

        if (index !== 0) {
            li.style.pointerEvents = "none"
            li.style.opacity = `${positions[index - 1] + 10}%`;
            if (index < 4) {
                li.style.right = "";
                li.style.left = `${positions[index - 1]}%`;
            } else {
                li.style.left = "";
                li.style.right = `${positions[index - 1]}%`;
            }
        } else {
            li.style.pointerEvents = "";
            li.style.opacity = "";
        }
    });
}

function handle_prev() {
    if (projects.length > 1) {
        projects.unshift(projects.pop())
        update_projects();
    }
}
function handle_next() {
    if (projects.length > 1) {
        projects.push(projects.shift());
        update_projects();
    }
}