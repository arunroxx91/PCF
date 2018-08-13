package com.customer.service;

import java.util.List;
import com.customer.model.Customer;

public interface CustomerService {
	
	public Customer findById(long id);
	public List<Customer> getUser();
	public void createUser(Customer cust);
	public Customer update(Customer user, long l);
	public void deleteCustById(long id);
}
