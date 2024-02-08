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

import com.example.corporateevent.model.AdminEvent;
import com.example.corporateevent.service.AdminEventService;
@RestController
public class AdminEventController {
     @Autowired
    private AdminEventService adminEventService;

    @GetMapping("/get/event")
    public List<AdminEvent> getAllEvents() {
        return adminEventService.getAllEvents();
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<AdminEvent> getEventById(@PathVariable Long eventId) {
        return adminEventService.getEventById(eventId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add/event")
    public ResponseEntity<String> createEvent(@RequestBody AdminEvent event) {
        String message = adminEventService.createEvent(event);
        return ResponseEntity.ok(message);
    }
     @PutMapping("/{eventId}")
    public ResponseEntity<String> updateEvent(@PathVariable Long eventId, @RequestBody AdminEvent updatedEvent) {
        String message = adminEventService.updateEvent(eventId, updatedEvent);
        if (message.equals("Event successfully updated")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long eventId) {
        String message = adminEventService.deleteEvent(eventId);
        if (message.equals("Event successfully deleted")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
