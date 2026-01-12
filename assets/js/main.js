// ATUALIZACAO DO CONTEUDO DA PAGINA
function updateProfileInfo(profileData) {

    const photo = document.querySelector('#profile__photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('#profile__name')
    name.textContent = profileData.name

    const job = document.querySelector('#profile__job')
    job.textContent = profileData.job

    const location = document.querySelector('#profile__location')
    location.textContent = profileData.location

    const phone = document.querySelector('#profile__phone')
    phone.textContent = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.querySelector('#profile__email')
    email.textContent = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {

    const listaHtmlSoftSkills = document.querySelector('#profile__softSkills')
    const softSkills = profileData.skills.softSkills
    
    listaHtmlSoftSkills.innerHTML = softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData) {

    const listaHtmlHardSkills = document.querySelector('#profile__hardSkills')
    const hardSkills = profileData.skills.hardSkills

    listaHtmlHardSkills.innerHTML = hardSkills.map(skill => {
        const name = skill.name
        const logo = skill.logo

        return `<li><img src="${logo}" alt="${name}" title="${name}"></li>`
    })
    .join('')

}

function updateLanguage(profileData) {

    const listaHtmlLanguage = document.querySelector('#profile__language')
    const languages = profileData.languages

    listaHtmlLanguage.innerHTML = languages.map(language => `<li>${language}</li>`).join('')

}

function updatePortfolio(profileData) {

    const listaHtmlPortfolio = document.querySelector('#profile__portfolio')
    const portfolio = profileData.portfolio

    listaHtmlPortfolio.innerHTML = portfolio.map(e => {
        const name = e.name
        const url = e.url
        const github = e.github

        if(github) {
            // <li><span class="title github">Teste</span><a href="https://www.google.com" target="_blank">Google</a></li>
            return `<li><span class="title github">${name}</span><a href="${url}" target="_blank">${url}</a></li>`
        }
    }).join('')

}

function updateProfessionalExperience(profileData) {

    const listaHtmlProfissionalExperience = document.querySelector('#profile__professionalExperience')
    const professionalExperience = profileData.professionalExperience

    listaHtmlProfissionalExperience.innerHTML = professionalExperience.map(experience => {
        const name = experience.name
        const period = experience.period
        const description = experience.description

        return `<li>
                    <span class="title">${name}</span>
                    <span class="periodo">${period}</span>
                    <p>${description}</p>
                </li>`
    }).join('')

}

(async () => {
    
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguage(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)

})()