const listener = new IntersectionObserver((entries) => {
    entries.filter(e => e.isIntersecting).forEach(element => {
        appendButtons(element.target);
    });
    entries.filter(e => !e.isIntersecting).forEach(element => {
        removeButtons(element.target);
    });
});

window.addEventListener("load", () => {
    addElements();
    getElements();
});

function removeButtons(element) {
    Array.from(element.childNodes).forEach((ineerElement) => {
        if (ineerElement.className === 'div-buttons') {
            element.removeChild(ineerElement);
        }
    });
}

function getElements() {
    document.querySelectorAll('div.container > div').forEach(element => {
        listener.observe(element);
    });
}

function addElements() {
    let parent = document.querySelector("div.container");
    for (let i = 0; i < 10000; i++) {
        let newElement = createElement(i);
        listener.observe(newElement);
        parent.appendChild(newElement);
    }
}

function appendButtons(element) {
    let div = document.createElement("div");
    div.appendChild(createButtons('Comentario', 'comment-activate'));
    div.appendChild(createButtons('Bolsa', 'bolsa-activate'));
    div.appendChild(createButtons('Marcadores', 'marcadores-activate'));
    div.appendChild(createButtons('Anexos', 'anexos-activate'));
    div.appendChild(createButtons('Relaciones', 'relaciones-activate'));
    div.classList.add("div-buttons");
    element.appendChild(div);
}

function createElement(indexCreate) {
    let div = document.createElement('div');
    div.remove
    let span = document.createElement('span');
    span.textContent = `elemento creado con index ${indexCreate}`;
    div.appendChild(span);
    return div;
}

function createButtons(title, clazz) {
    let btn = document.createElement('button');
    btn.value = title;
    btn.textContent = title;
    btn.classList.add(clazz);
    return btn;
}