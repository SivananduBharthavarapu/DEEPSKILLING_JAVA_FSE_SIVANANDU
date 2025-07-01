package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService initialized with constructor injection.");
    }

    // Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService: Setter injection called.");
    }

    public void addBook(String title) {
        bookRepository.save(title);
        System.out.println("BookService: Added book '" + title + "'");
    }
}
