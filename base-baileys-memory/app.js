


const { createBot, createProvider, createFlow, addKeyword} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const { EVENTS } = require('@bot-whatsapp/bot')
const { delay } = require('@whiskeysockets/baileys')


// Defino el flujo de inico
const flowInicio = addKeyword(["asesoría"]).addAnswer(
[
    '¡Hola! Un placer saludarte. Bienvenid@ a *78 Grados Deluxe https://78grados.com* . Te amplio a continuación la información de nuestras cajas premium con mini botellas de licor + tarjeta impresa personalizada:',
    '\n🥇Cajas x1 unidad desde *$20.000* + envío',
    '🥈Cajas x3 unidades desde *$80.000* + envío',
    '🥉Cajas x5 unidades desde *$130.000* + envío',
    '\n*Catálogo completo de productos PDF:* https://78grados.com/catalogo-78-grados-deluxe/',
    '\n*Plantillas de tarjetas impresas:* https://78grados.com/plantillas-de-tarjetas-personalizadas/',
    '\n*Reseñas de compra:* https://g.co/kgs/xS5WpwU'
],{
    delay: 30000,
}
).addAnswer(
    [

        '*Referencia #1️⃣ Caja de mini botellitas surtidas:*',
        '\n(1) Jagermeister (30mL).',
        '(1) Whisky Jack Daniels (50mL).',
        '(1) Whisky Grants Rojo (50mL).',
        '(1) Whisky Chivas Regal 12 o 13 años (50mL).',
        '(1) Absolut Vodka (50mL).',
        '(1) Tarjeta o foto personalizada.',
        '\n*Precio en promo💰: $130.000 más el envío.*',
        '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-licor-ref-1/',
    ],{
            media:'https://78grados.com/wp-content/uploads/2025/03/imagen1.jpeg',
        }
    
    ) .addAnswer(
        [
            
        '*Referencia #2️⃣ Caja de mini botellitas surtidas:*',
        '\n(1) Jagermeister (30mL).',
        '(1) Whisky Jack Daniels (50mL).',
        '(1) Aguardiente Desquite (50 mL).',
        '(1) Ginebra Selva Gin (50 mL).',
        '(1) Absolut Vodka (50mL).',
        '(1) Tarjeta o foto personalizada.',
        '\n*Precio en promo💰: $ 130.000 más el envío.*',
        '\n🔒Ver o comprar caja: https://78grados.com/producto/estuche-con-licores-en-miniatura-surtidos/',
        ],
        {
            media:'https://78grados.com/wp-content/uploads/2025/03/imagen2.jpeg',
        }
        
        ) .addAnswer(
            [
                
                '*Referencia #3️⃣ Caja de mini botellitas surtidas:*',
                '\n(1) Ginebra The London No 1 (50mL).',
                '(1) Ron La Hechicera (50mL).',
                '(1) Absolut Vodka (50mL).',
                '(1) Whisky  Jack Daniels (50mL).',
                '(1) Whisky Chivas Regal 12 o 13 años (50mL).',
                '(1) Tarjeta o foto personalizada.',
                '\n*Precio💰: $ 170.000 más el envío.*',
                '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-de-mini-botellas-de-licor-mas-foto-o-invitacion/',
            ],
                {
                    media:'https://78grados.com/wp-content/uploads/2025/03/imagen3.jpeg',
                }
            
            ) .addAnswer(
                [
                    
                    '*Referencia #4️⃣ Caja de mini botellitas de Whisky:*',
                    '\n(1) Whisky Chivas Regal 12 o 13 años (50mL). ',
                    '(1) Whisky Grants (50mL). ',
                    '(1) Whisky Glenfidichh 15 años (50mL).',
                    '(1) Whisky  Glenfidichh 12 años (50mL).',
                    '(1) Whisky Jack Daniels (50mL).',
                    '(1) Tarjeta o foto personalizada.',
                    '\n*Precio💰: $190.000 más el envío.*',
                    '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-whisky-ref-3/',
                ],
                    {
                        media:'https://78grados.com/wp-content/uploads/2025/03/imagen4.jpeg',
                    }
                
                ) .addAnswer(
                    [
                        
                        '*Referencia #5️⃣ Caja de mini botellitas de Ginebra:*',
                        '\n(1) Ginebra Whitley Neill Original (50mL).',
                        '(1) Ginebra Whitley Neill Blood Orange Gin (50mL).',
                        '(1) Ginebra Whitley Neill Quince Gin (50mL).',
                        '(1) Ginebra Whitley Neill Raspberry Gin (50mL).',
                        '(1) Ginebra Whitley Neill Rhubarb & Ginger Gin (50mL).',
                        '(1) Tarjeta o foto personalizada.',
                        '\n*Precio💰: $190.000 más el envío.*',
                        '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-premium-de-mini-botellas-de-ginebra/',
                    ],{
                            media:'https://78grados.com/wp-content/uploads/2025/03/imagen5.jpeg',
                        }
                    
                    ) .addAnswer(
                        [
                            
                            '*Referencia #6️⃣ Caja con mini botellas de ginebras surtidas:*',
                            '\n(1) Mini botella Ginebra Whitley Neill (50mL).',
                            '(1) Mini botella Ginebra Akori Gin (50mL).',
                            '(1) Mini botella Ginebra Hendricks  (50mL).',
                            '(1) Mini botella Ginebra Selva Gin (50mL).',
                            '(1) Mini botella Ginebra London N1 (50mL).',
                            '\n*Precio💰: $214.000 más el envío.*',
                            '\n🔒Ver o comprar caja: https://78grados.com/producto/caja-con-mini-botellas-de-ginebras-surtidas/',
                        ],{
                                media:'https://78grados.com/wp-content/uploads/2025/03/imagen6.jpeg',
                            }
                        
                        ) .addAnswer(
                            [
                                
                                '*Referencia #7️⃣ Caja de mini botellitas de Tequila Añejo:*',
                                '\n(1) Tequila Campo Azul Selecto.',
                                '(1) Tequila Agavemio.',
                                '(1) Tequila El Padrino.',
                                '(1) Tequila General Diaz.',
                                '(1) Tequila Nock.',
                                '(1) Tarjeta o foto personalizada.',
                                '\n*Precio💰: $260.000 más el envío.*',
                                '\n🔒Ver o comprar caja:  https://78grados.com/producto/caja-de-regalo-con-mini-botellas-de-tequila-anejo/',
                            ],{
                                    media:'https://78grados.com/wp-content/uploads/2025/03/imagen7.jpeg',
                                }
                            
                            ) .addAnswer(
                                [
                                    
                                    '*Catálogo de cajas por 3 unidades:*',
                                    '\n(1) Caja con 3 unidades de mini botellas.',
                                    '(1) Tarjeta o foto personalizada.',
                                    '\nPrecios💰: Desde los *$80.000* más el envío. Conoce las 14 opciones de cajas con combinaciones de licores diferentes',
                                   
                                    '\n🔒Ver catálogo de cajas x3 unidades: https://78grados.com/categoria/caja-de-mini-botellas/cajas-de-mini-botellas-3-unidades/',
                                ],{
                                        media:'https://78grados.com/wp-content/uploads/2025/03/imagen8.jpeg',
                                    }
                                
                                ) .addAnswer(
                                    [
                                        
                                        '*Mini botellas por unidad desde los $20.000.* Cada botellita incluye una caja premium y una tarjeta impresa personalizada en la siguiente presentación.',
                                        
                                        '\nOpciones de licores: Whiskys, Tequilas, Vodkas, Aguardientes, Rones, Ginebras, Aperitivos y más.',

                                        '\n🔒Ver catálogo con precios de mini botellas disponibles : https://78grados.com/categoria/mini-botellas/',
                                    ],{
                                            media:'https://78grados.com/wp-content/uploads/2025/03/imagen9.jpeg',
                                        }
                                    
                                    ) .addAnswer(
                                        [

                                            '¿Éstas buscando el detalle para alguna ocasión o fecha en especial?.',
                                            '\nEn caso de que desees consultar el tiempo de entrega y precio del envío, me confirmas tu ciudad y validamos.',

                                        ]
                                        )  


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowInicio])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main() 