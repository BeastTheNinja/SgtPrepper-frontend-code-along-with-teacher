export const Fragment = () => {
    const element = document.createDocumentFragment();
    return element;
}

export const Div = (className = '') =>{
    const element = document.createElement('div');
    element.className = className;
    return element;
}
export const UL = (className = '') =>{
    const element = document.createElement('ul');
    element.className = className;
    return element;
}
export const LI = (className = '') =>{
    const element = document.createElement('li');
    element.className = className;
    return element;
}
export const LINK = (to, text = '', className = '') =>{
    const element = document.createElement('a');
    element.className = className;
    element.href = to;
    element.innerText = text;
    return element;
}

export const Paragraph = (className = '') => {
    const element = document.createElement('p');
    element.className = className;
    return element;
}

export const Heading = (Text, num = 1, className = '') => {
    const element = document.createElement(`h${num}`);
    element.className = className;
    element.textContent = Text;
    return element;
}