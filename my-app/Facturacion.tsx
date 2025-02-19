import React, { useState, useEffect } from "react";
import Bill from "./Bill";
import PaymentMethod from "./PaymentMethod";
import { Tabs, TabList, TabPanels, Tab, TabPanel, DefaultIcon, Box, InputLeftElement } from '@chakra-ui/react'
import { GridItem, SimpleGrid, Container, Input, Text, InputGroup, InputRightElement, Button, Grid } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faEye, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0, faDeleteLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export default function Facturacion() {
    /* Inputs :  */
    const [Nt, setNt] = useState("1111 - 2222 - 3333 - 4444");
    const [titular, setTt] = useState("Pedro Gonzalez");
    const [Tel, setTel] = useState("(+57) 3333333333");
    const [dir, setDir] = useState("Tv 5 #1-2");
    const [em, setEmail] = useState("a@a.com");
    const [co, setCompany] = useState("Logo");
    const [Ord, setOrderNumber] = useState("#id");
    const [Pro, setProduct] = useState("Matricula");
    const [iva, setIVA] = useState("Numero");
    /* Show : */
    const [show, setShow] = useState(false)

    return (


        <div className="OrderProgress">
            <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)" gap={6}>
                <GridItem color="white" colStart={1} rowStart={1} rowSpan={1} padding={5}>
                    <Container bg="gray.600">
                        <Text padding={2} fontSize={20} align={"center"}>Informacion facturación</Text>
                        <SimpleGrid columns={2} spacing={15} padding={6} paddingBottom={8}>
                            <Text color="gray.300">Número de Tarjeta</Text>
                            <Text>{Nt}</Text>
                            <Text color="gray.300">Titular</Text>
                            <Text>{titular}</Text>
                            <Text color="gray.300">Teléfono</Text>
                            <Text>{Tel}</Text>
                            <Text color="gray.300">Dirección factura</Text>
                            <Text>{dir}</Text>
                            <Text color="gray.300">E-mail factura</Text>
                            <Text>{em}</Text>
                        </SimpleGrid>

                    </Container>
                </GridItem>
                <GridItem color="white" colStart={1} rowStart={2} rowSpan={1} padding={5}>
                    <Container bg="gray.600">
                        <Text padding={2} fontSize={20} align={"center"}>Resumen de la Orden</Text>
                        <SimpleGrid columns={2} spacing={15} padding={6} paddingBottom={8}>
                            <Text color="gray.300">Compañia</Text>
                            <Text>{co}</Text>
                            <Text color="gray.300">Numero de Orden</Text>
                            <Text>{Ord}</Text>
                            <Text color="gray.300">Productos</Text>
                            <Text>{Pro}</Text>
                            <Text color="gray.300">IVA (15%)</Text>
                            <Text>{iva}</Text>
                        </SimpleGrid>

                    </Container>
                </GridItem>
                <GridItem colStart={2} rowSpan={2} boxSize="fit-content"  height= "100%" width="100%">
                    <Container centerContent fontSize ={24} padding={6} gap ={14}>
                        <Text >Obteniendo datos de Facturacion</Text>
                        <Text >Informacion siendo procesada</Text>
                        <Text >Confirmando datos</Text>
                        <Text >Enviando datos al banco</Text>
                        <Text >Procesando pago</Text>
                        <Text >Pago confirmado</Text>
                    </Container>
                    <Button style={{alignSelf:'flex-end',marginBottom:"-100px"}}boxShadow='2xl' bgColor={'#e60000'} color='white' width='100%' padding='4px' size='lg'>
                        <b>Cancelar</b>
                    </Button>
                </GridItem>
            </Grid>
        </div>)
        ;

}