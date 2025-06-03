export class Todo {
    id: number;
    name: string;
    done: boolean;
    priority: string;
    created: Date;
  
    constructor(id: number, name: string, done: boolean, priority: string, created: Date) {
      this.id = id;
      this.name = name;
      this.done = done;
      this.priority = priority;
      this.created = created;
    }
  }
  