/**
 * Hashify
 * Main Application Logic
 */


/* ========================================
   DOM Elements
======================================== */

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


/* ========================================
   Character Counter
======================================== */

textInput.addEventListener(
    "input",
    () => {

        const count =
            textInput.value.length;


        characterCount.textContent =
            `${count} ${count === 1 ? "character" : "characters"}`;

    }
);


/* ========================================
   Generate Hashes
======================================== */

generateBtn.addEventListener(
    "click",
    async () => {

        const text =
            textInput.value;


        if (!text.trim()) {

            alert("Please enter some text first.");

            textInput.focus();

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
                "Hash generation failed:",
                error
            );

            alert(
                "Unable to generate hashes."
            );

        } finally {

            generateBtn.disabled = false;

            generateBtn.textContent =
                "Generate Hashes";

        }

    }
);


/* ========================================
   Clear
======================================== */

clearBtn.addEventListener(
    "click",
    () => {

        textInput.value = "";


        sha1Result.textContent = "—";

        sha256Result.textContent = "—";

        sha384Result.textContent = "—";

        sha512Result.textContent = "—";


        characterCount.textContent =
            "0 characters";


        textInput.focus();

    }
);


/* ========================================
   Copy Hash
======================================== */

document.addEventListener(
    "click",
    async (event) => {

        const button =
            event.target.closest(".copy-btn");


        if (!button) {
            return;
        }


        const targetId =
            button.dataset.target;


        const target =
            document.getElementById(targetId);


        if (!target) {
            return;
        }


        const value =
            target.textContent.trim();


        if (!value || value === "—") {

            return;
        }


        try {

            await navigator.clipboard.writeText(
                value
            );


            const originalText =
                button.textContent;


            button.textContent =
                "Copied!";


            setTimeout(
                () => {

                    button.textContent =
                        originalText;

                },
                1200
            );


        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );

        }

    }
);