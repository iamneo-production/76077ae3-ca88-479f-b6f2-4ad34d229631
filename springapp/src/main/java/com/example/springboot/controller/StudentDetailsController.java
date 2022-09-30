package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.entity.StudentDetails;
import com.example.springboot.exception.UserNotFoundException;
import com.example.springboot.repository.StudentDetailsRepository;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class StudentDetailsController {

	@Autowired
	private StudentDetailsRepository studentDetailsRepository;
	
	@PostMapping("/add_details")
	StudentDetails newStudentDetails(@RequestBody StudentDetails newStudentDetails) {
		return studentDetailsRepository.save(newStudentDetails);
	}
	
	@GetMapping("/view_details")
	List<StudentDetails> getAllStudentDetails()
	{
		return studentDetailsRepository.findAll();
	}
	
	@GetMapping("/studentDetails/{id}")
	StudentDetails  getStudentDetailsById(@PathVariable Long id)
	{
		return studentDetailsRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	@PutMapping("/studentDetails/{id}")
	StudentDetails updateStudentDetails(@RequestBody StudentDetails newStudentDetails,@PathVariable Long id) {
		return studentDetailsRepository.findById(id)
				.map(studentDetails->{
					studentDetails.setFirstname(newStudentDetails.getFirstname());
					studentDetails.setId(newStudentDetails.getId());
					studentDetails.setLastname(newStudentDetails.getLastname());
					studentDetails.setGender(newStudentDetails.getGender());
					studentDetails.setFathername(newStudentDetails.getFathername());
					studentDetails.setMothername(newStudentDetails.getMothername());
					studentDetails.setPhonenumber(newStudentDetails.getPhonenumber());
					studentDetails.setAlternatenumber(newStudentDetails.getAlternatenumber());
					studentDetails.setEmailid(newStudentDetails.getEmailid());
					studentDetails.setAge(newStudentDetails.getAge());
					studentDetails.setHouseno(newStudentDetails.getHouseno());
					studentDetails.setStreetname(newStudentDetails.getStreetname());
					studentDetails.setAreaname(newStudentDetails.getAreaname());
					studentDetails.setStatename(newStudentDetails.getStatename());
					studentDetails.setPincode(newStudentDetails.getPincode());
					studentDetails.setNationality(newStudentDetails.getNationality());
					return studentDetailsRepository.save(studentDetails);
					
				}).orElseThrow(()->new UserNotFoundException(id));
	}
}
