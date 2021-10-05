package com.Natanael.task.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.Natanael.task.entity.models.Task;

public interface ITaskDao extends CrudRepository<Task, Long> {

}
