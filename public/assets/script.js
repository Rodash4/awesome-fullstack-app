console.log('Hello from the script');

const booksList = document.querySelector("#books");

const listBook = document.createElement("li");
listBook.textContent = "hello"
booksList.append(listBook)

fetch("/books")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach(book => {
        const listBook = document.createElement("li");
        listBook.textContent = book.book_name;
        booksList.append(listBook);
    });
});
