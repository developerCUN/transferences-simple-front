const listDefFields = ['id', 'nombres', 'apellidos', 'email', 'telefono',
 'institucion_origen', 'programa_origen'];

 //UPDATE
 const listUptFields =  ['upt_id', 'upt_nombres', 'upt_apellidos',
    'upt_email', 'upt_telefono', 'upt_institucion_origen',
     'upt_programa_origen'];

const blockUptFields = ['upt_id', 'upt_nombres', 'upt_apellidos',
  'upt_institucion_origen', 'upt_programa_origen'];

// Transferences
const listTransfFields = ['trans_cod_programa', 'trans_tipo',
'trans_cod_modalidad', 'trans_cod_plan', 'trans_cod_secc', 'trans_cod_sede',
'trans_transf_carta'
];

const selPrograms= document.getElementById('trans_cod_programa');
const listPrograms = ['Finanzas', 'D. Grafico', 'Ingles'];
addItemsSelector(selPrograms, listPrograms);

const selType= document.getElementById('trans_tipo');
const listType = ['Externa', 'Interna'];
addItemsSelector(selType, listType);

const selModalidad = document.getElementById('trans_cod_modalidad');
const codeModalidad = [0, 1, 2];
const listModalidad = ['Presencial', 'A distancia', 'Virtual'];
addItemsSelector(selModalidad, codeModalidad, listModalidad);

const selPlan = document.getElementById('trans_cod_plan');
const listPlan = ['pl00000'];
addItemsSelector(selPlan, listPlan);

const selSection = document.getElementById('trans_cod_secc');
const listSection = ['10', '20', '30', '40', '50', '60'];
addItemsSelector(selSection, listSection);

const selHeadQ= document.getElementById('trans_cod_sede');
const listHeadQ = ['00000'];
addItemsSelector(selHeadQ, listHeadQ);


function cleanAddTransf() {
    cleanData(listTransfFields);
}


// Get Data User
function getProfile(id){
  let apiDirAdmin = `${apiUser}/${id}`;
  let response =  axios.get(apiDirAdmin)
  .then(res => {
    let user = res.data.message;
    addInfoData(listDefFields, user, 'prof_');
    let field = document.getElementById('upt_form');
    if (field)
    renderUpdateFields('upt_form',listUptFields, blockUptFields, user);
  })
  .catch(e => {
    console.error(e);
  });
}

// get Data Tranferences
function getUserTransf(idUser){
  let apiDir = `${apiTransf}/users/${idUser}`;
  let response =  axios.get(apiDir)
  .then(res => {
    let data = res.data.message;
    let tableItems = ['creado', 'cod_programa', 'estado', 'tipo', 'cod_plan', 'cod_secc', 'cod_sede'];
    renderTableInfo('transfUser', data, tableItems, ['Ver'], ["window.location.href='transference.html'"]);
  })
  .catch(e => {
    console.error(e);
  });
}

// Create Transference
async function addTransf(idUser){
  let apiDir = `${apiTransf}/users/${idUser}`;
  let formData = getFormDataType('trans_', listTransfFields, ['trans_transf_carta']);
  cleanAddTransf();
  try{
    const response = await axios({
        method: 'post',
        url: apiDir,
        data: formData,
        headers: {
        'content-type': `multipart/form-data;`,
        },
    });
    if(response.status == 201) {
      console.log(response.data.message);
    }
  } catch(error){
    console.error(error);
  }
}
