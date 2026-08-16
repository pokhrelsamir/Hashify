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