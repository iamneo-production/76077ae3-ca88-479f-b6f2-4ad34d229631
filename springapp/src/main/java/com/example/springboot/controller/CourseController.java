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

import com.example.springboot.entity.Courses;
import com.example.springboot.exception.UserNotFoundException;
import com.example.springboot.repository.CourseRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/courses")
public class CourseController {
  
	@Autowired
	private CourseRepository courseRepository;
	
	@PostMapping("/add")
	Courses newCourse(@RequestBody Courses newCourse)
	{
		return courseRepository.save(newCourse);
	}
	
	@GetMapping("/view")
	 List<Courses> getAllCourses(){
		return courseRepository.findAll();
	}
	
	@GetMapping("/course/{id}")
	Courses getCoursesById(@PathVariable Long id)
	{
		return courseRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
//	@PutMapping("/course/{id}")
//	Courses updateCourses(@RequestBody Courses newCourses,@PathVariable Long id) {
//		return courseRepository.findById(id)
//				.map(course->{
//					course.setCourse_name(newCourses.getCourse_name());
//					course.setCourse_duration(newCourses.getCourse_duration());
//					course.setCourse_description(newCourses.getCourse_description());
//					course.setCourse_timings(newCourses.getCourse_timings());
//					course.setNo_of_students(newCourses.getNo_of_students());
//				}).orElseThrow(()->new UserNotFoundException(id));
//	}
}
	


