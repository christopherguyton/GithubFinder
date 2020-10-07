//Search input
const github = new GitHub;
const ui = new UI;


const searchUser = document.getElementById('searchUser');

//Search input event listener

searchUser.addEventListener('keyup', (e) => {
 const userText = e.target.value;
if(userText !== ''){
    github.getUser(userText)
    .then(data => {
       if (data.profile.message === 'Not Found') {
        //Show Error
        ui.showAlert('User not found', 'alert alert-danger');
       } else {
           //Show Profile
           ui.showProfile(data.profile)
           ui.showRepos(data.repos)
       }
    })
} else {
    //Clear Profile
    ui.clearProfile();
}
});