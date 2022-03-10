import * as yup from "yup";

const addValidateNotaFiscal = async (req, res, next) => {
  try {
    const item = {
      id: req.params.id,
      ID: req.body.ID,
      DATA: req.body.DATA,
      VALOR: req.body.VALOR,
      DESCRICAO: req.body.DESCRICAO,
      FORNECEDOR: req.body.FORNECEDOR,
      TIPO: req.body.TIPO,
    };

    const schema = yup.object().shape({
      id: yup
        .string()
        .required("Id required")
        .uuid("The id must be of type uuid v4"),
      ID: yup.string().required("Id é obrigatório para nota fiscal"),
      DATA: yup.string().required("Data é obrigatório"),
      VALOR: yup.string().required("Valor é obrigatório"),
      DESCRICAO: yup.string().required("Descrição é obrigatório"),
      FORNECEDOR: yup.string().required("Fornecedor é obrigatório"),
      TIPO: yup.number().required("Tipo é obrigatório "),
    });

    await schema.validate(item, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Validation Fails", messages: error.inner[0].message });
  }
};

export { addValidateNotaFiscal };
