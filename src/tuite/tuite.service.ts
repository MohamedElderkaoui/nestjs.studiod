import { Injectable } from '@nestjs/common';
import { tueti } from '"./tuites.emtity"';

@Injectable()
export class TuiteService {
    private tuites :tueti = [
        {
            id: '1',
            message: 'this is my first tuite'
        }
    ];

    getAllTuites(){
        return this.tuites;
    }

    getTuite(id: string){
        return this.tuites.find(t => t.id === id)
    }
    createTuite( message: string){
        this.tuits.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            message, });
        }
        updateTuite(id:string ,message :string ){
            const index = this.tuites.findIndex(t => t.id === id);
            this.tuites[index] = {
                id,
                message
            }
        }

        deleteTuite(id:string){
            const index = this.tuites.findIndex(t => t.id === id);
            this.tuites.splice(index,1)

        }

    }

