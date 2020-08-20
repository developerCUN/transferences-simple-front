const fieldsLogin = ['log_id', 'log_email', 'log_password'];

//Login User
let btnLogin= document.getElementById('loginUser');
btnLogin.addEventListener('click',async () => {
  let apiDir = `${apiUser}/login`;
  console.log(apiDir);
  let data = getFormData(fieldsLogin, 'log_');
  console.log(data);
  if (data.email || data.id){
    console.log(data);
    try {
        const response = await axios.post(apiDir, data);
        if(response.status == 200) {
          location.href = 'public/user/profile.html';
        } else {
          alert('Error en el logueo')
        }
    } catch(error){
      console.error(error);
    }
  } else {
    alert('Datos Incompletos')
  }
});
