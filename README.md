# 🔐 Hashify — Hash Generator

<div align="center">

<p>
  A lightweight, browser-based hashing tool for generating, comparing, and copying cryptographic hashes.
</p>

<p>
  Built with HTML, CSS, and JavaScript — no backend required.
</p>

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

</div>

---

## 📌 Overview

**Hashify** is a simple and practical web-based hash generator designed for developers, students, and networking or cybersecurity learners.

It allows users to generate hashes from text, calculate a hash for a local file, compare two hash values, and copy generated hashes directly to the clipboard.

Everything runs directly in the browser, making Hashify fast, lightweight, and completely private.

---

## ✨ Features

### 🔤 Text Hashing
Generate hashes from any text input across multiple standard algorithms:
- **MD5** (128-bit)
- **SHA-1** (160-bit)
- **SHA-256** (256-bit)
- **SHA-384** (384-bit)
- **SHA-512** (512-bit)

Each generated hash is displayed separately with its corresponding bit length.

### 📁 File Hashing
Hash local files directly in the browser without uploading them anywhere:
- File selection via file picker
- Drag & drop support
- Displays file name and file size
- SHA-256 checksum calculation
- One-click copy for the calculated hash

### 🔍 Hash Comparison
Quickly verify checksums and integrity:
- Compare two distinct hash values
- Automatically normalizes uppercase and lowercase hexadecimal characters
- Instant visual feedback indicating whether hashes match or differ

### 📋 Copy Hashes
Every generated hash includes a dedicated copy button to quickly copy values to the clipboard for:
- Checksum verification
- Development & testing tasks
- File integrity checks
- Learning cryptographic hashing

### 🔄 Clear & Reset
Resets all input fields, uploaded files, generated outputs, and comparison results in a single click.

---

## 🚀 Getting Started

Hashify runs purely on the client side — no database, backend server, or package installation is required.

### 1. Clone the Repository
```bash
git clone https://github.com/SamirPokhrel/Hashify.git
```

### 2. Navigate to the Directory
```bash
cd Hashify
```

### 3. Run the Application
Open `index.html` directly in any standard web browser, or launch it with the **VS Code Live Server** extension for development.

---

## 💻 Usage

### Generate a Text Hash
1. Enter text into the text input field.
2. Click **Generate Hashes**.
3. View results for MD5, SHA-1, SHA-256, SHA-384, and SHA-512.
4. Click **Copy** beside any result to copy the hash to your clipboard.

### Generate a File Hash
1. Select a file using the file input or drag & drop a file into the drop zone.
2. Review the displayed file metadata (name and size).
3. Click **Generate File Hash**.
4. Copy the resulting SHA-256 checksum.

### Compare Hashes
1. Paste the first hash into **Hash 1**.
2. Paste the second hash into **Hash 2**.
3. Click **Compare Hashes**.
4. Read the status result to verify if the hashes are identical.

---

## 🔐 Privacy

Hashify is built strictly as a client-side application. All hashing computations are executed locally within your web browser using native Web Crypto APIs. Your text input and uploaded files are **never** transmitted to any external server or third-party service.

---

## ⚠️ Security Considerations

Hash functions are one-way mathematical functions used for data integrity, checksums, fingerprinting, and digital forensics — they are **not** encryption algorithms.

| Algorithm | Status | Recommendation |
| :--- | :--- | :--- |
| **MD5** | ❌ Cryptographically Broken | Use only for legacy non-security checksums. Vulnerable to collision attacks. |
| **SHA-1** | ⚠️ Weak | Deprecated for security use. Vulnerable to practical collision attacks. |
| **SHA-256 / 384 / 512** | ✅ Secure | Modern standard (SHA-2 family). Recommended for all security and integrity checks. |

---

## 🎯 Learning Objectives

Hashify served as a practical project to explore and demonstrate key web development concepts:

- Cryptographic hashing & algorithm implementations
- Web Crypto & File Browser APIs
- Asynchronous JavaScript & DOM manipulation
- Drag-and-drop HTML5 interfaces
- Modern Clipboard API interaction
- Responsive client-side application design

---

## 🔮 Future Improvements

- [ ] Toast notification system for copy actions
- [ ] Dark mode / Light mode toggle
- [ ] Persistent hash history (localStorage)
- [ ] Additional algorithms (e.g., RIPEMD-160, CRC32, SHA-3)
- [ ] File hashing progress bar for large files
- [ ] Automated hash type detection / format validation
- [ ] Keyboard shortcuts for quick actions
- [ ] Export results to JSON/TXT

---

## 🌐 Live Demo

<p align="center">
  <a href="https://pokhrelsamir.github.io/Hashify/">
    <img src="https://img.shields.io/badge/Live%20Demo-Hashify-6366f1?style=for-the-badge&logo=github" alt="Live Demo">
  </a>
</p>

---

## 📸 Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/19b752e5-f541-41f5-b0db-bb3597d9c4ad" alt="Hashify Preview" width="100%">
</p>



---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

**B.Sc. CSIT Student | Web Developer | Networking Enthusiast**

Built using **HTML, CSS, and JavaScript**

<br>

<a href="https://github.com/pokhrelsamir">
  <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/samirpokhrel/">
  <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

**🔐 Hashify** — *Generate • Compare • Verify*  
Built using HTML, CSS & JavaScript.

</div>
