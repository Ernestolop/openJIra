import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting   
 * 3 = disconnecting
 */

const mongoConnection = {
    isConnected: 0,
    connection: null
}

export const connect = async () => {
    if (mongoConnection.isConnected === 1) {
        console.log('Usando conexión anterior');
        return;
    }

    if(mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if(mongoConnection.isConnected === 1) {
            console.log('Usando conexión anterior');
            return;
        }
        await mongoose.disconnect();
    }

    await mongoose.connect('...');
    mongoConnection.isConnected = 1;
    console.log('Conectado a mongodb: ', '...');
    
}

export const disconnect = async () => {
    if(mongoConnection.isConnected !== 0) return;
    await mongoose.disconnect(); 
    console.log('Desconectado de mongodb');S
}