# Made in Heaven Mezuzahs — Site Guide

## Folder Structure

```
made-in-heaven-mezuzahs/
│
├── index.html          ← The website. You don't need to touch this.
│
├── data/
│   └── mezuzahs.js     ← EDIT THIS to update the gallery (names, descriptions, add/remove pieces)
│
├── images/             ← Drop new mezuzah photos here
│   ├── Bitachon.avif
│   ├── Dream-Column.avif
│   ├── I-Love-You-Hashem.avif
│   ├── Raw-Terracotta.avif
│   ├── Terracotta-Blessing.avif
│   └── Terracotta-Silver.avif
│
└── README.md           ← This file
```

---

## How to Edit a Mezuzah's Name or Description

1. Open **`data/mezuzahs.js`** in any text editor (TextEdit, Notepad, VS Code, etc.)
2. Find the piece you want to change
3. Edit the `name`, `tagline`, or `description` field
4. Save the file — the website will reflect it automatically

---

## How to Add a New Mezuzah

1. **Add the photo** → drop it into the `/images/` folder
   - Use a hyphenated filename with no spaces, e.g. `My-New-Piece.avif`
   - `.avif`, `.jpg`, `.jpeg`, and `.png` all work

2. **Add the data** → open `data/mezuzahs.js` and add a new entry at the bottom,
   before the closing `];`

   Copy this template and fill in your details:

   ```js
   {
     image:       "images/My-New-Piece.avif",
     name:        "Piece Name",
     tagline:     "Short subtitle",
     description: `Your description here. Can be as long as you like.
       Continue on the next line if needed.`,
   },
   ```

3. Save the file — the new card appears in the gallery automatically.

---

## How to Remove a Mezuzah

Open `data/mezuzahs.js`, find the entry for that piece, and delete everything
from its opening `{` to its closing `},` (including both lines). Save the file.

---

## Deploying Updates

After editing, re-upload (drag and drop) the whole folder to **netlify.com/drop**
to publish your changes live.
