package br.com.exemplo.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.exemplo.springboot.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	
	
}