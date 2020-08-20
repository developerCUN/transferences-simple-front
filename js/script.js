function addItemsSelector(selector, items, values=false){
  for (let item in items){
    let opt = document.createElement('option');
    let text = values ? values[item] : items[item]
    opt.appendChild(document.createTextNode(text));
    opt.value = items[item];
    selector.appendChild(opt);
  }
}

function getFormData(listFields, prefix=false) {
  let data = {}
  for (let field in listFields) {
    let elementData = listFields[field]
    data[elementData] = document.getElementById(elementData).value
  }
  if (prefix){
    data = removePrefix(prefix, data)
  }
  return data
}

function removePrefix(prefix, data){
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++){
      let newKey = keys[i].split(prefix).pop();
      data[newKey] = data[keys[i]];
      delete data[keys[i]];
    }
    return data;
}

function addPrefix(prefix, data){
  let keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++){
    let newKey = [prefix, keys[i]].join('');
    data[newKey] = data[keys[i]];
    delete data[keys[i]];
  }
  return data;
}

function addInfoData(listFields, data, prefix=false){
  if (prefix){
    data = addPrefix(prefix, data);
  }
  for (let i = 0; i < listFields.length; i++) {
    let field = prefix ? `${prefix}${listFields[i]}` : listFields[i];
    document.getElementById(field).innerHTML = data[field];
  }
}

function cleanData(listFields){
  for (let field in listFields) {
    document.getElementById(listFields[field]).value = ''
  }
}

function removePrefixOneElem(prefix, elem){
  separate = elem.split('');
  for(let i = 0; i < prefix.length; i++){
    separate.shift();
  }
  return separate.join('');
}

function getFormDataType(prefix=false, listItems, files){
  let formData = new FormData();
  for (let item in listItems){
    // get element
    let elem = document.getElementById(listItems[item]);
    // Derfine if is file
    let isFile = files.find(elem => elem == listItems[item]);
    // Define name
    let fieldName = prefix ? removePrefixOneElem(prefix, listItems[item]): listItems[item]

    if (isFile) {
      file = elem.files[0];
      if (file){
        formData.append(fieldName, file);
      }
    } else {
      formData.append(fieldName, elem.value);
    }
  }
  return formData;
}


function renderTableInfo(idTag, allData, keys, itemButton=false, actions=false, params=false){
  let showData = '';
  for (let n=0; n < allData.length; n++){
    showData += '<tr>';
    for (let i = 0; i < keys.length; i++){
      let data = allData[n][keys[i]]
      showData += `<td>${data}</td>`
    }
    if (itemButton){
      showData += '<td>';
      for(let k = 0; k < itemButton.length; k++){
        showData += `<button type="button" onclick="${actions[k]}" class="btn btn-info">${itemButton[k]}</button>`;
        /*
        withParams = `"${actions[k]}(${params[k]})"`
        withoutParams = `"${actions[k]}"`
        showData += params ? withParams : withoutParams
        showData += ` class="btn btn-info">${itemButton[k]}</button>`
        */
      }
      showData += '</td>';
    }
    showData += '</tr>';
  }
  document.getElementById(idTag).innerHTML = showData;
}

//get Update BlockedFields
function renderUpdateFields(field, listFields, blockedFields, data){
  let showData = '';
  for (let i = 0; i < listFields.length; i++) {
    let item = listFields[i];
    let finalItem = removePrefixOneElem('upt_', item);
    showData += `
    <p>${finalItem}:
      <input
        type="text"
        id="${item}"
        size="40"
        placeholder="${data['prof_' + finalItem]}" `;
    showData += (blockedFields.find(elem => elem == item)) ? 'disabled' : '';
    showData += ' > </p>';
  }
  document.getElementById(field).innerHTML = showData;
}
