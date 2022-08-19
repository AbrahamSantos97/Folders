class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        server.onUploadProgress(data => {
            console.log('what happen');
        });
        return this.loader.file.then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

    abort() {
        server.abortUpload();
    }
}
exports.modules = { 'FileAdapter': MyUploadAdapter };