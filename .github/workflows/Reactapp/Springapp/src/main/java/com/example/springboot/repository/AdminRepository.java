package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{

}
