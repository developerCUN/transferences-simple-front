const fields = ['tipo', 'estado', 'creado', 'cod_modalidad', 'cod_secc', 'cod_sede', 'cod_programa', 'cod_plan']
// Get One Data
function getTransference(id){
  let apiDir = `${apiTransf}/${id}`;
  console.log(apiDir);
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    let auth = data.archivo_aprobado;
    console.log(data);
    addInfoData(fields, data, 'transf_');
    renderFieldFiles([auth], 'docs_field', 'trans_');

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


async function updateFileData(id){
  const listItems = ['trans_notas', 'trans_nmaf05', 'trans_nmaf06', 'trans_nmaf15'];
  let formData = getFormDataType('trans_', listItems, listItems);
  let apiDir = `${apiTransf}/${id}/update`;
  try{
    const response = await axios({
        method: 'put',
        url: apiDir,
        data: formData,
        headers: {
        'content-type': `multipart/form-data;`,
        },
    });
    if(response.status == 200) {
      console.log(response.data.message);
    }
  } catch(error){
    console.error(error);
  }
}


async function endTransference(id){
  let apiDir = `${apiTransf}/${id}/delete`;
  try {
      const response = await axios.put(apiDir);
      if(response.status == 200) {
        console.log(response);
      } else {
        alert('Error en el logueo')
      }
  } catch(error){
    console.error(error);
  }
}
