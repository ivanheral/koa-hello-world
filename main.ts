import { serve } from "https://deno.land/std@0.59.0/http/server.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const PUERTO_DEFAULT = 8000;
const puerto = parse(args).port;
const server = serve({ port: puerto ? Number(puerto) : PUERTO_DEFAULT });

for await (const peticion of server ) {
  const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
  const contenidos = `<h1 style="color:#${colorRandom}">HOLA DENO!</h1>`;

  peticion.respond({ body: contenidos });
}