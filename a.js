$('#upload-button').on('click', function () {
    var fileSelect = document.getElementById('upfile');
    var statusDiv = document.getElementById('statusDiv');
    var userToken = document.getElementById('userToken').value;
    var setName = document.getElementById('setName').value;
    debugger;
    var form = $('#uploadForm')[0];
    
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var file = fileSelect.files[0];
    
    if(!file){
        statusDiv.innerHTML = 'No file selected';
        return;
    }
    
    var formData = new FormData();
    formData.append('upfile', file);
    formData.append('userToken', userToken);
    formData.append('setName', setName);
    
    if (file?.size >= 2000000 ) {
        statusDiv.innerHTML = 'You cannot upload this file because its size exceeds the maximum limit of 2 MB.';
        return;
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', '/breakpointhub/fileupload.php', true);

    // Set up a handler for when the task for the request is complete.
    xhr.onload = function () {
      if (xhr.status === 200) {
        statusDiv.innerHTML = 'Your upload is successful..';
      } else {
        statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
      }
    };
    
    // Send the data.
    xhr.send(formData);
});

$('#upload-button').on('click', function () {
    var fileSelect = document.getElementById('upfile');
    var statusDiv = document.getElementById('statusDiv');
    var userToken = document.getElementById('userToken').value;
    var setName = document.getElementById('setName').value;
    debugger;
    var form = $('#uploadForm')[0];
    
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var file = fileSelect.files[0];
    
    if(!file){
        statusDiv.innerHTML = 'No file selected';
        return;
    }
    
    var formData = new FormData();
    formData.append('upfile', file);
    formData.append('userToken', userToken);
    formData.append('setName', setName);
    
    if (file?.size >= 2000000 ) {
        statusDiv.innerHTML = 'You cannot upload this file because its size exceeds the maximum limit of 2 MB.';
        return;
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', '/breakpointhub/fileupload.php', true);

    // Set up a handler for when the task for the request is complete.
    xhr.onload = function () {
      if (xhr.status === 200) {
        statusDiv.innerHTML = 'Your upload is successful..';
      } else {
        statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
      }
    };
    
    // Send the data.
    xhr.send(formData);
});


$('#upload-button').on('click', function () {
    var fileSelect = document.getElementById('upfile');
    var statusDiv = document.getElementById('statusDiv');
    var userToken = document.getElementById('userToken').value;
    var setName = document.getElementById('setName').value;
    debugger;
    var form = $('#uploadForm')[0];
    
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var file = fileSelect.files[0];
    
    if(!file){
        statusDiv.innerHTML = 'No file selected';
        return;
    }
    
    var formData = new FormData();
    formData.append('upfile', file);
    formData.append('userToken', userToken);
    formData.append('setName', setName);
    
    if (file?.size >= 2000000 ) {
        statusDiv.innerHTML = 'You cannot upload this file because its size exceeds the maximum limit of 2 MB.';
        return;
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', '/breakpointhub/fileupload.php', true);

    // Set up a handler for when the task for the request is complete.
    xhr.onload = function () {
      if (xhr.status === 200) {
        statusDiv.innerHTML = 'Your upload is successful..';
      } else {
        statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
      }
    };
    
    // Send the data.
    xhr.send(formData);
});


$('#upload-button').on('click', function () {
    var fileSelect = document.getElementById('upfile');
    var statusDiv = document.getElementById('statusDiv');
    var userToken = document.getElementById('userToken').value;
    var setName = document.getElementById('setName').value;
    debugger;
    var form = $('#uploadForm')[0];
    
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var file = fileSelect.files[0];
    
    if(!file){
        statusDiv.innerHTML = 'No file selected';
        return;
    }
    
    var formData = new FormData();
    formData.append('upfile', file);
    formData.append('userToken', userToken);
    formData.append('setName', setName);
    
    if (file?.size >= 2000000 ) {
        statusDiv.innerHTML = 'You cannot upload this file because its size exceeds the maximum limit of 2 MB.';
        return;
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', '/breakpointhub/fileupload.php', true);

    // Set up a handler for when the task for the request is complete.
    xhr.onload = function () {
      if (xhr.status === 200) {
        statusDiv.innerHTML = 'Your upload is successful..';
      } else {
        statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
      }
    };
    
    // Send the data.
    xhr.send(formData);
});