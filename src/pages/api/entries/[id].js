import mongoose from 'mongoose';
import { db } from "@/database";
import EntryModel from "@/models/Entry";


export default function handler(req, res) {
    const { id } = req.query;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).end('Id invalido: ' + id);
    }
    switch (req.method) {
        case 'GET':
            return getEntry(req, res);
        case 'PUT':
            return updateEntry(req, res);
        default:
            return res.status(400).end('Metodo no soportado');
    }
}

const getEntry = async (req, res) => {
    const { id } = req.query;
    await db.connect();

    const entry = await EntryModel.findById(id);
    if (!entry) {
        return res.status(400).end('Entrada no encontrada');
    }

    await db.disconnect();

    res.status(200).json(entry);

}

const updateEntry = async (req, res) => {
    const { id } = req.query;
    await db.connect();

    const entry = await EntryModel.findById(id);
    if (!entry) {
        return res.status(400).end('Entrada no encontrada');
    }

    const {
        description = entry.description,
        status = entry.status
    } = req.body;

    try {
        const updatedEntry = await EntryModel.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
        await db.disconnect();
        res.status(200).json(updatedEntry);
    } catch (error) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message });
    }

}