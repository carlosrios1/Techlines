import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/* Si hay mas de 1 producto que los muestre */}
      {products.length > 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}
          >
            {/* Recorre todos los productos que están en la BDD */}
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w="250px" h="450px">
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductsScreen;
