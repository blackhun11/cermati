function appendProduct() {
    let product = document.getElementById('product')

    let data = [{
            'header': 'Consult',
            'icon': 'comments',
            'body': `Co-create, design thinking strengthen infrastructure resist granular.
        Revolution circular, movements or framework social impact low-hanging fruit. 
        Save the world compelling revolutionary progress.`
        },
        {
            'header': 'Design',
            'icon': 'paint-brush',
            'body': `Policymaker collaborates collective impact humanitarian shared value
        vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
        issue outcomes vibrant boots on the ground sustainable.`
        },
        {
            'header': 'Develop',
            'icon': 'cubes',
            'body': `Revolutionary circular, movements a or impact framework social impact low-
        hanging. Save the compelling revolutionary inspire progress. Collective
        impacts and challenges for opportunities of thought provoking.`
        },
        {
            'header': 'Marketing',
            'icon': 'bullhorn',
            'body': `Peaceful vibrant paradigm, collaborative cities. Shared vocabulary agile,
        replicable, effective altruism youth. Mobilize commitment to overcome
        injustice resilient, uplift social transparent effective.`
        },
        {
            'header': 'Manage',
            'icon': 'sliders-h',
            'body': `Change-makers innovation or shared unit of analysis. Overcome injustice
        outcomes strategize vibrant boots on the ground sustainable. Optimism,
        effective altruism invest optimism corporate social.`
        },
        {
            'header': 'Evolve',
            'icon': 'chart-line',
            'body': `Activate catalyze and impact contextualize humanitarian. Unit of analysis
        overcome injustice storytelling altruism. Thought leadership mass 
        incarceration. Outcomes big data, fairness, social game-changer.`
        },
    ]

    for (let index = 0; index < data.length; index++) {
        product.innerHTML += `
        <div class='container'>
            <div class="flex-space-between">
                <label>${data[index].header}</label>
                <i class="fas fa-${data[index].icon} font22"></i>
            </div>
            
            <p>
                ${data[index].body}
            </p>
        </div>`
    }

}

function closeNewsletter() {
    const times = document.getElementById('times')
    const newsletter = document.getElementById('newsletter')

    times.onclick = ()=> {
        let now = new Date()
        localStorage.expired = new Date(now.setMinutes(now.getMinutes() + 10)).toUTCString()
        form.classList.remove('newsletterOn')
        if(window.getComputedStyle(newsletter).display === 'block'){
            form.classList.add('newsletterOff')
        
            setTimeout(() => {
                newsletter.style.display = 'none'
            }, 100);
        }
    }
}
function diff_minutes(dt1, dt2) {
    let diff = (dt2.getTime() - dt1.getTime()) / 60 / 1000
    return Math.round(diff)
}

function showNewsletter(){
    const height = window.screen.height
    const form = document.getElementById('form')
    let position = 0
    window.onscroll = ()=> {
            let now = new Date()
            let diff = diff_minutes(now, new Date(localStorage.expired))
            console.log(diff)
            form.classList.remove('newsletterOff')
            let currentLocation = document.scrollingElement.scrollTop
            if(currentLocation > position && window.scrollY >= height/3 && diff < 0){
                if(window.getComputedStyle(newsletter).display === 'none'){
                    form.classList.add('newsletterOn')

                setTimeout(() => {
                    newsletter.style.display = 'block'              
                }, 100);
            }
        }
        position = currentLocation

    }
}

function stickyHeader() {
    const header = document.getElementById("nav")
    const btnGotIt = document.getElementById('btnGotIt')
    const hero = document.getElementById('hero')

    btnGotIt.onclick = ()=> {
        header.classList.toggle('close')
        setTimeout(() => {
            header.style.display = 'none'
            hero.classList.toggle('marginHero')
        }, 100)
    }
}

(() => {
    showNewsletter()
    stickyHeader()
    appendProduct()
    closeNewsletter()
})()