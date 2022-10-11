package com.example.springboot.controller;

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

import com.example.springboot.entity.Admin;
import com.example.springboot.exception.UserNotFoundException;
import com.example.springboot.repository.AdminRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;
	@PostMapping("/add_Admin")
	Admin newAdmin(@RequestBody Admin newAdmin) {
		return adminRepository.save(newAdmin);
	}
	
	@GetMapping("/display_Admin")
	List<Admin> getAllAdmin(){
		return adminRepository.findAll();
	}
	
	@GetMapping("/admin/{id}")
	Admin updateAdmin(@RequestBody Admin newAdmin,@PathVariable Long id) {
		return adminRepository.findById(id)
				.map(admin->{
					admin.setEmail(newAdmin.getEmail());
					admin.setId(newAdmin.getId());
					admin.setPassword(newAdmin.getPassword());
					admin.setPhone(newAdmin.getPhone());
					admin.setUserRole(newAdmin.getUserRole());
					return adminRepository.save(admin);
					
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("/admin/{id}")
	String deleteAdmin(@PathVariable Long id) {
		if(!adminRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		adminRepository.deleteById(id);
		return("Admin with id "+id+" has been deleted success");
	}
	
}
