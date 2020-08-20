const listDefFields = ['id', 'nombres', 'apellidos', 'email', 'telefono',
 'institucion_origen', 'programa_origen'];

// Create User Data
let btnSign = document.getElementById('signUser');
btnSign.addEventListener('click', async () => {
  let apiDir = `${apiUser}/signin`;
  let data = getFormData(listDefFields)
  cleanDataUser()
  try{
    const response = await axios.post(apiDir, data);
    if(response.status == 201) {
      console.log(response.data.message);
    }
  } catch(error){
    console.error(error);
  }
});

function cleanDataUser() {
    cleanData(listDefFields);
}
