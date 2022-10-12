package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.entity.Academy;

@Repository
public interface AcademyRepository extends JpaRepository<Academy,Long>{
	

}
