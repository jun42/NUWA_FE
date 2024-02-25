export function dataURItoBlob(dataURI) {
    // 데이터 URI를 base64 인코딩으로 분리합니다.
    const splitDataURI = dataURI.split(',');

    // base64 인코딩된 데이터를 디코딩합니다.
    const byteString = atob(splitDataURI[1]);

    // 바이너리 스트링으로 바꿉니다.
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // Blob 객체를 생성합니다.
    return new Blob([ab], { type: mimeString });
}
