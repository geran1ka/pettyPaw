
export const videoBackgroundInit = () => {
  const videoBjElems = document.querySelectorAll('.video-bg');

  videoBjElems.forEach((elem, videoBjElems) => {
    elem.innerHTML = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
  `;
  })
}

