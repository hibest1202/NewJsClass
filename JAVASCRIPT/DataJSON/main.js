let users = [];
let selected_users = []

function fetchData(){
    fetch("./data.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            users = data;
            displayUsers()
        })
        .catch(err => {
            console.log(err)
        })
}
fetchData()

function Search(){
    const word = document.getElementById('word');
    selected_users = users.filter((item) => {
        return String(item.name).indexOf(word.value) >= 0;
    })
    displaySelectedUsers()
}

function checkUser(){
    console.log(users)
}

function displayUsers(){
    document.getElementById("content").innerHTML = ""
    users.forEach((user, index) => {
        document.getElementById("content").innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.ID}</td>
                <td>${user.location}</td>
            </tr>
        `
    })
}

function displaySelectedUsers(){
    document.getElementById("content").innerHTML = ""
    selected_users.forEach((user, index) => {
        document.getElementById("content").innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.ID}</td>
                <td>${user.location}</td>
            </tr>
        `
    })
}

// function Search(){
//     const allusers = ["samuel henshaw", 'samson samuel', 'kamiye', 'iqmat', 'king']
//     let selectedUsers = allusers.filter(function(item) {
//         console.log(item.indexOf("samuel"))
//         return item.indexOf("samuel") >= 0;
//     })

//     console.log(selectedUsers)

// }