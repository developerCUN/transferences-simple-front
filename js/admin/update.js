// BlockedFields
// const selPosition = document.getElementById('upt_cargo');
// const listPosition = ['Servicio al estudiante', 'Registro y Control',
//   'Auxiliar de Registro y Control', 'Analista de Registro y Control',
//   'Direccion de Programa','Coordinacion Academica'];
// addItemsSelector(selPosition, listPosition);
//
// const selSection = document.getElementById('upt_cod_secc');
// const listSection = ['10', '20', '30', '40', '50', '60'];
// addItemsSelector(selSection, listSection);
//
// const selHeadQ= document.getElementById('upt_cod_sede');
// const listHeadQ = ['00000'];
// addItemsSelector(selHeadQ, listHeadQ);

//Update Data
const uptFields = ['upt_id', 'upt_nombres', 'upt_apellidos',
 'upt_email', 'upt_telefono', 'upt_cargo', 'upt_cod_secc',
  'upt_cod_sede', 'upt_imagen', 'upt_password', 'upt_conf_password'];

/////

async function updateData(idAdmin){
  let apiDir = `${apiAdmin}/${idAdmin}/update`;
  try {
    let data = getFormDataType('upt_', uptFields, ['upt_imagen']);
    const response = await axios.put(apiDir, data);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
