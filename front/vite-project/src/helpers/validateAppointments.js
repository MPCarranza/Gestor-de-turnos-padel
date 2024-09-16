export const validateAppointment = (date, time) => {
    const errors = {};
    const openingTime = 8 * 60; // 8:00 AM en minutos
    const closingTime = 22 * 60; // 22:00 PM en minutos
    const appointmentDate = new Date(date + 'T' + time);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Establecer la hora actual a medianoche para comparar solo las fechas

    // Verificar si es fin de semana
    if (appointmentDate.getDay() === 0 || appointmentDate.getDay() === 6) {
        errors.date = "Los turnos no se pueden agendar durante los fines de semana.";
    }

    // Verificar si el tiempo seleccionado está dentro del horario de atención
    const [hours, minutes] = time.split(':').map(Number);
    const selectedTimeInMinutes = hours * 60 + minutes;
    if (selectedTimeInMinutes < openingTime || selectedTimeInMinutes > closingTime) {
        errors.time = "El horario debe estar entre las 8:00 AM y las 22:00 PM.";
    }

    // Verificar que la cancelación no sea el mismo día de la reserva
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    if (appointmentDate - currentDate < oneDayInMilliseconds) {
        errors.cancellation = "Los turnos solo pueden ser cancelados hasta el día anterior a la reserva.";
    }

    return errors;
};
