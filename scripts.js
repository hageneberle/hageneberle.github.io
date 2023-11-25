// scripts.js

const FileSystem = {
    "Root": {
        "Documents": {
            "file1.txt": "This is the content of file1.txt",
            "file2.txt": "This is the content of file2.txt",
            "Subfolder": {
                "file3.txt": "This is the content of file3.txt"
            }
        },
        "Downloads": {
            "file4.txt": "This is the content of file4.txt"
        },
        "Photos": {}
    },
    "Music": {
        "song1.mp3": "This is the content of song1.mp3",
        "song2.mp3": "This is the content of song2.mp3"
    }
};

function initializeExplorer() {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear existing content
    renderFolder("Root", FileSystem.Root, main);
}

function renderFolder(name, folder, parentElement) {
    const folderElement = document.createElement("div");
    folderElement.classList.add("folder");

    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.textContent = "folder";

    const tooltip = document.createElement("p");
    tooltip.classList.add("cooltip");
    tooltip.textContent = `${Object.keys(folder).length} folders / ${Object.keys(folder).filter(key => typeof folder[key] === 'string').length} files`;

    icon.appendChild(tooltip);
    folderElement.appendChild(icon);

    const heading = document.createElement("h1");
    heading.textContent = name;
    folderElement.appendChild(heading);

    folderElement.addEventListener("click", function () {
        renderDirectory(name, folder, folderElement);
    });

    parentElement.appendChild(folderElement);
}

function renderFile(name, content, parentElement) {
    const fileElement = document.createElement("div");
    fileElement.classList.add("file");

    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.textContent = "insert_drive_file";

    const tooltip = document.createElement("p");
    tooltip.classList.add("cooltip");
    tooltip.textContent = "File";

    icon.appendChild(tooltip);
    fileElement.appendChild(icon);

    const heading = document.createElement("h1");
    heading.textContent = name;
    fileElement.appendChild(heading);

    fileElement.addEventListener("click", function () {
        renderFileContent(name, content);
    });

    parentElement.appendChild(fileElement);
}

function renderDirectory(folderName, folder, parentElement) {
    // Your code to render the directory goes here
    // You'll need to clear the existing content and append new folders/files based on the "folder" parameter
}

function renderFileContent(fileName, content) {
    // Your code to render the file content goes here
}

initializeExplorer();
