export const Fragment = () => {
    const element = document.createDocumentFragment();
    return element;
}

export const Div = (className = '') =>{
    const element = document.createElement('div');
    element.className = className;
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