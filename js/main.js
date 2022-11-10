const touches = [...document.querySelectorAll('.bouton')];
const listkeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.screen') // ID

// const KEY_ENTER = 46


document.addEventListener('keydown', e => {
    calculer(e.keyCode.toString())
});

document.addEventListener('click', (e) => {
    calculer(e.target.dataset.key)
    
})

/**
 * 
 */
const calculer = valeur => {
    if (listkeycode.includes(valeur)) {
        switch (valeur) {
            // DEL
            case '8':
                // récupérer la valeur actuelle du screen
                // utiliser la méthode slice pour supprimer le dernier caractère
                // réassigne à screen la nouvelle valeur
                ecran.textContent = ecran.textContent.slice(0, -1)
                break;
            case '46':
                ecran.textContent = "";
                break;

            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul
                break

            default:
                const indexkeycode = listkeycode.indexOf(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenue dans votre calcule:' + e.message)
})

let themeButton1 = document.getElementById("theme1")
let themeButton2 = document.getElementById("theme2")
let themeButton3 = document.getElementById("theme3")

let theme = "theme1";

themeButton1.addEventListener('click', () => {
    theme = "theme1";
    toggletheme(theme);
});
themeButton2.addEventListener('click', () => {
    theme = "theme2";
    toggletheme(theme);
});
themeButton3.addEventListener('click', () => {
    theme = "theme3";
    toggletheme(theme);
});

const root = document.documentElement;

const gettheme1 = () => {
    const bgmaintheme1 = getComputedStyle(root).getPropertyValue("--bg-main-theme1");
    const bgscreentheme1 = getComputedStyle(root).getPropertyValue("--bg-screen-theme1");
    const bgnumpadtheme1 = getComputedStyle(root).getPropertyValue("--bg-numpad-theme1");
    const bgresettheme1 = getComputedStyle(root).getPropertyValue("--bg-reset-theme1");
    const bgbuttontheme1 = getComputedStyle(root).getPropertyValue("--bg-button-theme1");
    const bgegaltheme1 = getComputedStyle(root).getPropertyValue("--bg-egal-theme1");

    return [bgmaintheme1, bgscreentheme1, bgnumpadtheme1, bgresettheme1, bgbuttontheme1, bgegaltheme1];
};
const gettheme2 = () => {
    const bgmaintheme2 = getComputedStyle(root).getPropertyValue("--bg-main-theme2");
    const bgscreentheme2 = getComputedStyle(root).getPropertyValue("--bg-screen-theme2");
    const bgnumpadtheme2 = getComputedStyle(root).getPropertyValue("--bg-numpad-theme2");
    const bgresettheme2 = getComputedStyle(root).getPropertyValue("--bg-reset-theme2");
    const bgbuttontheme2 = getComputedStyle(root).getPropertyValue("--bg-button-theme2");
    const bgegaltheme2 = getComputedStyle(root).getPropertyValue("--bg-egal-theme2");

    return [bgmaintheme2, bgscreentheme2, bgnumpadtheme2, bgresettheme2, bgbuttontheme2, bgegaltheme2];
};
const gettheme3 = () => {
    const bgmaintheme3 = getComputedStyle(root).getPropertyValue("--bg-main-theme3");
    const bgscreentheme3 = getComputedStyle(root).getPropertyValue("--bg-screen-theme3");
    const bgnumpadtheme3 = getComputedStyle(root).getPropertyValue("--bg-numpad-theme3");
    const bgresettheme3 = getComputedStyle(root).getPropertyValue("--bg-reset-theme3");
    const bgbuttontheme3 = getComputedStyle(root).getPropertyValue("--bg-button-theme3");
    const bgegaltheme3 = getComputedStyle(root).getPropertyValue("--bg-egal-theme3");

    return [bgmaintheme3, bgscreentheme3, bgnumpadtheme3, bgresettheme3, bgbuttontheme3, bgegaltheme3];
};
const getTexttheme1 = () => {
    const textcolorbuttontheme1 = getComputedStyle(root).getPropertyValue("--text-color-button-theme1");
    const textcolortextetheme1 = getComputedStyle(root).getPropertyValue("--text-color-texte-theme1");
    const textcoloregaltheme1 = getComputedStyle(root).getPropertyValue("--text-color-egal-theme1");
    const textcolorresettheme1 = getComputedStyle(root).getPropertyValue("--text-color-reset-theme1");

    return [textcolorbuttontheme1, textcolortextetheme1, textcoloregaltheme1, textcolorresettheme1];
};

const getTexttheme2 = () => {
    const textcolorbuttontheme2 = getComputedStyle(root).getPropertyValue("--text-color-button-theme2");
    const textcolortextetheme2 = getComputedStyle(root).getPropertyValue("--text-color-texte-theme2");
    const textcoloregaltheme2 = getComputedStyle(root).getPropertyValue("--text-color-egal-theme2");
    const textcolorresettheme2 = getComputedStyle(root).getPropertyValue("--text-color-reset-theme2");

    return [textcolorbuttontheme2, textcolortextetheme2, textcoloregaltheme2, textcolorresettheme2];
};
const getTexttheme3 = () => {
    const textcolorbuttontheme3 = getComputedStyle(root).getPropertyValue("--text-color-button-theme3");
    const textcolortextetheme3 = getComputedStyle(root).getPropertyValue("--text-color-texte-theme3");
    const textcoloregaltheme3 = getComputedStyle(root).getPropertyValue("--text-color-egal-theme3");
    const textcolorresettheme3 = getComputedStyle(root).getPropertyValue("--text-color-reset-theme3");

    return [textcolorbuttontheme3, textcolortextetheme3, textcoloregaltheme3, textcolorresettheme3];
};


const toggletheme = (theme) => {
    const [bgmaintheme1, bgscreentheme1, bgnumpadtheme1, bgresettheme1, bgbuttontheme1, bgegaltheme1] = gettheme1()
    const [textcolorbuttontheme1, textcolortextetheme1, textcoloregaltheme1, textcolorresettheme1] = getTexttheme1()
    const [bgmaintheme2, bgscreentheme2, bgnumpadtheme2, bgresettheme2, bgbuttontheme2, bgegaltheme2] = gettheme2()
    const [textcolorbuttontheme2, textcolortextetheme2, textcoloregaltheme2, textcolorresettheme2] = getTexttheme2()
    const [bgmaintheme3, bgscreentheme3, bgnumpadtheme3, bgresettheme3, bgbuttontheme3, bgegaltheme3] = gettheme3()
    const [textcolorbuttontheme3, textcolortextetheme3, textcoloregaltheme3, textcolorresettheme3] = getTexttheme3()


    if (theme && theme === "theme1") {
        root.style.setProperty("--bg-main", bgmaintheme1);
        root.style.setProperty("--bg-screen", bgscreentheme1);
        root.style.setProperty("--bg-numpad", bgnumpadtheme1);
        root.style.setProperty("--bg-reset", bgresettheme1);
        root.style.setProperty("--bg-button", bgbuttontheme1);
        root.style.setProperty("--bg-egal", bgegaltheme1);
        root.style.setProperty("--text-color-button", textcolorbuttontheme1);
        root.style.setProperty("--text-color-texte", textcolortextetheme1);
        root.style.setProperty("--text-color-egal", textcoloregaltheme1);
        root.style.setProperty("--text-color-reset", textcolorresettheme1);
    }
    else if (theme && theme === "theme2") {
        root.style.setProperty("--bg-main", bgmaintheme2);
        root.style.setProperty("--bg-screen", bgscreentheme2);
        root.style.setProperty("--bg-numpad", bgnumpadtheme2);
        root.style.setProperty("--bg-reset", bgresettheme2);
        root.style.setProperty("--bg-button", bgbuttontheme2);
        root.style.setProperty("--bg-egal", bgegaltheme2);
        root.style.setProperty("--text-color-button", textcolorbuttontheme2);
        root.style.setProperty("--text-color-texte", textcolortextetheme2);
        root.style.setProperty("--text-color-egal", textcoloregaltheme2);
        root.style.setProperty("--text-color-reset", textcolorresettheme2);
    }
    else if (theme && theme === "theme3") {
        root.style.setProperty("--bg-main", bgmaintheme3);
        root.style.setProperty("--bg-screen", bgscreentheme3);
        root.style.setProperty("--bg-numpad", bgnumpadtheme3);
        root.style.setProperty("--bg-reset", bgresettheme3);
        root.style.setProperty("--bg-button", bgbuttontheme3);
        root.style.setProperty("--bg-egal", bgegaltheme3);
        root.style.setProperty("--text-color-button", textcolorbuttontheme3);
        root.style.setProperty("--text-color-texte", textcolortextetheme3);
        root.style.setProperty("--text-color-egal", textcoloregaltheme3);
        root.style.setProperty("--text-color-reset", textcolorresettheme3);
    }
    else {
        return;
    }

};

let toggle = document.querySelector(".toggle");

function animationtoggle1() {
    toggle.classList.add("theme1")
}
function animationtoggle2() {
    toggle.classList.add("theme2")
}
function animationtoggle3() {
    toggle.classList.add("theme3")
}

function removetoggle1() {
    toggle.classList.remove("theme1")
}
function removetoggle2() {
    toggle.classList.remove("theme2")
}
function removetoggle3() {
    toggle.classList.remove("theme3")
}








