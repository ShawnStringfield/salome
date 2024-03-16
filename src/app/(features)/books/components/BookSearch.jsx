'use client';

export const BookSearch = ({ books, handleSearch }) => {
  const handleInputChange = (query) => {
    const filtered = books.filter((book) => book.bookTitle.toLowerCase().includes(query.toLowerCase()));
    const items = filtered.length > 0 ? filtered : books;
    handleSearch(items);
  };

  return (
    <div>
      <input type="text" placeholder="Search" onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  );
};
