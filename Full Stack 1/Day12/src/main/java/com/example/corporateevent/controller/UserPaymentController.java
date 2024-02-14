package com.example.corporateevent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.corporateevent.model.UserPayment;

import com.example.corporateevent.service.UserPaymentService;
@CrossOrigin
@RestController
public class UserPaymentController {
     @Autowired
    private UserPaymentService userPaymentService;

    @GetMapping("/get/pay")
    public List<UserPayment> getAllEvents() {
        return userPaymentService.getAllEvents();
    }
       @GetMapping("/{id}/pay")
    public ResponseEntity<UserPayment> getEventById(@PathVariable Integer  id) {
        return userPaymentService.getEventById( id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add/pay")
    public ResponseEntity<String> createEvent(@RequestBody UserPayment payment) {
        String message = userPaymentService.createEvent(payment);
        return ResponseEntity.ok(message);
    }
     @PutMapping("/{id}/pay")
    public ResponseEntity<String> updateEvent(@PathVariable Integer  id, @RequestBody UserPayment updatedEvent) {
        String message = userPaymentService.updateEvent(  id, updatedEvent);
        if (message.equals("Payment successfully updated")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}/pay")
    public ResponseEntity<String> deleteEvent(@PathVariable Integer id) {
        String message = userPaymentService.deleteEvent(id);
        if (message.equals("Payment successfully deleted")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
