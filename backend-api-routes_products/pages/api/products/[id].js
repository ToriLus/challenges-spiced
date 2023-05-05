import { getProductById } from "../../../services/productServices";

export default function handler(request, response) {
  //   const products = getAllProducts();

  //   const getProductById = products.find((product) => product.id === id);

  //   if (!getProductById) {
  //     response
  //       .status(404)
  //       .json({ status: "Product not found", id, getProductById });
  //     return;
  //   }
  const id = request.query.id;

  response.status(200).json(getProductById(id));
}
