//Tab navigation//
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section')

function initNavTab() {

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');
    
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }
    
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    };
}

initNavTab();

//Accordion List//
const accordion = document.querySelectorAll('.js-accordion dt');

function initList() {

    if (accordion.length) {
        const active = 'active';
        accordion[0].classList.add(active);
        accordion[0].nextElementSibling.classList.add(active);
    
        function activeList() {
            this.classList.toggle(active);
            this.nextElementSibling.classList.toggle(active);
        };
    
        accordion.forEach((itemFaq) => {
            itemFaq.addEventListener('click', activeList);
        });
    }   
}

initList();


//Scroll suave//
function ativaScrollSuave() {
    const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

    if (linksInternos.length) {
        function scrollSuave(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const sections = document.querySelector(href);
            sections.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
        
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollSuave);
        })
    }
}

ativaScrollSuave();