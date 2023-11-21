export default function handler(req, res) {
    const { message = 'Bad Request' } = req.query;
    return res.status(400).end(message);
}