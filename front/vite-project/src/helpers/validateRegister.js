export const validateRegister = (userData) => {
    const errors = {};

    // Validación de nombre
    if (!userData.name.trim()) {
        errors.name = "El nombre es requerido.";
    } else if (userData.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    // Validación de email
    if (!userData.email.trim()) {
        errors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "El email no es válido.";
    }

    // Validación de fecha de nacimiento
    if (!userData.birthdate.trim()) {
        errors.birthdate = "La fecha de nacimiento es requerida.";
    } else {
        const today = new Date();
        const birthdate = new Date(userData.birthdate);
        if (birthdate >= today) {
            errors.birthdate = "La fecha de nacimiento no puede ser en el futuro.";
        }
    }

    // Validación de DNI
    if (!userData.nDni.trim()) {
        errors.nDni = "El número de DNI es requerido.";
    } else if (!/^\d+$/.test(userData.nDni)) {
        errors.nDni = "El DNI debe contener solo números.";
    } else if (userData.nDni.length < 7 || userData.nDni.length > 8) {
        errors.nDni = "El DNI debe tener entre 7 y 8 dígitos.";
    }

    // Validación de usuario
    if (!userData.username.trim()) {
        errors.username = "El nombre de usuario es requerido.";
    } else if (userData.username.length < 3) {
        errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
    }

    // Validación de contraseña
    if (!userData.password.trim()) {
        errors.password = "La contraseña es requerida.";
    } else if (userData.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    return errors;
};