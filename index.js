let main = document.getElementsByTagName('main')[0];
let d = 0;

fetch('./data.json')
.then(res => res.json())
.then(data => {
    data.forEach(post => {
        main.insertAdjacentHTML('beforeend', `
        <div class='post' data-number='${d++}'>
            <img src='${post.logo}' class='logo' alt='logo'>
        <div class='middle'>
            <div class='top'>
            <h2>${post.company}</h2>
            </div>
            <div class='center'>
            <h3>${post.position}</h3>
            </div>
            <div class='bottom'>
            <p>${post.postedAt}</p>
            <p>&#x2022; ${post.contract}</p>
            <p>&#x2022; ${post.location}</p>
            </div>
        </div>
        <div class='right'>
        <p class='role'>${post.role}</p>
        <p class='level'>${post.level}</p>
        </div>
        </div>
        `)
    });

    const right = document.querySelectorAll('.right');
    const top = document.querySelectorAll('.top');
    const post = document.querySelectorAll('.post');
    const filterEl = document.getElementById('filterEl')

    for(let i = 0; i < top.length; i++){
        if(data[i].new === true){
            top[i].insertAdjacentHTML('beforeend', `<div class='new'><p>New!</p></div>`);
        }
    }

    for(let i = 0; i < top.length; i++){
        if(data[i].featured === true){
            top[i].insertAdjacentHTML('beforeend', `<div class='feat'><p>Featured</p></div>`);
            post[i].style.borderLeft = '6px solid hsl(180, 29%, 50%)'
        }
    }

    for(let i = 0; i < right.length; i++){
        for(let j = 0; j < data[i].languages.length; j++){
            right[i].insertAdjacentHTML('beforeend', `<p class='lang'>${data[i].languages[j]}</p>`)
        }
    }

    for(let i = 0; i < right.length; i++){
        for(let j = 0; j < data[i].tools.length; j++){
            right[i].insertAdjacentHTML('beforeend', `<p class='tool'>${data[i].tools[j]}</p>`)
        }
    }

    let lang = document.querySelectorAll('.lang');
    let tool = document.querySelectorAll('.tool');
    const filterSpace = document.querySelector('.filter-space')
    const role = document.querySelectorAll('.role');
    const level = document.querySelectorAll('.level');
    let totalBody = main.innerHTML;

    let totalFilter = []
    let langArr = [];
    for(let i = 0; i < post.length; i++){
        lang[i].addEventListener('click', function(){
            filterEl.style.display = filterEl.style.display === 'none' ? 'flex' : 'flex';
            let addLang = document.querySelectorAll('.add-lang');
            langugageClicked = this.textContent
            if(langArr.length > 0){
                    if(langArr.includes(this.textContent)){
                        console.log('it is already present');
                    }else {
                        filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                            <p class='content add-lang'>${langugageClicked}</p>
                            <div class="remove">
                            <img src="images/icon-remove.svg" alt="remove">
                            </div>
                        </div>`)
                        langArr.push(langugageClicked)
                        totalFilter.push(langugageClicked)
                        remover()
                    }
            }else {
                filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                <p class='content add-lang'>${langugageClicked}</p>
                <div class="remove">
                <img src="images/icon-remove.svg" alt="remove">
                </div>
            </div>`)
            langArr.push(langugageClicked)
            totalFilter.push(langugageClicked)
            remover()
            }
            langFilter(this.textContent)
        });
    }

    let toolArr = [];
    for(let i = 0; i < post.length; i++){
        tool[i].addEventListener('click', function(){
            filterEl.style.display = filterEl.style.display === 'none' ? 'flex' : 'flex';
            let addTool = document.querySelectorAll('.add-tool');
            toolClicked = this.textContent
            if(toolArr.length > 0){
                    if(toolArr.includes(this.textContent)){
                        console.log('it is already present');
                    }else {
                        filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                            <p class='content add-tool'>${toolClicked}</p>
                            <div class="remove">
                            <img src="images/icon-remove.svg" alt="remove">
                            </div>
                        </div>`)
                        toolArr.push(toolClicked)
                        totalFilter.push(toolClicked)
                        remover()
                    }
            }else {
                filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                <p class='content add-tool'>${toolClicked}</p>
                <div class="remove">
                <img src="images/icon-remove.svg" alt="remove">
                </div>
            </div>`)
            toolArr.push(toolClicked)
            totalFilter.push(toolClicked)
            remover()
            }
            toolFilter(this.textContent)
        });
    }

    let roleArr = [];
    for(let i = 0; i < post.length; i++){
        role[i].addEventListener('click', function(){
            filterEl.style.display = filterEl.style.display === 'none' ? 'flex' : 'flex';
            let addRole = document.querySelectorAll('.add-role');
            roleClicked = this.textContent
            if(roleArr.length > 0){
                    if(roleArr.includes(this.textContent)){
                        console.log('it is already present');
                    }else {
                        filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                            <p class='content add-role'>${roleClicked}</p>
                            <div class="remove">
                            <img src="images/icon-remove.svg" alt="remove">
                            </div>
                        </div>`)
                        roleArr.push(roleClicked)
                        totalFilter.push(roleClicked)
                        remover()
                    }
            }else {
                filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                <p class='content add-role'>${roleClicked}</p>
                <div class="remove">
                <img src="images/icon-remove.svg" alt="remove">
                </div>
            </div>`)
            roleArr.push(roleClicked)
            totalFilter.push(roleClicked)
            remover()
            }
            roleFilter(this.textContent)
        });
    }

    let lvlArr = []
    for(let i = 0; i < post.length; i++){
        level[i].addEventListener('click', function(){
            filterEl.style.display = filterEl.style.display === 'none' ? 'flex' : 'flex';
            let addLevel = document.querySelectorAll('.add-level');
            levelClicked = this.textContent
            if(lvlArr.length > 0){
                    if(lvlArr.includes(this.textContent)){
                        console.log('it is already present');
                    }else {
                        filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                            <p class='content add-level'>${levelClicked}</p>
                            <div class="remove">
                            <img src="images/icon-remove.svg" alt="remove">
                            </div>
                        </div>`)
                        lvlArr.push(levelClicked);
                        totalFilter.push(levelClicked)
                        remover()
                    }
            }else {
                filterSpace.insertAdjacentHTML('beforeend', `<div class="filter">
                <p class='content add-level'>${levelClicked}</p>
                <div class="remove">
                <img src="images/icon-remove.svg" alt="remove">
                </div>
            </div>`)
            lvlArr.push(levelClicked);
            totalFilter.push(levelClicked)
            remover()
            }
            levelFilter(this.textContent)
        });
    }

    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        filterSpace.innerHTML = '';
        filterEl.style.display = 'none';
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let i = 0; i < data.length; i++){
            main.append(post[i])
            if(mQuery.matches){
                post[i].style.display = 'flex'
            }else {
                post[i].style.display = 'grid';
            }
        }
    })

    function ifEmpty(){
        let filter = document.querySelectorAll('.filter');
        if(totalFilter.length === 0){
            filterEl.style.display = 'none'
            let mQuery = window.matchMedia('(min-width:768px)')
            for(let i = 0; i < data.length; i++){
                main.append(post[i])
                if(mQuery.matches){
                    post[i].style.display = 'flex'
                }else {
                    post[i].style.display = 'grid';
                }
            }
        }
    }

    function remover(){
        let removeEl = document.querySelectorAll('.remove');
        let filter = document.querySelectorAll('.filter');
        let content = document.querySelectorAll('.content');
        for(let i = 0; i < removeEl.length; i++){
            removeEl[i].addEventListener('click', (e) =>{
                e.preventDefault()
                totalFilter.pop()
                filter[i].remove()
                ifEmpty()
                // beforeRemover(i)
                toRemove()
                if(lvlArr.includes(content[i].textContent)){
                    let y = lvlArr.indexOf(content[i].textContent)
                    lvlArr.splice(y, 1);
                }else if(roleArr.includes(content[i].textContent)){
                    let y = roleArr.indexOf(content[i].textContent)
                    roleArr.splice(y, 1);
                }else if(langArr.includes(content[i].textContent)){
                    let y = langArr.indexOf(content[i].textContent)
                    langArr.splice(y, 1);
                }else if(toolArr.includes(content[i].textContent)){
                    let y = toolArr.indexOf(content[i].textContent)
                    toolArr.splice(y, 1);
                } 
            })
        }
    }

    function toRemove(){
        let content = document.querySelectorAll('.content');
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let j = 0; j < data.length; j++){
            if(data[j].languages.includes(content[content.length-1].textContent)){
                main.append(post[j])
                if(mQuery.matches){
                    post[j].style.display = 'flex'
                }else {
                    post[j].style.display = 'grid';
                }
            }else if(data[j].role.includes(content[content.length-1].textContent)){
                main.append(post[j])
                if(mQuery.matches){
                    post[j].style.display = 'flex'
                }else {
                    post[j].style.display = 'grid';
                }
            }else if(data[j].level.includes(content[content.length-1].textContent)){
                main.append(post[j])
                if(mQuery.matches){
                    post[j].style.display = 'flex'
                }else {
                    post[j].style.display = 'grid';
                }
            }else if(data[j].tools.includes(content[content.length-1].textContent)){
                main.append(post[j])
                if(mQuery.matches){
                    post[j].style.display = 'flex'
                }else {
                    post[j].style.display = 'grid';
                }
            }
        }
    }

    // function beforeRemover(x){
    //     prevBody.splice(x, 1);
    //     main.innerHTML = prevBody[prevBody.length-1];
    //     console.log(prevBody)
    // }

    const hiddenField = document.querySelector('.hidden')

    let prevBody = [];

    function langFilter(x){
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let i = 0; i < post.length; i++){
            if(data[i].languages.includes(x)){
                if(mQuery.matches){
                    post[i].style.display = 'flex'
                }else {
                    post[i].style.display = 'grid';
                }
            }else {
                hiddenField.append(post[i])
                post[i].remove()
            }
        }

    }

    function roleFilter(x){
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let i = 0; i < post.length; i++){
            if(data[i].role.includes(x)){
                if(mQuery.matches){
                    post[i].style.display = 'flex'
                }else {
                    post[i].style.display = 'grid';
                }
            }else {
                hiddenField.append(post[i])
                post[i].remove();
            }
        }
    }

    function levelFilter(x){
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let i = 0; i < post.length; i++){
            if(data[i].level.includes(x)){
                if(mQuery.matches){
                    post[i].style.display = 'flex'
                }else {
                    post[i].style.display = 'grid';
                }
            }else {
                hiddenField.append(post[i])
                post[i].remove()
            }
        }
    }

    function toolFilter(x){
        let mQuery = window.matchMedia('(min-width:768px)')
        for(let i = 0; i < post.length; i++){
            if(data[i].tools.includes(x)){
                if(mQuery.matches){
                    post[i].style.display = 'flex'
                }else {
                    post[i].style.display = 'grid';
                }
            }else {
                hiddenField.append(post[i])
                post[i].remove()
            }
        }
    }
})