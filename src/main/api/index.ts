import '../config/module-alias';
import { PersonController, Speaker } from '@/application/controllers';


class Server {
  init(speaker: Speaker) {
    console.log(speaker.speak('Douglas'));
    console.log(speaker.speak());
  }
}

const server = new Server();
server.init(new PersonController())