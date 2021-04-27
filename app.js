let searchUser = document.querySelector('#searchUser');
let github = new GitHub;
let ui = new UI;

searchUser.addEventListener('keyup', (e) => {
    let userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        ui.clearProfile()
    }
})