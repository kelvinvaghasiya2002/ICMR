export function setLocalStorage(formName, formData) {
  var form = localStorage.getItem(formName);
  if (!form) {
    localStorage.setItem(formName, JSON.stringify(formData));
    form = localStorage.getItem(formName);
  }
  return form;
}

// get the form data from local storage
export function getLocalStorage(formName) {
  var form = localStorage.getItem(formName);
  return JSON.parse(form || "{}");
}

export default setLocalStorage;
