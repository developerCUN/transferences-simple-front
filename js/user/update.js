//Update Data
const uptFields = ['upt_id', 'upt_nombres', 'upt_apellidos',
   'upt_email', 'upt_telefono', 'upt_institucion_origen',
    'upt_programa_origen', 'upt_imagen', 'upt_password',
    'upt_conf_password'];

/////

async function updateData(idUser){
  let apiDir = `${apiUser}/${idUser}/update`;
  try {
    let data = getFormDataType('upt_', uptFields, ['upt_imagen']);
    const response = await axios.put(apiDir, data);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
