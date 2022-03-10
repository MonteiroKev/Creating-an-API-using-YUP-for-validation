import { v4 as uuidv4 } from "uuid";
import clientes from "../model/db.js";

class NotaFiscalControllers {
  findNotaFiscal(req, res) {
    try {
      const id = req.params.id;

      const cliente = clientes.find((p) => p.ID == id);
      const notafiscal = cliente.NOTAS_FISCAIS;
      ("");
      res.json({ notafiscal });
    } catch (err) {
      res.status(404).json({ error: "Nota Fiscal não encontrada" });
    }
  }

  findNotaFiscalCompra(req, res) {
    try {
      const id = req.params.id;

      const cliente = clientes.find((p) => p.ID == id);
      const notafiscal = cliente.NOTAS_FISCAIS;
      const notafiscalCompra = notafiscal.filter(
        (notafiscal) => notafiscal.TIPO === "2"
      );
      res.json({ notafiscalCompra });
    } catch {
      res.status(404).json({ error: "Nota Fiscal não encontrada" });
    }
  }

  AddNotaFiscal(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const cliente = clientes.find((p) => p.ID == id);
      cliente["NOTAS_FISCAIS"].push(body);
      return res.json({ clientes });
    } catch (err) {
      res.status(404).json({ error: "Nota Fiscal não pode ser adicionadaa" });
    }
  }
}

export default new NotaFiscalControllers();
