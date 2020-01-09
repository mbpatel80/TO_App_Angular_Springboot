package com.todo.rest.restwebservice.helloworld.controller;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.rest.restwebservice.helloworld.model.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path="/hello-world")
	public String getHelloWorld() {
		return "Hello World!!!";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean getHelloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support");
		return new HelloWorldBean("Hello Mayank");
	}
	
	@GetMapping(path="/hello-world-bean/{name}")
	public HelloWorldBean getHelloWorldBeanPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Some Error has Happened! Contact Support");
		return new HelloWorldBean(String.format("Hello %s",name));
	}
}
