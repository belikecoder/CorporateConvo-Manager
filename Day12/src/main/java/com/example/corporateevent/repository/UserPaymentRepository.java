package com.example.corporateevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.corporateevent.model.UserPayment;

public interface UserPaymentRepository extends JpaRepository<UserPayment,Integer> {

   
}
