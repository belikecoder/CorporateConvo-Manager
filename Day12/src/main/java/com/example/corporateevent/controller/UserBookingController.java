package com.example.corporateevent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.corporateevent.model.UserBooking;

import com.example.corporateevent.service.UserBookingService;
@RestController
public class UserBookingController {
     @Autowired
    private UserBookingService userBookingService;

    @GetMapping("/get/book")
    public List<UserBooking> getAllEvents() {
        return userBookingService.getAllEvents();
    }

    @GetMapping("/{id}/book")
    public ResponseEntity<UserBooking> getEventById(@PathVariable Long  id) {
        return userBookingService.getEventById( id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add/book")
    public ResponseEntity<String> createEvent(@RequestBody UserBooking userBooking) {
        String message = userBookingService.createEvent(userBooking);
        return ResponseEntity.ok(message);
    }
     @PutMapping("/{id}/book")
    public ResponseEntity<String> updateEvent(@PathVariable Long  id, @RequestBody UserBooking updatedEvent) {
        String message = userBookingService.updateEvent(  id, updatedEvent);
        if (message.equals("booking successfully updated")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}/book")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        String message = userBookingService.deleteEvent(id);
        if (message.equals("booking successfully deleted")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
