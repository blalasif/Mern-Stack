// 

// const errorMiddleware = (err, req, res, next) => {
//   console.error('Error object:', err); // Log the entire error object

//   const status = err.status || 500;
//   const message = err.message || "Backend Error";
//   const extraDetail = err.extraDetail || "Error From backend";

//   return res.status(status).json({ message, extraDetail });
// }

// module.exports = errorMiddleware;


const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from the Backend";

  console.error(
    `[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${extraDetails} `
  );

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
