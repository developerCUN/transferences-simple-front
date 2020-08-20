const fieldsLogin = ['log_id', 'log_email', 'log_password'];
//Login
let btnLogin= document.getElementById('loginAdmin');
btnLogin.addEventListener('click',async () => {
  let apiDir = `${apiAdmin}/login`;
  console.log(apiDir);
  let data = getFormData(fieldsLogin, 'log_');
  if (data.email || data.id){
    try {
        const response = await axios.post(apiDir, data);
        if(response.status == 200) {
          location.href = 'public/admin/profile.html'
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

function cleanLoginAdmin() {
    cleanData(fieldsLogin);
}
