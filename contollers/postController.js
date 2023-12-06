const posts = require('../model/Posts');
const dataPush = async(req,res)=>{
    try {
        const {url, caption} = req.body
        if(!url || !caption){
            res.send('all fields are required')
        }
        const currentPosts =  await posts.create({
            url,
            caption
        })
        res.json(currentPosts)
    } catch (error) {
        console.error(error);
    }
}

const dataGet = async (req,res)=>{
    try {
        const data = await posts.find()
        res.json(data)
    } catch (error) {
        console.error(error);
    }
}
const dataPut = async (req,res)=>{
    const{id, comment} = req.body
    try {
        const updatedData = await posts.findByIdAndUpdate(id,{comment})
        res.json(updatedData)
    } catch (error) {
        console.error(error);
    }
}
const dataDelete = async (req,res)=>{
    const {id} = req.params
    try {
        await posts.findByIdAndDelete(id)
        res.json('data deleted successfully')
    } catch (error) {
        console.error(error);
    }
}

module.exports={
    dataGet,
    dataPush,
    dataPut,
    dataDelete
}
