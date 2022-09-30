package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.entity.Login;
import com.example.springboot.repository.LoginRepository;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class LoginController {
 
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping("/add_login")
	Login newLogin(@RequestBody Login newLogin)
	{
		return loginRepository.save(newLogin);
	}
	
	@GetMapping("/view_login")
	List<Login> getAllLogin()
	{
		return loginRepository.findAll();
	}
	
}
