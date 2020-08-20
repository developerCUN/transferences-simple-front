const listFields = ['subj_nombre', 'subj_creditos', 'subj_institucion',
 'subj_programa', 'subj_modalidad'];

 // Create Data
async function addSubject(idTransf){
  let apiDir = `${apiSubj}/${idTransf}/add`;
  let data = getFormData(listFields, 'subj_');
  cleanData(listFields)
  try{
    const response = await axios.post(apiDir, data);
    if(response.status == 201) {
      console.log(response.data.message);
    }
  } catch(error){
    console.error(error);
  }
}

//Get All Data
function getAllSubjects(idTransf){
  let apiDir = `${apiSubj}/transferences/${idTransf}`;
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    console.log(data);
    let tableItems = ['id', 'nombre', 'creditos', 'institucion', 'programa', 'modalidad'];

    let fieldSubjects = document.getElementById('subjectTransf')
    if (fieldSubjects)
      renderTableInfo( 'subjectTransf', data, tableItems, ['Ver'], ["window.location.href='specificSubject.html'"]);

  })
  .catch(e => {
    console.error(e);
  });
}

// Get One Data
function getSubject(idSubj){
  let apiDir = `${apiSubj}/${idSubj}`;
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
