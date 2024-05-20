export default function setLocalStorage(formName , formData) {
    var form = localStorage.getItem(formName);
    if (!form) {
        localStorage.setItem(formName, JSON.stringify(formData))
        form = localStorage.getItem(formName);
    }
    return form;
}