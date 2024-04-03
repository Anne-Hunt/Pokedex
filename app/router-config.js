import { AccountController } from "./controllers/AccountController.js";
import { SandboxController } from "./controllers/SandboxController.js";
import { PokedexController } from "./controllers/PokedexController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [SandboxController, PokedexController],
    view: /*html*/``
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




