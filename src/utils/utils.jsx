import html2canvas from "html2canvas";

export const takeScreenshot = (
  elementId,
  fileName,
  fileType,
  backgroundColor,
  backgroundImage
) => {
  // Get the element with the ID "download-card"
  const element = document.getElementById(elementId);

  if (!element) {
    console.error("Element not found.");
    return;
  }

  // Capture a screenshot of the element
  html2canvas(element, {
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
  })
    .then((canvas) => {
      // Convert the canvas to a data URL
      const image = canvas.toDataURL(fileType);
      // console.log("Screenshot captured:", image);

      const a = document.createElement("a");
      a.href = image;
      a.download = fileName;
      a.click();
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
    });
};
