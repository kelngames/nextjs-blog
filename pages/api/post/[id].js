import { getPostData } from '../../../lib/posts'

export default async function handler(req, res) {
    const postData = await getPostData(req.query.id)
    res.status(200).json({ text: postData })
}