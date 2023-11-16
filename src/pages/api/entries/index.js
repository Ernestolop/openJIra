import { db } from "@/database";
import EntryModel from "@/models/Entry";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getEntries(req, res);
        case 'POST':
            return createEntry(req, res);
        default:
            return res.status(400).end('Metodo no soportado');
    }
}

const getEntries = async (req, res) => {
    await db.connect();

    const entries = await EntryModel.find().sort({ createdAt: -1 });

    await db.disconnect();

    res.status(200).json(entries);
}

const createEntry = async (req, res) => {
    const { description = '' } = req.body;
    const newEntry = new EntryModel({ description });
    try {
        await db.connect();
        const entry = await newEntry.save();
        await db.disconnect();
        return res.status(201).json(entry);
    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({ message: 'Algo salio mal, revisar la consola del servidor' });
    }
}

