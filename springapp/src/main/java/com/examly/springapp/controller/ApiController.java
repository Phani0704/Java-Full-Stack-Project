package com.examly.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.models.Student;
import com.examly.springapp.service.StudentService;

@RestController
@RequestMapping
public class ApiController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/getAllStudent")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/getById/{id}")
    public Optional<Student> getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/addStudent")
    public boolean addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }
}
