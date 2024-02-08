package com.example.corporateevent.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.corporateevent.model.UserBooking;
import com.example.corporateevent.repository.UserBookingRepository;
@Service
public class UserBookingService {
      @Autowired
    private UserBookingRepository userBookingRepository;

    public List<UserBooking> getAllEvents() {
        return userBookingRepository.findAll();
    }

    public Optional<UserBooking> getEventById(Long bookId) {
        return userBookingRepository.findById( bookId);
    }

    public String createEvent(UserBooking userBooking) {
        UserBooking createdEvent =userBookingRepository.save(userBooking);
        return "Your Event is booked";
    }
public String updateEvent(Long  bookId, UserBooking updatedEvent) {
        if (userBookingRepository.existsById( bookId)) {
            updatedEvent.setId( bookId);
            userBookingRepository.save(updatedEvent);
            return "booking successfully updated";
        } else {
            return "booking not found";
        }
    }

    public String deleteEvent(Long  bookId) {
        if (userBookingRepository.existsById( bookId)) {
            userBookingRepository.deleteById(bookId);
            return "booking successfully deleted";
        } else {
            return "booking not found";
        }
    }

   
    


}
