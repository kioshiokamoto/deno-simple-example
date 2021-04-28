import { Application, Context} from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application()

//Static files
app.static('/static','./public')

//Routes
app.get('/',async (ctx: Context)=>{
    await ctx.file('./public/index.html')
})

//Start server
app.start({port:3000});