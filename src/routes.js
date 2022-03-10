import ClientControllers from "./controllers/ClientControllers.js";
import NotaFiscalControllers from "./controllers/NotaFiscalControllers.js";
import { ValidateIdClient } from "./validators/clientes/ValidateIdClient.js";
import { ValidateIdNotaFiscal } from "./validators/clientes/ValidateIdNotaFiscal.js";
import { addValidateNotaFiscal } from "./validators/clientes/addValidateNotaFiscal.js";
import { ValidateAddClient } from "./validators/clientes/ValidateAddClient.js";

import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => res.json({ ok: true })); // test route com aderência ao frontend

routes.get("/cliente", ClientControllers.index);
routes.get("/cliente/:id", ValidateIdClient, ClientControllers.find);

routes.get(
  "/cliente/notafiscal/:id",
  ValidateIdNotaFiscal,
  NotaFiscalControllers.findNotaFiscal
); //-LISTAR TODAS AS NOTAS FISCAIS DE UM CLIENTE ESPECIFICO (x)

routes.get(
  "/cliente/notafiscalcompra/:id",
  ValidateIdNotaFiscal,
  NotaFiscalControllers.findNotaFiscalCompra
); //LISTAR TODAS AS NOTAS FISCAIS DE UM CLIENTE ESPECIFICO QUE SEJA DE COMPRA (x)

routes.post(
  "/cliente/notafiscal/:id",
  addValidateNotaFiscal,
  NotaFiscalControllers.AddNotaFiscal
); //export default routes; Pegar um cliente cadastrado e adiciona uma nova nota fiscal de compra [x]

routes.post(
  "/cliente/adicionar",
  ValidateAddClient,
  ClientControllers.AddCliente
); // Adiciona um novo cliente [x]

export default routes;
