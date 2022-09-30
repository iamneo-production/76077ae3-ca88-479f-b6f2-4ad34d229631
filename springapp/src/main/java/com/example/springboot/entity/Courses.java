package com.example.springboot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Courses {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String course_name;
	private String course_duration;
	private String course_timings;
	private String course_description;
	private String no_of_students;


	public String getNo_of_students() {
		return no_of_students;
	}
	public void setNo_of_students(String no_of_students) {
		this.no_of_students = no_of_students;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public String getCourse_duration() {
		return course_duration;
	}
	public void setCourse_duration(String course_duration) {
		this.course_duration = course_duration;
	}
	public String getCourse_timings() {
		return course_timings;
	}
	public void setCourse_timings(String course_timings) {
		this.course_timings = course_timings;
	}
	public String getCourse_description() {
		return course_description;
	}
	public void setCourse_description(String course_description) {
		this.course_description = course_description;
	}

	
	
	
	
}
