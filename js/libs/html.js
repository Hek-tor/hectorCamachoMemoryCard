export const div = function (parent, attributes) {
    return createElement('div', parent, attributes);
};

export const p = function (parent, attributes) {
    return createElement('p', parent, attributes);
};

export const img = function (parent, attributes) {
    return createElement('img', parent, attributes);
};

export const input = function (parent, attributes) {
    return createElement('input', parent, attributes);
};

export const SwalLogin = function (title, username, message) {
    return Swal.fire({
        title: title + username,
        text: message,
        icon: 'success',
        showConfirmButton: false,
        timer: 3000
    });
}

export const SwalGameComplete = function (title, username, message) {
    return Swal.fire({
        title: title + username,
        text: message,
        imageUrl: "../../assets/images/trophy-winner.svg",
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Winner Image",
        showConfirmButton: false,
        timer: 3500
    });
}

const createElement = function (type, parent, attributes) {
    let element = document.createElement(type);
    parent.appendChild(element);
    if (attributes != null) {
        for (const attribute in attributes) {
            element[attribute] = attributes[attribute];
        }
    }
    return element;
};