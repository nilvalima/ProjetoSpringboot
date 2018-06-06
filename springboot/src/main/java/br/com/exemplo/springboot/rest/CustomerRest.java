package br.com.exemplo.springboot.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.exemplo.springboot.entity.Customer;
import br.com.exemplo.springboot.service.CustomerService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/api" })
public class CustomerRest {

	@Autowired
	private CustomerService customerService;

	@PostMapping
	public Customer create(@RequestBody Customer customer) {
		return customerService.create(customer);
	}

	@GetMapping(path = { "/{id}" })
	public Customer findOne(@PathVariable("id") Long id) {
		return customerService.findById(id);
	}

	@PutMapping
	public Customer update(@RequestBody Customer customer) {
		return customerService.update(customer);
	}

	@DeleteMapping(path = { "/{id}" })
	public Customer delete(@PathVariable("id") Long id) {
		return customerService.delete(id);
	}

	@GetMapping(produces = "application/json")
	public List<Customer> findAll() {
		return customerService.findAll();
	}
}