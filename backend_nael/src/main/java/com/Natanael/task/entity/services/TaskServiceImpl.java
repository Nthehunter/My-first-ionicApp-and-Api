package com.Natanael.task.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.Natanael.task.entity.dao.ITaskDao;

import com.Natanael.task.entity.models.Task;

@Service
public class TaskServiceImpl implements ITaskService {

	@Autowired
	private ITaskDao taskDao;
	
	@Override
	public List<Task> getAll() {
		
		return (List<Task>) taskDao.findAll();
	}
	


	@Override
	public Optional<Task> getOne(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void insert(Task task) {
		System.out.println("Añade task");
		if(task.getDescription().equals("undefined")) {
        	System.out.println(task.getDescription());
        	 task.setDescription("Sin descripción");
        }
		
		taskDao.save(task);
	}

	@Override
	public void delete(long id) {
		taskDao.deleteById(id);
	}

	@Override
	public void update(Task task, long id) {
		
		if (taskDao.findById(id).isPresent()){
            Task existingTask = taskDao.findById(id).get();
            
            
            
            if(task.getName().length() != 0) {
            	existingTask.setName(task.getName());
            	System.out.println(existingTask.getName());
            }
          
            
            if(task.getDescription().length() != 0 && !task.getDescription().equals("undefined")) {
            	System.out.println(task.getDescription());
            	 existingTask.setDescription(task.getDescription());
            }
            
            if(task.getDone() <= 1 && task.getDone() >= 0 ) {
            	existingTask.setDone(task.getDone());
            }
            
           

            taskDao.save(existingTask);

            
        }else{
            System.out.print("No existe el elemento que se quiere actualizar");
        }
		
	}

	@Override
	public Object findById(Long id) {
		
		return taskDao.findById(id);
	}


	
	
}
