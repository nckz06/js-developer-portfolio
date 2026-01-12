// COLETA DOS DADOS PARA A PAGINA
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nckz06/js-developer-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}