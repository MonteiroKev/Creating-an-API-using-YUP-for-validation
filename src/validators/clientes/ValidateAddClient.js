import * as yup from "yup";

const ValidateAddClient = async (req, res, next) => {
  try {
    const client = {
      EMPRESA: req.body.EMPRESA,
      CLIENTE: req.body.CLIENTE,
      CNPJ: req.body.CNPJ,
      TELEFONE: req.body.TELEFONE,
      ENDERECO: req.body.ENDERECO,
      CIDADE: req.body.CIDADE,
      CEP: req.body.CEP,
      ESTADO: req.body.ESTADO,
      CONTATO_ATENDIMENTO: req.body.CONTATO_ATENDIMENTO,
      EMAIL_ATENDIMENTO: req.body.EMAIL_ATENDIMENTO,
      CELULAR_ATENDIMENTO: req.body.CELULAR_ATENDIMENTO,
      CONTATO_COMERCIAL: req.body.CONTATO_COMERCIAL,
      EMAIL_COMERCIAL: req.body.EMAIL_COMERCIAL,
      CELULAR: req.body.CELULAR,
    };

    const schema = yup.object().shape({
      EMPRESA: yup.string().required("Empresa required"),
      CLIENTE: yup.string().required("Cliente required"),
      CNPJ: yup.string().required("CNPJ required"),
      TELEFONE: yup.string().required("Telefone required"),
      ENDERECO: yup.string().required("Endereço required"),
      CIDADE: yup.string().required("Cidade required"),
      CEP: yup.string().required("CEP required"),
      ESTADO: yup.string().required("Estado required"),
      CONTATO_ATENDIMENTO: yup
        .string()
        .required("Contato de atendimento required"),
      EMAIL_ATENDIMENTO: yup.string().required("Email de atendimento required"),
      CELULAR_ATENDIMENTO: yup
        .string()
        .required("Celular de atendimento required"),
      CONTATO_COMERCIAL: yup.string().required("Contato comercial required"),
      EMAIL_COMERCIAL: yup.string().required("Email comercial required"),
      CELULAR: yup.string().required("Celular required"),
    });

    await schema.validate(client, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Validation Fails", messages: error.inner[0].message });
  }
};

export { ValidateAddClient };
