const themeIcon = document.getElementById ('themeIcon');
const themeMenu = document.getElementById ('themeMenu');

themeIcon.addEventListener ('click', (event) => {
    event.stopPropagation ();
    themeMenu.classList.toggle ('hidden');
});

document.addEventListener ('click', () => {
    if (!themeMenu.classList.contains ('hidden')) {
        themeMenu.classList.add ('hidden');
    }
});

function setTheme (color) {

    localStorage.setItem ('saved_accent_color', color);

    if (color === "white") {
        document.documentElement.style.setProperty ('--accent-color', '#ffffff');
    } else if (color === 'blue') {
        document.documentElement.style.setProperty ('--accent-color', '#58a6ff');
    } else if (color === 'green') {
        document.documentElement.style.setProperty ('--accent-color', '#51cf66');
    } else if (color === 'gold') {
        document.documentElement.style.setProperty ('--accent-color', '#fcc419');
    }

    if (typeof themeMenu !== 'undefined' && themeMenu) {
        themeMenu.classList.add ('hidden');
    }
}

window.addEventListener ('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem ('saved_accent_color');
    if (savedColor) {
        setTheme (savedColor);
    }
});

function filterTable () {
    let input = document.getElementById ("searchInput");
    let filter = input.value.toLowerCase ();
    let table = document.getElementById ("pricelist");
    let tr = table.getElementsByTagName ("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName ("td")[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase ().indexOf (filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}