const fields = ['tipo', 'estado', 'creado', 'cod_modalidad', 'cod_secc', 'cod_sede', 'cod_programa', 'cod_plan']
// Get One Data
function getTransference(id){
  let apiDir = `${apiTransf}/${id}`;
  console.log(apiDir);
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    //let auth = data.archivo_aprobado;
    console.log(data);
    addInfoData(fields, data, 'transf_');
    //renderFieldFiles([auth], 'docs_field', 'trans_');
  })
  .catch(e => {
    console.error(e);
  });
}
// Define get Files


function renderFieldFiles(listItems, field, prefix=None){
  console.log(listItems);
  let showData = '';
  let finalPrefix = prefix ? prefix : '';
  if (listItems != 'ninguno'){
    for (let i = 0; i < listItems.length; i++){
      showData = `<p><b>${listItems[i]}:</b>
        <input
        id="${finalPrefix}${listItems[i]}"
        type="file"
        name="file"
        >
      </p>`;
    }
  } else {
    showData = 'No hay archivos autorizados';
  }
  document.getElementById(field).innerHTML = showData;
}

function assignManager(id_transf){
  let apiDir = `${apiTransf}/assign/${id_transf}`;
  data = getFormData(['asignado']);
  data['asignador'] = idTestAdmin;
  console.log(data);
  try {
    const response = axios.put(apiDir, data);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
