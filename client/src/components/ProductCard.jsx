import {
  Box,
  Image,
  Text,
  Badge,
  Flex,
  IconButton,
  Skeleton,
} from "@chakra-ui/react";
import { BiExpand } from "react-icons/bi";
import React, { useState } from "react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);
  const [isShown, setIsShown] = useState(false);

  return (
    //Mostrara un esqueleto de la interfaz
    <Skeleton isLoaded={!loading}>
      <Box
        _hover={{ transform: "scale(1.1)", transitionDuration: "0.5s" }}
        borderWidth="1px"
        overflow="hidden"
        padding="4"
        shadow="md"
      >
        <Image
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          src={product.images[isShown && product.images.length === 2 ? 1 : 0]}
          fallbackSrc="https://via.placeholder.com/150"
          alt={product.name}
          height="200px"
        />

        {product.stock < 5 ? (
          <Badge colorScheme="yellow">
            Sólamente {product.stock} disponibles
          </Badge>
        ) : product.stock < 1 ? (
          <Badge colorScheme="red">Vendido</Badge>
        ) : (
          <Badge colorScheme="green">En Stock</Badge>
        )}
        {product.productisNew && (
          <Badge ml="2" colorScheme="blue">
            Nuevo
          </Badge>
        )}

        <Text noOfLines={1} fontSize="xl" fontWeight="semibold" mt="2">
          {product.brand} {` `} {product.name}
        </Text>

        <Text noOfLines={1} fontSize="md" mt="2" color="gray.600">
          {product.subtitle}
        </Text>

        <Flex justify="space-between" alignItems="center" mt="2">
          <Badge colorScheme="cyan">{product.category}</Badge>
          <Text fontSize="xl" fontWeight="semibold" color="cyan.600">
            ${product.price}
          </Text>
        </Flex>

        <Flex justify="space-between" mt="2">
          {favorites.includes(product._id) ? (
            <IconButton
              icon={<MdOutlineFavorite size="20px" />}
              colorScheme="cyan"
              size="sm"
              onClick={() => dispatch(removeFromFavorites(product._id))}
            />
          ) : (
            <IconButton
              icon={<MdOutlineFavoriteBorder size="20px" />}
              colorScheme="cyan"
              size="sm"
              onClick={() => dispatch(addToFavorites(product._id))}
            />
          )}
          <IconButton
            icon={<BiExpand size="20" />}
            as={ReactLink}
            to={`/producto/${product._id}`}
            colorScheme="cyan"
            size="sm"
          />
        </Flex>
      </Box>
    </Skeleton>
  );
};

export default ProductCard;
