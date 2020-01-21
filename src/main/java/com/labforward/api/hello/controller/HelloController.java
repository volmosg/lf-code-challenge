package com.labforward.api.hello.controller;

import com.labforward.api.core.exception.ResourceNotFoundException;
import com.labforward.api.hello.domain.Greeting;
import com.labforward.api.hello.service.HelloWorldService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	public static final String GREETING_NOT_FOUND = "Greeting Not Found";

	private HelloWorldService helloWorldService;

	public HelloController(HelloWorldService helloWorldService) {
		this.helloWorldService = helloWorldService;
	}
	

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	@CrossOrigin(origins = "*")
	@ResponseBody
	public Greeting helloWorld() {
		return getHello(HelloWorldService.DEFAULT_ID);
	}

	@RequestMapping(value = "/hello/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Greeting getHello(@PathVariable String id) {
		return helloWorldService.getGreeting(id)
		                        .orElseThrow(() -> new ResourceNotFoundException(GREETING_NOT_FOUND));
	}

	@RequestMapping(value = "/hello", method = RequestMethod.POST)
	public Greeting createGreeting(@RequestBody Greeting request) {
		return helloWorldService.createGreeting(request);
	}
	
	// update existing greeting and in case it doesn't exist, create a new one
	@RequestMapping(value = "/hello/{id}", method = RequestMethod.PUT)
	@CrossOrigin(origins = "*")
	public Greeting updateGreeting(@RequestBody Greeting request, @PathVariable String id) {
		return helloWorldService.getGreeting(id)
				.map(greeting -> {
					greeting.setMessage(request.getMessage());
					greeting.setId(id);
					return helloWorldService.updateGreeting(request, id);
				})
				.orElseGet(() -> {
					return createGreeting(request);
				});
	}
	
	// delete existing greeting
	@RequestMapping(value = "/hello/{id}", method = RequestMethod.DELETE)
	public void deleteGreeting(@PathVariable String id) {
		helloWorldService.deleteGreeting(id);
	}
}
