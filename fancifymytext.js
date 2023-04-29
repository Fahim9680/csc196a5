function makeTextBigger() {
    const textarea = document.getElementById("myTextarea");
    textarea.style.fontSize = "24pt";
  }
  
  function makeTextFancy() {
    const textarea = document.getElementById("myTextarea");
    if (document.getElementById("fancyRadio").checked) {
      textarea.style.fontWeight = "bold";
      textarea.style.color = "blue";
      textarea.style.textDecoration = "underline";
    }
  }
  
  function makeTextBoring() {
    const textarea = document.getElementById("myTextarea");
    if (document.getElementById("boringRadio").checked) {
      textarea.style.fontWeight = "normal";
      textarea.style.color = "black";
      textarea.style.textDecoration = "none";
    }
  }
  
  function makeTextMoo() {
    const textarea = document.getElementById("myTextarea");
    let text = textarea.value.toUpperCase();
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
      const words = sentences[i].trim().split(" ");
      words[words.length - 1] += "-Moo";
      sentences[i] = words.join(" ");
    }
    text = sentences.join(".");
    textarea.value = text;
  }
  