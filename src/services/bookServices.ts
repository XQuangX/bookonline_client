import querystring from "query-string";
import { Book, BookFilter, Pageable } from "types";
import { baseUrl } from "utils/constants";
import { createService } from "./axios";

const instanceWithToken = createService(baseUrl);

const getAllBooks = async (params: BookFilter): Promise<Pageable<Book>> => {
  const query = querystring.stringify(params);
  const response = await instanceWithToken.get(`v1/book?${query}`);
  return response.data;
};

// const deleteBook = async (id: string) => {
//   const response = await instanceWithToken.delete(`v1/book/${id}`);
//   return response.data;
// };

// const addNewBook = async (formValue: AddEditBookRequest) => {
//   const response = await instanceWithToken.post("v1/book", formValue);
//   return response.data;
// };

// const editBook = async (id: string, formValue: AddEditBookRequest) => {
//   const response = await instanceWithToken.put(`v1/book/${id}`, formValue);
//   return response.data;
// };

const getDetailBook = async (id: string) => {
  const response = await instanceWithToken.get(`v1/book/${id}`);
  return response.data;
};

const bookService = {
  getAllBooks,
  getDetailBook,
};

export default bookService;
