package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.entity.User;
import com.example.springboot.exception.UserNotFoundException;
import com.example.springboot.repository.UserRepository;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/add")
	User newUser(@RequestBody User newUser)
	{
		return userRepository.save(newUser);
	}
	
	@GetMapping("/display")
	List<User> getAllUser()
	{
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id)
	{
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser,@PathVariable Long id) {
		return userRepository.findById(id)
				.map(user->{
					user.setUsername(newUser.getUsername());
					user.setEmail(newUser.getEmail());
					user.setPassword(newUser.getPassword());
					user.setConfirmpassword(newUser.getConfirmpassword());
					user.setPhone(newUser.getPhone());
					user.setId(newUser.getId());
					user.setUserRole(newUser.getUserRole());
					return userRepository.save(user);
					}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
		      throw new UserNotFoundException(id);	
		}
	
	userRepository.deleteById(id);
	return ("User with id "+id+" has been deleted success.");
	}
}
