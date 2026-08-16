/**
 * Hashify
 * File Hashing
 */


/* ========================================
   File → SHA-256
======================================== */

async function generateFileHash(file) {

    const buffer = await file.arrayBuffer();

    const hashBuffer = await window.crypto.subtle.digest(
        "SHA-256",
        buffer
    );

    return Array.from(new Uint8Array(hashBuffer))
        .map(byte =>
            byte.toString(16).padStart(2, "0")
        )
        .join("");
}


/* ========================================
   Format File Size
======================================== */

function formatFileSize(bytes) {

    if (bytes === 0) {
        return "0 Bytes";
    }

    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];

    const index =
        Math.floor(
            Math.log(bytes) / Math.log(1024)
        );

    const size =
        bytes / Math.pow(1024, index);

    return `${size.toFixed(2)} ${units[index]}`;
}