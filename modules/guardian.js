const user = JSON.parse(localStorage.getItem('user'))

if (!user) {
    
    location.assign('/pages/sign_in')
    
}
