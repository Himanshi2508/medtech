// Function to toggle the visibility of the booking form
function toggleBookingForm() {
    const bookingForm = document.querySelector('.booking-form');
    bookingForm.style.display = bookingForm.style.display === 'block' ? 'none' : 'block';
}

// Function to handle form submission (you can modify this as needed)
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const doctorSelect = document.getElementById('doctor');
    const selectedDoctor = doctorSelect.options[doctorSelect.selectedIndex].text;
    const selectedDate = document.getElementById('date').value;
    
    // You can customize the logic to handle the form data (e.g., send it to a server)
    
    // For this example, we'll just display an alert
    alert(`Appointment booked with ${selectedDoctor} on ${selectedDate}`);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Toggle booking form visibility when the "Book Appointment" button is clicked
    const bookButtons = document.querySelectorAll('.book-button');
    bookButtons.forEach((button) => {
        button.addEventListener('click', toggleBookingForm);
    });
    
    // Handle form submission when the form is submitted
    const bookingForm = document.querySelector('.booking-form form');
    bookingForm.addEventListener('submit', handleFormSubmit);
});
document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointment-form");
    const upcomingAppointments = document.getElementById("upcoming-appointments");
    
    // Array to store booked appointments
    const bookedAppointments = [];
    
    // Handle form submission
    appointmentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        
        // Create an object to represent the appointment
        const appointment = {
            doctor,
            date
        };
        
        // Add the appointment to the bookedAppointments array
        bookedAppointments.push(appointment);
        
        // Display the appointment in the "Upcoming Appointments" section
        const appointmentItem = document.createElement("div");
        appointmentItem.classList.add("appointment-item");
        appointmentItem.innerHTML = `<p><strong>Doctor:</strong> ${appointment.doctor}</p><p><strong>Date:</strong> ${appointment.date}</p>`;
        upcomingAppointments.appendChild(appointmentItem);
        
        // Clear the form
        appointmentForm.reset();
        
        
    });
});


