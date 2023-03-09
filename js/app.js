const bdark = document.querySelector ('#bdark');
const header = document.querySelector ('header');

load();

bdark.addEventListener ('click', e =>{ 
    header.classList.toggle('darkmode');
    store(header.classList.contains('darkmode'))
    });

    function load(){
        const darkmode = localStorage.getItem('darkmode');
        
        if(!darkmode){
            store('false');
        }else if(darkmode == 'true'){
            header.classList.add('darkmode');
        }
    }

    function store(value){
        localStorage.setItem('darkmode',value);
    }