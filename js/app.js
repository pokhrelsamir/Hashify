const textInput =
    document.getElementById("textInput");

const generateBtn =
    document.getElementById("generateBtn");

const clearBtn =
    document.getElementById("clearBtn");

const characterCount =
    document.getElementById("characterCount");


const sha1Result =
    document.getElementById("sha1Result");

const sha256Result =
    document.getElementById("sha256Result");

const sha384Result =
    document.getElementById("sha384Result");

const sha512Result =
    document.getElementById("sha512Result");


/* Character Counter */

textInput.addEventListener("input", () => {

    const count =
        textInput.value.length;

    characterCount.textContent =
        `${count} ${count === 1 ? "character" : "characters"}`;

});


/* Generate Hashes */

generateBtn.addEventListener("click", async () => {

    const text =
        textInput.value;


    if (text.length === 0) {

        alert("Please enter some text.");

        return;
    }


    generateBtn.disabled = true;

    generateBtn.textContent =
        "Generating...";


    try {

        const hashes =
            await generateAllHashes(text);


        sha1Result.textContent =
            hashes.sha1;

        sha256Result.textContent =
            hashes.sha256;

        sha384Result.textContent =
            hashes.sha384;

        sha512Result.textContent =
            hashes.sha512;


    } catch (error) {

        console.error(
            "Hashing failed:",
            error
        );

        alert(
            "Hashing failed. Check the browser console."
        );

    } finally {

        generateBtn.disabled = false;

        generateBtn.textContent =
            "Generate Hashes";

    }

});


/* Clear */

clearBtn.addEventListener("click", () => {

    textInput.value = "";

    sha1Result.textContent = "—";

    sha256Result.textContent = "—";

    sha384Result.textContent = "—";

    sha512Result.textContent = "—";

    characterCount.textContent =
        "0 characters";

});

/* ========================================
   File Hashing
======================================== */

const fileInput =
    document.getElementById("fileInput");

const fileDropArea =
document.querySelector(".file-upload label");

const fileInfo =
    document.getElementById("fileInfo");

const fileName =
    document.getElementById("fileName");

const fileSize =
    document.getElementById("fileSize");

const fileHashBtn =
    document.getElementById("fileHashBtn");

const fileResult =
    document.getElementById("fileResult");

const fileHash =
    document.getElementById("fileHash");


let selectedFile = null;


/* File Selected */

fileInput.addEventListener("change", () => {

    const file =
        fileInput.files[0];


    if (!file) {
        return;
    }


    selectedFile = file;


    fileName.textContent =
        file.name;

    fileSize.textContent =
        formatFileSize(file.size);


    fileInfo.classList.remove("hidden");

    fileResult.classList.add("hidden");

    fileHashBtn.disabled = false;

});


/* Generate File Hash */

fileHashBtn.addEventListener(
    "click",
    async () => {

        if (!selectedFile) {
            return;
        }


        fileHashBtn.disabled = true;

        fileHashBtn.textContent =
            "Hashing...";


        try {

            const hash =
                await generateFileHash(
                    selectedFile
                );


            fileHash.textContent =
                hash;


            fileResult.classList.remove(
                "hidden"
            );


        } catch (error) {

            console.error(
                "File hashing failed:",
                error
            );

            alert(
                "Unable to hash the file."
            );

        } finally {

            fileHashBtn.disabled = false;

            fileHashBtn.textContent =
                "Generate File Hash";

        }

    }
);

/* ========================================
   Drag & Drop
======================================== */

fileDropArea.addEventListener(
    "dragover",
    (event) => {

        event.preventDefault();

        fileDropArea.classList.add(
            "drag-active"
        );

    }
);


fileDropArea.addEventListener(
    "dragleave",
    () => {

        fileDropArea.classList.remove(
            "drag-active"
        );

    }
);


fileDropArea.addEventListener(
    "drop",
    (event) => {

        event.preventDefault();

        fileDropArea.classList.remove(
            "drag-active"
        );


        const file =
            event.dataTransfer.files[0];


        if (!file) {
            return;
        }


        selectedFile = file;


        fileName.textContent =
            file.name;

        fileSize.textContent =
            formatFileSize(file.size);


        fileInfo.classList.remove(
            "hidden"
        );

        fileResult.classList.add(
            "hidden"
        );

        fileHashBtn.disabled = false;

    }
);