package com.Natanael.task.entity.services;

import java.util.List;
import java.util.Optional;


import com.Natanael.task.entity.models.Task;

public interface ITaskService {

	public List<Task> getAll();
	Optional<Task> getOne(long id);
	void insert(Task task);
	void delete(long id);
	void update(Task task, long id);
	public Object findById(Long id);

}
