//общий контейнер
let app = document.createElement('div')
app.classList.add('app')
document.body.prepend(app)

//инпут
let searchInput = document.createElement('input')
searchInput.classList.add('search-input')
app.prepend(searchInput)

//див => ul => li для вывода совпадений с поиском
let repositoryWrapper = document.createElement('div')
repositoryWrapper.classList.add('repository-wrapper')
let repositoryListSearch = document.createElement('ul')
repositoryListSearch.classList.add('repositoryList')
repositoryWrapper.prepend(repositoryListSearch)
app.append(repositoryWrapper)

//див => ul для вывода по клику
const saveContainer = document.createElement('div')
saveContainer.classList.add("saveContainer")
let repositoryListSave = document.createElement('ul')
saveContainer.prepend(repositoryListSave)
app.append(saveContainer)


function createRepository(repositoryData) { // repositoryData - полученные объекты с сервера      

   //Элементы li при выводе при поиске
   const repositoryElement = document.createElement('li');
   repositoryElement.classList.add("repositoryList__element")
   repositoryElement.innerHTML = `<div class="repositoryList__element_textSearch">${repositoryData.name}</div>`;
   repositoryListSearch.append(repositoryElement)

   //Элементы li для клика
   let el = `
   <div class="saveContainer__element_card-text">
   Name: ${repositoryData.name}<br>
   Owner: ${repositoryData.owner.login}<br>
   Stars: ${repositoryData.stargazers_count}</div>`
   const repositoryElementClick = document.createElement('li');
   repositoryElementClick.classList.add("saveContainer__element");
   repositoryElementClick.innerHTML = el;
   const divBtn = document.createElement("div")
   divBtn.classList.add("saveContainer__element_card-btn")
   const btn = document.createElement("button")
   btn.classList.add("btn")
   divBtn.append(btn)
   repositoryElementClick.append(divBtn)

   // добавляем элементы при клике на страницу 
   repositoryElement.addEventListener('click', () => {
      repositoryListSave.append(repositoryElementClick)
   })

   //удаляем при клике 
   btn.addEventListener('click', () => {
      repositoryElementClick.remove()
   })
}