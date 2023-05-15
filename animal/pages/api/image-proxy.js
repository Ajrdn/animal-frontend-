import fetch from 'node-fetch'

export default async function handler(req, res) {
  const { imageUrl } = req.query

  try {
    const response = await fetch(imageUrl)
    const imageData = await response.arrayBuffer()

    res.setHeader('Content-Type', 'image/jpeg')
    res.send(Buffer.from(imageData))
  } catch (error) {
    console.error('Error fetching image:', error)
    res.status(500).end()
  }
}