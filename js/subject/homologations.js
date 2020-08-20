const listFieldsHmlog = ['hmlog_nombre', 'hmlog_creditos', 'hmlog_cod_modalidad',
'hmlog_cod_programa', 'hmlog_cod_secc', 'hmlog_cod_sede', 'hmlog_cod_plan', 'hmlog_equivalencia'];

 // Create Data
async function addHomologation(idTransf){
  let apiDir = `${apiHomo}/${idTransf}/add`;
  let data = getFormData(listFieldsHmlog, 'hmlog_');
  data['equivalencia'] = data['equivalencia'].split(' ');
  console.log(data);
  //cleanData(listFieldsHmlog)
  try{
    console.log(apiDir);
    const response = await axios.post(apiDir, data);
    if(response.status == 201) {
      console.log(response.data.message);
    }
  } catch(error){
    console.error(error);
  }
}

//Get All Data
function getAllHomologations(idTransf){
  let apiDir = `${apiSubj}/${idTransf}`;
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    console.log(data);
    let tableItems = ['nombre', 'creditos', 'seccion', 'programa', 'plan', 'equivalencia'];
    renderTableInfo( 'subjectTransf', data, tableItems, ['Ver'], ["window.location.href='specificSubject.html'"]);
  })
  .catch(e => {
    console.error(e);
  });
}

// Get One Data
function getHomologation(idHmlog){
  let apiDir = `${apiSubj}/${idHmlog}`;
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    console.log(data);
    fields = ['nombre', 'creditos', 'institucion', 'programa', 'modalidad'];
    addInfoData(fields, data, 'subj_');
  })
  .catch(e => {
    console.error(e);
  });
}
