package com.example.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.datamodel.Book;
import com.example.book.repository.BookRepository;


@RestController
@RequestMapping("/books")
@CrossOrigin("*")
public class BookController {

    @Autowired
    private BookRepository repo;

    @GetMapping
    public List<Book> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return repo.save(book);
    }

    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable int id) {
        repo.deleteById(id);
        return "Book Deleted!";
    }
}
