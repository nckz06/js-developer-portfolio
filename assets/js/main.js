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

function updateCourses(profileData) {

    const listaHtmlCourses = document.querySelector('#profile__courses')
    const courses = profileData.courses

    listaHtmlCourses.innerHTML = courses.map(course => {
        const name = course.name
        const date = course.date
        const description = course.description
        const time = course.time
        const url = course.url

        return `<li>
                    <span class="title">${name}</span>
                    <span class="date ${date == 'Em andamento' ? 'current' : ''}">${date}</span>
                    <span class="time">${time}</span>
                    <p>${description}</p>
                    ${date == 'Em andamento' ? '' : `<a href="${url}" target="_blank">${url}</a>`}
                </li>`
    }).join('')

}

function updatePortfolio(profileData) {

    const listaHtmlPortfolio = document.querySelector('#profile__portfolio')
    const portfolio = profileData.portfolio

    listaHtmlPortfolio.innerHTML = portfolio.map(project => {
        const name = project.name
        const url = project.url
        const description = project.description
        const github = project.github

        if(github) {
            return `<li>
                        <span class="title github">${name}</span>
                        <p>${description}</p>
                        <a href="${url}" target="_blank">${url}</a>
                    </li>`
        }
    }).join('')

}

function updateProfessionalExperience(profileData) {

    const listaHtmlProfissionalExperience = document.querySelector('#profile__professionalExperience')
    const professionalExperience = profileData.professionalExperience

    listaHtmlProfissionalExperience.innerHTML = professionalExperience.map(experience => {
        const name = experience.name
        const startDate = experience.startDate
        const endDate = experience.endDate
        const description = experience.description

        return `<li>
                    <span class="title">${name}</span>
                    <p class="period">${startDate} - ${endDate ? endDate : `<span class="current">Até o momento</span>`}</p>
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
    updateCourses(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)

})()