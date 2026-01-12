const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement
        const isActive = acordeon.classList.contains('active')

        if (isActive) {
            acordeon.classList.remove('active')
        } else {
            acordeon.classList.add('active')
        }
    })
})



async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nckz06/js-developer-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

(async () => {
    
    const profileData = await fetchProfileData()
    console.log(profileData)

})()