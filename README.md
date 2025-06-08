# Rick And Morty Characters Web App

This project is a React application that uses the [Rick and Morty API](https://rickandmortyapi.com/) to display, filter, sort, and paginate character data from the popular TV show.

You can see the app via this link (github pages): [Rick And Morty Characters](https://meliscakan.github.io/rick-and-morty-app/)

## Features

---

- Fetches all 826 characters by iterating through API pages.
- **Character Table**
  - Table that shows all characters page by page.
- **Filtering Options**
  - Search by name
  - Filter by species
  - Filter by gender
  - Filter by status
- **Sorting Options**
  - Sort by name (A-Z or Z-A)
  - Sort by ID (Ascending or Descending)
- **Pagination**
  - You can choose a number of characters will be shown per page (5, 10 or 20)
- **Character Details**
  - Click any character row to see a detail card below of the table.
  - Detail card includes ID, name, image, gender, species, status and location.
  - Card can be closed with the ❌ button.

## Setup

---

1. Clone the repository.

```
   git clone https://github.com/your-username/rick-and-morty-app.git
   cd rick-and-morty-app

```

2. Install dependencies.

```
npm install
```

3. Start the server.

```
npm run dev
```

4. Go to your local host.

## Technologies Used

- React (useState, useEffect)
- Fetch API
- HTML, CSS, jsx
- Public [Rick and Morty API](https://rickandmortyapi.com/)

## License

This project is licensed under the MIT License.

**Developed By** : Melis Çakan
