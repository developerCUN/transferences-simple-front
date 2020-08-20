function getManagers(transf){
  let apiDirAdmin = `${apiTransf}/managers/${transf}`;
  let response =  axios.get(apiDirAdmin)
  .then(res => {
    let data = res.data.message;
    let tableItems = ['fecha_asignacion', 'admin_asignador', 'admin_encargado'];
    renderTableInfo('transfManagers', data, tableItems,
    ['Ver Asignador'], ["window.location.href='transference.html'"]);
    console.log(data);
  })
  .catch(e => {
    console.error(e);
  });
}
