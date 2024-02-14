package com.example.corporateevent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.corporateevent.model.UserPayment;

import com.example.corporateevent.repository.UserPaymentRepository;
@Service
public class UserPaymentService {
      @Autowired
    private UserPaymentRepository userPaymentRepository;

    public List<UserPayment> getAllEvents() {
        return userPaymentRepository.findAll();
    }

    public String createEvent(UserPayment event) {
       UserPayment createdEvent =  userPaymentRepository.save(event);
        return "Payment successfull";
    }
     public Optional<UserPayment> getEventById(Integer bookId) {
        return userPaymentRepository.findById( bookId);
    }
    public String updateEvent(Integer payId, UserPayment updatedEvent) {
        if (userPaymentRepository.existsById( payId)) {
            updatedEvent.setId( payId);
            userPaymentRepository.save(updatedEvent);
            return "Payment successfully updated";
        } else {
            return "Event not found";
        }
    }

    public String deleteEvent(Integer   payId) {
        if (userPaymentRepository.existsById(payId)) {
            userPaymentRepository.deleteById(payId);
            return "Payment successfully deleted";
        } else {
            return "Event not found";
        }
    }

    
    

   


}
