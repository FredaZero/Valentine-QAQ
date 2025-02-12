(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const images = [
    "https://media.giphy.com/media/27rspbAAESlzzFtN2e/giphy.gif?cid=ecf05e47sjk1ms7mg124pyyon5qgf9z91d6rzvcw1ifc00fr&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/QlQdLBS70XJcZY1fLF/giphy.gif?cid=ecf05e47sjk1ms7mg124pyyon5qgf9z91d6rzvcw1ifc00fr&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/14SGx6CtrLrj7dvOa3/giphy.gif?cid=ecf05e478ibz4icrluqs5oyh93oke2rdrpf5bsvm6nfe7w27&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/SVkhYVCi8fKPKvypi6/giphy.gif?cid=ecf05e47mioporcvvf7uvfg5qml1453tevx1b3ma754xe1cz&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/uWzRXTQRoQzxDO9W0p/giphy.gif?cid=ecf05e477a1pjtsl91vsryds4m8g8o50rrk77kpjbndpi0q5&ep=v1_stickers_related&rid=giphy.gif&ct=s"
]
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifContainer = document.querySelector('.gif_container img');

    // Update the "No" button text
    noButton.textContent = messages[messageIndex];

    // Update the GIF if there's a new one available
    if (messageIndex < images.length) {
        gifContainer.src = images[messageIndex];
    }

    // Increment message index and loop back for messages, but not images
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


function handleYesClick() {
    window.location.href = "yes_page.html";
}
