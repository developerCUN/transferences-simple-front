const listDefFields = ['id', 'nombres', 'apellidos', 'email', 'telefono',
 'cargo', 'cod_secc', 'cod_sede']

 //Update listFields
 const listUptFields = ['upt_id', 'upt_nombres', 'upt_apellidos',
  'upt_email', 'upt_telefono', 'upt_cargo', 'upt_cod_secc',
   'upt_cod_sede'];

   const blockUptFields = ['upt_id', 'upt_nombres', 'upt_apellidos',
       'upt_cargo', 'upt_cod_secc', 'upt_cod_sede'];

 // getDataAdmin
 function getProfile(id){
   let apiDirAdmin = `${apiAdmin}/${id}`;
   let response =  axios.get(apiDirAdmin)
   .then(res => {
     let user = res.data.message;
     addInfoData(listDefFields, user, 'prof_');
     renderUpdateFields('upt_form',listUptFields, blockUptFields, user);
   })
   .catch(e => {
     console.error(e);
   });
 }

 // get All Data Tranferences
 function getAdminTransf(idAdmin){
   let apiDir = `${apiTransf}/admin/${idAdmin}`;
   let response =  axios.get(apiDir)
   .then(res => {
     let data = res.data.message;
     console.log(data);
     let tableItems = ['fecha_asignacion', 'admin_asignador', 'admin_encargado'];
     renderTableInfo( 'transfAdmin', data, tableItems, ['Ver'], ["window.location.href='transference.html'"]);
   })
   .catch(e => {
     console.error(e);
   });
 }
