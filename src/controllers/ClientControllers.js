import { v4 as uuidv4 } from "uuid";
import clientes from "../model/db.js";

class ClientControllers {
  index(req, res) {
    res.json({ item: clientes });
  }


  find(req, res) {
    const id = req.params.id; 

    try {
      const cliente = clientes.find((p) => p.ID == id);
      res.json({ cliente });
    } catch (err) {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  }
  
  AddCliente(req, res) {
    try {
      const body = req.body;
      body.ID = uuidv4();
      clientes.push(body);
      return res.json({ clientes });
    } catch (err) {
      res.status(404).json({ error: "Cliente não pode ser adicionado" });
    }
  }
}

export default new ClientControllers();
