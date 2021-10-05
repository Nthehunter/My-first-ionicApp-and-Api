package com.Natanael.task.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Natanael.task.entity.models.Task;
import com.Natanael.task.entity.services.ITaskService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class TaskController {

	@Autowired
	ITaskService taskService;
	
	@GetMapping("/Task")
		public List<Task> getAllTask(){
		return taskService.getAll();
		}
	
	@PostMapping("/Task")
	void insert(Task task) {
		taskService.insert(task);
	}
	
	@PutMapping("/Task/{id}")
	public void update(Task task, @PathVariable("id") long id){
		
		taskService.update(task, id);
	}
	
	@DeleteMapping("/Task/{id}")
		void delete (@PathVariable("id") long id) {
			taskService.delete(id);
		}
	
}
	
	

	
	
