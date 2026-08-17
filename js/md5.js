/**
 * Hashify
 * MD5 Implementation
 *
 * Note:
 * MD5 should not be used for passwords,
 * digital signatures, or security-critical
 * cryptographic applications.
 */

function md5(input) {

    const bytes = new TextEncoder().encode(input);

    return md5Bytes(bytes);
}


function md5Bytes(bytes) {

    const originalLength = bytes.length;

    const bitLength = originalLength * 8;

    const paddingLength =
        ((56 - (originalLength + 1) % 64) + 64) % 64;

    const totalLength =
        originalLength + 1 + paddingLength + 8;

    const buffer =
        new Uint8Array(totalLength);

    buffer.set(bytes);

    buffer[originalLength] = 0x80;


    /* Append original length in bits */

    let length = bitLength;

    for (let i = 0; i < 8; i++) {

        buffer[totalLength - 8 + i] =
            length & 0xff;

        length = Math.floor(length / 256);

    }


    let a0 = 0x67452301;
    let b0 = 0xefcdab89;
    let c0 = 0x98badcfe;
    let d0 = 0x10325476;


    const K = new Uint32Array(64);

    for (let i = 0; i < 64; i++) {

        K[i] =
            Math.floor(
                Math.abs(
                    Math.sin(i + 1)
                ) * 4294967296
            ) >>> 0;

    }


    const S = [
        7, 12, 17, 22,
        7, 12, 17, 22,
        7, 12, 17, 22,
        7, 12, 17, 22,

        5, 9, 14, 20,
        5, 9, 14, 20,
        5, 9, 14, 20,
        5, 9, 14, 20,

        4, 11, 16, 23,
        4, 11, 16, 23,
        4, 11, 16, 23,
        4, 11, 16, 23,

        6, 10, 15, 21,
        6, 10, 15, 21,
        6, 10, 15, 21,
        6, 10, 15, 21
    ];


    function leftRotate(value, amount) {

        return (
            (value << amount) |
            (value >>> (32 - amount))
        ) >>> 0;

    }


    for (
        let offset = 0;
        offset < totalLength;
        offset += 64
    ) {

        const M = new Uint32Array(16);

        for (let i = 0; i < 16; i++) {

            const index =
                offset + i * 4;

            M[i] =
                buffer[index] |
                (buffer[index + 1] << 8) |
                (buffer[index + 2] << 16) |
                (buffer[index + 3] << 24);

        }


        let A = a0;
        let B = b0;
        let C = c0;
        let D = d0;


        for (let i = 0; i < 64; i++) {

            let F;
            let g;


            if (i < 16) {

                F =
                    (B & C) |
                    (~B & D);

                g = i;

            } else if (i < 32) {

                F =
                    (D & B) |
                    (~D & C);

                g =
                    (5 * i + 1) % 16;

            } else if (i < 48) {

                F =
                    B ^ C ^ D;

                g =
                    (3 * i + 5) % 16;

            } else {

                F =
                    C ^ (B | ~D);

                g =
                    (7 * i) % 16;

            }


            const temp = D;

            D = C;

            C = B;


            const sum =
                (
                    A +
                    F +
                    K[i] +
                    M[g]
                ) >>> 0;


            B =
                (
                    B +
                    leftRotate(
                        sum,
                        S[i]
                    )
                ) >>> 0;


            A = temp;

        }


        a0 =
            (a0 + A) >>> 0;

        b0 =
            (b0 + B) >>> 0;

        c0 =
            (c0 + C) >>> 0;

        d0 =
            (d0 + D) >>> 0;

    }


    function wordToHex(word) {

        return [
            word & 0xff,
            (word >>> 8) & 0xff,
            (word >>> 16) & 0xff,
            (word >>> 24) & 0xff
        ]
            .map(
                byte =>
                    byte
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("");

    }


    return (
        wordToHex(a0) +
        wordToHex(b0) +
        wordToHex(c0) +
        wordToHex(d0)
    );
}