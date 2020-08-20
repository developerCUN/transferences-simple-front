const listDefFields = ['id', 'nombres', 'apellidos', 'email', 'telefono',
 'cargo', 'cod_secc', 'cod_sede']

 // Create Data
 let btnSign = document.getElementById('signAdmin');
 btnSign.addEventListener('click', async () => {
   let apiDir = `${apiAdmin}/register`;
   let data = getFormData(listDefFields)
   cleanDataAdmin()
   try{
     const response = await axios.post(apiDir, data);
     if(response.status == 201) {
       console.log(response.data.message);
     }
   } catch(error){
     console.error(error);
   }
 });

 const selPosition = document.getElementById('cargo');
 const listPosition = ['Servicio al estudiante', 'Registro y Control',
   'Auxiliar de Registro y Control', 'Analista de Registro y Control',
   'Direccion de Programa','Coordinacion Academica'];
 addItemsSelector(selPosition, listPosition);

 const selSection = document.getElementById('cod_secc');
 const listSection = ['10', '20', '30', '40', '50', '60'];
 addItemsSelector(selSection, listSection);

 const selHeadQ= document.getElementById('cod_sede');
 const listHeadQ = ['00000'];
 addItemsSelector(selHeadQ, listHeadQ);

 function cleanDataAdmin() {
     cleanData(listDefFields);
 }
