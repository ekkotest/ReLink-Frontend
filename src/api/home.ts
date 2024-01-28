// export async function postFileUpload(data: FormData) {
//   const res = await fetch(`/file/upload-file`, {
//     method: 'post',
//     body: data,
//   });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export async function postFileUpload(data: FormData, onprogress, abortCb) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/file/upload-file', true);
    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        onprogress(percentComplete);
      }
    };
    xhr.send(data);

    abortCb(xhr);
    xhr.onload = function (res) {
      resolve(res);
    };
    xhr.onabort = function (err) {
      console.log(err);

      reject(err);
    };
    xhr.onerror = function (err) {
      reject(err);
    };
  });
}
