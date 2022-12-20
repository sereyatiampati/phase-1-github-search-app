const submitBtn= document.querySelector('input[type="submit"]');


submitBtn.addEventListener('click', (e)=>{
 e.preventDefault();
 displayGithubUsers()
 //submitBtn.reset()
})

function displayGithubUsers() {
    let searchQuery = document.getElementById('search').value.trim();
    fetch(`https://api.github.com/search/users?q=${searchQuery}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(response=>response .json())
    .then(res => res.items.forEach(user=>renderUsers(user)))
    .catch(error=>{console.log(error)})
    }
     
     function renderUsers(user){
        console.log(user)
        const ul = document.getElementById('user-list')
         let li= document.createElement('li')
                 li.innerHTML = `
                     <img src="${user.avatar_url}"/>
                     <p> Username: ${user.login}</p>
                     <a href="${user.html_url}" target="_blank"> Link to Profile</a>`
                 ul.append(li)

     }