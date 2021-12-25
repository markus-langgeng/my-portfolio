#My Portfolio

Heyy, ini website portfolioku

utk pake parcel 2 caranya kyk yg ada di bwh ini:

    utk instal parcel --> npm instal --save-dev parcel
    klo pake npm run ---> npx parcel src/index.html

    utk buat package script:
        "dev": "parcel src/index.html"
        "build": "parcel build src/index.html"

        cat: di package.json parlu ditambahi
            "targets": {
                "main": false
            },
        setelah "main" untuk run yang build

    utk run package script:
        npm run dev
        npm run build
