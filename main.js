// Init lightbox
const lightbox = GLightbox({
  href: "./img/exolink.mp4",
  type: "video",
  source: "local", //vimeo, youtube or local
  width: 900,
  autoplayVideos: true,
});

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