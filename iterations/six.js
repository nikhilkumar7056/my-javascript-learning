const books = [
    { title: "book one", genre: "history", publish: 1990, edition: 2001},
    { title: "book two", genre: "socal", publish: 1993, edition: 2023},
    { title: "book three", genre: "functional", publish: 1996, edition: 2021},
    { title: "book four", genre: "non-functional", publish: 1989, edition: 2020},
    { title: "book five", genre: "history", publish: 1999, edition: 2011},
    { title: "book six", genre: "economy", publish: 2000, edition: 2010},
    { title: "book seven", genre: "history", publish: 2020, edition: 2009},
    { title: "book eight", genre: "functional", publish: 2001, edition: 2008},
    { title: "book nine", genre: "functional", publish: 2003, edition: 2005},
    { title: "book ten", genre: "socal", publish: 1999, edition: 2011},
    { title: "book eleven", genre: "non-functional", publish: 1990, edition: 2010},
    { title: "book twelve", genre: "economy", publish: 2020, edition: 2026}
]

const book = books.filter( (bk) => {
    return bk.genre === "history" && bk.edition >=2010
})

console.log(book)