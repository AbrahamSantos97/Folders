import { FileAdapter } from './js/FileAdapter.js';
let editorComponent;
ClassicEditor.create(document.querySelector('#editor'))
    .then(editor => {
        editorComponent = editor;
        console.log(editor.plugins);
        console.log(new FileAdapter(null));
        editor.plugins.get('FileRepository').createUploadedAdapter = (loader) => {
            console.log(loader);
            return new FileAdapter(loader);
        };
        console.log(editor);
    }).catch(error => { console.error(error); });

function saveData() {
    let data = editorComponent.getData();
    console.log(data);
    fetch("/data/save", {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'text/html' }
    }).then(res => console.log("success")).catch(err => error.log("error"))
}