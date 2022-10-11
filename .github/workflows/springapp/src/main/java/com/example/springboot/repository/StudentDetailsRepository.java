package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.entity.StudentDetails;


@Repository
public interface StudentDetailsRepository extends JpaRepository<StudentDetails,Long>{

}
