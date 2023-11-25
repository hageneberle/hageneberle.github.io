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

// Add a new folder "Documents" with files
FileSystem.Root.Documents = {
    "file1.txt": "This is the content of file1.txt",
    "file2.txt": "This is the content of file2.txt",
    "Subfolder": {
        "file3.txt": "This is the content of file3.txt"
    }
};

// Reload the explorer
initializeExplorer();
