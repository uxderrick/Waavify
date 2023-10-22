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
    logging: true,
    useCORS: true, //to enable cross origin perms
  })
    .then((canvas) => {
      // Convert the canvas to a data URL
      const image = canvas.toDataURL(fileType);

      // Check if the data URL is empty (e.g. because of CORS restrictions)
      if (canvas.toDataURL() === "data:,") {
        console.error("The canvas is empty. Content may not have loaded.");
        img.onload = () => {
          console.log("Image loaded.");
          img.src = image;

          // Create a link element
          // Set the link's href to the data URL
          // Set the link's download attribute to the filename
          // Trigger the link element's click event
          const a = document.createElement("a");
          a.href = image;
          a.download = fileName;
          a.click();
        };
        return;
      }

      //check if image has loaded before downloading
      const img = new Image();
      //set image source
      img.src = image;
      //load image
      img.onload = () => {
        console.log("Image loaded.");
        // Create a link element
        // Set the link's href to the data URL
        // Set the link's download attribute to the filename
        // Trigger the link element's click event
        const a = document.createElement("a");
        a.href = image;
        a.download = fileName;
        a.click();
      };
      img.onerror = () => {
        console.error("Image failed to load.");
      };
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
    });
};
