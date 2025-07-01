package com.library.service;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        Book book = new Book(title);  // ✅ create entity
        bookRepository.save(book);    // ✅ pass entity
        System.out.println("BookService: Added book '" + title + "'");
    }
}
