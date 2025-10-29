// En fælles funktion til at hente data fra serveren (API’et)
// Kan bruges til både GET, POST, PUT og DELETE requests
export const request = async (url, method = 'GET', body = {}) => {
    // Stopper funktionen, hvis der ikke er angivet en URL
    if (!url) throw new Error('Missing url')

    // Tjekker om der skal sendes data med (kun ved fx POST eller PUT)
    const hasBody = body !== undefined && body !== null && method !== 'GET'

    // Bygger de indstillinger, der skal sendes med i fetch-kaldet
    const options = {
        method, // fx 'GET' eller 'POST'
        headers: {
            'Accept': 'application/json',        // Vi forventer JSON tilbage
            'Content-type': 'application/json',  // Vi sender JSON til serveren
        },
        // Tilføjer body (data) kun hvis der faktisk skal sendes noget
        ...(hasBody ? { body: JSON.stringify(body) } : {})
    }

    try {
        // Sender anmodningen til serveren og venter på svar
        const response = await fetch(url, options)

        // Fortolker svaret som JSON
        const result = await response.json()

        // Returnerer resultatet til den funktion, der kaldte request()
        return result
    } catch (error) {
        // Skriver fejl i konsollen, hvis der sker noget uventet (fx ingen forbindelse)
        console.error(error)
    }
}