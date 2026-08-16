async function generateHash(text, algorithm) {

    const data = new TextEncoder().encode(text);

    const hashBuffer = await window.crypto.subtle.digest(
        algorithm,
        data
    );

    return Array.from(new Uint8Array(hashBuffer))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}


async function generateAllHashes(text) {

    const sha1 = await generateHash(
        text,
        "SHA-1"
    );

    const sha256 = await generateHash(
        text,
        "SHA-256"
    );

    const sha384 = await generateHash(
        text,
        "SHA-384"
    );

    const sha512 = await generateHash(
        text,
        "SHA-512"
    );


    return {
        sha1,
        sha256,
        sha384,
        sha512
    };
}