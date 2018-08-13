package com.customer.dao;

import org.springframework.data.repository.CrudRepository;

import com.customer.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

   // List<Customer> findByEmail(String email);

    //@Query("select c from Customer c where c.email = :email")
    //Stream<Customer> findByEmailReturnStream(@Param("email") String email);

   // List<Customer> findByDate(Date date);

    //@Query("select c from Customer c")
    //Stream<Customer> findAllAndStream();

    //List<Customer> findByDateBetween(Date from, Date to);

}
