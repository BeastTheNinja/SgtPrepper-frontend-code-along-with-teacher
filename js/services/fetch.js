export const request = async (url, method = 'GET', body) => {
    if (!url) throw new Error('Missing URL');

    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

}