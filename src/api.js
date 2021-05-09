//Ожидаем нажатие клавиш и запускаем запрос данных
searchInput.addEventListener('keyup', debounce(searchRepository, 500))


//Получаем данные от сервера
async function searchRepository() {
   clearRepo()
   if (searchInput.value) {
      return await fetch(`https://api.github.com/search/repositories?q=${searchInput.value}&per_page=5`)
         .then(res => res.json())
         .then(res => { res.items.forEach(i => createRepository(i)) })
   } else {
      clearRepo()
   }
}


//функция для очистки списка репо
clearRepo = () => {
   repositoryListSearch.innerHTML = "";
}

//функция задержка получения данных с сервера
function debounce(func, wait, immediate) {
   let timeout;
   return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
};