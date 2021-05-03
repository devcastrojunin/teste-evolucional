export class LoaderHelper {
    constructor() { }

    show() {
        document.getElementById('layerLoading').style.display = 'block';
        setTimeout(() => {
            document.getElementById('layerLoading').style.display = 'none';
        }, 90000);
    }

    close() {
        document.getElementById('layerLoading').style.display = 'none';
    }
}