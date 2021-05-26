exports.success = function (req, res, message = "Ok", obj, status = 200) {
  let bodyMessage = obj;

  if (!status) {
    status = 200;
  }
  res.status(status).send({
    status: status,
    message: message,
    body: bodyMessage,
  });
};

exports.error = function (
  req,
  res,
  obj,
  message = "Intenal server Error",
  status = 500
) {
  if (obj.code) {
    status = obj.code;
  }
  console.log(obj);
  res.status(status).send({
    status: status,
    message: message,
    body: obj,
  });
};
