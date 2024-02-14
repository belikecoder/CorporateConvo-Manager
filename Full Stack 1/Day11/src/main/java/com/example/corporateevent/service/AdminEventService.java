package com.example.corporateevent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.corporateevent.model.AdminEvent;
import com.example.corporateevent.repository.AdminEventRepository;
@Service
public class AdminEventService {
     @Autowired
    private AdminEventRepository adminEventRepository;

    public List<AdminEvent> getAllEvents() {
        return adminEventRepository.findAll();
    }

    public Optional<AdminEvent> getEventById(Long eventId) {
        return adminEventRepository.findById(eventId);
    }

    public String createEvent(AdminEvent event) {
        AdminEvent createdEvent = adminEventRepository.save(event);
        return "Event successfully added";
    }

    public String updateEvent(Long eventId, AdminEvent updatedEvent) {
        if (adminEventRepository.existsById(eventId)) {
            updatedEvent.setEventId(eventId);
            adminEventRepository.save(updatedEvent);
            return "Event successfully updated";
        } else {
            return "Event not found";
        }
    }

    public String deleteEvent(Long eventId) {
        if (adminEventRepository.existsById(eventId)) {
            adminEventRepository.deleteById(eventId);
            return "Event successfully deleted";
        } else {
            return "Event not found";
        }
    }


}
