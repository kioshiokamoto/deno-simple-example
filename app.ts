import { Application, Context} from "https://deno.land/x/abc@v1.3.1/mod.ts";
import {createBook,deleteBook,getAllBooks,getBook} from './controllers/bookController.ts'
const app = new Application()

//Static files
app.static('/static','./public')

//Routes
app.get('/',async (ctx: Context)=>{
    await ctx.file('./public/index.html')
})

app
    .get('/books',getAllBooks)
    .get('/books/:id', getBook)
    .post('/books', createBook)
    .delete('/books/:id',deleteBook)

//Start server
app.start({port:3000});