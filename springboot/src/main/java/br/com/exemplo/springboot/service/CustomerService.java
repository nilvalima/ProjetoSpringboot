package br.com.exemplo.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.exemplo.springboot.entity.Customer;
import br.com.exemplo.springboot.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository repository;
	
	public Customer create(Customer customer) {
		return repository.save(customer);
	}

	public Customer findById(Long id) {
		return repository.findById(id).get();
	}

	public Customer update(Customer customer) {
		return null;
	}

	public Customer delete(Long id) {
		Customer customer = findById(id);
		
		if(customer != null) {
			repository.delete(customer);
		}
		
		return customer;
	}

	public List<Customer> findAll() {
		return repository.findAll();
	}

}