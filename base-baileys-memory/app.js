


const { createBot, createProvider, createFlow, addKeyword} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const { EVENTS } = require('@bot-whatsapp/bot')



const flowBienvenida5 = addKeyword('0').addAnswer(
    [
        '¡Hola! 👋 Soy Shot, tu asistente virtual de 78 Grados Deluxe.',
        '\nEstoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe "agente" 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
        
        '\nPor favor selecciona una de las siguientes opciones:',
        '👉 *1* Catálogo de cajas con mini botellas de licor.',
        '👉 *2* Catálogo de mini botellas por unidad.',
        '👉 *3* Cotizaciones empresariales.',
        '👉 *4* ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?',
        '👉 *5* Hablar con un agente.',
    ]
)

// REGION OPCION 4 ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?



    const bogota3 = addKeyword(['1']).addAnswer(
    [
    'Si deseas *Envío tradicional* proporcionanos la siguiente informacion:',   
    '\nPara realizar el pago de tu pedido, por favor accede al link https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío tradicional: *$10.000*. ',
    '\nPara completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',
        
        
    ],{capture: true}, (ctx) => {
        
    }).addAnswer(
        'Gracias por tu compra!'
    )


    const otrasCiudades3 = addKeyword(['2']).addAnswer(
        
        'Para realizar el pago, por favor accede al link: https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío que serian $15.000',

    ).addAnswer([
    'Para completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',

    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',

    ],{capture: true}, (ctx) => {
        
    }).addAnswer(
    'Gracias por tu compra!'
    )




const opcion4 = addKeyword(['4','0']).addAnswer([
    'Por favor ingrese el numero que corresponda para confirmar el tiempo aproximado de entrega y el precio del envío',
    '\n*1* Bogotá',
    
    '\n*Envío tradicional:* Te cuesta *$10.000* y te lo enviamos a través de TCC. Te llega en (1) día hábil. Si compras de lunes a viernes antes de las *5:00 pm* te llega el próximo día después de tu compra.',
    '\n*Envío express:* Si necesitas tu pedido para HOY, te lo podemos enviar con un Picap.',
    
    '\n*2* Otras ciudades',
    '\nSi lo desea puede ingresar *0* para volver al menu principal.',
],
null,
null,
[bogota3,otrasCiudades3,flowBienvenida5])



const flowBienvenida4 = addKeyword('0').addAnswer(
    [
        '¡Hola! 👋 Soy Shot, tu asistente virtual de 78 Grados Deluxe.',
        '\nEstoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe "agente" 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
        
        '\nPor favor selecciona una de las siguientes opciones:',
        '👉 *1* Catálogo de cajas con mini botellas de licor.',
        '👉 *2* Catálogo de mini botellas por unidad.',
        '👉 *3* Cotizaciones empresariales.',
        '👉 *4* ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?',
        '👉 *5* Hablar con un agente.',
    ]
)

// REGION OPCION 3 Cotizaciones empresariales

const cotizaciónMiniAlPorMayor = addKeyword(['3']).addAnswer([
    'Para crear tu cotización a la medida, en una sola respuesta por favor nos confirmas los siguientes datos y nos amplias la información para personalizar tu cotización.',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '6. ¿Cuántas mini botellas de licor desea comprar? ¿Para qué fecha necesitas el pedido? ¿Es para alguna ocasión, evento o fecha especial? Por favor amplíanos todo tu requerimiento.',
    
    ],{capture: true}, (ctx) => {
    
}).addAnswer(
'Gracias!'
)

const cotizaciónMiniCajaTarjeta = addKeyword(['2']).addAnswer([
    'Para crear tu cotización a la medida, en una sola respuesta por favor nos confirmas los siguientes datos y nos amplias la información para personalizar tu cotización.',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '6. ¿Cuántas cajas premium desea comprar? ¿Para qué fecha necesitas el pedido? ¿Es para alguna ocasión, evento o fecha especial? Por favor amplíanos todo tu requerimiento.',
    
    ],{capture: true}, (ctx) => {
    
}).addAnswer(
'Gracias!'
)

const cotizaciónCajas = addKeyword(['1']).addAnswer([
'Para crear tu cotización a la medida, en una sola respuesta por favor nos confirmas los siguientes datos y nos amplias la información para personalizar tu cotización.',

'1. Nombre completo o razón social.',
'2. Número de cédula o NIT',
'3. Dirección y ciudad',
'4. Correo electrónico',
'5. Celular ',
'6. ¿Cuántas cajas premium desea comprar? ¿Para qué fecha necesitas el pedido? ¿Es para alguna ocasión, evento o fecha especial? Por favor amplíanos todo tu requerimiento.',

],{capture: true}, (ctx) => {
    
}).addAnswer(
'Gracias!'
)


const opcion3 = addKeyword(['3']).addAnswer([
    'En 78 Grados Deluxe somos expertos atendiendo los detalles corporativos para tus eventos. En caso de que desees recibir una cotización formal dirigida a tu empresa, negocio o evento, por favor selecciona alguna de las siguientes opciones:',
    '*1* Cotización de cajas premium con mini botellas de licor y tarjeta.',
    '*2* Cotización de mini botellas por unidad con caja y tarjeta.',
    '*3* Cotización de mini botellas al por mayor por unidad.',
    '\nSi lo desea puede ingresar *0* para volver al menu principal.',
],
null,
null,
[cotizaciónCajas,cotizaciónMiniCajaTarjeta,cotizaciónMiniAlPorMayor,flowBienvenida4])


// END REGION OPCION 3 Catálogo de mini botellas por unidad


const flowBienvenida3 = addKeyword('0').addAnswer(
    [
        '¡Hola! 👋 Soy Shot, tu asistente virtual de 78 Grados Deluxe.',
        '\nEstoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe "agente" 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
        
        '\nPor favor selecciona una de las siguientes opciones:',
        '👉 *1* Catálogo de cajas con mini botellas de licor.',
        '👉 *2* Catálogo de mini botellas por unidad.',
        '👉 *3* Cotizaciones empresariales.',
        '👉 *4* ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?',
        '👉 *5* Hablar con un agente.',
    ]
)



// REGION OPCION 2 Catálogo de mini botellas por unidad



const bogota2 = addKeyword(['1']).addAnswer(
    [
    'Si deseas *Envío tradicional* proporcionanos la siguiente informacion:',   
    '\nPara realizar el pago de tu pedido, por favor accede al link https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío tradicional: *$10.000*. ',
    '\nPara completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',
        
        
    ],{capture: true}, (ctx) => {
        
    }).addAnswer(
        'Gracias por tu compra!'
    )

    

const otrasCiudades2 = addKeyword(['2']).addAnswer(
    
        'Para realizar el pago, por favor accede al link: https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío que serian $15.000',
    
).addAnswer([
    'Para completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',
    
],{capture: true}, (ctx) => {
        
}).addAnswer(
    'Gracias por tu compra!'
)


const opcion2 = addKeyword(['2']).addAnswer(
    'Las mini botellas de licor incluyen una caja premium y una tarjeta o foto personalizada. Son el detalle ideal para fechas especiales, invitaciones a eventos corporativos, bodas, cumpleaños, aniversarios, coleccionistas y demás situaciones apremiantes.',
).addAnswer([
    'Catálogo de mini botellas de licor: https://78grados.com/categoria/mini-botellas/',
    
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 2/Referencia #1 Catálogo de mini botellas por unidad.jpeg',  
    
}*/).addAnswer([
    'Por favor ingrese el numero que corresponda para confirmar el tiempo aproximado de entrega y el precio del envío',
    '\n*1* Bogotá',
    
    '\n*Envío tradicional:* Te cuesta *$10.000* y te lo enviamos a través de TCC. Te llega en (1) día hábil. Si compras de lunes a viernes antes de las *5:00 pm* te llega el próximo día después de tu compra.',
    '\n*Envío express:* Si necesitas tu pedido para HOY, te lo podemos enviar con un Picap.',
    
    '\n*2* Otras ciudades',
    '\nSi lo desea puede ingresar *0* para volver al menu principal.',
],
null,
null,
[bogota2,otrasCiudades2,flowBienvenida3])


// END REGION OPCION 2 Catálogo de mini botellas por unidad

const flowBienvenida2 = addKeyword('0').addAnswer(
    [
        '¡Hola! 👋 Soy Shot, tu asistente virtual de 78 Grados Deluxe.',
        '\nEstoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe "agente" 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
        
        '\nPor favor selecciona una de las siguientes opciones:',
        '👉 *1* Catálogo de cajas con mini botellas de licor.',
        '👉 *2* Catálogo de mini botellas por unidad.',
        '👉 *3* Cotizaciones empresariales.',
        '👉 *4* ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?',
        '👉 *5* Hablar con un agente.',
    ]
)


    const bogota = addKeyword(['1']).addAnswer(
    [
    'Si deseas *Envío tradicional* proporcionanos la siguiente informacion:',   
    '\nPara realizar el pago de tu pedido, por favor accede al link https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío tradicional: *$10.000*. ',
    '\nPara completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',
        
        
    ],{capture: true}, (ctx) => {
        
    }).addAnswer(
        'Gracias por tu compra!'
    )

    

const otrasCiudades = addKeyword(['2']).addAnswer(
    
        'Para realizar el pago, por favor accede al link: https://78grados.epayco.me/ e ingresa el valor de la caja que quieras comprar, más el valor del envío que serian $15.000',
    
).addAnswer([
    'Para completar tu pedido, por favor nos envías el comprobante de pago y nos confirmas los siguientes datos en una sola respuesta 💫:',
    
    '1. Nombre completo o razón social.',
    '2. Número de cédula o NIT',
    '3. Dirección y ciudad',
    '4. Correo electrónico',
    '5. Celular ',
    '\nCon esta información generamos tu factura electrónica y el número de guía con la transportadora.',
    
],{capture: true}, (ctx) => {
        
}).addAnswer(
    'Gracias por tu compra!'
) 



const opcion1 = addKeyword(['1','0']).addAnswer(
    'Nuestras cajas premium con mini botellas de licor estampillado son un detalle ideal para cumpleaños, aniversarios, bodas, grados, invitaciones, fechas especiales y demás situaciones apremiantes. Cada caja incluye una tarjeta personalizada que diseñamos especialmente para tu ocasión.',
).addAnswer([
    'Referencia #1️⃣ Caja de mini botellitas surtidas:',
    '\n(1) Jagermeister (30mL).',
    '(1) Whisky Jack Daniels (50mL).',
    '(1) Whisky Grants Rojo (50mL).',
    '(1) Whisky Chivas Regal 12 o 13 años (50mL).',
    '(1) Absolut Vodka (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\nPrecio💰: $120.000 más el envío.',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-licor-ref-1/',
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 1/Referencia #1 Caja de mini botellitas surtidas.jpeg',  
    
}*/).addAnswer([
    'Referencia #2️⃣ Caja de mini botellas surtidas:',
    '\n((1) Ginebra The London No 1 (50mL).',
    '(1) Ron La Hechicera (50mL).',
    '(1) Absolut Vodka (50mL).',
    '(1) Whisky  Jack Daniels (50mL).',
    '(1) Whisky Chivas Regal 13 años (50mL)',
    '(1) Tarjeta o foto personalizada.',
    '\nPrecio💰: $160.000 más el envío.',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-de-mini-botellas-de-licor-mas-foto-o-invitacion/',
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 1/Referencia #2 Caja de mini botellitas surtidas.jpeg',  
    
}*/).addAnswer([
    'Referencia #3️⃣ Caja de mini botellitas de Whisky:',
    '\n(1) Whisky Chivas Regal 13 años (50mL).',
    '(1) Whisky Grants (50mL).',
    '(1) Whisky Glenfidichh 15 años (50mL).',
    '(1) Whisky  Glenfidichh 12 años (50mL).',
    '(1) Whisky Jack Daniels (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\nPrecio💰: $180.000 más el envío.',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-whisky-ref-3/',
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 1/Referencia #3 Caja de mini botellitas de Whisky.jpeg',  
    
}*/).addAnswer([
    'Referencia #4️⃣ Caja de mini botellitas de Ginebra:',
    '\n(1) Ginebra Whitley Neill Original (50mL).',
    '(1) Ginebra Whitley Neill Blood Orange Gin (50mL).',
    '(1) Ginebra Whitley Neill Quince Gin (50mL).',
    '(1) Ginebra Whitley Neill Raspberry Gin (50mL).',
    '(1) Ginebra Whitley Neill Rhubarb & Ginger Gin (50mL).',
    '(1) Tarjeta o foto personalizada.',
    '\nPrecio💰: $180.000 más el envío.',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-ginebra/',
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 1/Referencia #4 caja de mini botellitas de Ginebra.jpeg',  
    
}*/).addAnswer([
    'Referencia #5️⃣ Caja de mini botellitas de Whisky:',
    '\n(1) Whisky Chivas Regal 18 años (50mL).',
    '(1) Whisky Glenfiddich 12 años (50mL).',
    '(1) Whisky Glenfidichh 15 años (50 mL).',
    '(1) Whisky Glenfidichh 18 años (50mL).',
    '(1) Whisky Chivas Regal 13 años (50 mL).',
    '(1) Tarjeta o foto personalizada.',
    '\nPrecio💰: $280.000 más el envío.',
    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-whiksy-ref-4/',
]/*,{
    
    media: 'D:/Imagenes/78 Grados bot/Opcion 1/Referencia #5 Caja de mini botellitas de Whisky.jpeg',  
    
}*/).addAnswer([
    'Video 360° de nuestra caja premium con mini botellas de licor. 💫',
],{
    
    media: '/chatbot/images/VideoOpcion1.mp4',  
    
    
}).addAnswer([
    'Por favor ingrese el numero que corresponda para confirmar el tiempo aproximado de entrega y el precio del envío',
    '\n*1* Bogotá',
    
    '\n*Envío tradicional:* Te cuesta *$10.000* y te lo enviamos a través de TCC. Te llega en (1) día hábil. Si compras de lunes a viernes antes de las *5:00 pm* te llega el próximo día después de tu compra.',
    '\n*Envío express:* Si necesitas tu pedido para HOY, te lo podemos enviar con un Picap.',
    
    '\n*2* Otras ciudades',
    '\nSi lo desea puede ingresar *0* para volver al menu principal.',
],
null,
null,
[bogota,otrasCiudades,flowBienvenida2])


    
  
    const agente = addKeyword(['agente','5']).addAnswer([
        '*Contactando agente...*',
        
    ]
    )

 // Define el flujo de bienvenida
const flowBienvenida = addKeyword(EVENTS.WELCOME,'0')
.addAnswer(
    [
        '¡Hola! 👋 Soy Shot, tu asistente virtual de 78 Grados Deluxe.',
        '\nEstoy aquí para ayudarte con cualquier pregunta que tengas. Si prefieres hablar con un humano, escribe "agente" 🧑‍💼 y te conectaré con alguien de nuestro equipo.',
        
        '\nPor favor selecciona una de las siguientes opciones:',
        '👉 *1* Catálogo de cajas con mini botellas de licor.',
        '👉 *2* Catálogo de mini botellas por unidad.',
        '👉 *3* Cotizaciones empresariales.',
        '👉 *4* ¿Cuánto vale el envío y cuanto tiempo se demora en llegar el pedido?',
        '👉 *5* Hablar con un agente.',
    ],
    null,
    null,
    [agente,opcion1,opcion2,opcion3,opcion4]
) 



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida,opcion1,opcion2,opcion3,opcion4])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main() 