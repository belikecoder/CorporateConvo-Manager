package com.example.corporateevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.corporateevent.model.UserBooking;



public interface UserBookingRepository extends JpaRepository<UserBooking,Long> {

  

}
