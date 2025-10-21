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

export const Heading = (num = 1, className = '') => {
    const element = document.createElement(`h${num}`);
    element.className = className;
    return element;
}