package com.Natanael.task.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")

public class Task implements Serializable{


private static final long serialVersionUID = 1L;

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long idTask;
private String Name;
private String Description;
private int Done;



public Task(long idTask, String name, String description, int done) {
	super();
	this.idTask = idTask;
	Name = name;
	Description = description;
	Done = done;
}


public Task() {
	
}



public long getId() {
	return idTask;
}
public void setId(long idTask) {
	this.idTask = idTask;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public String getDescription() {
	return Description;
}
public void setDescription(String description) {
	Description = description;
}
public int getDone() {
	return Done;
}
public void setDone(int done) {
	Done = done;
}



}
