package com.customer.controller;

import java.util.List;
import java.util.logging.Logger;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "*")
public class CustomerController {
    private static final Logger LOGGER = Logger.getLogger(CustomerController.class.getName());
	@Autowired
    CustomerService customerService;

	
    @GetMapping(value="/get", headers="Accept=application/json")
    public List<Customer> getAllUser() {
	     LOGGER.info("Fetching All User ");
   	  List<Customer> tasks=customerService.getUser();
   	  return tasks;
    }
    
    @GetMapping(value = "/getUserById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> getUserById(@PathVariable("id") long id) {
    	LOGGER.info("Fetching User with id "+id);
        Customer cust = customerService.findById(id);
        if (cust == null) {
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Customer>(cust, HttpStatus.OK);
    }

    
	 @PostMapping(value="/create",headers="Accept=application/json")
	 public ResponseEntity<Void> createUser(@RequestBody Customer cust, UriComponentsBuilder ucBuilder){
		 LOGGER.info("Creating User "+cust.getName());
		 LOGGER.info("Creating User id "+cust.getId());
	     customerService.createUser(cust);
	     HttpHeaders headers = new HttpHeaders();
	     headers.setLocation(ucBuilder.path("/cust/{id}").buildAndExpand(cust.getId()).toUri());
	     return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	 }

		@PutMapping(value="/update/{id}", headers="Accept=application/json")
		public ResponseEntity<String> updateUser(@PathVariable("id") long id,@RequestBody Customer currentUser)
		{
			LOGGER.info("update User id "+id);
			currentUser.setId(id);
			Customer user = customerService.findById(id);
		if (user==null) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
		currentUser.setName((currentUser.getName()!=null &&  currentUser.getName()!="")? currentUser.getName():user.getName());
		currentUser.setAddress((currentUser.getAddress()!=null &&  currentUser.getAddress()!="")? currentUser.getAddress():user.getAddress());
		currentUser.setphoneNumber((currentUser.getphoneNumber()!=null && currentUser.getphoneNumber()!="")? currentUser.getphoneNumber():user.getphoneNumber());
		customerService.update(currentUser);
		return new ResponseEntity<String>(HttpStatus.OK);
		}
		
		@DeleteMapping(value="/delete/{id}", headers ="Accept=application/json")
		public ResponseEntity<Customer> deleteUser(@PathVariable("id") long id){
			LOGGER.info("delete User id "+id);
			Customer user = customerService.findById(id);
			if (user == null) {
				return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
			}
			customerService.deleteCustById(id);
			return new ResponseEntity<Customer>(HttpStatus.NO_CONTENT);
		}

	 
	 
    
    

}
