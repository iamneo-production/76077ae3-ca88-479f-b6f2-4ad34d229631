package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.entity.Courses;

@Repository
public interface CourseRepository extends JpaRepository<Courses,Long>{

}
