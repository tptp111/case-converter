const inputText = document.getElementById("text-area"); 


const upperCaseBtn = document.getElementById("upper-case");

upperCaseBtn.addEventListener('click', function() {
inputText.value = inputText.value.toUpperCase();
    });



const lowerCaseBtn = document.getElementById("lower-case");

lowerCaseBtn.addEventListener('click', function() {
inputText.value = inputText.value.toLowerCase();
    });



const properCaseBtn = document.getElementById("proper-case");

properCaseBtn.addEventListener('click', function() {
    const words = inputText.value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    inputText.value = words.join(' ');
  });


const sentenceCaseBtn = document.getElementById("sentence-case");
  sentenceCaseBtn.addEventListener('click', function() {
    const sentences = inputText.value.split('. ');
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
    }
    inputText.value = sentences.join('. ');
  });  

  
  const saveTextFileBtn = document.getElementById('save-text-file');
  saveTextFileBtn.addEventListener('click', function() {
    download("my-text-file.txt", inputText.value);
  });


  function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }