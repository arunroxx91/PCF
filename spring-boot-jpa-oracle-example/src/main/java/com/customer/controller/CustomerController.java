package com.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import com.customer.model.Customer;
import com.customer.service.CustomerService;

@RestController
@RequestMapping(value={"/customer"})

public class CustomerController {
	
	@Autowired
    CustomerService customerService;

	
    @GetMapping(value="/get", headers="Accept=application/json")
    public List<Customer> getAllUser() {
   	  List<Customer> tasks=customerService.getUser();
   	  return tasks;
    }
    
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> getUserById(@PathVariable("id") long id) {
        System.out.println("Fetching User with id " + id);
        Customer cust = customerService.findById(id);
        if (cust == null) {
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Customer>(cust, HttpStatus.OK);
    }

    
	 @PostMapping(value="/create",headers="Accept=application/json")
	 public ResponseEntity<Void> createUser(@RequestBody Customer cust, UriComponentsBuilder ucBuilder){
	     System.out.println("Creating User "+cust.getName());
	     System.out.println("Creating User "+cust.getId());
	     customerService.createUser(cust);
	     HttpHeaders headers = new HttpHeaders();
	     headers.setLocation(ucBuilder.path("/cust/{id}").buildAndExpand(cust.getId()).toUri());
	     return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	 }

		@PutMapping(value="/update", headers="Accept=application/json")
		public ResponseEntity<String> updateUser(@RequestBody Customer currentUser)
		{
			System.out.println("sd");
			Customer user = customerService.findById(currentUser.getId());
		if (user==null) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
		customerService.update(currentUser, currentUser.getId());
		return new ResponseEntity<String>(HttpStatus.OK);
		}
		
		@DeleteMapping(value="/{id}", headers ="Accept=application/json")
		public ResponseEntity<Customer> deleteUser(@PathVariable("id") long id){
			Customer user = customerService.findById(id);
			if (user == null) {
				return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
			}
			customerService.deleteCustById(id);
			return new ResponseEntity<Customer>(HttpStatus.NO_CONTENT);
		}

	 
	 
    
    

}
