


const { createBot, createProvider, createFlow, addKeyword} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const { EVENTS } = require('@bot-whatsapp/bot')



const flowBienvenida2 = addKeyword('cancelar').addAnswer(
    '¡Hola! 👋 Soy *Shot*, el asistente virtual de 78 Grados Deluxe https://78grados.com/',
    {
        media:'https://78grados.com/wp-content/uploads/2024/05/bot78grados.png',
    }
).addAnswer(
[
    
    'Estoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe *agente* 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
    
    '\nPor favor selecciona una de las siguientes opciones:',
    '1. Responde *1* 👉 Catálogo de cajas con mini botellas de licor.',
    '2. Responde *2* 👉 Hablar con un agente.',
    '3. Responde *3* 👉 Seguimiento de pedido.',
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',

]
)

const express = addKeyword('2').addAnswer(
    [
        'Para consultar el precio del envío a través de Picap o Mensajeros urbanos, por favor nos confirmas la dirección y barrio en Bogotá y  uno de nuestros asesores te enviará el costo del servicio.',

        '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
    ],
    null,
    null,
    [flowBienvenida2])

   

const tradicional = addKeyword('1').addAnswer(
    [
        'Para realizar el pago de tu pedido, por favor accede al link https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar más el valor del envío. ',
        '\nPor favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta:',
        '1. Nombre completo o razón social.',
        '2. Número de cédula o NIT.',
        '3. Dirección, barrio y ciudad.',
        '4. Correo electrónico.',
        '5. Celular.',
        '\nCon esta información generamos tu factura electrónica y el número de guía.',
        '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
    ],
    null,
    null,
    [flowBienvenida2]
)

const pedido = addKeyword(['3']).addAnswer(
    [
    'Estimado cliente, por favor ingresa el número de guía que te brindo nuestro equipo comercial y te brindaremos toda la información de tu pedido:',   
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
    
    ],
    null,
    null,
    [flowBienvenida2])
    

    const bogota = addKeyword(['1']).addAnswer(
    [
    'Para *Bogotá* contamos con estas opciones de envío:',   
    '\n1. *Responde 1 👉 Envío tradicional:* Te cuesta $10.000 y te lo envíamos a través de TCC. Te llega en (1 o 2) días hábiles.',
    '2. *Responde 2 👉 Envío express:* Si necesitas tu pedido para HOY, te lo podemos enviar con un Mensajero Urbano o un Picap. Por favor nos confirmas tu dirección y validamos el costo.',
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
    ],
    null,
    null,
    [flowBienvenida2,tradicional,express])

const otrasCiudades = addKeyword(['2']).addAnswer(
    
        'Para otras ciudades el costo del envío es de $15.000. El tiempo de entrega es de 2 a 3 días hábiles.',
    
).addAnswer([
    'Para realizar el pago de tu pedido, por favor accede al link https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar más el valor del envío. ',
    '\nPor favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta:',
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT.',
    '3. Dirección, barrio y ciudad.',
    '4. Correo electrónico.',
    '5. Celular.',
    '\nCon esta información generamos tu factura electrónica y el número de guía.',
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
],
null,
null,
[flowBienvenida2])



const opcion1 = addKeyword(['1']).addAnswer(
    'Nuestras cajas premium con mini botellas de licor estampillado son un detalle ideal para cumpleaños, aniversarios, bodas, grados, invitaciones, fechas especiales y demás situaciones apremiantes. Cada caja incluye una tarjeta personalizada que diseñamos especialmente para tu ocasión.',
).addAnswer([
    '*Referencia #1️⃣ Caja de mini botellitas surtidas:*',
    '\n(1) Jagermeister (30mL).',
    '(1) Whisky Jack Daniels (50mL).',
    '(1) Whisky Grants Rojo (50mL).',
    '(1) Whisky Chivas Regal 12 o 13 años (50mL).',
    '(1) Absolut Vodka (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\n*Precio💰: $120.000 más el envío.*',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-licor-ref-1/',
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia1caja.png',  
    
}).addAnswer([
    '*Referencia #2️⃣ Caja de mini botellas surtidas:*',
    '\n((1) Ginebra The London No 1 (50mL).',
    '(1) Ron La Hechicera (50mL).',
    '(1) Absolut Vodka (50mL).',
    '(1) Whisky  Jack Daniels (50mL).',
    '(1) Whisky Chivas Regal 13 años (50mL)',
    '(1) Tarjeta o foto personalizada.',
    '\n*Precio💰: $160.000 más el envío.*',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-de-mini-botellas-de-licor-mas-foto-o-invitacion/',
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia2caja.png',  
    
}).addAnswer([
    '*Referencia #3️⃣ Caja de mini botellitas de Whisky:*',
    '\n(1) Whisky Chivas Regal 13 años (50mL).',
    '(1) Whisky Grants (50mL).',
    '(1) Whisky Glenfidichh 15 años (50mL).',
    '(1) Whisky  Glenfidichh 12 años (50mL).',
    '(1) Whisky Jack Daniels (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\n*Precio💰: $180.000 más el envío.*',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-whisky-ref-3/',
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia3caja.png',  
    
}).addAnswer([
    '*Referencia #4️⃣ Caja de mini botellitas de Ginebra:*',
    '\n(1) Ginebra Whitley Neill Original (50mL).',
    '(1) Ginebra Whitley Neill Blood Orange Gin (50mL).',
    '(1) Ginebra Whitley Neill Quince Gin (50mL).',
    '(1) Ginebra Whitley Neill Raspberry Gin (50mL).',
    '(1) Ginebra Whitley Neill Rhubarb & Ginger Gin (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\n*Precio💰: $180.000 más el envío.*',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-ginebra/',
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia4caja.png',  
    
}).addAnswer([
    '*Referencia #5️⃣ Caja de mini botellitas de Whisky:*',
    '\n(1) Whisky Chivas Regal 18 años (50mL).',
    '(1) Whisky Glenfiddich 12 años (50mL).',
    '(1) Whisky Glenfidichh 15 años (50 mL).',
    '(1) Whisky Glenfidichh 18 años (50mL).',
    '(1) Whisky Chivas Regal 13 años (50 mL).',
    '(1) Tarjeta o foto personalizada.',
    '\n*Precio💰: $280.000 más el envío.*',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-whiksy-ref-4/',
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia5caja.png',  
    
}).addAnswer([
    '(Mini botellas por unidad desde los 18.000). Cada botellita incluye una caja premium y una tarjeta o foto personalizada en la siguiente presentación.',
    '\nCatálogo de mini botellas disponibles en el siguiente link: https://78grados.com/categoria/mini-botellas/',
    
],{
    
    media: 'https://78grados.com/wp-content/uploads/2024/05/Referencia1catalogo.png',  
    
}).addAnswer([
    'Para consultar el precio del envío selecciona alguna de las siguientes opciones:',
    '\n1. Responde *1* 👉 Envío para Bogotá.',
    '2. Responde *2* 👉 Envío para otras ciudades.',
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',
],
null,
null,
[bogota,otrasCiudades,flowBienvenida2])


const agente = addKeyword(['agente','2']).addAnswer([
    'Indicanos que inquietud tienes lo más detallado posible para que alguno de nuestros agentes comerciales te pueda brindar toda la información. 😊',
],
{capture: true}, (ctx) => {
        
}
).addAnswer(
    '*Contactando agente...*',
)

// Define el flujo de bienvenida
const flowBienvenida = addKeyword(EVENTS.WELCOME).addAnswer(
    '¡Hola! 👋 Soy *Shot*, el asistente virtual de 78 Grados Deluxe https://78grados.com/',
    {
        media:'https://78grados.com/wp-content/uploads/2024/05/bot78grados.png',
    }
).addAnswer(
[
    
    'Estoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe *agente* 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
    
    '\nPor favor selecciona una de las siguientes opciones:',
    '1. Responde *1* 👉 Catálogo de cajas con mini botellas de licor.',
    '2. Responde *2* 👉 Hablar con un agente.',
    '3. Responde *3* 👉 Seguimiento de pedido.',
    '\n✅ Si necesitas terminar la conversación escribe la palabra: *cancelar*',

],
null,
null,
[opcion1,agente,pedido]
) 


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida,opcion1,pedido])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main() 