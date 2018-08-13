package com.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.customer.dao.CustomerRepository;
import com.customer.model.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired 
	CustomerRepository customerRepository;
	
	public List<Customer> getUser() {
		// TODO Auto-generated method stub
		return (List<Customer>) customerRepository.findAll();
	}

	public Customer findById(long id) {
		// TODO Auto-generated method stub
		return customerRepository.findOne(id);
	}
	
	public void createUser(Customer cust) {
		// TODO Auto-generated method stub
		customerRepository.save(cust);
	}

	public Customer update(Customer cust, long l) {
		// TODO Auto-generated method stub
		return customerRepository.save(cust);
	}
  
	public void deleteCustById(long id) {
		// TODO Auto-generated method stub
		customerRepository.delete(id);
	}
	
}
