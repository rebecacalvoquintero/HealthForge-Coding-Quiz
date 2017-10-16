const xhrRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let patientsData = JSON.parse(xhr.responseText);
        cb(patientsData);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  export default xhrRequest ;
