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
  let content = document.getElementById("contentToCopy").innerText;

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
window.addEventListener("resize", () => {
  const marketingClassList = document.getElementById("marketing").classList;
  const cloudHostingClassList = document.getElementById("cloud-hosting").classList;

  const tempClasses = ["d-flex", "flex-column", "flex-column-reverse"];
  
  if(window.innerWidth < 768) {
    marketingClassList.add(...tempClasses);
    cloudHostingClassList.add(...tempClasses); 
  } else {
    marketingClassList.remove(...tempClasses);
    cloudHostingClassList.remove(...tempClasses); 
  }
});