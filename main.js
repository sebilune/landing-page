// Init lightbox
const lightbox = GLightbox({
  href: "./img/videos/exolink.mp4",
  type: "video",
  source: "local", //vimeo, youtube or local
  width: 900,
  autoplayVideos: true,
});

// Copy to Clipboard Button
document.getElementById("copyButton").addEventListener("click", function() {
  var content = document.getElementById("contentToCopy").innerText;

  navigator.clipboard.writeText(content)
  .then(function() {
    // Clipboard successfully set
    alert("Content copied to clipboard: " + content);
  })
  .catch(function(error) {
    // An error occurred
    alert("Failed to copy content to clipboard: " + error);
  });
});


// Arrange "Services" section accordingly when screen size is less than 768px.
window.addEventListener("resize", function () {
  const marketing = document.getElementById("marketing").classList
  const cloudHosting = document.getElementById("cloud-hosting").classList

  
  if(window.innerWidth < 768) {   
    marketing.add("d-flex", "flex-column", "flex-column-reverse");
    cloudHosting.add("d-flex", "flex-column", "flex-column-reverse"); 
  } 

  else{
    marketing.remove("d-flex", "flex-column", "flex-column-reverse");
    cloudHosting.remove("d-flex", "flex-column", "flex-column-reverse"); 
  }
});