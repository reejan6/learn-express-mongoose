let BookInstance = require('../models/bookinstance');

get_book_list = async () => {
  let book_instances_list =  await BookInstance.find({status: 'Available'})
  .populate('book');

  let book_list = book_instances_list.map(bookInstance => {
    return bookInstance._id + " : " + bookInstance.book.title;
  });
  return book_list;
};

exports.show_all_books_status = function(res) {
  get_book_list()
  .then((data) => { res.send(data)})
  .catch((_) => res.send("No Books found"));
}