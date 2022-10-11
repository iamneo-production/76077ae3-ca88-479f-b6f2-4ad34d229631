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

import com.example.springboot.entity.Academy;
import com.example.springboot.exception.UserNotFoundException;
import com.example.springboot.repository.AcademyRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class AcademyController {

	@Autowired
	private AcademyRepository academyRepository;
	
	@PostMapping("/add_academy")
	Academy newAcademy(@RequestBody Academy newAcademy)
	{
		return academyRepository.save(newAcademy);
	}
	
	@GetMapping("/view_academy")
	List<Academy> getAllAcademy()
	{
		return academyRepository.findAll();
	}
	
	@GetMapping("/academy/{id}")
	Academy getAcademyById(@PathVariable Long id)
	{
		return academyRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/academy/{id}")
	Academy updateAcademy(@RequestBody Academy newAcademy,@PathVariable Long id) {
		return academyRepository.findById(id)
				.map(academy->{
					academy.setAcademyname(newAcademy.getAcademyname());
					academy.setContactnumber(newAcademy.getContactnumber());
					academy.setEmailid(newAcademy.getEmailid());
					academy.setId(newAcademy.getId());
					academy.setAcademylocation(newAcademy.getAcademylocation());
					academy.setAcademydescription(newAcademy.getAcademydescription());
					academy.setImageurl(newAcademy.getImageurl());
					return academyRepository.save(academy);
					
				}).orElseThrow(()->new UserNotFoundException(id));
		
	}
	@DeleteMapping("/academy/{id}")
	String deleteAcademy(@PathVariable Long id) {
		if(!academyRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		academyRepository.deleteById(id);
		return ("Academy with id "+id+" has been deleted successfully");
	}
}
