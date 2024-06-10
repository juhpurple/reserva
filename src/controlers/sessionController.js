// index: listagem de sessoes 
// store: (add): criar uma sessao
// show (list): quandop queremos listar uma unica sessao
// update: quando queremos alterar alguma sessao
// destroy(delete): quando queremos deletar uma sessao

import User from '../models/User'
import * as Yup from 'yup'

class SessionController {
    async store(req,res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        })
        const { email } = req.body
        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação'})
        }
        let users = await User.findOne({ email })
        if(!user) {
            users= await User.create({ email })
        }
        return res.json(users)
    }
}

export default new SessionController()