import { productResponseDto } from "../dto/product-response.dto.js";
import productsRepository from "../persistences/mongo/repositories/products.repository.js";
import customErrors from "../errors/customErrors.js";

const getAll = async (query, options) => {
  const products = await productsRepository.getAll(query, options);
  if(!products) throw customErrors.notFoundError(`Product id ${id} not found`);
  return products;
}

const getById = async (id) => {
  const productData = await productsRepository.getById(id);
  const product = productResponseDto(productData);
  if(!product) throw customErrors.notFoundError(`Product id ${id} not found`);
  return product;
}

const create = async (data, user) => {
  let productData = data;
  if(user.role === "premium") {
    productData = { ...data, owner: user._id };
  }

  const product = await productsRepository.create(productData);
  if(!product) throw customErrors.notFoundError(`Product id ${id} not found`);
  return product;
}

const update = async (id, data) => {
  const product = await productsRepository.update(id, data);
  if(!product) throw customErrors.notFoundError(`Product id ${id} not found`);
  return product;
}

const deleteOne = async (id, user) => {
  const productData = await productsRepository.getById(id);
  if(user.role === "premium" && productData.owner !== user._id) {
    throw customErrors.unauthorizedError("User not authorized");
  }

  const product = await productsRepository.deleteOne(id);
  if(!product) throw customErrors.notFoundError(`Product id ${id} not found`);
  return product;
}

export default {
  getAll,
  getById,
  update,
  deleteOne,
  create
}