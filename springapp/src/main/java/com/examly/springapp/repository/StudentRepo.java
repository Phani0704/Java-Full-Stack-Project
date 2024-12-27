package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.models.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
}
