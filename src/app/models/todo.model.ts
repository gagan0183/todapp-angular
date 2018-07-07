class ToDo {
    _id: String;
    title: String;
    category: String;
    description: String;
    startDate: Date;
    completeDate: Date;
    link: String;
    status: String;

    constructor() {
        this.title = "";
        this.category = "";
        this.description = "";
        this.startDate = new Date();
        this.completeDate = new Date();
        this.link = "";
        this.status = "";
    }
}

export default ToDo;