// Init lightbox
const lightbox = GLightbox({
  href: "./img/exolink.mp4",
  type: "video",
  source: "local", //vimeo, youtube or local
  width: 900,
  autoplayVideos: true,
});

document.getElementById("copyButton").addEventListener("click", function () {
  // Get the content of the span element
  var content = document.getElementById("contentToCopy").innerText;

  // Create a temporary textarea element
  var textarea = document.createElement("textarea");
  textarea.value = content;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the content of the textarea
  textarea.select();

  // Copy the selected content to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Alert the user that the content has been copied
  alert("Content copied to clipboard: " + content);
});
