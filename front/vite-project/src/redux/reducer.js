import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userActive: {},
    userAppointments: []
}

//funcion que pueda setear al usuario cuando se logué
export const userSlice = createSlice ({
    name: "userData",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.userActive = action.payload
        },
        addUserAppointments: (state, action) => {
            state.userAppointments = action.payload
        }, 
        createAppointment: (state, action) => {
            state.userAppointments.push(action.payload)
        },
        cancelAppointmentAction: (state, action) => {
            state.userAppointments = state.userAppointments.map(appointment => {
                if(appointment.id === action.payload) {
                    return {...appointment, status: "cancelled"}
                }
            })
        }
    }
})

export const {addUser, addUserAppointments, cancelAppointmentAction, createAppointment} = userSlice.actions;