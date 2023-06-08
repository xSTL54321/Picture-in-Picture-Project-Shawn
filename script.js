const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media strea,, pass to video element, then play
//Try Catch statment
// async function is a funCtion that always returns a promise if a error occurs
async function selectMediaStream() {
    try {
        //Setting a constant and waiting to asign that until user figures out what video they want to share. Call a function to play the video
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catching our Error
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click,', async () => {
    // disable button when we click on it
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture ();
    //Reset Button
    button.disabled = false;
});
// on load
selectMediaStream();